import { Target, Eye, Lightbulb } from "lucide-react"
import { cn } from "@/lib/utils"

export function MissionVision() {
  const items = [
    {
      icon: Target,
      title: "Nuestra Misión",
      desc: "Conectar personas y negocios en Mar del Plata a través de un servicio de mensajería y delivery confiable, rápido y accesible, contribuyendo al crecimiento de nuestra comunidad local.",
      iconColor: "text-primary",
      iconBg: "bg-primary/10",
    },
    {
      icon: Eye,
      title: "Nuestra Visión",
      desc: "Ser la empresa líder en servicios de mensajería y delivery en la región, reconocida por nuestra excelencia, innovación y compromiso con la satisfacción del cliente.",
      iconColor: "text-secondary",
      iconBg: "bg-secondary/10",
    },
    {
      icon: Lightbulb,
      title: "Innovación",
      desc: "Incorporamos constantemente nuevas tecnologías y metodologías para mejorar nuestros servicios y ofrecer soluciones cada vez más eficientes a nuestros clientes.",
      iconColor: "text-green-500",
      iconBg: "bg-green-500/10",
    }
  ]

  return (
    <section className="py-16 px-4 bg-transparent">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-3 gap-8">
          {items.map((item, index) => {
            const IconComponent = item.icon
            return (
              <div
                key={index}
                className={cn(
                  "group relative h-full rounded-xl overflow-hidden bg-card border-l-4 transition-all duration-300 flex flex-col p-10 shadow-lg hover:-translate-y-1.5 text-center",
                  index % 2 === 0
                    ? "border-l-primary hover:border-l-secondary hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
                    : "border-l-secondary hover:border-l-primary hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
                )}
              >
                <div className={cn("w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 transition-transform duration-500 group-hover:scale-110", item.iconBg, "border border-white/5")}>
                  <IconComponent className={cn("w-10 h-10", item.iconColor)} />
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-6 uppercase tracking-tight">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed font-sans text-sm">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
