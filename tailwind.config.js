/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        newyork: ['NewYorkExtraLarge', 'serif'],
        newyorkSmall: ['NewYork Small', 'serif'],
        newyorkMedium: ['NewYorkMedium', 'serif'],
        sfmono: ['"SF Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        sf:['"SF Pro Display"','san-serif'],
        sfpro: ['"SF Pro Text"', 'sans-serif'],
        display: ["\"Playfair Display\"", "serif"],
        serif: ["\"DM Serif Display\"", "serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
