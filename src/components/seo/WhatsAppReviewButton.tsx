'use client'

import React from 'react'
import { MessageCircle } from 'lucide-react'

/**
 * Componente utilitario para solicitar reseñas de Google Business via WhatsApp.
 * Posicionado de forma discreta (opacidad 0.2) para uso interno/estratégico.
 */
export const WhatsAppReviewButton = () => {
  const phoneNumber = '542236602699'
  const message = 'Hola! Gracias por elegir Envíos DosRuedas. ¿Podrías dedicarnos un minuto para dejarnos una reseña de 5 estrellas en Google? Nos ayuda mucho: https://g.page/r/https://g.page/r/YOUR_ID/review/review'

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  // TODO: Reemplazar con el link real de Google Business Profile
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Solicitar reseña por WhatsApp"
      className="fixed bottom-24 right-6 z-40 p-3 bg-green-500 text-slate-900 rounded-full shadow-lg opacity-20 hover:opacity-100 transition-opacity duration-300 md:bottom-32"
      title="Enviar solicitud de reseña (Uso Interno)"
    >
      <MessageCircle size={24} />
    </a>
  )
}
