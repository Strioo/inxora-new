"use client";

import { useEffect, useState } from "react";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "navbar-scrolled" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-[72px]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 font-bold text-lg font-sans">
            <span className="w-8 h-8 bg-base-content rounded-lg flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-4 h-4 text-white"
                stroke="white"
                strokeWidth="2"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </span>
            <span className="text-base-content font-sans font-semibold tracking-tight">
              Inxora
            </span>
          </a>

          {/* Desktop nav — centered */}
          <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-base-content/70 hover:text-base-content transition-colors rounded-lg hover:bg-base-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="btn btn-sm bg-base-content text-white border-none hover:bg-base-content/85 rounded-full px-5"
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
          <div className="md:hidden pb-4 border-t border-base-300/50 mt-1">
            <nav className="flex flex-col gap-1 pt-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-base-content/80 hover:text-base-content hover:bg-base-200 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="btn btn-sm bg-base-content text-white border-none hover:bg-base-content/85 rounded-full mt-2 mx-4"
              >
                Let&apos;s Talk
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
