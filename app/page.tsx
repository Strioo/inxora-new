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
        <main className="dot-pattern min-h-screen relative pt-[72px]">
          <Navbar />
          <div className="section-divider"></div>
          <Hero />
          <div className="section-divider"></div>
          <Portfolio />
          <div className="section-divider"></div>
          <Process />
          <div className="section-divider"></div>
          <Services />
          <div className="section-divider"></div>
          <Team />
          <div className="section-divider"></div>
          <Contact />
          <div className="section-divider"></div>
          <Footer />
          <div className="section-divider"></div>
        </main>
      );
    }
