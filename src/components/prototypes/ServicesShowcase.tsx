"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, DollarSign, Truck, Calendar, Store, Utensils, Bell, User, Search, Home, Headphones, UserCircle } from 'lucide-react';

const ServicesShowcase = () => {
  const services = [
    {
      title: 'Envios Express',
      description: 'Entregas ultra-rápidas en 60 min para tus documentos o paquetes urgentes dentro de la ciudad.',
      icon: <Zap className="w-8 h-8 text-primary" />,
      cta: 'SOLICITAR AHORA'
    },
    {
      title: 'Envios Low-Cost',
      description: 'La opción más económica. Agrupamos envíos para ofrecerte la mejor tarifa del mercado sin perder seguridad.',
      icon: <DollarSign className="w-8 h-8 text-primary" />,
      cta: 'VER TARIFAS'
    },
    {
      title: 'Envios Flex',
      description: 'Entrega en el día para e-commerce. Ideal para Mercado Libre y tiendas online que buscan rapidez.',
      icon: <Truck className="w-8 h-8 text-primary" />,
      cta: 'INTEGRAR TIENDA'
    },
    {
      title: 'Moto Fija',
      description: 'Personal dedicado por horas o jornadas completas. La solución ideal para logística interna corporativa.',
      icon: <Calendar className="w-8 h-8 text-primary" />,
      cta: 'RESERVAR STAFF'
    },
    {
      title: 'Plan Emprendedores',
      description: 'Crecé con nosotros. Planes escalables con beneficios exclusivos para negocios en crecimiento.',
      icon: <Store className="w-8 h-8 text-primary" />,
      cta: 'ME INTERESA'
    },
    {
      title: 'Delivery Gastronómico',
      description: 'Tus pedidos frescos y calientes. Equipamiento térmico y repartidores especializados en alimentos.',
      icon: <Utensils className="w-8 h-8 text-primary" />,
      cta: 'COTIZAR ENVIO'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0c14] text-slate-900 font-sans pb-24">
      {/* Header */}
      <header className="flex items-center justify-between p-6 bg-[#0a0c14]/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="flex flex-col">
          <span className="font-display font-black text-xl tracking-tighter text-slate-900 uppercase italic">DOSRUEDAS</span>
          <span className="font-display font-bold text-sm tracking-widest text-primary mt-[-4px]">SOLUTIONS</span>
        </div>
        <div className="flex gap-4">
          <button className="p-2 bg-white/5 rounded-full border border-white/10">
            <Bell className="w-5 h-5 text-slate-900" />
          </button>
          <button className="p-2 bg-white/5 rounded-full border border-white/10">
            <User className="w-5 h-5 text-slate-900" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        <header className="mb-10">
          <h1 className="font-display text-4xl font-black mb-4 uppercase italic">Nuestros Servicios</h1>
          <p className="text-slate-500 text-lg leading-relaxed">
            Soluciones logísticas tecnológicas diseñadas para la velocidad del mercado actual. Elige el plan que mejor se adapte a tus necesidades.
          </p>
        </header>

        {/* Grid of Cards */}
        <div className="space-y-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02, translateY: -5 }}
              className="p-8 bg-white/5 rounded-[32px] border border-white/10 backdrop-blur-sm group hover:border-primary/50 transition-colors"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-2xl mb-6">
                {service.icon}
              </div>
              <h3 className="font-display text-2xl font-black mb-4 uppercase italic">{service.title}</h3>
              <p className="text-slate-500 mb-8 leading-relaxed text-lg">
                {service.description}
              </p>
              <button className="w-full py-4 bg-secondary text-[#0a0c14] font-black rounded-xl flex items-center justify-center gap-2 group-hover:bg-[#ffca28] transition-colors shadow-[0_4px_0_rgba(180,140,0,1)] active:shadow-none active:translate-y-[4px] uppercase tracking-wider">
                {service.cta} <span className="text-xl">→</span>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Sales CTA Section */}
        <section className="mt-12 p-8 bg-white/5 rounded-[40px] border border-white/10 backdrop-blur-md text-center">
          <h2 className="font-display text-3xl font-black mb-6 uppercase italic leading-tight">¿Listo para optimizar tus envíos?</h2>
          <p className="text-slate-500 mb-8 text-lg">
            Nuestro equipo está listo para ayudarte a encontrar la mejor solución logística para tu negocio o necesidad personal.
          </p>
          <button className="w-full py-5 bg-primary hover:bg-blue-500 text-slate-900 font-black rounded-2xl text-lg transition-all shadow-lg shadow-primary/20 uppercase tracking-widest">
            Contactar Ventas
          </button>
        </section>
      </main>

      {/* Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#0a0c14]/90 backdrop-blur-2xl border-t border-white/10 px-6 py-4 flex justify-between items-center z-50">
        <button className="flex flex-col items-center gap-1 text-slate-500">
          <Home className="w-6 h-6" />
          <span className="text-xxs font-bold uppercase tracking-widest">Inicio</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-primary">
          <Truck className="w-6 h-6" />
          <span className="text-xxs font-bold uppercase tracking-widest">Servicios</span>
        </button>
        <div className="relative -top-6">
          <button className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/30 border-4 border-[#0a0c14]">
            <Search className="w-6 h-6 text-[#0a0c14]" />
          </button>
          <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xxs font-bold uppercase tracking-widest text-slate-500 whitespace-nowrap">Rastreo</span>
        </div>
        <button className="flex flex-col items-center gap-1 text-slate-500">
          <Headphones className="w-6 h-6" />
          <span className="text-xxs font-bold uppercase tracking-widest">Soporte</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-500">
          <UserCircle className="w-6 h-6" />
          <span className="text-xxs font-bold uppercase tracking-widest">Perfil</span>
        </button>
      </nav>
    </div>
  );
};

export default ServicesShowcase;
