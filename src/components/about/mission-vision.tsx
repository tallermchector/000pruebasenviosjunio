import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Lightbulb } from "lucide-react"

export function MissionVision() {
  return (
    <section className="py-16 px-4 bg-accent/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Mission */}
          <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 border-border/50 bg-background/80 backdrop-blur-sm">
            <CardContent className="p-10 text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <Target className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-6 font-display">Nuestra Misión</h3>
              <p className="text-muted-foreground leading-relaxed font-sans text-lg">
                Conectar personas y negocios en Mar del Plata a través de un servicio de mensajería y delivery
                confiable, rápido y accesible, contribuyendo al crecimiento de nuestra comunidad local.
              </p>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 border-border/50 bg-background/80 backdrop-blur-sm">
            <CardContent className="p-10 text-center">
              <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <Eye className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-6 font-display">Nuestra Visión</h3>
              <p className="text-muted-foreground leading-relaxed font-sans text-lg">
                Ser la empresa líder en servicios de mensajería y delivery en la región, reconocida por nuestra
                excelencia, innovación y compromiso con la satisfacción del cliente.
              </p>
            </CardContent>
          </Card>

          {/* Innovation */}
          <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 border-border/50 bg-background/80 backdrop-blur-sm">
            <CardContent className="p-10 text-center">
              <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <Lightbulb className="w-10 h-10 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-6 font-display">Innovación</h3>
              <p className="text-muted-foreground leading-relaxed font-sans text-lg">
                Incorporamos constantemente nuevas tecnologías y metodologías para mejorar nuestros servicios y ofrecer
                soluciones cada vez más eficientes a nuestros clientes.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
