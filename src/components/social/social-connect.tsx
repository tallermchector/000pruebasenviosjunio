import { Button } from "@/components/ui/button"
import { Share2 as Facebook, Camera as Instagram } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export function SocialConnect() {
  const socialNetworks = [
    {
      name: "Facebook",
      icon: Facebook,
      handle: "@enviosdosruedas",
      description: "Seguinos en Facebook para ofertas exclusivas y actualizaciones diarias de nuestros servicios en Mar del Plata.",
      color: "bg-[#1877F2]",
      url: "https://facebook.com/enviosdosruedas",
      followers: "2.5K+",
    },
    {
      name: "Instagram",
      icon: Instagram,
      handle: "@enviosdosruedas",
      description: "Mirá nuestro día a día en Instagram, fotos de entregas y promociones especiales diseñadas para vos.",
      color: "bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
      url: "https://instagram.com/enviosdosruedas",
      followers: "3.2K+",
    },
    {
      name: "WhatsApp",
      icon: null,
      handle: "+54 9 223 660-2699",
      description: "Atención directa por WhatsApp. Canal personalizado para cotizaciones y pedidos inmediatos.",
      color: "bg-[#25D366]",
      url: "https://wa.me/5492236602699?text=Hola%20Envios%20DosRuedas,%20vengo%20desde%20la%20web.",
      followers: "Atención 24/7",
    },
  ]

  return (
    <section className="py-16 px-4 bg-transparent font-sans">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-black italic mb-6 uppercase text-white tracking-tighter leading-none text-center">¡Seguí el Movimiento!</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto font-sans leading-relaxed">
            Unite a nuestra comunidad para acceder a beneficios exclusivos y estar al tanto de todo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {socialNetworks.map((network, index) => {
            const IconComponent = network.icon
            return (
              <div key={network.name} className={cn(
                "group relative h-full rounded-xl overflow-hidden bg-card border-l-4 transition-all duration-300 flex flex-col p-10 shadow-lg hover:-translate-y-2 text-center",
                index % 2 === 0
                  ? "border-l-primary hover:border-l-secondary hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
                  : "border-l-secondary hover:border-l-primary hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
              )}>
                  <div className={cn("w-20 h-20 rounded-2xl flex items-center justify-center mb-8 transform group-hover:scale-110 transition-transform duration-500 shadow-lg relative mx-auto", network.color)}>
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                    {IconComponent ? (
                      <IconComponent className="w-10 h-10 text-white relative z-10" />
                    ) : (
                      <Image src="/icon/icon-whatsapp.svg" alt="WhatsApp" width={40} height={40} className="w-10 h-10 relative z-10" />
                    )}
                  </div>

                  <h3 className="font-display text-2xl font-bold text-white mb-2 uppercase tracking-tight">{network.name}</h3>
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xxs font-black tracking-[0.2em] rounded-full mb-6 font-sans uppercase max-w-max mx-auto">
                    {network.followers}
                  </div>

                  <p className="text-gray-400 mb-8 leading-relaxed font-sans text-sm flex-grow">{network.description}</p>

                  <Button asChild size="lg" className={cn("w-full text-slate-900 font-display font-black h-14 rounded-xl shadow-md hover:shadow-xl transition-all relative overflow-hidden group/btn text-label-md uppercase", network.color)}>
                    <a href={network.url} target="_blank" rel="noopener noreferrer">
                      <span className="relative z-10">
                        {network.name === "WhatsApp" ? "Hablá con nosotros" : `Seguinos en ${network.name}`}
                      </span>
                      <div className="absolute inset-0 bg-white/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                    </a>
                  </Button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
