"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, VIEWPORT } from "@/lib/animation";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

type PortfolioItem = { id: number; title: string; desc: string; mainImg: string };

const portfolios: PortfolioItem[] = [
  {
    id: 1,
    title: "Luxe — Premium E-Commerce Platform",
    desc: "Platform e-commerce modern dengan UX yang crafted dan performa tinggi untuk brand premium.",
    mainImg: "/images/portfolio-1.png",
  },
  {
    id: 2,
    title: "Nex Dashboard — Analytics SaaS",
    desc: "Sistem analitik berbasis cloud dengan antarmuka yang clean dan visualisasi data real-time.",
    mainImg: "/images/portfolio-2.png",
  },
  {
    id: 3,
    title: "Studio X — Creative Agency",
    desc: "Landing page interaktif untuk agensi kreatif yang menonjolkan portofolio visual mereka.",
    mainImg: "/images/portfolio-3.png",
  },
];

/* ── Per-slot styles ── */
const T = "transform 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.5s ease, box-shadow 0.5s ease";

/* animating=true → mid-flight 3D tilt; false → flat resting state for sides */
function slotStyle(slot: number, animating: boolean): React.CSSProperties {
  if (slot === 0) {
    return {
      position: "absolute", transition: T,
      transform: "translateX(0) scale(1.05)",
      opacity: 1, zIndex: 30,
      boxShadow: "0 24px 80px rgba(0,0,0,0.18), 0 8px 24px rgba(0,0,0,0.10)",
    };
  }
  if (slot === -1) {
    const tilt = animating
      ? "translateX(-85%) translateZ(-180px) rotateY(24deg) scale(0.46)"
      : "translateX(-85%) scale(0.46)";
    return { position: "absolute", transition: T, transform: tilt, opacity: 1, zIndex: 10 };
  }
  if (slot === 1) {
    const tilt = animating
      ? "translateX(85%) translateZ(-180px) rotateY(-24deg) scale(0.46)"
      : "translateX(85%) scale(0.46)";
    return { position: "absolute", transition: T, transform: tilt, opacity: 1, zIndex: 10 };
  }
  const tx = slot < 0 ? "-163%" : "163%";
  return {
    position: "absolute", transition: T,
    transform: `translateX(${tx}) scale(0.35)`,
    opacity: 0, zIndex: 0,
  };
}

