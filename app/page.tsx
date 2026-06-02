import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { AICommandCenter } from "@/components/AICommandCenter";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { CaseStudies } from "@/components/CaseStudies";
import { Blog } from "@/components/Blog";
import { InteractiveCV } from "@/components/InteractiveCV";
import { CreativeLab } from "@/components/CreativeLab";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Nav />
      <Hero />
      <About />
      <AICommandCenter />
      <Experience />
      <Projects />
      <CaseStudies />
      <Blog />
      <InteractiveCV />
      <CreativeLab />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
