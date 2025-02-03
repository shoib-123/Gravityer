/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        regular: ["Curiosity", "sans-serif"],
        rounded: ["CuriosityRounded", "sans-serif"],
        light: ["CuriosityLight", "sans-serif"],
        extraLight: ["CuriosityExtraLight", "sans-serif"],
        extraBold: ["CuriosityExtraBold", "sans-serif"],
        bold: ["CuriosityBold", "sans-serif"],
        black: ["CuriosityBlack", "sans-serif"],
      },
    },
  },
  plugins: [],
};
