import { Compass, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: Compass,
    title: "Discovery",
    description: "We learn your goals and audience.",
    delay: "delay-100",
  },
  {
    icon: PenTool,
    title: "Design",
    description: "Design for your brand and users.",
    delay: "delay-200",
  },
  {
    icon: Code2,
    title: "Development",
    description: "We build with clean code.",
    delay: "delay-300",
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "Launch and support your project.",
    delay: "delay-400",
  },
];

/* ── Dark icon box ── */
function IconBox({ Icon }: { Icon: React.ElementType }) {
  return (
    <div className="w-14 h-14 rounded-2xl bg-base-content flex items-center justify-center mb-4 shadow-md">
      <Icon className="w-6 h-6 text-white" />
    </div>
  );
}

export default function Process() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* ── Left: text ── */}
          <div>
            <div className="icon-pill bg-base-content text-white w-fit mb-6">
              <svg viewBox="0 0 24 24" fill="white" className="w-3.5 h-3.5">
                <path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5Z" />
              </svg>
              <span className="text-sm font-medium">Trusted by growing brands</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] text-base-content mb-6">
              We turn ideas into
              <br />
              digital products
            </h2>

            <p className="text-base-content/55 text-base leading-relaxed max-w-sm">
              From idea to launch with strategy, design, and development.
            </p>
          </div>

          {/* ── Right: 2x2 card grid ── */}
          <div className="grid grid-cols-2 gap-4">
            {steps.map(({ icon: Icon, title, description, delay }, i) => (
              <div
                key={title}
                className={`card-float bg-white rounded-3xl p-6 animate-fade-up ${delay}`}
              >
                <IconBox Icon={Icon} />
                <h3 className="font-serif text-2xl font-normal text-base-content mb-1">
                  {title}
                </h3>
                <p className="text-base-content/50 text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
