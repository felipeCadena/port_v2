import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Navigation } from "@/components/navigation";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
