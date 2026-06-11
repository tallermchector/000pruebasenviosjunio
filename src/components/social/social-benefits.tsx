import { Gift, Bell, Users, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

export function SocialBenefits() {
  const benefits = [
    {
      icon: Gift,
      title: "Ofertas Exclusivas",
      description: "Accede a descuentos y promociones especiales solo para nuestros seguidores.",
    },
    {
      icon: Bell,
      title: "Actualizaciones",
      description: "Sé el primero en conocer nuevos servicios y cambios de horarios importantes.",
    },
    {
      icon: Users,
      title: "Comunidad Activa",
      description: "Únete a nuestra comunidad de clientes y comparte tus experiencias con nosotros.",
    },
    {
      icon: Zap,
      title: "Soporte Ágil",
      description: "Obtén respuestas rápidas a tus consultas a través de mensajes directos.",
    },
  ]

  return (
    <section className="py-20 px-4 bg-transparent">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-black italic mb-6 uppercase text-white tracking-tighter leading-none text-center">Beneficios de Formar Parte</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-sans">
            Descubrí por qué cientos de marplatenses ya nos siguen en nuestras redes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <div key={index} className={cn(
                "group relative h-full rounded-xl overflow-hidden bg-card border-l-4 transition-all duration-300 flex flex-col p-8 shadow-lg hover:-translate-y-1.5 text-center",
                index % 2 === 0
                  ? "border-l-primary hover:border-l-secondary hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
                  : "border-l-secondary hover:border-l-primary hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
              )}>
                <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-500 group-hover:scale-110", index % 2 === 0 ? "bg-primary/10 border border-primary/20 text-primary" : "bg-secondary/10 border border-secondary/20 text-secondary")}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="font-display text-xl font-bold mb-4 uppercase text-white tracking-tight">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed font-sans text-sm">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
