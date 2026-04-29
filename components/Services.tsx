"use client";
import { motion } from "framer-motion";
import { fadeUp, imageReveal, staggerContainer, VIEWPORT } from "@/lib/animation";

const services = [
  {
    title: "UI/UX Design",
    description: "Intuitive designs users love, built to scale",
    img: "/images/UI_Design.png",
  },
  {
    title: "Web Development",
    description: "Fast, responsive websites built to scale",
    img: "/images/Web_Development.png",
  },
  {
    title: "Brand Identity",
    description: "Memorable brands that stand out",
    img: "/images/Brand_Identity.png",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-4">
      <div className="max-w-[90rem] mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={staggerContainer(0.12, 0)}
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
            <span>Service</span>
          </motion.div>

          <motion.h2 variants={fadeUp} className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] text-base-content mb-5">
            We design, build, and
            <br />
            grow digital products
          </motion.h2>

          <motion.p variants={fadeUp} className="text-base-content/50 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            From concept to launch and beyond, we craft experiences that engage
            users and drive business results.
          </motion.p>
        </motion.div>

        {/* 3-col grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          variants={staggerContainer(0.15, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          {services.map(({ title, description, img }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="card-float rounded-3xl overflow-hidden group"
            >
              {/* Illustration area */}
              <motion.div
                variants={imageReveal}
                className="relative w-full flex items-center justify-center"
                style={{ height: "260px", backgroundColor: "rgba(255,255,255,0.5)" }}
              >
                <img
                  src={img}
                  alt={title}
                  className="relative z-10 w-full h-full object-contain p-6"
                />
              </motion.div>

              {/* Text — white bg only here */}
              <div className="bg-white p-6 rounded-b-3xl">
                <h3 className="font-serif text-2xl font-normal text-base-content mb-1.5">
                  {title}
                </h3>
                <p className="text-base-content/50 text-sm">{description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
