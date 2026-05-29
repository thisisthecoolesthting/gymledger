import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,svelte,vue}"],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FFF7ED",
          100: "#F5EDE4",
          200: "#E6DED5",
        },
        terracotta: {
          400: "#DD4231",
          500: "#C0392B",
          600: "#9D2F23",
        },
        primary: { DEFAULT: "#5B1115" },
        accent: { DEFAULT: "#C0392B" },
        sage: { 400: "#8FA888", 500: "#6F8B6A", 600: "#566F52" },
        rose: { deep: "#0F0F1A" },
        ink: {
          900: "#0B1120",
          700: "#334155",
          500: "#64748B",
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
        display: ['Oswald', "Georgia", "serif"],
        sans: ['Roboto', "system-ui", "sans-serif"],
        body: ['Roboto', "sans-serif"],
        mono: ['JetBrains Mono', "monospace"],
      },
    },
  },
  plugins: [typography],
};
