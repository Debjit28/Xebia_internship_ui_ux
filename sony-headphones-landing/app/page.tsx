import Navbar from "./components/Navbar";
import CanvasScrollSequence from "./components/CanvasScrollSequence";
import StorySections from "./components/StorySections";

export default function Home() {
  return (
    <main className="relative bg-[#050505] min-h-screen text-white font-sans selection:bg-accent/30 selection:text-white">
      <Navbar />
      <CanvasScrollSequence>
        <StorySections />
      </CanvasScrollSequence>
    </main>
  );
}
