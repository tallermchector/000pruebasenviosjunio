"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

interface FaqItemProps {
  question: string
  answer: string
  defaultOpen?: boolean
}

export function FaqItem({ question, answer, defaultOpen = false }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className={cn(
      "group overflow-hidden rounded-xl bg-card border-l-4 transition-all duration-300 shadow-md",
      isOpen
        ? "border-l-primary"
        : "border-l-secondary hover:shadow-[0_10px_20px_rgba(0,0,0,0.4)]"
    )}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-6 flex items-center justify-between transition-colors duration-200"
        aria-expanded={isOpen}
      >
        <h3 className={cn(
          "text-lg font-bold font-display pr-4",
          isOpen ? "text-primary" : "text-white group-hover:text-primary transition-colors"
        )}>{question}</h3>
        <div className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
          isOpen ? "bg-primary text-white rotate-180" : "bg-white/5 border border-white/10 text-gray-400 group-hover:text-white"
        )}>
          <ChevronDown className="w-5 h-5 flex-shrink-0" />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6">
              <div className="pt-4 border-t border-white/5">
                <p className="text-gray-400 leading-relaxed font-sans text-base">{answer}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
