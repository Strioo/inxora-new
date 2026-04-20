import { Sparkles } from "lucide-react";

const services = [
  {
    title: "UI/UX Design",
    description: "Intuitive designs users love, built to scale",
    illustration: (
      <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
        {/* Phone with drag-and-drop UI */}
        <rect x="60" y="20" width="80" height="130" rx="12" stroke="#111" strokeWidth="3" fill="white" />
        <rect x="70" y="35" width="60" height="8" rx="2" fill="#e5e7eb" />
        <rect x="70" y="50" width="40" height="8" rx="2" fill="#e5e7eb" />
        <rect x="70" y="70" width="55" height="40" rx="6" stroke="#111" strokeWidth="2" fill="#f9fafb" />
        <polygon points="85,80 100,70 115,80 115,100 85,100" fill="#111" opacity="0.7" />
        <rect x="70" y="118" width="60" height="6" rx="2" fill="#e5e7eb" />
        <rect x="70" y="130" width="45" height="4" rx="2" fill="#f0f0f0" />
        {/* Hand */}
        <ellipse cx="140" cy="140" rx="18" ry="22" fill="#d1d5db" transform="rotate(-25 140 140)" />
        <rect x="132" y="120" width="6" height="28" rx="3" fill="#9ca3af" transform="rotate(-10 132 120)" />
        <rect x="140" y="118" width="6" height="30" rx="3" fill="#9ca3af" />
        <rect x="148" y="122" width="6" height="26" rx="3" fill="#9ca3af" transform="rotate(8 148 122)" />
        {/* Sparkle lines */}
        <line x1="50" y1="50" x2="42" y2="42" stroke="#111" strokeWidth="2" strokeLinecap="round" />
        <line x1="50" y1="50" x2="58" y2="42" stroke="#111" strokeWidth="2" strokeLinecap="round" />
        <line x1="50" y1="50" x2="50" y2="38" stroke="#111" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Web Development",
    description: "Fast, responsive websites built to scale",
    illustration: (
      <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
        {/* Developer at laptop */}
        <rect x="60" y="100" width="90" height="55" rx="8" stroke="#111" strokeWidth="3" fill="white" />
        <circle cx="140" cy="130" r="20" fill="#111" />
        {/* Code bubble */}
        <circle cx="130" cy="70" r="30" fill="#111" />
        <text x="120" y="76" fill="white" fontSize="14" fontFamily="monospace" fontWeight="bold">{"</>"}</text>
        {/* Person */}
        <circle cx="95" cy="72" r="22" fill="#d1d5db" />
        <ellipse cx="95" cy="65" rx="12" ry="14" fill="#9ca3af" />
        <ellipse cx="95" cy="105" rx="18" ry="8" fill="#d1d5db" />
        {/* Sparkle */}
        <path d="M155 105 L157 99 L159 105 L165 107 L159 109 L157 115 L155 109 L149 107 Z" fill="#111" />
      </svg>
    ),
  },
  {
    title: "Brand Identity",
    description: "Memorable brands that stand out",
    illustration: (
      <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
        {/* Brand box / packaging */}
        <rect x="75" y="60" width="60" height="90" rx="4" stroke="#111" strokeWidth="3" fill="white" />
        <rect x="85" y="75" width="40" height="40" rx="2" fill="#f3f4f6" stroke="#e5e7eb" strokeWidth="1" />
        <rect x="85" y="122" width="40" height="6" rx="2" fill="#e5e7eb" />
        <rect x="90" y="132" width="30" height="4" rx="2" fill="#f0f0f0" />
        {/* Pencil */}
        <rect x="140" y="50" width="10" height="55" rx="3" fill="#111" transform="rotate(15 140 50)" />
        <polygon points="140,100 150,100 145,115" fill="#fbbf24" transform="rotate(15 140 50)" />
        {/* Plus signs */}
        <text x="58" y="85" fontSize="16" fill="#111" opacity="0.5">+</text>
        <text x="155" y="70" fontSize="12" fill="#111" opacity="0.4">+</text>
        <text x="50" y="140" fontSize="10" fill="#111" opacity="0.3">+</text>
        {/* Checkmarks on box */}
        <path d="M90 90 L93 93 L100 85" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M90 100 L93 103 L100 95" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 icon-pill bg-base-content text-white mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Service</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] text-base-content mb-5">
            We design, build, and
            <br />
            grow digital products
          </h2>

          <p className="text-base-content/50 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            From concept to launch and beyond, we craft experiences that engage
            users and drive business results.
          </p>
        </div>

        {/* 3-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map(({ title, description, illustration }) => (
            <div
              key={title}
              className="card-float bg-white rounded-3xl overflow-hidden group"
            >
              {/* Illustration area */}
              <div className="w-full h-52 flex items-center justify-center p-8 bg-base-200/40">
                <div className="w-40 h-40">{illustration}</div>
              </div>

              {/* Text */}
              <div className="p-6">
                <h3 className="font-serif text-2xl font-normal text-base-content mb-1.5">
                  {title}
                </h3>
                <p className="text-base-content/50 text-sm">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
