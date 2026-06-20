"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const background = useTransform(
    scrollY,
    [0, 100],
    ["rgba(5, 5, 5, 0)", "rgba(5, 5, 5, 0.75)"]
  );
  
  // Custom fallback since backdrop filter motion transform might be tricky on initial render
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    [0, 12]
  );

  return (
    <motion.nav
      style={{ 
        background: mounted ? background : "transparent", 
        backdropFilter: mounted ? `blur(${backdropBlur.get()}px)` : "none" 
      }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 transition-all duration-300"
    >
      <div className="font-semibold text-xl tracking-tight text-white/90">
        SONY <span className="text-white/60 font-medium ml-1">WH‑1000XM6</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
        <Link href="#overview" className="hover:text-white transition-colors">Overview</Link>
        <Link href="#technology" className="hover:text-white transition-colors">Technology</Link>
        <Link href="#noise-cancelling" className="hover:text-white transition-colors">Noise Cancelling</Link>
        <Link href="#specs" className="hover:text-white transition-colors">Specs</Link>
      </div>

      <div>
        <Link 
          href="#buy" 
          className="px-6 py-2.5 text-sm font-semibold text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 shadow-[0_0_15px_rgba(0,214,255,0.1)] transition-all pointer-events-auto"
        >
          Buy
        </Link>
      </div>
    </motion.nav>
  );
}
