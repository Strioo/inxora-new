import { ExternalLink } from "lucide-react";

/* ── Mac-style traffic lights ── */
function TrafficLights() {
  return (
    <div className="flex items-center gap-1.5 px-4 py-3 border-b border-gray-100">
      <span className="w-3 h-3 rounded-full bg-red-400" />
      <span className="w-3 h-3 rounded-full bg-yellow-400" />
      <span className="w-3 h-3 rounded-full bg-green-400" />
    </div>
  );
}

/* ── Placeholder mockup content ── */
function MockupContent({ variant }: { variant: "main" | "side-left" | "side-right" }) {
  if (variant === "main") {
    return (
      <div className="h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col">
        <div className="flex-1 p-6 flex flex-col gap-4">
          {/* Nav bar mockup */}
          <div className="flex justify-between items-center text-gray-400 text-xs pb-2 border-b border-gray-700">
            <div className="flex gap-4 text-[10px]">
              {["HOME", "SHOP", "NEW ARRIVALS", "BEST SELLERS", "SALE"].map((i) => (
                <span key={i}>{i}</span>
              ))}
            </div>
            <span className="bg-orange-500 text-white text-[10px] px-2 py-0.5 rounded">Sign Up</span>
          </div>
          {/* Hero text */}
          <div className="mt-2">
            <h3 className="font-bold text-3xl text-white leading-tight tracking-tight font-serif">
              ELEVATE YOUR STYLE.
              <br />
              DEFINE YOUR STORY.
            </h3>
            <p className="text-gray-400 text-xs mt-2 max-w-[200px]">
              Discover the latest trends, timeless pieces, and exclusive fashion that speaks you.
            </p>
            <button className="mt-3 bg-teal-500 text-white text-xs px-3 py-1.5 rounded">
              View Collection
            </button>
          </div>
          {/* Brand name */}
          <div className="mt-auto">
            <span className="text-5xl font-black text-transparent" style={{
              WebkitTextStroke: "2px rgba(255,255,255,0.15)",
            }}>
              TRENDORA
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "side-left") {
    return (
      <div className="h-full bg-white p-3 flex flex-col gap-2">
        <div className="text-[10px] font-semibold text-gray-700">Essential Skincare for Every Body</div>
        <div className="flex gap-1 mt-1">
          {[1,2,3].map(i => (
            <div key={i} className="w-8 h-10 bg-gray-100 rounded" />
          ))}
        </div>
        <div className="text-[9px] text-gray-400 mt-1 leading-tight">
          Nabeaute is a body care brand focused on quality and all-natural care, offering ingredients to care for your skin...
        </div>
        <div className="flex gap-2 text-[9px] text-gray-500 mt-auto">
          <span>105K ⬆</span><span>10M+ 🌟</span><span>4.8</span>
        </div>
        <div className="flex gap-1">
          {[1,2,3,4].map(i => (
            <div key={i} className="w-7 h-7 bg-amber-50 rounded" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="h-full bg-white p-3 flex flex-col gap-2">
      <div className="text-[10px] font-semibold text-gray-700">Elevate Your Home with Timeless Furniture</div>
      <div className="flex gap-1 mt-1">
        <div className="flex-1 h-12 bg-green-50 rounded flex items-center justify-center text-lg">🛋️</div>
        <div className="flex-1 h-12 bg-amber-50 rounded" />
      </div>
      <div className="text-[9px] text-gray-400 leading-tight">
        Designing Comfort for Modern Living.
      </div>
      <div className="flex gap-3 text-[9px] text-gray-500 mt-auto font-medium">
        <span>1,200+</span><span>25K+</span><span>99%</span><span>50+</span>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main mockup container */}
        <div className="relative flex items-center justify-center">
          {/* ── Side-left floating card ── */}
          <div className="hidden lg:block absolute left-0 z-20 w-[220px] rounded-2xl border border-base-300 bg-white shadow-xl overflow-hidden"
            style={{ height: "260px", transform: "translateX(30px)" }}>
            <div className="flex items-center gap-1 px-3 py-2 border-b border-gray-100">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
              <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
            </div>
            <div className="h-full">
              <MockupContent variant="side-left" />
            </div>
          </div>

          {/* ── Central main mockup ── */}
          <div className="relative z-10 w-full max-w-3xl mx-auto lg:mx-16 mockup-browser-custom overflow-hidden">
            <TrafficLights />
            <div style={{ height: "420px" }}>
              <MockupContent variant="main" />
            </div>
          </div>

          {/* ── Side-right floating card ── */}
          <div className="hidden lg:block absolute right-0 z-20 w-[220px] rounded-2xl border border-base-300 bg-white shadow-xl overflow-hidden"
            style={{ height: "220px", transform: "translateX(-30px)" }}>
            <div className="flex items-center gap-1 px-3 py-2 border-b border-gray-100">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
              <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
            </div>
            <div className="h-full">
              <MockupContent variant="side-right" />
            </div>
          </div>
        </div>

        {/* Caption */}
        <div className="text-center mt-8">
          <h3 className="font-sans font-semibold text-xl text-base-content">
            Luxe — Premium E-Commerce Platform
          </h3>
          <p className="text-base-content/50 text-sm mt-1 max-w-md mx-auto">
            Platform e-commerce modern dengan UX yang crafted dan performa tinggi untuk brand premium.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-sm text-base-content/60 hover:text-base-content mt-3 transition-colors"
          >
            View case study <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
