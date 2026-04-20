import { Users } from "lucide-react";

/* ── Avatar placeholder ── */
function Avatar({
  active = false,
  index,
}: {
  active?: boolean;
  index: number;
}) {
  const colors = [
    "from-slate-400 to-slate-500",
    "from-zinc-400 to-zinc-500",
    "from-stone-400 to-stone-500",
    "from-neutral-400 to-neutral-500",
    "from-gray-400 to-gray-500",
    "from-slate-500 to-slate-600",
  ];

  const initials = ["AJ", "MK", "RS", "LP", "TN", "DW"];

  if (active) {
    return (
      <div className="relative flex-shrink-0">
        <div className="w-44 h-56 rounded-3xl bg-gradient-to-br from-blue-400 to-blue-600 flex flex-col items-center justify-end p-3 overflow-hidden shadow-lg">
          {/* Silhouette SVG */}
          <svg viewBox="0 0 100 120" className="absolute top-4 w-24" fill="white" opacity="0.9">
            <circle cx="50" cy="30" r="22" />
            <path d="M10 100 Q10 65 50 65 Q90 65 90 100" />
          </svg>
          <button className="relative z-10 w-full bg-base-content text-white text-xs font-medium py-2 rounded-xl">
            View Portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-shrink-0 team-card-inactive">
      <div
        className={`w-36 h-52 rounded-3xl bg-gradient-to-br ${colors[index % colors.length]} flex flex-col items-center justify-center overflow-hidden border border-white/20`}
      >
        <svg viewBox="0 0 100 120" className="w-20" fill="white" opacity="0.7">
          <circle cx="50" cy="35" r="20" />
          <path d="M12 100 Q12 68 50 68 Q88 68 88 100" />
        </svg>
        <span className="text-white/80 text-xs mt-2 font-medium">{initials[index]}</span>
      </div>
    </div>
  );
}

const teamMembers = [
  { name: "Alex Johnson", role: "Lead Designer", active: true },
  { name: "Maya Kim", role: "UI Designer" },
  { name: "Ryan Soto", role: "Frontend Dev" },
  { name: "Lena Park", role: "UX Researcher" },
  { name: "Theo Nguyen", role: "Backend Dev" },
  { name: "Dana White", role: "Brand Strategist" },
];

export default function Team() {
  return (
    <section id="work" className="py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 icon-pill bg-base-content text-white mb-6">
            <Users className="w-3.5 h-3.5" />
            <span>Team</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] text-base-content mb-5">
            Meet the people behind
            <br />
            Inxora Studio
          </h2>

          <p className="text-base-content/50 text-base max-w-md mx-auto leading-relaxed">
            A passionate team of designers and developers dedicated to crafting
            exceptional digital experiences.
          </p>
        </div>

        {/* Avatar row — scrollable on mobile */}
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide justify-start lg:justify-center">
          {teamMembers.map((member, i) => (
            <Avatar key={member.name} active={member.active} index={i} />
          ))}
        </div>

        {/* Scroll hint on mobile */}
        <p className="text-center text-xs text-base-content/30 mt-4 md:hidden">
          Swipe to see the full team →
        </p>
      </div>
    </section>
  );
}
