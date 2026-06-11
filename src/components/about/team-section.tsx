import { User, Bike, Headphones, Settings } from "lucide-react"
import { cn } from "@/lib/utils"

export function TeamSection() {
  const teamRoles = [
    {
      icon: User,
      title: "Equipo Directivo",
      description: "Liderazgo comprometido con la excelencia en el servicio y la satisfacción del cliente.",
      count: "3",
    },
    {
      icon: Bike,
      title: "Repartidores",
      description: "Profesionales capacitados que conocen cada rincón de Mar del Plata para entregas eficientes.",
      count: "15+",
    },
    {
      icon: Headphones,
      title: "Atención al Cliente",
      description: "Equipo dedicado a resolver consultas y brindar soporte personalizado.",
      count: "5",
    },
    {
      icon: Settings,
      title: "Soporte Técnico",
      description: "Especialistas en logística y tecnología que optimizan nuestros procesos continuamente.",
      count: "4",
    },
  ]

  return (
    <section className="py-16 px-4 bg-transparent">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-black italic mb-6 uppercase text-white tracking-tighter leading-none text-center">Nuestro Equipo</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-sans">
            Un equipo de profesionales apasionados por brindar el mejor servicio de mensajería y delivery
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamRoles.map((role, index) => {
            const IconComponent = role.icon
            return (
              <div key={index} className={cn(
                "group relative h-full rounded-xl overflow-hidden bg-card border-l-4 transition-all duration-300 flex flex-col p-8 shadow-lg hover:-translate-y-1.5 text-center",
                index % 2 === 0
                  ? "border-l-primary hover:border-l-secondary hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
                  : "border-l-secondary hover:border-l-primary hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
              )}>
                <div className="relative mb-6">
                  <div className={cn("w-20 h-20 rounded-full flex items-center justify-center mx-auto transition-transform duration-500 group-hover:scale-110", index % 2 === 0 ? "bg-primary/10 border border-primary/20 text-primary" : "bg-secondary/10 border border-secondary/20 text-secondary")}>
                    <IconComponent className="w-10 h-10" />
                  </div>
                  <div className="absolute top-0 right-1/4 translate-x-1/2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-sm font-black text-black border-2 border-card shadow-md">
                    {role.count}
                  </div>
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-4 uppercase tracking-tight">{role.title}</h3>
                <p className="text-gray-400 leading-relaxed font-sans text-sm">{role.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
