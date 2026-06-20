"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

export default function CanvasScrollSequence({ children }: { children: React.ReactNode }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, 239]);

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;
    const totalFrames = 240;
    
    const firstImg = new Image();
    firstImg.src = "/sequence/ezgif-frame-001.jpg";
    firstImg.onload = () => {
      if (canvasRef.current && loadedImages.length === 0) {
        const ctx = canvasRef.current.getContext("2d", { alpha: false });
        if (ctx) {
          ctx.fillStyle = "#050505";
          ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = "high";
          
          const scale = Math.max(canvasRef.current.width / firstImg.width, canvasRef.current.height / firstImg.height);
          const x = (canvasRef.current.width / 2) - (firstImg.width / 2) * scale;
          const y = (canvasRef.current.height / 2) - (firstImg.height / 2) * scale;
          ctx.drawImage(firstImg, x, y, firstImg.width * scale, firstImg.height * scale);
        }
      }
    };

    for (let i = 0; i < totalFrames; i++) {
      const img = new Image();
      const paddedIndex = (i + 1).toString().padStart(3, "0");
      img.src = `/sequence/ezgif-frame-${paddedIndex}.jpg`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalFrames) {
          setImages(loadedImages);
        }
      };
      loadedImages.push(img);
    }
  }, []);

  const draw = (index: number) => {
    if (!canvasRef.current || !images[index] || !images[index].complete) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;
    
    const img = images[index];
    const cw = canvas.width;
    const ch = canvas.height;
    
    ctx.fillStyle = "#050505";
    ctx.fillRect(0, 0, cw, ch);
    
    // Apply maximum smoothing quality
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    
    const scale = Math.max(cw / img.width, ch / img.height);
    const x = (cw / 2) - (img.width / 2) * scale;
    const y = (ch / 2) - (img.height / 2) * scale;
    
    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
  };

  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (images.length === 240) {
      draw(Math.round(latest));
    }
  });

  return (
    <div ref={containerRef} className="relative h-[400vh] w-full bg-[#050505]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#050505]">
        <canvas
          ref={canvasRef}
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          style={{ 
             filter: 'contrast(1.05) saturate(1.1) brightness(1.02)' 
          }}
        />
        {/* Deep cinematic vignette to cleanly blend borders and hide compression blocks in blacks */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_transparent_30%,_#050505_80%)] opacity-95" />
        {children}
      </div>
    </div>
  );
}
