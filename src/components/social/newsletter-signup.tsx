"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, CheckCircle, Loader2 } from "lucide-react"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
    setIsSubscribed(true)
    setEmail("")
    setTimeout(() => setIsSubscribed(false), 5000)
  }

  return (
    <section className="py-24 px-4 bg-transparent border-t border-white/10 overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl"></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="bg-card text-white border-l-4 border-l-primary shadow-2xl overflow-hidden relative rounded-xl transition-all duration-300 hover:border-l-secondary p-10 md:p-16 text-center">
          {isSubscribed ? (
            <div className="text-white animate-in zoom-in duration-500">
              <CheckCircle className="w-20 h-20 mx-auto mb-6 text-secondary" />
              <h3 className="font-display text-3xl md:text-4xl font-black italic mb-4 uppercase text-white tracking-tighter leading-none">¡Bienvenido a la Comunidad!</h3>
              <p className="text-lg font-sans text-gray-300">Te suscribiste correctamente. Pronto recibirás nuestras mejores novedades.</p>
            </div>
          ) : (
            <>
              <div className="w-20 h-20 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg rotate-3">
                <Mail className="w-10 h-10 text-black" />
              </div>

              <h2 className="font-display text-4xl md:text-5xl font-black italic mb-6 uppercase text-white tracking-tighter leading-none text-center">Newsletter Exclusivo</h2>
              <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto font-sans">
                Recibí promociones relámpago, noticias del sector y actualizaciones directamente en tu bandeja de entrada.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                <Input
                  type="email"
                  placeholder="Escribí tu correo electrónico..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 h-16 bg-[#0a0d16] border-white/30 text-white placeholder:text-gray-500 rounded-xl px-6 focus:bg-[#0a0d16]/80 focus-visible:border-secondary transition-all font-sans text-body-md"
                />
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="h-16 px-10 bg-secondary hover:bg-yellow-400 text-black uppercase font-display font-black rounded-xl shadow-xl transition-all active:scale-95"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="animate-spin mr-3 h-6 w-6" />
                      Procesando...
                    </>
                  ) : (
                    "Unirme Ahora"
                  )}
                </Button>
              </form>

              <p className="text-xs text-gray-500 mt-8 font-sans uppercase tracking-wider">
                Garantizamos la privacidad de tus datos. Podés darte de baja con un solo clic en cualquier momento.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
