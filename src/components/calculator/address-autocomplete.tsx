'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { geocode } from '@/lib/maps/photon';

interface AddressAutocompleteProps {
  id: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  className?: string;
}

export function AddressAutocomplete({ id, placeholder, value, onChange, required, className }: AddressAutocompleteProps) {
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!value || value.length < 3) {
      setSuggestions([]);
      return;
    }

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(async () => {
      try {
        const url = `https://photon.komoot.io/api/?q=${encodeURIComponent(value + ', Mar del Plata')}&bbox=-57.65,-38.08,-57.50,-37.90`;
        const res = await fetch(url);
        const data = await res.json();
        if (data && data.features) {
          setSuggestions(data.features);
          setShowSuggestions(true);
        }
      } catch (e) {
        console.error('Autocomplete error', e);
      }
    }, 300);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [value]);

  const handleSelect = (feature: any) => {
    const properties = feature.properties;
    const name = properties.name || '';
    const street = properties.street || '';
    const housenumber = properties.housenumber || '';

    let fullAddress = '';
    if (street && housenumber) fullAddress = `${street} ${housenumber}`;
    else if (name) fullAddress = name;
    else if (street) fullAddress = street;

    if (properties.city) {
      fullAddress += `, ${properties.city}`;
    }

    onChange(fullAddress);
    setShowSuggestions(false);
  };

  return (
    <div className="relative w-full">
      <Input
        id={id}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
          setShowSuggestions(true);
        }}
        required={required}
        className={className}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
      />
      {showSuggestions && suggestions.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border border-gray-200 rounded-md shadow-lg mt-1 max-h-60 overflow-auto">
          {suggestions.map((s, i) => (
            <li
              key={i}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-800"
              onMouseDown={() => handleSelect(s)}
            >
              {s.properties.name || s.properties.street} {s.properties.housenumber}
              <span className="text-xs text-gray-500 block">
                {s.properties.city || 'Mar del Plata'}, {s.properties.state}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
