// src/components/repartidor/RepartidorDashboard.tsx
'use client';

import { useState } from 'react';
import type { Repartidor } from '../../../generated/prisma/client/client';
import type { FormattedEtiqueta } from "@/types";
import { EtiquetaStatus } from '@/types';
import { Button } from "@/components/ui/button";
import { Bike, LogOut, Plus, ScanBarcode } from "lucide-react";
import Link from 'next/link';
import { HojaDeRutaRepartidor } from './HojaDeRutaRepartidor';
import { AssignEtiqueta } from './AssignEtiqueta';
import { useToast } from '@/hooks/use-toast';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

interface RepartidorDashboardProps {
    repartidor: Repartidor;
    initialEtiquetas: FormattedEtiqueta[];
}

export function RepartidorDashboard({ repartidor, initialEtiquetas }: RepartidorDashboardProps) {
    const [etiquetas, setEtiquetas] = useState(initialEtiquetas);
    const [isSheetOpen, setIsSheetOpen] = useState(false);
    const { toast } = useToast();

    const handleStatusChange = (etiquetaId: number, newStatus: EtiquetaStatus) => {
        setEtiquetas(prev => prev.map(e => e.id === etiquetaId ? { ...e, status: newStatus } : e));
    };

    const handleEtiquetaAssigned = (newEtiqueta: FormattedEtiqueta) => {
        // Add or update the etiqueta in the list
        setEtiquetas(prev => {
            const existingIndex = prev.findIndex(e => e.id === newEtiqueta.id);
            if (existingIndex > -1) {
                const updatedList = [...prev];
                updatedList[existingIndex] = newEtiqueta;
                return updatedList;
            } else {
                return [newEtiqueta, ...prev];
            }
        });

        setIsSheetOpen(false);

        toast({
            title: 'Etiqueta Asignada',
            description: `La etiqueta #${newEtiqueta.orderNumber} ha sido añadida a tu hoja de ruta.`,
            className: 'bg-green-100 border-green-400 text-green-700',
        });
    };

    return (
        <div className="min-h-screen bg-surface-light text-slate-700 font-sans pb-24">
            <header className="bg-[#2563EB] text-slate-900 shadow-xl sticky top-0 z-40 border-b border-blue-400/20">
                <div className="container mx-auto px-4 h-16 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="bg-white/10 p-1.5 border border-white/20">
                            <Bike className="h-6 w-6" />
                        </div>
                        <h1 className="text-lg font-bold font-display uppercase tracking-wider">
                            {repartidor.name.split(' ')[0]}
                        </h1>
                    </div>
                    <Button asChild variant="ghost" size="sm" className="hover:bg-white/10 text-slate-900 rounded-none border border-transparent hover:border-white/20">
                        <Link href="/repartidor">
                            <LogOut className="mr-2 h-4 w-4" /> Salir
                        </Link>
                    </Button>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8">
                 <HojaDeRutaRepartidor 
                    etiquetas={etiquetas.filter(e => e.repartidorId === repartidor.id)}
                    onStatusChange={handleStatusChange}
                 />
            </main>

            {/* Floating Action Button (FAB) */}
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                    <Button
                        size="icon"
                        className="fixed bottom-6 right-6 h-16 w-16 rounded-none bg-[#E89A17] hover:bg-[#d97706] text-slate-900 shadow-[0_0_20px_rgba(232,154,23,0.3)] border-2 border-white/10 z-50 group transition-all active:scale-95"
                    >
                        <Plus className="h-8 w-8 group-hover:rotate-90 transition-transform duration-300" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="bottom" className="h-[auto] bg-surface-light border-t border-slate-800 rounded-none p-0 overflow-hidden">
                    <div className="p-6">
                        <SheetHeader className="mb-6">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="bg-[#2563EB] p-2 border border-blue-400/20">
                                    <ScanBarcode className="h-6 w-6 text-slate-900" />
                                </div>
                                <SheetTitle className="text-xl font-display font-bold text-slate-900 uppercase">Asignar Entrega</SheetTitle>
                            </div>
                            <SheetDescription className="text-slate-500">
                                Escaneá el código o ingresá el número de orden para agregarla a tu ruta de hoy.
                            </SheetDescription>
                        </SheetHeader>

                        <div className="bg-slate-900/50 border border-slate-800 p-1">
                            <AssignEtiqueta
                                repartidorId={repartidor.id}
                                onEtiquetaAssigned={handleEtiquetaAssigned}
                            />
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
}
