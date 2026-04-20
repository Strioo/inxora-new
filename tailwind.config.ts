import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        inxora: {
          primary: "#1a1a1a",
          "primary-content": "#ffffff",
          secondary: "#4b5563",
          accent: "#1a1a1a",
          neutral: "#f5f5f3",
          "base-100": "#f5f5f3",
          "base-200": "#eeecea",
          "base-300": "#e4e2df",
          "base-content": "#111111",
        },
      },
    ],
  },
};

export default config;
