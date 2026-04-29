"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { fadeUp, fadeIn, staggerContainer, VIEWPORT } from "@/lib/animation";
import { Zap } from "lucide-react";

const FULL_TEXT = "We create clean and\nmodern digital Website.";

function TypewriterH1() {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const delay = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setDisplayed(FULL_TEXT.slice(0, i));
        if (i >= FULL_TEXT.length) {
          clearInterval(interval);
          setTimeout(() => setDone(true), 800);
        }
      }, 38);
      return () => clearInterval(interval);
    }, 600);
    return () => clearTimeout(delay);
  }, []);

  const lines = displayed.split("\n");

  return (
    <h1
      aria-label={FULL_TEXT}
      className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal leading-[1.1] tracking-tight text-base-content mb-6"
    >
      {lines.map((line, li) => (
        <span key={li}>
          {line}
          {li < lines.length - 1 && <br />}
        </span>
      ))}
      <AnimatePresence>
        {!done && (
          <motion.span
            key="cursor"
            className="inline-block ml-[2px] w-[3px] h-[0.85em] bg-base-content align-middle"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 0.85, ease: "linear" }}
            exit={{ opacity: 0, transition: { duration: 0.4 } }}
          />
        )}
      </AnimatePresence>
    </h1>
  );
}

/* ── 4-pointed star SVG ── */
function StarDecor({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 0 L13.5 10.5 L24 12 L13.5 13.5 L12 24 L10.5 13.5 L0 12 L10.5 10.5 Z" />
    </svg>
  );
}

/* ── Small plus sign ── */
function PlusDecor({ className = "" }: { className?: string }) {
  return (
    <span className={`text-base-content/30 text-2xl font-light select-none ${className}`}>
      +
    </span>
  );
}

/* ── Dark circle icon button ── */
function CircleIcon({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`absolute flex items-center justify-center rounded-full p-1 bg-[#5b53532c] ${className}`}>
      <div className="flex items-center justify-center rounded-full p-1 bg-[#5b535361]">
        <div className="w-12 h-12 rounded-full bg-gradient-to-bl from-[#959595] to-[#2F2F2F] flex items-center justify-center shadow-inner">
          {children}  
        </div>
      </div>      
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center pt-28 pb-16 bg-transparent">
      {/* ── Floating elements container ── */}
      <motion.div
        className="absolute inset-0 pointer-events-none w-full overflow-hidden"
        variants={fadeIn}
        initial="hidden"
        animate="show"
      >
        {/* Top Left Circle - Rocket */}
        <CircleIcon className="top-12 left-12 lg:left-[calc(100px+4rem)] scale-90 lg:scale-100">
          <img src="/icons/rocket.svg" alt="Rocket icon" className="w-5 h-5 text-white" />
        </CircleIcon>

        {/* Bottom Right Circle - Asterisk */}
        <CircleIcon className="bottom-12 right-12 lg:right-[calc(100px+4rem)] scale-90 lg:scale-100">
          <img src="/icons/asterik.svg" alt="Star icon" className="w-6 h-6 text-white" />
        </CircleIcon>

        {/* Stars */}
        <StarDecor size={64} className="absolute bottom-20 left-[calc(100px+8rem)] text-base-content/80 hidden lg:block" />
        <StarDecor size={48} className="absolute top-24 right-[calc(100px+6rem)] text-base-content/80 hidden lg:block" />

        {/* Tiny stars/plus */}
        <StarDecor size={20} className="absolute bottom-12 left-[calc(100px+14rem)] text-base-content/60 hidden lg:block" />
        <StarDecor size={20} className="absolute top-40 right-[calc(100px+12rem)] text-base-content/60 hidden lg:block" />
      </motion.div>

      {/* ── Main content ── */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto mb-20"
        variants={staggerContainer(0.14, 0.05)}
        initial="hidden"
        animate="show"
      >
        {/* Badge */}
        <motion.div variants={fadeUp} className="flex items-center gap-2 mb-10 p-1.5 rounded-lg border border-gray-200 bg-transparent">
          <span className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-[#838383] to-[#1D1D1D] text-white text-sm font-medium">
            <img src="/icons/lightning.svg" alt="Lightning" className="w-4 h-4" />
            Trusted
          </span>
          <span className="pr-4 text-sm text-gray-500 font-medium">
            by growing brands &amp; startups
          </span>
        </motion.div>

        {/* H1 — Typewriter */}
        <motion.div variants={fadeUp}>
          <TypewriterH1 />
        </motion.div>

        {/* Subheading */}
        <motion.p variants={fadeUp} className="text-gray-500 text-base sm:text-lg max-w-[550px] leading-relaxed mb-10 font-sans">
          Inxora helps businesses create modern, high-performing websites that
          not only look great — but actually convert and grow your brand.
        </motion.p>
      </motion.div>

      {/* CTA Button — sits on the section bottom border, half-in half-out */}
      <motion.div
        className="relative z-30"
        style={{ marginBottom: "-100px" }}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.55, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="bg-[#F5F5F5] p-2 rounded-2xl border border-[rgba(0,0,0,0.08)]">
          <a
            href="#contact"
            className="block px-10 py-3.5 bg-gradient-to-b from-[#3a3a3a] to-[#1c1c1c] text-white text-[15px] font-medium rounded-xl shadow-[0_8px_20px_0_rgba(0,0,0,0.1),_inset_0_1px_1px_rgba(255,255,255,0.15)] border border-[#4a4a4a] hover:brightness-110 transition-all font-sans"
          >
            Let&apos;s Talk
          </a>
        </div>
      </motion.div>
    </section>
  );
}