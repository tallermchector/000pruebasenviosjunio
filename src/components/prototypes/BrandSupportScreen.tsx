"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Zap,
  Shield,
  Cpu,
  Plus,
  Minus,
  Camera as Instagram,
  Send,
  MessageCircle,
  Home,
  Truck,
  HelpCircle,
  User,
  Heart
} from "lucide-react";

const BrandSupportScreen = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const values = [
    { icon: <Zap size={24} />, title: 'RAPIDEZ', desc: 'Entregas en tiempo récord garantizadas.', color: 'text-primary' },
    { icon: <Shield size={24} />, title: 'SEGURIDAD', desc: 'Protección total de tus paquetes.', color: 'text-secondary' },
    { icon: <Cpu size={24} />, title: 'MODERNIDAD', desc: 'Seguimiento GPS en tiempo real.', color: 'text-primary' }
  ];

  const faqs = [
    { q: '¿Cuál es el tiempo promedio de entrega?', a: 'Nuestro tiempo promedio en la zona urbana es de 35 a 50 minutos dependiendo de la demanda y distancia.' },
    { q: '¿Qué tipos de paquetes transportan?', a: 'Transportamos documentos, paquetes pequeños y medianos, y pedidos de e-commerce hasta 20kg.' },
    { q: '¿Tienen cobertura nacional?', a: 'Actualmente operamos en las principales ciudades metropolitanas, con planes de expansión próximamente.' }
  ];

  const posts = [
    { id: 1, image: 'https://images.unsplash.com/photo-1558981403-c5f9199ad250?auto=format&fit=crop&q=80&w=400', tag: '#Velocidad', likes: 124 },
    { id: 2, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=400', tag: '#Tecnología', likes: 89 }
  ];

  return (
    <div className="min-h-screen bg-[#0a0f1e] text-slate-100 font-sans pb-28">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0a0f1e]/80 backdrop-blur-md border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <button className="p-2 -ml-2 text-slate-900">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold font-display tracking-tighter italic text-primary uppercase">ENVIOS</span>
          <span className="text-xl font-bold font-display tracking-tighter italic text-secondary uppercase">2RUEDAS</span>
        </div>
        <div className="w-10"></div> {/* Spacer */}
      </header>

      <main className="px-6 py-8 space-y-12">
        {/* Sobre Nosotros */}
        <section className="text-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-black font-display italic uppercase tracking-wider">Sobre Nosotros</h1>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full shadow-[0_0_10px_rgba(37,99,235,0.6)]"></div>
          </div>
          <p className="text-slate-500 leading-relaxed max-w-sm mx-auto">
            Nuestra misión es revolucionar la logística urbana con eficiencia, velocidad y tecnología punta, conectando negocios y personas en tiempo real.
          </p>
          <div className="space-y-4 pt-4">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm group hover:border-primary/30 transition-all"
              >
                <div className={`p-3 rounded-xl bg-slate-900 shadow-inner ${v.color}`}>
                  {v.icon}
                </div>
                <div className="text-left">
                  <h3 className="font-bold font-display text-sm tracking-widest uppercase">{v.title}</h3>
                  <p className="text-xs text-slate-500">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="space-y-6">
          <h2 className="text-2xl font-black font-display italic uppercase tracking-wider">Preguntas Frecuentes</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full p-5 flex items-center justify-between text-left group"
                >
                  <span className="text-sm font-bold pr-4">{faq.q}</span>
                  <div className={`transition-transform duration-300 ${activeFaq === i ? 'rotate-180 text-secondary' : 'text-primary'}`}>
                    {activeFaq === i ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-5 pb-5 overflow-hidden"
                    >
                      <p className="text-sm text-slate-500 leading-relaxed border-t border-white/5 pt-4">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        {/* Contacto */}
        <section className="space-y-6">
          <h2 className="text-2xl font-black font-display italic uppercase tracking-wider">Contacto</h2>
          <div className="space-y-4">
            <div className="space-y-4 bg-white/5 p-6 rounded-3xl border border-white/10 backdrop-blur-sm">
              <div className="space-y-2">
                <label className="text-xxs font-bold text-primary uppercase tracking-[0.2em] ml-1">Nombre</label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xxs font-bold text-primary uppercase tracking-[0.2em] ml-1">Email</label>
                <input
                  type="email"
                  placeholder="email@ejemplo.com"
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xxs font-bold text-primary uppercase tracking-[0.2em] ml-1">Mensaje</label>
                <textarea
                  rows={4}
                  placeholder="¿En qué podemos ayudarte?"
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none"
                />
              </div>
              <button className="w-full py-4 bg-primary hover:bg-blue-500 text-slate-900 font-bold font-display rounded-xl shadow-[0_4px_15px_rgba(37,99,235,0.3)] flex items-center justify-center gap-2 transition-all active:scale-95 uppercase tracking-widest text-sm italic">
                <Send size={18} />
                Enviar Mensaje
              </button>
            </div>

            <div className="flex justify-center gap-4 pt-2">
              <a href="#" className="w-14 h-14 rounded-full bg-gradient-to-tr from-purple-600 via-red-500 to-yellow-500 flex items-center justify-center text-slate-900 shadow-lg hover:scale-110 transition-transform">
                <Instagram size={28} />
              </a>
              <a href="#" className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-slate-900 shadow-lg hover:scale-110 transition-transform">
                <MessageCircle size={28} />
              </a>
            </div>
          </div>
        </section>

        {/* Social Feed */}
        <section className="space-y-6">
          <h2 className="text-2xl font-black font-display italic uppercase tracking-wider">Nuestras Redes</h2>
          <div className="grid grid-cols-2 gap-4">
            {posts.map((post) => (
              <div key={post.id} className="group relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-slate-900">
                <img
                  src={post.image}
                  alt={post.tag}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="text-xxs font-bold text-secondary">{post.tag}</span>
                  <div className="flex items-center gap-1 text-xxs font-bold">
                    <Heart size={12} className="text-red-500 fill-red-500" />
                    {post.likes}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full py-3 text-xs font-bold text-primary uppercase tracking-widest hover:text-blue-400 flex items-center justify-center gap-2">
            Ver más en Instagram
            <Instagram className="w-4 h-4" />
          </button>
        </section>
      </main>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 p-4 pb-8 bg-[#0a0f1e]/80 backdrop-blur-2xl border-t border-white/5 z-50">
        <div className="flex justify-around items-center max-w-lg mx-auto">
          {[
            { label: 'Inicio', icon: <Home size={22} />, active: false },
            { label: 'Envíos', icon: <Truck size={22} />, active: false },
            { label: 'Soporte', icon: <HelpCircle size={22} />, active: true },
            { label: 'Perfil', icon: <User size={22} />, active: false }
          ].map((item, i) => (
            <button key={i} className={`flex flex-col items-center gap-1.5 transition-all ${item.active ? 'text-primary' : 'text-slate-500 hover:text-slate-600'}`}>
              <div className={`p-2 rounded-2xl transition-all ${item.active ? 'bg-primary/10 shadow-[0_0_20px_rgba(37,99,235,0.2)]' : ''}`}>
                {item.icon}
              </div>
              <span className="text-[9px] font-black uppercase tracking-[0.15em]">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default BrandSupportScreen;
