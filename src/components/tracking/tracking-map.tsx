"use client";

interface Location {
  lat: number;
  lng: number;
}

interface TrackingMapProps {
  location: Location;
}

import dynamic from 'next/dynamic';

const LeafletMap = dynamic(() => import('@/components/maps/leaflet-map'), { ssr: false });

export function TrackingMap({ location }: TrackingMapProps) {
  const openInOSM = () => {
    const osmUrl = `https://www.openstreetmap.org/?mlat=${location.lat}&mlon=${location.lng}#map=13/${location.lat}/${location.lng}`;
    window.open(osmUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="relative">
        <div className="w-full h-96 relative">
          <LeafletMap origin={location} />
        </div>

        {/* Map footer */}
        <div className="p-4 bg-gray-50 border-t">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>Datos de OpenStreetMap</span>
            <div className="space-x-4">
              <button
                onClick={openInOSM}
                className="text-blue-600 hover:underline"
              >
                Abrir en OpenStreetMap
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
