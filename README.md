# Sony WH-1000XM6 - Scrollytelling Landing Page 🎧

An ultra-premium, cinematic landing page concept for the Sony WH-1000XM6 flagship noise-cancelling headphones. This project utilizes advanced scroll-based storytelling (scrollytelling) to create an immersive, Apple-quality product reveal. 

Built with performance and aesthetic polish in mind, the landing page natively bridges the physical and digital boundaries by matching exact charcoal void styling with hardware-accelerated image sequence rendering.

## ✨ Key Features
- **Cinematic Scrollytelling:** A continuous, butter-smooth 240-frame product sequence (disassembly & reassembly) that is strictly mapped to your scroll progress.
- **Hardware-Accelerated Canvas Rendering:** Extracts high-quality frames drawn via native HTML5 Canvas Context for maximum performance, eliminating heavy DOM node rendering. 
- **Premium Post-Processing:** Features on-the-fly Canvas `imageSmoothing` upscaling, targeted contrast filtering, and an elliptical radial vignette to create a flawless, edge-free void.
- **Glassmorphism UI:** An Apple-style top navigation bar that is translucent, fully responsive, and gracefully transitions opacity based on scroll events.
- **Framer Motion Integration:** Typography and story beats perfectly ease-in and out along the scrolling progress without blocking the main thread.

## 🛠 Tech Stack
- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Sequence Engine:** Custom HTML5 Canvas implementation using `requestAnimationFrame`.

## 🚀 Getting Started

To run the project locally:

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone https://github.com/your-username/sony-headphones-landing.git
   cd sony-headphones-landing

   Install dependencies:

bash
npm install
Start the development server:

bash
npm run dev
Experience the page: Open http://localhost:3000 in your browser and scroll down to interact with the unpacking sequence!

📸 Media Assets
The project heavily utilizes sequence rendering algorithms to animate a pre-rendered 3D breakdown of the product. By preloading 240 custom geometric frames into browser memory instantly, we guarantee an uninterrupted fluid playback across all devices.

📝 License
This project is an independent conceptual design study and is not affiliated with, maintained, authorized, endorsed, or sponsored by Sony Corporation.


