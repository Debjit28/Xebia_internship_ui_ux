"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function StorySections() {
  const { scrollYProgress } = useScroll();
  
  const opacityHero = useTransform(scrollYProgress, [0, 0.05, 0.10, 0.15], [1, 1, 0, 0]);
  const yHero = useTransform(scrollYProgress, [0, 0.15], [0, -50]);

  const opacityEng = useTransform(scrollYProgress, [0.10, 0.15, 0.35, 0.40], [0, 1, 1, 0]);
  const xEng = useTransform(scrollYProgress, [0.10, 0.15], [-50, 0]);

  const opacityNc = useTransform(scrollYProgress, [0.35, 0.40, 0.60, 0.65], [0, 1, 1, 0]);
  const xNc = useTransform(scrollYProgress, [0.35, 0.40], [50, 0]);

  const opacitySound = useTransform(scrollYProgress, [0.60, 0.65, 0.80, 0.85], [0, 1, 1, 0]);
  const ySound = useTransform(scrollYProgress, [0.60, 0.65], [30, 0]);

  const opacityCta = useTransform(scrollYProgress, [0.80, 0.85, 0.95, 1.0], [0, 1, 1, 1]);
  const yCta = useTransform(scrollYProgress, [0.80, 0.85], [50, 0]);

  return (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center">

      <motion.div style={{ opacity: opacityHero, y: yHero }} className="absolute inset-0 flex flex-col items-center justify-start pt-[20vh] text-center px-4" id="overview">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-4 drop-shadow-lg">
          Sony WH‑1000XM6
        </h1>
        <p className="text-2xl md:text-3xl text-white/90 font-medium mb-2 drop-shadow-sm">Silence, perfected.</p>
        <p className="text-white/60 max-w-lg mt-4 text-sm md:text-base font-medium">
          Flagship wireless noise cancelling, re‑engineered for a world that never stops.
        </p>
      </motion.div>

      <motion.div style={{ opacity: opacityEng, x: xEng }} className="absolute left-[5%] top-[15%] md:left-[10%] md:top-1/2 md:-translate-y-1/2 max-w-sm px-4" id="technology">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-gradient">Precision-engineered for silence.</h2>
        <div className="space-y-4 text-white/60 text-sm md:text-base font-medium">
          <p>Custom drivers, sealed acoustic chambers, and optimized airflow deliver studio-grade clarity.</p>
          <p>Every component is tuned for balance, power, and comfort—hour after hour.</p>
        </div>
      </motion.div>

      <motion.div style={{ opacity: opacityNc, x: xNc }} className="absolute right-[5%] bottom-[15%] md:right-[10%] md:top-1/2 md:-translate-y-1/2 max-w-sm px-4 md:text-right" id="noise-cancelling">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-gradient">Adaptive noise cancelling, redefined.</h2>
        <div className="space-y-4 text-white/60 text-sm md:text-base font-medium md:flex md:flex-col md:items-end">
          <p>Multi-microphone array listens in every direction.</p>
          <p>Real-time noise analysis adjusts to your environment.</p>
          <p>Your music stays pure—planes, trains, and crowds fade away.</p>
        </div>
      </motion.div>

      <motion.div style={{ opacity: opacitySound, y: ySound }} className="absolute left-[5%] md:left-[10%] top-[15%] md:top-1/2 md:-translate-y-1/2 max-w-sm px-4">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-gradient">Immersive, lifelike sound.</h2>
        <div className="space-y-4 text-white/60 text-sm md:text-base font-medium">
          <p>High-performance drivers unlock detail, depth, and texture in every track.</p>
          <p>AI-enhanced upscaling restores clarity to compressed audio, so every note feels alive.</p>
        </div>
      </motion.div>

      <motion.div style={{ opacity: opacityCta, y: yCta }} className="absolute inset-0 flex flex-col items-center justify-end pb-[15vh] text-center px-4 pointer-events-auto" id="specs">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white/90">Hear everything. Feel nothing else.</h2>
        <p className="text-xl md:text-2xl text-white/70 mb-10 font-medium tracking-tight">WH‑1000XM6. Designed for focus, crafted for comfort.</p>
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <button className="px-8 py-3.5 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)] cursor-pointer">
            Experience WH‑1000XM6
          </button>
          <button className="text-white/60 hover:text-white transition-colors underline-offset-4 hover:underline text-sm font-medium cursor-pointer">
            See full specs
          </button>
        </div>
        <p className="text-white/40 text-xs mt-8 font-medium">Engineered for airports, offices, and everything in between.</p>
      </motion.div>

    </div>
  );
}
