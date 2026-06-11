// src/components/repartidor/RepartidorSelection.tsx
'use client';

import type { Repartidor } from '../../../generated/prisma/client/client';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bike, User, ArrowRight } from "lucide-react";
import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';

interface RepartidorSelectionProps {
    repartidores: Repartidor[];
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
        type: 'spring' as const,
        stiffness: 100,
    }
  },
};

export function RepartidorSelection({ repartidores }: RepartidorSelectionProps) {

    return (
        <Card className="w-full max-w-md shadow-2xl rounded-none border-slate-800 bg-slate-900/50 backdrop-blur-sm">
            <CardHeader className="text-center border-b border-slate-800 mb-6 pb-6">
                <Bike className="mx-auto h-12 w-12 text-[#2563EB]" />
                <CardTitle className="text-2xl font-bold font-display mt-4 text-slate-900 uppercase tracking-tight">
                    Acceso de Repartidor
                </CardTitle>
                <CardDescription className="text-slate-500 font-sans">
                    Seleccioná tu perfil para comenzar a trabajar.
                </CardDescription>
            </CardHeader>
            <CardContent>
                {repartidores.length === 0 ? (
                    <p className="text-center text-slate-500 font-sans py-8">No hay repartidores activos en este momento.</p>
                ) : (
                    <motion.div 
                        className="space-y-3"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {repartidores.map(r => (
                            <motion.div key={r.id} variants={itemVariants}>
                                <Button
                                    asChild
                                    variant="outline"
                                    className="w-full justify-between h-16 text-lg rounded-none border-slate-800 bg-slate-800/40 hover:bg-[#2563EB] hover:text-slate-900 hover:border-[#2563EB] transition-all group font-sans"
                                >
                                    <Link href={`/repartidor/${r.id}`}>
                                        <div className="flex items-center gap-4">
                                            <div className="bg-slate-800 p-2 border border-slate-700 group-hover:bg-[#1e40af] transition-colors">
                                                <User className="h-6 w-6 text-slate-600 group-hover:text-slate-900" />
                                            </div>
                                            <span className="font-bold">{r.name}</span>
                                        </div>
                                        <ArrowRight className="h-6 w-6 text-[#E89A17] group-hover:text-slate-900 group-hover:translate-x-1 transition-all" />
                                    </Link>
                                </Button>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </CardContent>
        </Card>
    );
}
