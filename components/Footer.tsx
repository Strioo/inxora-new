"use client";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, VIEWPORT } from "@/lib/animation";

function StarDecor({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`w-5 h-5 text-base-content/25 ${className}`}
    >
      <path d="M12 0 L13.5 10.5 L24 12 L13.5 13.5 L12 24 L10.5 13.5 L0 12 L10.5 10.5 Z" />
    </svg>
  );
}

const quickLinks = ["Home", "Our Work", "Services", "About", "Process"];
const platform = ["Upwork", "Envato", "Build By Bit"];
const connect = [
  { label: "Hello@Inxora.Studio", href: "mailto:hello@inxora.studio" },
  { label: "Contact Us", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-base-300/60 pt-16 pb-8 px-4">
      {/* Corner star decorators */}
      <StarDecor className="absolute top-4 left-4 !text-base-content/25" />
      <StarDecor className="absolute top-4 right-4 !text-base-content/25" />
      <StarDecor className="absolute bottom-4 left-4 !text-base-content/25" />
      <StarDecor className="absolute bottom-4 right-4 !text-base-content/25" />

      <div className="max-w-[90rem] mx-auto">
        {/* Main footer grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 mb-12"
          variants={staggerContainer(0.1, 0)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          {/* Brand column */}
          <motion.div variants={fadeUp} className="sm:col-span-2 lg:col-span-1">
            <h4 className="font-sans font-bold text-lg text-base-content mb-3">
              Inxora Studio
            </h4>
            <p className="text-base-content/45 text-sm leading-relaxed max-w-xs">
              Raise Funds, Make Decisions, And Move Faster—With Reports Powered By AI.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeUp}>
            <h5 className="font-sans font-semibold text-sm text-base-content mb-4">
              Quick Links
            </h5>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-base-content/50 text-sm hover:text-base-content transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Platform */}
          <motion.div variants={fadeUp}>
            <h5 className="font-sans font-semibold text-sm text-base-content mb-4">
              Platform
            </h5>
            <ul className="space-y-3">
              {platform.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-base-content/50 text-sm hover:text-base-content transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div variants={fadeUp}>
            <h5 className="font-sans font-semibold text-sm text-base-content mb-4">
              Connect
            </h5>
            <ul className="space-y-3">
              {connect.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-base-content/50 text-sm hover:text-base-content transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-base-300/50 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-base-content/40 text-sm">
            © 2026 Inxora. All rights reserved.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-2">
            {/* TikTok */}
            <a
              href="#"
              aria-label="TikTok"
              className="w-9 h-9 rounded-full bg-base-200 hover:bg-base-content hover:text-white flex items-center justify-center transition-all group"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 text-base-content/60 group-hover:text-white transition-colors"
              >
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.17 8.17 0 004.79 1.54V6.78a4.84 4.84 0 01-1.02-.09z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-base-200 hover:bg-base-content hover:text-white flex items-center justify-center transition-all group"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 text-base-content/60 group-hover:text-white transition-colors"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="#"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-base-200 hover:bg-base-content hover:text-white flex items-center justify-center transition-all group"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 text-base-content/60 group-hover:text-white transition-colors"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