/* ── Center card: macOS browser mockup with inline caption ── */
function MacCard({ item }: { item: PortfolioItem }) {
  return (
    <div className="w-full bg-white rounded-xl overflow-hidden border border-gray-100">
      <div className="flex items-center gap-1.5 px-4 py-3 bg-white border-b border-gray-100">
        <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
        <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
        <span className="w-3 h-3 rounded-full bg-[#28C840]" />
      </div>
      <div className="relative rounded-xl bg-gray-50 overflow-hidden" style={{ height: "300px" }}>
        <span className="absolute inset-0 flex items-center justify-center text-sm text-gray-300 select-none">
          Main Graphic (PNG)
        </span>
        <img
          src={item.mainImg}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover object-top z-10"
          onError={(e) => { e.currentTarget.style.opacity = "0"; }}
        />
        {/* ── Gradient fade into caption ── */}
        <div
          className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none"
          style={{ height: "96px", background: "linear-gradient(to bottom, transparent, #ffffff)" }}
        />
      </div>
      {/* ── Inline caption ── */}
      <div className="px-6 pb-5 text-center">
        <h3 className="font-sans font-bold text-xl text-base-content tracking-tight">
          {item.title}
        </h3>
        <p className="text-base-content/50 text-sm mt-1.5 leading-relaxed">
          {item.desc}
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-1.5 text-sm text-base-content/60 hover:text-base-content mt-3 transition-colors font-medium border-b border-transparent hover:border-black pb-0.5"
        >
          View case study <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}

/* ── Side cards: framed rounded casing matching reference ── */
function SideCard({ item }: { item: PortfolioItem }) {
  return (
    <div
      className="w-full bg-white p-2"
      style={{
        borderRadius: "28px",
        border: "3px solid #E5E2E2",
      }}
    >
      <div
        className="relative bg-gray-50 overflow-hidden w-full"
        style={{ height: "340px", borderRadius: "20px" }}
      >
        <span className="absolute inset-0 flex items-center justify-center text-sm text-gray-300 select-none">
          Main Graphic (PNG)
        </span>
        <img
          src={item.mainImg}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover object-top z-10"
          onError={(e) => { e.currentTarget.style.opacity = "0"; }}
        />
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [center, setCenter] = useState(0);
  const [locked, setLocked] = useState(false);
  const [animating, setAnimating] = useState(false);
  const n = portfolios.length;

  const navigate = (dir: "next" | "prev") => {
    if (locked) return;
    setLocked(true);
    setAnimating(true);
    setCenter(c => dir === "next" ? (c + 1) % n : (c - 1 + n) % n);
    setTimeout(() => {
      setAnimating(false);
      setLocked(false);
    }, 520);
  };

  /* Map each item to a slot relative to center: range [-floor(n/2) … floor(n/2)] */
  const items = portfolios.map((item, i) => {
    let slot = (i - center + n) % n;
    if (slot > n / 2) slot -= n;
    return { item, slot };
  });

  return (
    <section id="portfolio" className="py-24 overflow-hidden relative dot-pattern">

      {/* ── Horizontal center line ── */}
      <div
        className="absolute left-0 right-0 pointer-events-none z-100"
        style={{ top: "50%", height: "2px", backgroundColor: "rgba(0,0,0,0.08)" }}
      />

      {/* ── Left arrow — aligned to left vertical line ── */}
      <button
        onClick={() => navigate("prev")}
        aria-label="Previous"
        className="absolute z-[55] p-3 rounded-full bg-white border border-gray-200 shadow-lg hover:bg-gray-50 transition-all duration-200 active:scale-95"
        style={{ left: "100px", top: "50%", transform: "translate(-50%, -50%)" }}
      >
        <ChevronLeft className="w-5 h-5 text-gray-700" />
      </button>

      {/* ── Right arrow — aligned to right vertical line ── */}
      <button
        onClick={() => navigate("next")}
        aria-label="Next"
        className="absolute z-[55] p-3 rounded-full bg-white border border-gray-200 shadow-lg hover:bg-gray-50 transition-all duration-200 active:scale-95"
        style={{ right: "100px", top: "50%", transform: "translate(50%, -50%)" }}
      >
        <ChevronRight className="w-5 h-5 text-gray-700" />
      </button>

      <motion.div
        className="relative max-w-[90rem] mx-auto px-6"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
      >

        {/* ── 3D coverflow track ── */}
        <div
          className="relative flex items-center justify-center"
          style={{ perspective: "1200px", perspectiveOrigin: "50% 50%", height: "820px" }}
        >
          {/* ── Background rect behind center card ── */}
          <div
            className="absolute pointer-events-none"
            style={{
              width: "870px",
              height: "723px",
              backgroundColor: "#F8F8F8",
              borderRadius: "32px",
              zIndex: 1,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
          {/* ── Outer border line (inset x:68 y:48 from bg rect) ── */}
          <div
            className="absolute pointer-events-none"
            style={{
              width: `${870 + 68 * 2}px`,
              height: `${723 + 48 * 2}px`,
              border: "1.5px solid #E5E2E2",
              borderRadius: "40px",
              zIndex: 1,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
          {items.map(({ item, slot }) => (
            <div
              key={item.id}
              className="w-full max-w-xl rounded-xl"
              style={{ ...slotStyle(slot, animating), transformStyle: "preserve-3d" }}
            >
              {slot === 0 ? <MacCard item={item} /> : <SideCard item={item} />}
            </div>
          ))}
        </div>

        {/* ── Dot indicators ── */}
        <div className="flex justify-center gap-2 mt-6 relative z-40">
          {portfolios.map((_, i) => (
            <span
              key={i}
              className={`rounded-full transition-all duration-300 ${
                i === center ? "w-5 h-2 bg-base-content" : "w-2 h-2 bg-base-content/20"
              }`}
            />
          ))}
        </div>

      </motion.div>
    </section>
  );
}
