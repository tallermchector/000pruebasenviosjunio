'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface HeaderContainerProps {
  children: React.ReactNode;
}

export function HeaderContainer({ children }: HeaderContainerProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={cn(
        "fixed z-50 transition-all duration-500 ease-out left-0 right-0 px-4 md:px-8",
        scrolled 
          ? "top-4 py-1" 
          : "top-0 py-6"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div 
        className={cn(
          "w-full max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 ease-out px-4 sm:px-6 rounded-2xl border",
          scrolled 
            ? "bg-background/85 border-border/60 shadow-[0_8px_30px_rgba(0,0,0,0.5)] backdrop-blur-2xl py-2.5" 
            : "bg-transparent border-transparent py-4"
        )}
      >
        {children}
      </div>
    </motion.header>
  );
}

