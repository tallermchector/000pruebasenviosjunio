'use client';

import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MAR_DEL_PLATA, INITIAL_ZOOM, OSM_TILES, CARTO_DARK_TILES, fixLeafletIcon } from './map-utils';
import { useTheme } from 'next-themes';
import { MapPin } from 'lucide-react';
import { renderToStaticMarkup } from 'react-dom/server';

interface LatLngLiteral {
  lat: number;
  lng: number;
}

interface LeafletMapProps {
  origin?: LatLngLiteral;
  destination?: LatLngLiteral;
  routeGeometry?: [number, number][]; // Array of [lat, lng]
}

const UpdateView = ({ origin, destination, routeGeometry }: LeafletMapProps) => {
  const map = useMap();
  useEffect(() => {
    if (routeGeometry && routeGeometry.length > 0) {
      const bounds = L.latLngBounds(routeGeometry);
      map.fitBounds(bounds, { padding: [50, 50] });
    } else if (origin) {
      map.setView([origin.lat, origin.lng], 15);
    } else if (destination) {
      map.setView([destination.lat, destination.lng], 15);
    }
  }, [map, origin, destination, routeGeometry]);
  return null;
};

const customMarkerIcon = L.divIcon({
  html: renderToStaticMarkup(<MapPin color="#eab308" size={32} />),
  className: '',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

export default function LeafletMap({ origin, destination, routeGeometry }: LeafletMapProps) {
  useEffect(() => {
    fixLeafletIcon();
  }, []);

  const { theme } = useTheme();
  const tileUrl = theme === 'dark' ? CARTO_DARK_TILES : OSM_TILES;

  return (
    <div className="h-[320px] w-full rounded-lg overflow-hidden shadow-md border z-0">
      <MapContainer
        center={[MAR_DEL_PLATA.lat, MAR_DEL_PLATA.lng]}
        zoom={INITIAL_ZOOM}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={tileUrl}
        />
        {origin && <Marker position={[origin.lat, origin.lng]} icon={customMarkerIcon} />}
        {destination && <Marker position={[destination.lat, destination.lng]} icon={customMarkerIcon} />}
        {routeGeometry && routeGeometry.length > 0 && (
          <Polyline positions={routeGeometry} pathOptions={{ color: '#eab308', weight: 4 }} />
        )}
        <UpdateView origin={origin} destination={destination} routeGeometry={routeGeometry} />
      </MapContainer>
    </div>
  );
}
