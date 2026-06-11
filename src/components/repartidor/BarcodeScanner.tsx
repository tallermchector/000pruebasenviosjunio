// src/components/repartidor/BarcodeScanner.tsx
'use client';

import React, { useState } from 'react';
import { useZxing } from 'react-zxing';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CameraOff, Loader2, Scan } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface BarcodeScannerProps {
  onScan: (barcode: string) => void;
}

export function BarcodeScanner({ onScan }: BarcodeScannerProps) {
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);

  const [error, setError] = useState<Error | null>(null);

  const { ref } = useZxing({
    onDecodeResult(result) {
      if (!isProcessing) {
        const barcodeText = result.getText();
        if (barcodeText) {
          setIsProcessing(true);
          onScan(barcodeText);
        }
      }
    },
    onError(err) {
      console.error('Scanner Error:', err);
      const errorObj = err instanceof Error ? err : new Error(String(err));
      setError(errorObj);
      if (errorObj.name === 'NotAllowedError') {
        toast({
          variant: 'destructive',
          title: 'Acceso a la Cámara Denegado',
          description: 'Habilitá el permiso de la cámara en tu navegador para usar el escáner.',
        });
      } else {
        toast({
          variant: 'destructive',
          title: 'Error de Cámara',
          description: 'No se pudo iniciar la cámara. Verificá que no esté en uso.',
        });
      }
    },
  });

  if (error) {
     return (
        <div className="flex flex-col items-center justify-center h-64 text-center p-6 bg-slate-900 border border-rose-500/50">
            <CameraOff className="h-12 w-12 text-rose-500 mb-4" />
            <div className="space-y-2">
                <h3 className="text-slate-900 font-bold uppercase tracking-tight">Error de Cámara</h3>
                <p className="text-slate-500 text-sm">
                  {error.message.includes('permission') 
                    ? 'Permiso denegado. Habilitá la cámara en la configuración del sitio.'
                    : 'No se pudo acceder al dispositivo de captura.'
                  }
                </p>
            </div>
        </div>
    );
  }

  return (
    <div className="relative w-full aspect-square md:aspect-video rounded-none overflow-hidden border-2 border-slate-800 bg-black">
       <video ref={ref as any} className="w-full h-full object-cover opacity-70" />
        {isProcessing && (
            <div className="absolute inset-0 bg-surface-light/90 flex flex-col items-center justify-center z-20">
                <Loader2 className="h-10 w-10 animate-spin text-[#2563EB]" />
                <p className="mt-4 text-xs font-display font-bold text-slate-900 uppercase tracking-widest">Procesando...</p>
            </div>
        )}

      {/* Visual guide for scanning */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-10">
          <div className="w-4/5 h-1/3 border-2 border-[#E89A17] shadow-[0_0_15px_rgba(232,154,23,0.4)] relative">
              <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-white -translate-x-1 -translate-y-1" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-white translate-x-1 -translate-y-1" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-white -translate-x-1 translate-y-1" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-white translate-x-1 translate-y-1" />

              {/* Scanning line animation */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-white/50 shadow-[0_0_8px_rgba(255,255,255,0.8)] animate-[scan_2s_ease-in-out_infinite]" />
          </div>
      </div>

      <div className="absolute bottom-4 left-0 w-full flex justify-center z-10">
          <div className="bg-black/60 backdrop-blur-md px-4 py-2 border border-white/10 flex items-center gap-2">
              <Scan className="h-4 w-4 text-[#E89A17]" />
              <span className="text-xxs font-bold text-slate-900 uppercase tracking-widest">Detectando código...</span>
          </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0%, 100% { top: 0%; }
          50% { top: 100%; }
        }
      `}</style>
    </div>
  );
}
