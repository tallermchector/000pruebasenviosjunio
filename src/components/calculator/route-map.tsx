
'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { getRoute } from '@/lib/maps/osrm';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Map, Loader2 } from 'lucide-react';

const LeafletMap = dynamic(() => import('@/components/maps/leaflet-map'), { ssr: false });

interface LatLngLiteral {
  lat: number;
  lng: number;
}

interface RouteMapProps {
  origin?: LatLngLiteral;
  destination?: LatLngLiteral;
}

export default function RouteMap({ origin, destination }: RouteMapProps) {
  const [routeGeometry, setRouteGeometry] = useState<[number, number][] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let active = true;

    async function fetchRoute() {
      if (!origin || !destination) {
        setRouteGeometry(null);
        return;
      }

      setIsLoading(true);
      setError(null);
      try {
        const route = await getRoute(origin, destination);
        if (!active) return;

        if (route && route.geometry && route.geometry.coordinates) {
          const mappedGeometry = route.geometry.coordinates.map((coord: [number, number]) => [coord[1], coord[0]]);
          setRouteGeometry(mappedGeometry);
        } else {
          setError("No se pudo trazar la ruta.");
          setRouteGeometry(null);
        }
      } catch (err) {
        if (active) {
          console.error("Routing error:", err);
          setError("Error al calcular la ruta (Servicio saturado).");
          setRouteGeometry(null);
        }
      } finally {
        if (active) setIsLoading(false);
      }
    }

    fetchRoute();

    return () => {
      active = false;
    };
  }, [origin, destination]);

  const openInOSM = () => {
    if (!origin || !destination) return;
    const url = `https://www.openstreetmap.org/directions?engine=osrm_car&route=${origin.lat}%2C${origin.lng}%3B${destination.lat}%2C${destination.lng}`;
    window.open(url, '_blank');
  };

  return (
    <div className="mt-6">
      {error && (
        <Card className="mb-4 border-destructive bg-destructive/10">
          <CardContent className="p-4 text-center text-destructive text-sm">
            {error}
          </CardContent>
        </Card>
      )}

      {isLoading && (
        <div className="mb-4 flex items-center justify-center space-x-2 text-sm text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin" />
          <span>Calculando ruta...</span>
        </div>
      )}

      <div className="rounded-lg overflow-hidden shadow-md border relative">
        <LeafletMap origin={origin} destination={destination} routeGeometry={routeGeometry || undefined} />
      </div>
      <div className="text-center mt-2">
        <Button onClick={openInOSM} variant="ghost" size="sm" disabled={!origin || !destination}>
          <Map className="mr-2 h-4 w-4" />
          Abrir en OpenStreetMap
        </Button>
      </div>
    </div>
  );
}
