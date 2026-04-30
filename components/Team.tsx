"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { fadeUp, imageReveal, staggerContainer, VIEWPORT } from "@/lib/animation";
import { Users, Play, Pause } from "lucide-react";

const NAVBAR_H = 72;

export default function Team() {
  const videoRef    = useRef<HTMLVideoElement>(null);
  const playingRef  = useRef(false);
  const [playing, setPlaying] = useState(false);

  /* ── Compute pixel values — use clientWidth to exclude scrollbar ── */
  const [dims, setDims] = useState({ minH: 300, maxH: 600, minW: 400, maxW: 800 });

  useEffect(() => {
    const calc = () => {
      const vw = document.documentElement.clientWidth;
      const vh = window.innerHeight;
      const fullW = window.innerWidth;
      setDims({
        minH: vw * 0.22,
        maxH: vh - NAVBAR_H,
        minW: vw * 0.52,
        maxW: fullW,
      });
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  /* ── IntersectionObserver autoplay — ref callback ensures el is always available ── */
  const observerRef = useRef<IntersectionObserver | null>(null);

  const setVideoRef = (el: HTMLVideoElement | null) => {
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }
    if (!el) return;
    (videoRef as React.MutableRefObject<HTMLVideoElement | null>).current = el;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5 && !playingRef.current) {
          el.play().catch(() => {});
          playingRef.current = true;
          setPlaying(true);
        }
      },
      { threshold: 0.5 }
    );
    observerRef.current.observe(el);
  };

  /* ── Scroll-to-fullscreen setup ── */
  const stickyRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: stickyRef,
    offset: ["start center", "end center"],
  });

  const videoWidth   = useTransform(scrollYProgress, [0, 0.7], [dims.minW, dims.maxW]);
  const videoHeight  = useTransform(scrollYProgress, [0, 0.7], [dims.minH, dims.maxH]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.7], [24, 0]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (!videoRef.current) return;
    if (v > 0.05 && !playingRef.current) {
      videoRef.current.play().catch(() => {});
      playingRef.current = true;
      setPlaying(true);
    } else if (v <= 0.05 && playingRef.current) {
      videoRef.current.pause();
      playingRef.current = false;
      setPlaying(false);
    }
  });

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playingRef.current) {
      videoRef.current.pause();
      playingRef.current = false;
      setPlaying(false);
    } else {
      videoRef.current.play();
      playingRef.current = true;
      setPlaying(true);
    }
  };

  return (
    <section id="team" className="pt-24">
      <div className="max-w-[90rem] mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          variants={staggerContainer(0.13, 0)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 icon-pill bg-base-content text-white mb-6">
            <Users className="w-3.5 h-3.5" />
            <span>Team</span>
          </motion.div>

          <motion.h2 variants={fadeUp} className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] text-base-content mb-5">
            Meet the people behind
            <br />
            Inxora Studio
          </motion.h2>

          <motion.p variants={fadeUp} className="text-base-content/50 text-base max-w-md mx-auto leading-relaxed">
            A passionate team of designers and developers dedicated to crafting
            exceptional digital experiences.
          </motion.p>
        </motion.div>
      </div>

      {/* ── Scroll-linked video: 300vh scroll room, scale to fullscreen ── */}
      <div ref={stickyRef} style={{ height: "300vh", marginLeft: "-1rem", marginRight: "-1rem" }}>
        <div
          className="sticky flex items-center justify-center"
          style={{ top: `${NAVBAR_H}px`, height: `calc(100vh - ${NAVBAR_H}px)`, overflow: "hidden" }}
        >
          <motion.div
            style={{
              width: videoWidth,
              height: videoHeight,
              borderRadius,
              position: "relative",
            }}
            className="cursor-pointer group overflow-hidden"
            onClick={togglePlay}
          >
            <video
              ref={setVideoRef}
              src="/video/intro_video.mp4"
              className="w-full h-full object-cover"
              loop
              muted
              playsInline
              onEnded={() => setPlaying(false)}
            />

            {/* Pause button — only visible on hover while playing */}
            {playing && (
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/90 shadow-lg">
                  <Pause className="w-6 h-6 text-base-content" />
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
