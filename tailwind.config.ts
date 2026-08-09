import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          DEFAULT: "#FFD600",
          soft: "#FF9500",
        },
        ink: {
          DEFAULT: "#0A0A0A",
          near: "#111111",
          dark: "#1A1A1A",
          border: "#2A2A2A",
        },
        paper: {
          DEFAULT: "#FAFAFA",
          off: "#F3F3EF",
        },
        muted: "#929292",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
        quote: ["Georgia", "serif"],
      },
      letterSpacing: {
        tightest2: "-0.045em",
      },
      screens: {
        xs: "375px",
      },
      transitionTimingFunction: {
        expressive: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
