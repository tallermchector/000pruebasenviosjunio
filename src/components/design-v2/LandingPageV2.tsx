import React from 'react';
import { motion } from 'framer-motion';
import {
  Bike,
  ChevronRight,
  Globe,
  MapPin,
  Package,
  Phone,
  ShieldCheck,
  Zap,
  Camera as Instagram,
  Share2 as Facebook,
  MessageCircle as Twitter,
  Mail
} from "lucide-react";

const LandingPageV2: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 dark">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/10 bg-background/80">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Bike className="text-primary-foreground" size={24} />
            </div>
            <span className="font-display text-xl font-bold tracking-wider">
              ENVIOS <span className="text-primary">DOSRUEDAS</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Servicios</a>
            <a href="#" className="hover:text-foreground transition-colors">Visión</a>
            <a href="#" className="hover:text-foreground transition-colors">Planes</a>
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-full transition-all transform hover:scale-105 active:scale-95">
              Cotizar
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,hsl(var(--primary)/0.2),transparent)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xxs font-bold tracking-[0.2em] uppercase bg-primary/10 border border-primary/20 text-primary rounded-full">
              LOGÍSTICA DE ALTA VELOCIDAD
            </span>
            <h1 className="font-display text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tighter uppercase">
              ENVIOS <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary drop-shadow-[0_0_30px_hsl(var(--primary)/0.3)]">
                DOSRUEDAS
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-12 leading-relaxed">
              Rediseñamos la última milla en <span className="text-foreground font-semibold">Mar del Plata</span>. Inteligencia, velocidad y eficiencia para mover tu negocio al siguiente nivel.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-8 py-4 rounded-lg flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_hsl(var(--secondary)/0.2)]">
                <Zap size={18} /> COTIZAR ENVÍO
              </button>
              <button className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-lg transition-all">
                Ver Servicios
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-accent/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-xl group-hover:bg-primary/20 transition-all" />
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
                <img
                  src="https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&q=80"
                  alt="Logística"
                  className="w-full h-full object-cover opacity-60 grayscale"
                />
              </div>
            </div>
            <div>
              <span className="text-xs font-bold tracking-widest text-primary uppercase mb-4 block">NUESTRA MISIÓN</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Liderando la logística dinámica con tecnología de punta.
              </h2>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                No somos solo un servicio de mensajería; somos el motor que impulsa el crecimiento de Mar del Plata. Fusionamos infraestructura local con algoritmos avanzados de optimización de rutas.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-primary/30 transition-all">
                  <Zap className="text-secondary mb-4" size={24} />
                  <h4 className="font-bold mb-2">Ultra Rápido</h4>
                  <p className="text-sm text-muted-foreground">Entregas en tiempo récord optimizadas por IA.</p>
                </div>
                <div className="p-6 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-primary/30 transition-all">
                  <Globe className="text-primary mb-4" size={24} />
                  <h4 className="font-bold mb-2">Trazabilidad</h4>
                  <p className="text-sm text-muted-foreground">Seguimiento en tiempo real de cada paquete.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-4">Soluciones de Envío</h2>
            <div className="w-24 h-1 bg-primary mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Zap size={24} />, title: "Envíos Express", desc: "Urgencia es nuestra especialidad. Documentación y paquetería pequeña entregada en minutos." },
              { icon: <Package size={24} />, title: "Logística E-commerce", desc: "Integra tu tienda online. Manejamos tus envíos masivos con reporte de entregas." },
              { icon: <MapPin size={24} />, title: "Última Milla", desc: "El tramo más crítico, resuelto. Tecnología aplicada para garantizar que cada entrega llegue." }
            ].map((item, idx) => (
              <div key={idx} className="group p-8 rounded-2xl border border-white/10 bg-card hover:bg-primary/5 hover:border-primary/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{item.desc}</p>
                <a href="#" className="text-primary text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  Saber más <ChevronRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="relative z-10 text-center md:text-left">
            <h2 className="font-display text-3xl font-bold mb-2 text-primary-foreground">¿Listo para enviar ahora mismo?</h2>
            <p className="text-primary-foreground/80">Tu primera cotización toma menos de 30 segundos.</p>
          </div>
          <button className="relative z-10 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-black px-10 py-4 rounded-lg transition-all shadow-xl uppercase">
            Empezar ahora
          </button>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl font-bold mb-4">Planes para Emprendedores</h2>
          <p className="text-muted-foreground mb-16">Escala tu logística a medida que crece tu negocio.</p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Startup Plan */}
            <div className="p-8 rounded-2xl border border-white/5 bg-card flex flex-col text-left">
              <span className="text-xs font-bold text-muted-foreground uppercase mb-4">STARTUP</span>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-muted-foreground">/mes</span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {['Hasta 10 envíos/mes', 'App móvil básica', 'Soporte vía chat'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <ShieldCheck size={16} className="text-primary" /> {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-lg border border-white/10 hover:bg-white/5 transition-all font-bold text-sm">Registrarse</button>
            </div>

            {/* Growth Plan - Featured */}
            <div className="p-8 rounded-2xl border-2 border-primary bg-primary/5 flex flex-col text-left relative transform scale-105 shadow-2xl">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xxs font-black px-4 py-1 rounded-full uppercase">POPULAR</div>
              <span className="text-xs font-bold text-primary uppercase mb-4">GROWTH</span>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-bold">$4.990</span>
                <span className="text-muted-foreground">/mes</span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {['Hasta 100 envíos/mes', 'Panel de control PRO', 'API Integration', 'Prioridad en recolección'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-foreground">
                    <ShieldCheck size={16} className="text-secondary" /> {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground transition-all font-bold text-sm">Elegir Plan</button>
            </div>

            {/* Enterprise Plan */}
            <div className="p-8 rounded-2xl border border-white/5 bg-card flex flex-col text-left">
              <span className="text-xs font-bold text-muted-foreground uppercase mb-4">ENTERPRISE</span>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-bold">Personalizado</span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {['Envíos ilimitados', 'Gerente de cuenta', 'Custom Workflows'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <ShieldCheck size={16} className="text-primary" /> {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-lg border border-white/10 hover:bg-white/5 transition-all font-bold text-sm">Contactar</button>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicles Section */}
      <section className="py-24 bg-accent/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-3xl font-bold mb-12">Tipos de Vehículos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Moto Fija", desc: "Ideal para recorridos fijos diarios y mensajería interna empresarial.", img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=400" },
              { title: "Flete Liviano", desc: "Transporte de cajas and bultos de mediano tamaño con total seguridad.", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=400" },
              { title: "Distribución Masiva", desc: "Logística compleja para grandes volúmenes de entrega punto a punto.", img: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=400" }
            ].map((v, i) => (
              <div key={i} className="group overflow-hidden rounded-2xl border border-white/5 bg-card">
                <div className="h-48 overflow-hidden grayscale group-hover:grayscale-0 transition-all">
                  <img src={v.img} alt={v.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-lg mb-2">{v.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background pt-24 pb-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <Bike className="text-primary" size={24} />
                <span className="font-display text-lg font-bold">ENVIOS <span className="text-primary">DOSRUEDAS</span></span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                Soluciones logísticas inteligentes para la era del mismo día. Más rápido, más inteligente.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"><Instagram size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"><Facebook size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"><Twitter size={18} /></a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6">Servicios</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Envíos Express</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Logística E-commerce</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Última Milla</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Fletes Livianos</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Compañía</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Nosotros</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Visión 2025</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Carreras</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Contacto</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li className="flex items-center gap-3"><MapPin size={16} /> Mar del Plata, Buenos Aires</li>
                <li className="flex items-center gap-3"><Phone size={16} /> (0223) 456-7890</li>
                <li className="flex items-center gap-3"><Mail size={16} /> hola@enviosdosruedas.com</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xxs text-muted-foreground uppercase font-bold tracking-widest">
            <p>© 2024 ENVIOS DOSRUEDAS. TODOS LOS DERECHOS RESERVADOS.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-foreground">Términos y Condiciones</a>
              <a href="#" className="hover:text-foreground">Privacidad</a>
              <a href="#" className="hover:text-foreground">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPageV2;
