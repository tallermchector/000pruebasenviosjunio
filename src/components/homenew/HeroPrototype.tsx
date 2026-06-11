"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  Zap,
  DollarSign,
  Calendar,
  ArrowRight,
  MapPin,
  ChevronDown,
  Menu,
  Home,
  Truck,
  User
} from 'lucide-react';

const HeroPrototype = () => {
  return (
    <div className="min-h-screen bg-surface-light text-slate-900 font-sans selection:bg-primary selection:text-slate-900">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-surface-light/50 backdrop-blur-md sticky top-0 z-50 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-primary rounded-lg">
            <Zap className="w-6 h-6" />
          </div>
          <span className="text-xl font-display font-bold tracking-tight uppercase italic">DosRuedas</span>
        </div>
        <button className="p-2 bg-surface-light rounded-lg border border-white/10">
          <Menu className="w-6 h-6" />
        </button>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 pt-16 pb-24 flex flex-col items-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1.5 mb-8 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 border border-primary/30 rounded-full"
        >
          Logística Tecnológica
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-display font-black mb-6 leading-tight uppercase italic"
        >
          Envios <br />
          <span className="text-primary drop-shadow-[0_0_15px_rgba(36,99,235,0.4)]">DosRuedas</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-md text-lg text-slate-500 mb-10 leading-relaxed"
        >
          Tu Solución Confiable. Entregas ultra-rápidas con precisión digital y seguridad total.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="w-full max-w-sm space-y-4"
        >
          <button className="w-full py-4 bg-secondary text-surface-light font-bold text-lg rounded-xl shadow-[0_4px_0_rgb(180,140,0)] hover:translate-y-[-2px] hover:shadow-[0_6px_0_rgb(180,140,0)] active:translate-y-[2px] active:shadow-none transition-all uppercase tracking-wider">
            Comenzar Envio
          </button>
          <button className="w-full py-4 bg-surface-light text-slate-900 font-bold text-lg rounded-xl border border-white/10 hover:bg-[#334155] transition-colors uppercase tracking-wider">
            Rastrear Pedido
          </button>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-16 opacity-50"
        >
          <ChevronDown className="w-6 h-6 mx-auto" />
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="px-6 py-12 bg-surface-light">
        <h2 className="text-3xl font-display font-black mb-2 uppercase italic border-l-4 border-primary pl-4">Nuestros Servicios</h2>
        <div className="w-20 h-1 bg-primary mb-12 ml-4 opacity-50" />

        <div className="space-y-6">
          {/* Service Card 1 */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-8 bg-surface-light/40 rounded-3xl border border-white/5 backdrop-blur-sm group hover:border-primary/30 transition-all"
          >
            <div className="w-14 h-14 flex items-center justify-center bg-primary/10 rounded-2xl mb-6 text-primary">
              <Zap className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-display font-black mb-4 uppercase italic">Express</h3>
            <p className="text-slate-500 mb-6 leading-relaxed">
              Entregas en menos de 60 minutos dentro del radio urbano. Prioridad absoluta.
            </p>
            <a href="#" className="inline-flex items-center text-primary font-bold hover:underline">
              Saber más <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </motion.div>

          {/* Service Card 2 */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-8 bg-surface-light/40 rounded-3xl border border-white/5 backdrop-blur-sm group hover:border-primary/30 transition-all"
          >
            <div className="w-14 h-14 flex items-center justify-center bg-primary/10 rounded-2xl mb-6 text-primary">
              <DollarSign className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-display font-black mb-4 uppercase italic">Low-Cost</h3>
            <p className="text-slate-500 mb-6 leading-relaxed">
              La opción más económica para envíos programados. Eficiencia sin compromisos.
            </p>
            <a href="#" className="inline-flex items-center text-primary font-bold hover:underline">
              Saber más <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </motion.div>

          {/* Service Card 3 */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-8 bg-surface-light/40 rounded-3xl border border-white/5 backdrop-blur-sm group hover:border-primary/30 transition-all"
          >
            <div className="w-14 h-14 flex items-center justify-center bg-primary/10 rounded-2xl mb-6 text-primary">
              <Calendar className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-display font-black mb-4 uppercase italic">Moto Fija</h3>
            <p className="text-slate-500 mb-6 leading-relaxed">
              Personal dedicado para tu negocio por horas o jornadas completas.
            </p>
            <a href="#" className="inline-flex items-center text-primary font-bold hover:underline">
              Saber más <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Map/Tracking Section */}
      <section className="px-6 py-12">
        <div className="relative h-64 w-full rounded-3xl overflow-hidden grayscale contrast-125 border border-white/10 shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800"
            alt="Map"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-light via-transparent to-transparent" />

          <div className="absolute bottom-6 left-6 right-6 p-6 bg-surface-light/90 backdrop-blur-xl rounded-2xl border border-white/10 flex flex-col gap-2">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest">
              <span className="flex items-center text-green-400">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                Rastreo en Vivo
              </span>
              <span className="text-slate-500">Pedido #4829</span>
            </div>
            <p className="font-bold">Mensajero a 1.2 km de tu ubicación</p>
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 p-4 pb-8 bg-surface-light/80 backdrop-blur-2xl border-t border-white/10 z-50">
        <div className="flex justify-around items-center">
          <button className="flex flex-col items-center gap-1 text-primary">
            <Home className="w-6 h-6" />
            <span className="text-xxs font-bold uppercase tracking-wider">Inicio</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-slate-500">
            <Truck className="w-6 h-6" />
            <span className="text-xxs font-bold uppercase tracking-wider">Servicios</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-slate-500">
            <MapPin className="w-6 h-6" />
            <span className="text-xxs font-bold uppercase tracking-wider">Rastreo</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-slate-500">
            <User className="w-6 h-6" />
            <span className="text-xxs font-bold uppercase tracking-wider">Perfil</span>
          </button>
        </div>
      </nav>

      {/* Spacer for Bottom Nav */}
      <div className="h-32" />
    </div>
  );
};

export default HeroPrototype;