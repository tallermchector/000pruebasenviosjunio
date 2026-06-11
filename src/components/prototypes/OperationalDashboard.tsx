"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  Zap,
  MapPin,
  Box,
  Truck,
  CheckCircle,
  Calculator,
  List,
  Bell,
  User,
  Home,
  Map as MapIcon
} from 'lucide-react';

const OperationalDashboard = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-700 font-sans pb-24">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-surface-light border-b border-primary/20 sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary rounded-lg shadow-[0_0_15px_rgba(37,99,235,0.4)]">
            <Zap className="w-6 h-6 text-slate-900" />
          </div>
          <span className="text-xl font-black tracking-widest text-primary font-display uppercase italic">DosRuedas Ops</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="relative p-2 text-slate-500 hover:text-slate-900 transition-colors">
            <Bell className="w-6 h-6" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-secondary rounded-full border-2 border-surface-light"></span>
          </button>
          <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-primary">
             <User className="w-6 h-6" />
          </div>
        </div>
      </header>

      <main className="p-6 space-y-8">
        {/* Tracking Card */}
        <section className="bg-gradient-to-br from-surface-light to-surface-light rounded-3xl p-8 border border-white/5 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>

          <div className="flex items-center gap-4 mb-6">
            <div className="p-2 bg-secondary/10 rounded-lg">
              <MapPin className="w-6 h-6 text-secondary animate-pulse" />
            </div>
            <div>
              <h2 className="text-xl font-bold font-display uppercase tracking-wider text-slate-900">Seguimiento en Tiempo Real</h2>
              <p className="text-slate-500 text-sm">Monitoreo de activos críticos y geolocalización.</p>
            </div>
          </div>

          {/* Stepper */}
          <div className="flex items-center justify-between mb-8 px-4 relative">
             <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-700 -translate-y-1/2 mx-12"></div>
             <div className="absolute top-1/2 left-0 w-1/2 h-0.5 bg-primary -translate-y-1/2 mx-12"></div>

             {[
               { label: 'Preparado', icon: <Box className="w-6 h-6 text-slate-900" />, active: true },
               { label: 'En Tránsito', icon: <Truck className="w-6 h-6 text-slate-900" />, active: true },
               { label: 'Entregado', icon: <CheckCircle className="w-6 h-6 text-slate-900" />, active: false }
             ].map((step, i) => (
               <div key={i} className="relative z-10 flex flex-col items-center gap-3">
                 <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${step.active ? 'bg-primary border-blue-400 shadow-[0_0_15px_rgba(37,99,235,0.6)]' : 'bg-slate-800 border-slate-700 text-slate-500'}`}>
                   {step.icon}
                 </div>
                 <span className={`text-xxs font-bold uppercase tracking-tighter ${step.active ? 'text-primary' : 'text-slate-500'}`}>{step.label}</span>
               </div>
             ))}
          </div>

          <div className="flex gap-4">
            <input
              type="text"
              placeholder="DR-TRACK-..."
              className="flex-1 bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-4 text-slate-900 font-mono text-sm focus:outline-none focus:border-primary transition-colors"
            />
            <button className="px-8 py-4 bg-primary text-slate-900 font-bold font-display rounded-xl shadow-[0_4px_0_rgb(29,78,216)] hover:translate-y-[-2px] hover:shadow-[0_6px_0_rgb(29,78,216)] active:translate-y-[2px] active:shadow-none transition-all uppercase tracking-widest text-sm">
              Rastrear
            </button>
          </div>
        </section>

        {/* Quick Calculator */}
        <section className="bg-slate-900/40 rounded-3xl p-6 border border-white/5">
           <div className="flex items-center gap-3 mb-8">
              <Calculator className="w-5 h-5 text-secondary" />
              <h2 className="text-lg font-bold font-display uppercase tracking-wider text-slate-900 italic">Cotizador Rápido</h2>
           </div>

           <div className="flex p-1 bg-slate-950 rounded-xl mb-8 border border-slate-800">
              <button className="flex-1 py-3 bg-primary rounded-lg text-xs font-black uppercase tracking-widest text-slate-900 shadow-lg">Express</button>
              <button className="flex-1 py-3 text-slate-500 text-xs font-black uppercase tracking-widest hover:text-slate-600">Low-Cost</button>
           </div>

           <div className="space-y-6">
              {[
                { label: 'Origen', icon: <MapPin className="w-5 h-5" />, placeholder: 'Ciudad o CP' },
                { label: 'Destino', icon: <MapPin className="w-5 h-5" />, placeholder: 'Ciudad o CP' },
                { label: 'Peso (KG)', icon: <Box className="w-5 h-5" />, placeholder: '0.00' }
              ].map((field, i) => (
                <div key={i}>
                  <label className="text-xxs font-black uppercase tracking-widest text-slate-500 mb-2 block">{field.label}</label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                      {field.icon}
                    </div>
                    <input
                      type="text"
                      placeholder={field.placeholder}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl py-4 pl-12 pr-4 text-slate-900 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>
              ))}
           </div>

           <button className="w-full mt-8 py-5 bg-secondary text-slate-900 font-black font-display rounded-xl shadow-[0_4px_0_rgb(180,140,0)] hover:translate-y-[-2px] hover:shadow-[0_6px_0_rgb(180,140,0)] active:translate-y-[2px] active:shadow-none transition-all uppercase tracking-[0.2em] text-sm italic">
             Calcular Tarifa
           </button>
        </section>

        {/* Recent Orders */}
        <section className="bg-slate-900/40 rounded-3xl border border-white/5 overflow-hidden">
           <div className="p-6 flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-3">
                 <List className="w-5 h-5 text-primary" />
                 <h2 className="text-lg font-bold font-display uppercase tracking-wider text-slate-900">Mis Órdenes</h2>
              </div>
              <button className="text-xs font-black uppercase tracking-widest text-primary hover:text-blue-400">Ver Todas</button>
           </div>

           <div className="divide-y divide-slate-800">
              {[
                { id: '#DR-88210', dest: 'Mar del Plata, ARG', date: '19 Mar, 2026', status: 'transit' },
                { id: '#DR-88195', dest: 'Miramar, ARG', date: '18 Mar, 2026', status: 'delivered' },
                { id: '#DR-88042', dest: 'Mar del Plata, ARG', date: '17 Mar, 2026', status: 'delivered' }
              ].map((order, i) => (
                <div key={i} className="p-6 flex items-center justify-between hover:bg-slate-800/50 transition-colors group cursor-pointer">
                  <div className="space-y-1">
                    <span className="text-sm font-bold text-primary font-mono group-hover:text-blue-400">{order.id}</span>
                    <p className="text-xs text-slate-600 font-bold">{order.dest}</p>
                    <p className="text-xxs text-slate-500 uppercase tracking-tighter italic">{order.date}</p>
                  </div>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${order.status === 'transit' ? 'bg-blue-600/10 border-primary/20 text-primary' : 'bg-green-600/10 border-green-500/20 text-green-500'}`}>
                    {order.status === 'transit' ? <Truck className="w-5 h-5" /> : <CheckCircle className="w-5 h-5" />}
                  </div>
                </div>
              ))}
           </div>
        </section>
      </main>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 bg-surface-light/90 backdrop-blur-xl border-t border-slate-800 p-4 pb-8 z-50">
        <div className="flex justify-around items-center max-w-lg mx-auto">
          {[
            { label: 'Inicio', icon: <Home className="w-6 h-6" />, active: true },
            { label: 'Órdenes', icon: <Box className="w-6 h-6" />, active: false },
            { label: 'Mapa', icon: <MapIcon className="w-6 h-6" />, active: false },
            { label: 'Perfil', icon: <User className="w-6 h-6" />, active: false }
          ].map((item, i) => (
            <button key={i} className={`flex flex-col items-center gap-1 group transition-all ${item.active ? 'text-primary' : 'text-slate-500 hover:text-slate-600'}`}>
              <div className={`p-2 rounded-xl transition-all ${item.active ? 'bg-primary/10' : 'group-hover:bg-slate-800'}`}>
                {item.icon}
              </div>
              <span className="text-xxs font-black uppercase tracking-widest">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default OperationalDashboard;
