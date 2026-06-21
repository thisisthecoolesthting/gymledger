import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,svelte,vue}"],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FEF2F2",
          100: "#FEE2E2",
          200: "#FECACA",
        },
        navy: {
          DEFAULT: "#C0392B",
          600: "#C0392B",
          700: "#44403C",
        },
        terracotta: {
          400: "#F87171",
          500: "#1F2937",
          600: "#111827",
        },
        primary: { DEFAULT: "#C0392B" },
        accent: { DEFAULT: "#1F2937" },
        sage: { 400: "#8FA888", 500: "#6F8B6A", 600: "#566F52" },
        rose: { deep: "#0B1120" },
        ink: {
          900: "#1C1917",
          700: "#44403C",
          500: "#78716C",
        },
      },
      maxWidth: {
        prose: "68ch",
        site: "72rem",
      },
      typography: {
        DEFAULT: { css: { maxWidth: "68ch" } },
        ink: { css: { color: "#334155" } },
      },
      fontFamily: {
        display: ["Barlow Condensed", "Georgia", "serif"],
        sans: ["Barlow", "system-ui", "sans-serif"],
        body: ["Barlow", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [typography],
};
