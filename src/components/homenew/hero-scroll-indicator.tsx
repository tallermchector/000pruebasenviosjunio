'use client';

import { motion } from 'framer-motion';

export function HeroScrollIndicator() {
  return (
    <motion.div
      animate={{ y: [0, 12, 0] }}
      transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
      className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-20 hover:opacity-50 transition-opacity cursor-pointer"
      onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
    >
      <span className="text-[8px] uppercase tracking-[0.5em] font-black text-white">Explore</span>
      <div className="w-[1px] h-14 bg-gradient-to-b from-white via-white to-transparent" />
    </motion.div>
  );
}
