import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,svelte,vue}"],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#F5F5F5",
          100: "#EBEBEB",
          200: "#D6D6D6",
        },
        terracotta: {
          400: "#16213E",
          500: "#1A1A2E",
          600: "#0F0F1A",
        },
        primary: { DEFAULT: "#1A1A2E" },
        accent: { DEFAULT: "#E94560" },
        sage: { 400: "#8FA888", 500: "#6F8B6A", 600: "#566F52" },
        rose: { deep: "#0F0F1A" },
        ink: {
          900: "#0F0F1A",
          700: "#4A4340",
          500: "#6E6863",
        },
      },
      maxWidth: {
        prose: "68ch",
      },
      typography: {
        DEFAULT: { css: { maxWidth: "68ch" } },
        ink: { css: { color: "#4A4340" } },
      },
      fontFamily: {
        display: ["Space Grotesk", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [typography],
};
