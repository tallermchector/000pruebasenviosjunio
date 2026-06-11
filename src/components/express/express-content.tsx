import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"
import { WhatsAppButton } from "./whatsapp-button"
import { cn } from "@/lib/utils";

export function ExpressContent() {
  const features = [
    {
      title: "Alta criticidad horaria",
      description: "Servicio diseñado para cuando el tiempo es el factor más importante. Tú eliges cuándo entregamos.",
    },
    {
      title: "Rango horario a elección",
      description: "El cliente elige el rango horario de entrega que mejor se adapte a su necesidad.",
    },
    {
      title: "Anticipación mínima",
      description: "Solo requerimos un mínimo de 2 horas de anticipación para coordinar tu envío prioritario.",
    },
  ]

  return (
    <section className="py-32 px-4 bg-background relative overflow-hidden border-t border-slate-900">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xxs font-black tracking-[0.2em] mb-8 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" /> SOLUCIONES PREMIUM
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-black italic uppercase leading-[1] mb-10 uppercase text-foreground tracking-tighter">
              ENTREGAS RÁPIDAS Y <br />
              <span className="text-primary drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]">EFICIENTES</span>
            </h2>
            <p className="text-gray-400 text-body-lg mb-12 leading-relaxed font-sans max-w-xl">
              Nuestro servicio Express ofrece cobertura total en Mar del Plata, llegando a barrios clave como Güemes, Chauvín, Los Troncos y la zona del Puerto con rapidez absoluta. Es la solución premium para alta criticidad horaria donde vos tenés el control total.
            </p>

            {/* Features */}
            <div className="space-y-6 mb-16">
              {features.map((feature, index) => (
                <div
                  key={index} 
                  className="flex items-start"
                >
                  <div className="w-6 h-6 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-headline-lg-mobile font-bold text-foreground mb-2 font-display uppercase tracking-tight">{feature.title}</h3>
                    <p className="text-gray-400 text-body-md leading-relaxed font-sans">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mt-12">
              <Button
                asChild
                size="lg"
                className="bg-secondary hover:bg-yellow-500 text-black font-display font-black px-10 py-5 rounded-xl transition-all uppercase tracking-tight h-auto text-label-md shadow-[0_10px_20px_rgba(234,179,8,0.2)] border border-secondary/20 active:scale-95"
              >
                <Link href="/cotizar/express">Cotizá tu Envío</Link>
              </Button>
              <WhatsAppButton />
            </div>
          </div>

          {/* Right Content - Large Branding */}
          <div className="flex justify-center lg:justify-end mt-12 lg:mt-0">
            <div className="text-center lg:text-right select-none opacity-10">
              <div className="space-y-4">
                <div className="text-7xl md:text-8xl lg:text-9xl font-black italic text-foreground font-display tracking-tighter leading-none">
                  ENVIOS
                </div>
                <div className="text-7xl md:text-8xl lg:text-9xl font-black italic text-primary font-display tracking-tighter leading-none">
                  DOS RUEDAS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
