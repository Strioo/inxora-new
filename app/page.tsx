import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="dot-pattern min-h-screen">
      <Navbar />
      <Hero />
      <Portfolio />
      <Process />
      <Services />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
