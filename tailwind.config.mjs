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
        souvenir: ["var(--font-souvenirBold)"],
        gemini: ["var(--font-gemini)"],
        super: ["var(--font-superGrotesk)"],
        tango: ["var(--font-tango)"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["acid", "luxury"],
  },
};
