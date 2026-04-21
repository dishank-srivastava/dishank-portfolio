import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Experience from "@/components/Experience";
import Domains from "@/components/Domains";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Dividers between sections */}
      <div className="section-divider max-w-5xl mx-auto" />
      <About />
      <div className="section-divider max-w-5xl mx-auto" />
      <Achievements />
      <div className="section-divider max-w-5xl mx-auto" />
      <Experience />
      <div className="section-divider max-w-5xl mx-auto" />
      <Domains />
      <div className="section-divider max-w-5xl mx-auto" />
      <Skills />
      <div className="section-divider max-w-5xl mx-auto" />
      <Education />
      <div className="section-divider max-w-5xl mx-auto" />
      <Contact />
      <Footer />
    </main>
  );
}
