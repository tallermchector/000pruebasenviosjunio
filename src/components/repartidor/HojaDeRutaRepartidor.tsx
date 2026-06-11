// src/components/repartidor/HojaDeRutaRepartidor.tsx
'use client';

import { useState, useMemo, useTransition } from 'react';
import type { FormattedEtiqueta } from "@/types";
import { EtiquetaStatus } from '@/types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Printer, Search, Truck, Check, Loader2, Info, MapPin, Package, Clock, Phone, Navigation } from 'lucide-react';
import { updateEtiquetaStatus } from '@/app/admin/etiquetas/actions';
import { useToast } from '@/hooks/use-toast';
import { motion, AnimatePresence } from 'framer-motion';

interface HojaDeRutaRepartidorProps {
    etiquetas: FormattedEtiqueta[];
    onStatusChange: (etiquetaId: number, newStatus: EtiquetaStatus) => void;
}

const statusConfig = {
    [EtiquetaStatus.IMPRESA]: {
        text: 'POR SALIR',
        color: 'bg-slate-800 text-yellow-400 border-yellow-400/50',
        icon: <Package className="h-4 w-4" />
    },
    [EtiquetaStatus.EN_CAMINO]: {
        text: 'EN CAMINO',
        color: 'bg-[#2563EB]/20 text-[#2563EB] border-[#2563EB]/50',
        icon: <Truck className="h-4 w-4" />
    },
    [EtiquetaStatus.ENTREGADA]: {
        text: 'ENTREGADA',
        color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50',
        icon: <Check className="h-4 w-4" />
    },
    [EtiquetaStatus.NO_ENTREGADA]: {
        text: 'FALLIDA',
        color: 'bg-rose-500/20 text-rose-400 border-rose-500/50',
        icon: <Info className="h-4 w-4" />
    },
    [EtiquetaStatus.PENDIENTE]: {
        text: 'PENDIENTE',
        color: 'bg-slate-800 text-slate-500 border-slate-700',
        icon: <Clock className="h-4 w-4" />
    },
};

