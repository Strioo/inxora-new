"use client";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, VIEWPORT } from "@/lib/animation";
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
      <div className="max-w-[90rem] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* ── Left: text ── */}
          <motion.div
            variants={staggerContainer(0.14, 0)}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-xl text-white text-sm font-normal"
              style={{ background: "linear-gradient(to right, #838383 0%, #1D1D1D 25%, #1D1D1D 100%)" }}
            >
              <img src="/icons/sparkle.svg" alt="sparkle" className="w-5 h-5" />
              <span>Trusted by growing brands</span>
            </motion.div>

            <motion.h2 variants={fadeUp} className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] text-base-content mb-6">
              We turn ideas into
              <br />
              digital products
            </motion.h2>

            <motion.p variants={fadeUp} className="text-base-content/55 text-base leading-relaxed max-w-sm">
              From idea to launch with strategy, design, and development.
            </motion.p>
          </motion.div>

          {/* ── Right: zigzag steps ── */}
          {/*
            Card spacing: 200px, card h≈130px
            Card centers Y: 65, 265, 465, 665
            Cards 0,2: left=0, w=55% → right edge at 55%
            Cards 1,3: right=0, w=55% → left edge at 45%
            Corner anchor X: 72% (right side), 28% (left side)
            Radius: 16px on each bend
          */}
          <div className="relative pl-4 pr-2" style={{ minHeight: "860px" }}>

            {/*
              viewBox 500x860. Card w=55%→275px.
              Cards 0,2: left=0,  right edge x=275
              Cards 1,3: right=0, left  edge x=225  (500-275=225)
              Corner pivot right: x=360, corner pivot left: x=140
              Bend radius r=16
              Card centers Y: 65, 265, 465, 665
            */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 500 860"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* 0→1: right of card0(275,65) → pivot(360) → down → left of card1(225,265) */}
              <path
                d="M 275 65 H 344 Q 360 65 360 81 V 249 Q 360 265 344 265 H 225"
                fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
              />
              {/* 1→2: left of card1(225,265) → pivot(140) → down → right of card2(275,465) */}
              <path
                d="M 225 265 H 156 Q 140 265 140 281 V 449 Q 140 465 156 465 H 275"
                fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
              />
              {/* 2→3: right of card2(275,465) → pivot(360) → down → left of card3(225,665) */}
              <path
                d="M 275 465 H 344 Q 360 465 360 481 V 649 Q 360 665 344 665 H 225"
                fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
              />
            </svg>

            {steps.map(({ icon: Icon, title, description }, i) => (
              <motion.div
                key={title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={VIEWPORT}
                transition={{ delay: i * 0.1 }}
                className="absolute card-float bg-white rounded-3xl p-6 w-[55%]"
                style={{
                  top: `${i * 200}px`,
                  ...(i % 2 === 0 ? { left: 0 } : { right: 0 }),
                }}
              >
                <IconBox Icon={Icon} />
                <h3 className="font-serif text-xl font-normal text-base-content mb-1">
                  {title}
                </h3>
                <p className="text-base-content/50 text-sm leading-relaxed">
                  {description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
