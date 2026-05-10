import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,svelte,vue}"],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#F4F4F1",
          100: "#F4F4F1",
          200: "#F4F4F1",
        },
        terracotta: {
          400: "#E63946",
          500: "#E63946",
          600: "#0B0C10",
        },
        primary: { DEFAULT: "#E63946" },
        accent: { DEFAULT: "#6C727C" },
        sage: { 400: "#F4F4F1", 500: "#8A8D91", 600: "#6C727C" },
        rose: { deep: "#0B0C10" },
        ink: {
          900: "#0B0C10",
          700: "#8A8D91",
          500: "#8A8D91",
        },
      },
      maxWidth: {
        prose: "68ch",
      },
      typography: {
        DEFAULT: { css: { maxWidth: "68ch" } },
        ink: { css: { color: "#8A8D91" } },
      },
      fontFamily: {
        display: ['Space Grotesk', "Georgia", "serif"],
        sans: ['Inter', "system-ui", "sans-serif"],
        body: ['Inter', "sans-serif"],
        mono: ['JetBrains Mono', "monospace"],
      },
    },
  },
  plugins: [typography],
};
