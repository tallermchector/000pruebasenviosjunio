
"use client";

import { useEffect, useState, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import { RefreshCw, Navigation, AlertTriangle, Loader2 } from 'lucide-react';
import { getRoute } from '@/lib/maps/osrm';

const LeafletMap = dynamic(() => import('@/components/maps/leaflet-map'), { ssr: false });

interface Location {
  lat: number;
  lng: number;
}

interface InteractiveTrackingMapProps {
  center: Location;
  pickupLocation?: Location;
  deliveryLocation?: Location;
  driverLocation?: Location;
  orderId?: string;
}

export function InteractiveTrackingMap({
  center,
  pickupLocation,
  deliveryLocation,
  driverLocation,
}: InteractiveTrackingMapProps) {
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [routeGeometry, setRouteGeometry] = useState<[number, number][] | null>(null);
  const [viewCenter, setViewCenter] = useState<Location>(center);

  useEffect(() => {
    let active = true;
    async function fetchRoute() {
      if (!pickupLocation || !deliveryLocation) return;
      try {
        const route = await getRoute(pickupLocation, deliveryLocation);
        if (active && route && route.geometry && route.geometry.coordinates) {
          setRouteGeometry(route.geometry.coordinates.map((coord: [number, number]) => [coord[1], coord[0]]));
        }
      } catch (err) {
        console.error("Routing error for tracker", err);
      }
    }
    fetchRoute();
    return () => { active = false; };
  }, [pickupLocation, deliveryLocation]);

  const handleRefresh = () => {
    setLastUpdate(new Date());
  };

  const handleCenterOnDriver = () => {
    if (driverLocation) {
      setViewCenter(driverLocation);
    } else if (pickupLocation) {
      setViewCenter(pickupLocation);
    }
  };
  
  useEffect(() => {
    if (driverLocation) {
        setViewCenter(driverLocation);
    } else if (pickupLocation) {
        setViewCenter(pickupLocation);
    }
  }, [driverLocation, pickupLocation]);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden h-full flex flex-col">
      <div className="p-3 border-b bg-gray-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${driverLocation ? 'bg-green-500 animate-pulse' : 'bg-yellow-500'}`} />
            <span className="text-sm font-medium">
              {driverLocation ? 'Conductor en Ruta' : 'Esperando Ubicación'}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xs text-gray-500 hidden sm:inline">
              Actualizado: {lastUpdate.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' })}
            </span>
            <Button
              onClick={handleRefresh}
              size="icon"
              variant="outline"
              className="h-8 w-8"
              title="Actualizar ubicación del mapa"
            >
              <RefreshCw className="w-4 h-4" />
            </Button>
            <Button
              onClick={handleCenterOnDriver}
              size="icon"
              variant="outline"
              className="h-8 w-8"
              title="Centrar en conductor"
              disabled={!driverLocation && !pickupLocation}
            >
              <Navigation className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="relative flex-grow min-h-[300px]">
        <LeafletMap
          origin={pickupLocation}
          destination={deliveryLocation || viewCenter}
          routeGeometry={routeGeometry || undefined}
        />
      </div>
    </div>
  );
}
