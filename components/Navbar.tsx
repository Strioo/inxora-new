"use client";

import { useEffect, useState } from "react";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const sections = navLinks
        .map((link) => link.href.replace("#", ""))
        .filter(Boolean);

      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is near or above the viewport middle
          if (rect.top <= window.innerHeight / 3) {
            current = section;
          }
        }
      }

      if (window.scrollY < 100) {
        current = "home";
      }
      
      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger once on mount
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMenuOpen(false);
    // We already have 'scroll-behavior: smooth' in CSS but for explicit scroll:
    const targetId = href.replace("#", "");
    if (!targetId || targetId === "home") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("home");
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      e.preventDefault();
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(targetId);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
        scrolled ? "navbar-scrolled" : "bg-transparent"
      }`}
    >
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-[72px]">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => handleNavClick(e, "#")}
            className="flex items-center gap-3 font-medium text-xl tracking-wide"
          >
            <img 
              src="/icons/inxora-logo.png" 
              alt="Inxora Logo" 
              className="h-8 w-auto object-contain"
            />
            Inxora
          </a>

          {/* Desktop nav — centered */}
          <nav className="hidden md:flex items-center gap-4 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => {
              const targetId = link.href.replace("#", "") || "home";
              const isActive = activeSection === targetId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-2 text-sm transition-all ${
                    isActive
                      ? "text-base-content font-bold"
                      : "text-base-content/70 font-medium hover:text-base-content hover:font-bold"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="btn btn-sm bg-[#2a2a2a] text-white border border-[#454545] hover:bg-[#333333] rounded-lg px-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] font-inter font-normal"
            >
              Let&apos;s Talk
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-base-200 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-base-300/50 mt-1 bg-base-100/95 backdrop-blur-xl absolute w-full top-full left-0 border-b shadow-md">
            <nav className="flex flex-col gap-1 pt-3">
              {navLinks.map((link) => {
                const targetId = link.href.replace("#", "") || "home";
                const isActive = activeSection === targetId;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-4 py-3 mx-2 text-sm transition-all ${
                      isActive
                        ? "text-base-content font-bold"
                        : "text-base-content/80 font-medium hover:text-base-content hover:font-bold"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="btn btn-sm bg-base-content text-white border-none hover:bg-base-content/85 rounded-full mt-2 mx-4"
              >
                Let&apos;s Talk
              </a>
            </nav>
          </div>
        )}
      </div>
      <div className="section-divider"></div>
    </header>
  );
}
