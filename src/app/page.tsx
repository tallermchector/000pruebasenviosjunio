import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mensajería y Logística E-commerce en Mar del Plata | Envíos DosRuedas",
  description: "Especialistas en logística e-commerce y última milla en Mar del Plata. Envíos en el día, Flex y soluciones 3PL para potenciar tu negocio local.",
  alternates: { canonical: 'https://www.enviosdosruedas.com/' },
  openGraph: {
    title: "Mensajería y Logística E-commerce en Mar del Plata | Envíos DosRuedas",
    description: "Especialistas en logística e-commerce y última milla en Mar del Plata. Envíos en el día, Flex y soluciones 3PL para potenciar tu negocio local.",
    url: 'https://www.enviosdosruedas.com/',
    images: [{ url: '/og-image.jpg' }],
  },
};

import dynamic from "next/dynamic"
import { OptimizedHeader } from "@/components/homenew/optimized-header"
import HeroAnimado from "@/components/homenew/hero-animado"
import { ScrollProgress } from "@/components/ui/scroll-progress"

// Paso 2: Lazy Loading de Componentes (Code Splitting)
// Implementamos next/dynamic para componentes Below the Fold para reducir el Script Evaluation inicial.
const VisionSection = dynamic(() => import("@/components/homenew/vision-section").then(mod => mod.VisionSection), {
  ssr: true,
  loading: () => <div className="min-h-[400px] bg-background" />
})

const ServicesOverview = dynamic(() => import("@/components/homenew/services-overview").then(mod => mod.ServicesOverview), {
  ssr: true,
  loading: () => <div className="min-h-[400px] bg-background" />
})

const CtaSection = dynamic(() => import("@/components/homenew/cta-section").then(mod => mod.CtaSection), {
  ssr: true
})

const EmprendedoresHome = dynamic(() => import("@/components/homenew/emprendedores-home").then(mod => mod.EmprendedoresHome), {
  ssr: true
})

const SliderServicios = dynamic(() => import("@/components/homenew/slider-servicios"), {
  ssr: true
})

const CarruselRedes = dynamic(() => import("@/components/homenew/carrusel-redes").then(mod => mod.CarruselRedes), {
  ssr: true
})

const Footer = dynamic(() => import("@/components/homenew/footer").then(mod => mod.Footer), {
  ssr: true
})

export default function HomePage() {
  return (
    <div className="dark min-h-screen bg-background text-foreground selection:bg-primary/30 flex flex-col">
      <ScrollProgress />
      <OptimizedHeader />
      <main className="flex-grow">
        {/* Sección 1: Hero y Visión (Modo Deep Space y Conectividad) */}
        <div className="relative bg-background border-b border-border/10 overflow-hidden">
          {/* Above the fold (LCP Critical) - Renderizado estático inicial para performance extrema */}
          <HeroAnimado />

          {/* Below the fold (Lazy loaded to reduce TBT and Script Evaluation) */}
          <VisionSection />
        </div>

        {/* Sección 2: Servicios y CTA (Modo Linear Grid & Glowing Hub) */}
        <div className="relative bg-background/50 border-b border-border/10 overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
          
          {/* Linear Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

          <ServicesOverview />
          <CtaSection />
        </div>

        {/* Sección 3: Corporativo, Testimonios y Redes (Modo Cyber Logistics & Radial Dot Mask) */}
        <div className="relative bg-background/80 overflow-hidden">
          {/* Grid Dots */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)] pointer-events-none" />
          
          {/* Atmospheric Glow */}
          <div className="absolute -top-[10%] left-[10%] w-[60%] h-[40%] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
          <div className="absolute bottom-[10%] right-[10%] w-[50%] h-[40%] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

          <EmprendedoresHome />
          <SliderServicios />
          <CarruselRedes />
        </div>
      </main>
      <Footer />
    </div>
  )
}
