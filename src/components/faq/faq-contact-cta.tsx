import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle, Mail } from "lucide-react"

export function FaqContactCta() {
  return (
    <section className="py-16 px-4 bg-transparent">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-card text-white border-l-4 border-l-primary shadow-2xl overflow-hidden relative rounded-xl transition-all duration-300 hover:border-l-secondary p-10 md:p-14 text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <h2 className="font-display text-3xl md:text-4xl font-black italic mb-6 uppercase text-white tracking-tighter leading-none">¿No encontraste lo que buscabas?</h2>
          <p className="text-lg mb-10 text-gray-400 font-sans max-w-2xl mx-auto">
            Nuestro equipo está listo para ayudarte con cualquier consulta específica sobre nuestros servicios.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#25D366]/90 text-slate-900 font-display font-black uppercase tracking-tight text-label-md h-14 px-8 rounded-xl shadow-lg transition-transform hover:scale-105 active:scale-95">
              <a
                href="https://wa.me/5492236602699?text=Hola, tengo una consulta que no encontré en las FAQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-6 h-6 mr-2" />
                Hablá por WhatsApp
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/10 text-white bg-white/5 hover:bg-white/10 font-display font-bold uppercase tracking-tight text-label-md h-14 px-8 rounded-xl transition-all duration-300"
            >
              <Link href="/contacto">
                <Mail className="w-6 h-6 mr-2" />
                Contacto Directo
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
