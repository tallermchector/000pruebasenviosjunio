import { Card, CardContent } from "@/components/ui/card"
import { User, Bike, Headphones, Settings } from "lucide-react"

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
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">Nuestro Equipo</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-sans">
            Un equipo de profesionales apasionados por brindar el mejor servicio de mensajería y delivery
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamRoles.map((role, index) => {
            const IconComponent = role.icon
            return (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <IconComponent className="w-10 h-10 text-primary" />
                    </div>
                    <div className="absolute top-0 right-1/4 translate-x-1/2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-sm font-bold text-secondary-foreground border-2 border-background">
                      {role.count}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 font-display">{role.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-sans">{role.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
