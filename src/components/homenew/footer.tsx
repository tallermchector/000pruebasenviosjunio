'use client';

import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, ShieldCheck, Zap, Globe, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { FooterSocialLinks } from './footer-social-links';

export const Footer = () => {
  const [year, setYear] = useState(2026);
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const footerLinks = {
    empresa: [
      { label: "Sobre Nosotros", href: "/nosotros/sobre-nosotros" },
      { label: "Preguntas Frecuentes", href: "/nosotros/preguntas-frecuentes" },
      { label: "Nuestras Redes", href: "/nosotros/nuestras-redes" },
      { label: "Términos y Condiciones", href: "/terminos-y-condiciones" },
      { label: "Política de Privacidad", href: "/politica-de-privacidad" }
    ],
    servicios: [
      { label: "Envíos Express", href: "/servicios/envios-express" },
      { label: "Envíos LowCost", href: "/servicios/envios-lowcost" },
      { label: "Envíos Flex (MeLi)", href: "/servicios/enviosflex" },
      { label: "E-Commerce & 3PL", href: "/servicios/plan-emprendedores" }
    ]
  };

  return (
    <footer className="pt-32 pb-16 px-4 border-t border-border/40 bg-background relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none opacity-50" />
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-24 mb-24">

          {/* Brand Identity */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10 group shrink-0" aria-label="Volver al inicio desde el pie de página">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center shrink-0 transition-all group-hover:rotate-6 group-hover:scale-110 drop-shadow-[0_0_10px_rgba(37,99,235,0.4)]">
                <Image src="/LogoEnviosDosRuedas.webp" alt="Logo Dos Ruedas" fill className="object-contain" sizes="(max-width: 640px) 48px, 56px" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-display text-orbitron text-xl sm:text-2xl lg:text-3xl tracking-tighter text-foreground uppercase italic leading-none mb-1 font-black">
                  Envios DosRuedas
                </span>
                <span className="font-display text-orbitron font-black text-primary drop-shadow-[0_0_10px_rgba(37,99,235,0.3)] text-xxs sm:text-sm lg:text-base uppercase italic tracking-[0.15em] leading-none">
                  tu solución confiable
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground text-base mb-12 leading-relaxed font-sans font-light max-w-sm">
              Tu solución confiable para mensajería y delivery en Mar del Plata. Servicios rápidos, seguros y económicos.
            </p>

            <FooterSocialLinks
              links={[
                { icon: "/icons/instagram.svg", href: "https://instagram.com/enviosdosruedas", label: "Instagram en el pie de página" },
                { icon: "/icons/facebook.svg", href: "https://facebook.com/enviosdosruedas", label: "Facebook en el pie de página" },
                { icon: "/icons/whatsapp.svg", href: "https://wa.me/542236602699", label: "WhatsApp en el pie de página" },
                { icon: "/icons/google.svg", href: "#", label: "Google en el pie de página" }
              ]}
            />
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-orbitron font-black mb-10 tracking-[0.3em] text-xxs uppercase text-muted-foreground/60">Nosotros</h3>
            <ul className="space-y-6">
              {footerLinks.empresa.slice(0, 3).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-all flex items-center gap-3 group text-sm font-sans font-light">
                    <div className="w-1 h-1 rounded-full bg-primary/20 group-hover:bg-primary group-hover:scale-150 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-display text-orbitron font-black mb-10 tracking-[0.3em] text-xxs uppercase text-muted-foreground/60">Servicios</h3>
            <ul className="space-y-6">
              {footerLinks.servicios.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-all flex items-center gap-3 group text-sm font-sans font-light">
                    <div className="w-1 h-1 rounded-full bg-primary/20 group-hover:bg-primary group-hover:scale-150 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-4">
            <h3 className="font-display text-orbitron font-black mb-10 tracking-[0.3em] text-xxs uppercase text-muted-foreground/60">Contacto Rápido</h3>
            <ul className="space-y-8">
              <li className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-md border border-border bg-card flex items-center justify-center shrink-0 group-hover:bg-secondary/20 group-hover:border-secondary/40 transition-all">
                  <MapPin size={22} className="text-secondary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-foreground font-display text-orbitron text-xxs font-black uppercase tracking-widest mb-1 opacity-40">Ubicación</span>
                  <span className="text-muted-foreground text-sm leading-relaxed font-light font-sans">Friuli 1972, Mar del Plata</span>
                </div>
              </li>

              <li className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-md border border-border bg-card flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all">
                  <Phone size={22} className="text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-foreground font-display text-orbitron text-xxs font-black uppercase tracking-widest mb-1 opacity-40">Teléfono</span>
                  <a href="tel:+542236602699" className="text-muted-foreground hover:text-foreground transition-colors font-light text-sm font-sans">+54 223 660-2699</a>
                </div>
              </li>

              <li className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-md border border-border bg-card flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all">
                  <Mail size={22} className="text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-foreground font-display text-orbitron text-xxs font-black uppercase tracking-widest mb-1 opacity-40">Email</span>
                  <a href="mailto:matiascejas@enviosdosruedas.com" className="text-muted-foreground hover:text-foreground transition-colors font-light text-sm font-sans">matiascejas@enviosdosruedas.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Global Stats/Trust Banner */}
        <div className="mb-16 grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-border/40 bg-muted/10 rounded-md">
          {[
            { icon: <ShieldCheck className="text-primary" />, label: "SEGURIDAD", value: "CERTIFICADA" },
            { icon: <Zap className="text-secondary" />, label: "VELOCIDAD", value: "MÁXIMA" },
            { icon: <Globe className="text-blue-400" />, label: "COBERTURA", value: "DISTRITAL" },
            { icon: <ArrowUpRight className="text-green-400" />, label: "STATUS", value: "ONLINE" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center justify-center text-center gap-2 px-4 border-r border-border/40 last:border-r-0">
              <div className="opacity-60">{React.cloneElement(item.icon, { size: 20 })}</div>
              <span className="text-[8px] font-black tracking-[0.4em] text-muted-foreground uppercase">{item.label}</span>
              <span className="text-xxs font-black text-foreground uppercase tracking-widest">{item.value}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col gap-2">
            <p className="text-[9px] text-muted-foreground/80 uppercase tracking-[0.4em] font-black text-center md:text-left">
              © {year} Envios DosRuedas. Todos los derechos reservados.
            </p>
          </div>

          <div className="flex items-center gap-10">
            <Link href="/politica-de-privacidad" className="text-[9px] text-muted-foreground/80 hover:text-foreground uppercase tracking-widest font-black transition-colors">Privacidad</Link>
            <Link href="/terminos-y-condiciones" className="text-[9px] text-muted-foreground/80 hover:text-foreground uppercase tracking-widest font-black transition-colors">Términos</Link>
            <div className="w-10 h-10 rounded-full border border-border/40 flex items-center justify-center text-foreground" aria-hidden="true">
              <Globe size={14} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};