export function HojaDeRutaRepartidor({ etiquetas, onStatusChange }: HojaDeRutaRepartidorProps) {
    const { toast } = useToast();
    const [isPending, startTransition] = useTransition();
    const [statusFilter, setStatusFilter] = useState<string>('pendientes');
    const [searchTerm, setSearchTerm] = useState('');

    const etiquetasFiltradas = useMemo(() => {
        return etiquetas.filter(e => {
            const statusMatch = statusFilter === 'todos' || 
                               (statusFilter === 'pendientes' && (e.status === EtiquetaStatus.IMPRESA)) ||
                               (statusFilter === 'en_camino' && e.status === EtiquetaStatus.EN_CAMINO) ||
                               (statusFilter === 'entregadas' && e.status === EtiquetaStatus.ENTREGADA);
            
            const searchMatch = searchTerm === '' ||
                                e.destinatarioNombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                e.destinatarioDireccion.toLowerCase().includes(searchTerm.toLowerCase());

            return statusMatch && searchMatch;
        });
    }, [etiquetas, statusFilter, searchTerm]);

    const handleUpdateStatus = (etiquetaId: number, nextStatus: EtiquetaStatus) => {
        startTransition(async () => {
            const result = await updateEtiquetaStatus(etiquetaId, nextStatus);

            if (result.success) {
                onStatusChange(etiquetaId, nextStatus);
                toast({ title: `Estado: ${statusConfig[nextStatus].text}` });
            } else {
                toast({ title: "Error", description: result.error, variant: 'destructive' });
            }
        });
    };
    
    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-display font-bold text-slate-900 uppercase tracking-tighter">Mi Hoja de Ruta</h2>
                    <Button variant="outline" size="sm" className="rounded-none border-slate-800 bg-slate-900/50 text-slate-500 hover:text-slate-900">
                        <Printer className="mr-2 h-4 w-4" /> Imprimir
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                        <Input
                            placeholder="Buscar cliente o dirección..."
                            className="pl-10 bg-slate-900/50 border-slate-800 rounded-none text-slate-900 placeholder:text-slate-600 focus:ring-[#2563EB]"
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                        />
                    </div>
                     <Select value={statusFilter} onValueChange={setStatusFilter}>
                        <SelectTrigger className="bg-slate-900/50 border-slate-800 rounded-none text-slate-900 focus:ring-[#2563EB]">
                            <SelectValue placeholder="Filtrar estado" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-900 border-slate-800 text-slate-900 rounded-none">
                            <SelectItem value="pendientes">POR SALIR</SelectItem>
                            <SelectItem value="en_camino">EN CAMINO</SelectItem>
                            <SelectItem value="entregadas">ENTREGADAS</SelectItem>
                             <SelectItem value="todos">TODOS LOS ESTADOS</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="space-y-4">
                <AnimatePresence mode='popLayout'>
                    {etiquetasFiltradas.length === 0 ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="bg-slate-900/30 border border-dashed border-slate-800 p-12 text-center"
                        >
                            <Info className="h-10 w-10 text-slate-700 mx-auto mb-4" />
                            <p className="text-slate-500 font-sans">No hay entregas para los filtros seleccionados.</p>
                        </motion.div>
                    ) : (
                        etiquetasFiltradas.map((e, index) => (
                            <motion.div
                                key={e.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-slate-900 border border-slate-800 rounded-none overflow-hidden group hover:border-[#2563EB]/50 transition-colors shadow-lg"
                            >
                                <div className="p-4 flex flex-col gap-4">
                                    <div className="flex justify-between items-start">
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-2">
                                                <Badge variant="outline" className={`rounded-none px-2 py-0.5 text-xxs font-bold ${statusConfig[e.status]?.color}`}>
                                                    {statusConfig[e.status]?.text}
                                                </Badge>
                                                <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">{e.orderNumber}</span>
                                            </div>
                                            <h3 className="text-lg font-bold text-slate-900 uppercase leading-tight mt-1">{e.destinatarioNombre}</h3>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-xs text-slate-500 font-sans uppercase">A Cobrar</div>
                                            <div className="text-xl font-display font-black text-[#E89A17]">
                                                {e.montoACobrar ? `$${e.montoACobrar.toLocaleString('es-AR')}` : 'S/C'}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-3 pt-2 border-t border-slate-800/50">
                                        <div className="flex items-start gap-3">
                                            <MapPin className="h-5 w-5 text-[#2563EB] shrink-0 mt-0.5" />
                                            <div className="text-slate-600 text-sm font-sans">
                                                {e.destinatarioDireccion}
                                                <div className="text-xxs text-slate-500 uppercase mt-0.5">Mar del Plata, Argentina</div>
                                            </div>
                                        </div>

                                        {e.destinatarioTelefono && (
                                             <div className="flex items-center gap-3">
                                                <Phone className="h-4 w-4 text-slate-500 shrink-0" />
                                                <a href={`tel:${e.destinatarioTelefono}`} className="text-slate-500 text-sm hover:text-[#2563EB] transition-colors">
                                                    {e.destinatarioTelefono}
                                                </a>
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex gap-2 pt-2">
                                        {e.status === EtiquetaStatus.IMPRESA && (
                                            <Button
                                                className="flex-1 rounded-none bg-[#2563EB] hover:bg-[#1e40af] text-slate-900 font-bold h-12"
                                                onClick={() => handleUpdateStatus(e.id, EtiquetaStatus.EN_CAMINO)}
                                                disabled={isPending}
                                            >
                                                {isPending ? <Loader2 className="h-5 w-5 animate-spin" /> : <><Truck className='mr-2 h-5 w-5' /> SALIR A ENTREGA</>}
                                            </Button>
                                        )}
                                        {e.status === EtiquetaStatus.EN_CAMINO && (
                                            <>
                                                <Button
                                                    className="flex-1 rounded-none bg-emerald-600 hover:bg-emerald-700 text-slate-900 font-bold h-12"
                                                    onClick={() => handleUpdateStatus(e.id, EtiquetaStatus.ENTREGADA)}
                                                    disabled={isPending}
                                                >
                                                    {isPending ? <Loader2 className="h-5 w-5 animate-spin" /> : <><Check className='mr-2 h-5 w-5' /> ENTREGADO</>}
                                                </Button>
                                                <Button
                                                    variant="outline"
                                                    className="rounded-none border-slate-700 bg-slate-800 text-slate-900 font-bold h-12 px-4"
                                                    asChild
                                                >
                                                    <a href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(e.destinatarioDireccion + ', Mar del Plata')}`} target="_blank" rel="noopener noreferrer">
                                                        <Navigation className="h-5 w-5" />
                                                    </a>
                                                </Button>
                                            </>
                                        )}
                                        {e.status === EtiquetaStatus.ENTREGADA && (
                                            <div className="flex-1 h-12 flex items-center justify-center bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold uppercase text-xs tracking-widest">
                                                Completado con éxito
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
