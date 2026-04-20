import { Zap } from "lucide-react";

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
function CircleIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-12 h-12 rounded-full bg-base-content/80 flex items-center justify-center shadow-lg">
      {children}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* ── Corner star decorators ── */}
      <StarDecor
        size={20}
        className="absolute top-20 left-16 text-base-content/20 hidden md:block"
      />
      <StarDecor
        size={20}
        className="absolute top-20 right-16 text-base-content/20 hidden md:block"
      />
      <StarDecor
        size={20}
        className="absolute bottom-24 left-16 text-base-content/20 hidden md:block"
      />
      <StarDecor
        size={20}
        className="absolute bottom-24 right-16 text-base-content/20 hidden md:block"
      />

      {/* ── Large star (top-right area) ── */}
      <StarDecor
        size={36}
        className="absolute top-36 right-28 text-base-content/50 hidden lg:block"
      />

      {/* ── Small plus signs ── */}
      <PlusDecor className="absolute top-40 right-48 hidden lg:block" />
      <PlusDecor className="absolute top-72 left-32 hidden lg:block" />
      <PlusDecor className="absolute bottom-40 left-52 hidden lg:block" />

      {/* ── Floating dark circles with icons ── */}
      <div className="absolute top-40 left-24 hidden lg:block">
        <CircleIcon>
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-5 h-5">
            <path d="M12 2L15 9L22 9.5L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9.5L9 9Z" />
          </svg>
        </CircleIcon>
      </div>

      <div className="absolute bottom-36 right-24 hidden lg:block">
        <CircleIcon>
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-5 h-5">
            <circle cx="12" cy="12" r="3" />
            <path d="M12 1v4M12 19v4M1 12h4M19 12h4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
          </svg>
        </CircleIcon>
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="flex items-center mb-8 animate-fade-up">
          <span className="icon-pill bg-base-content text-white">
            <Zap className="w-3.5 h-3.5 fill-white" />
            <span>Trusted</span>
          </span>
          <span className="ml-2 text-sm text-base-content/60 border border-base-300 rounded-full px-4 py-1.5">
            by growing brands &amp; startups
          </span>
        </div>

        {/* H1 */}
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal leading-[1.1] tracking-tight text-base-content mb-6 animate-fade-up delay-100">
          We create clean and
          <br />
          modern digital Website.
        </h1>

        {/* Subheading */}
        <p className="text-base-content/55 text-base sm:text-lg max-w-xl leading-relaxed mb-10 animate-fade-up delay-200">
          Inxora helps businesses create modern, high-performing websites that
          not only look great — but actually convert and grow your brand.
        </p>

        {/* CTA */}
        <a
          href="#contact"
          className="btn bg-base-content text-white border-none hover:bg-base-content/85 rounded-full px-8 py-3 text-base font-medium shadow-lg hover:shadow-xl transition-all animate-fade-up delay-300"
        >
          Let&apos;s Talk
        </a>
      </div>

      {/* ── Bottom decorative line ── */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-base-300 to-transparent" />
    </section>
  );
}
