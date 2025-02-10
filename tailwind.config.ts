import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('arches.png')"
      },
      colors: {
        // branding colors
        'elo-dark-blue': "#08383a",
        'elo-blue': "#204c45",
        'elo-pale-blue': "#678a7c",
        'elo-orange': "#8b561e",
        'elo-base': "#e0d4c2",
        'elo-dark-gold': "#A38A5E",
        'elo-gold': "#dfb665",
      }
    },
    fontFamily: {
      //branding fonts
      sans: ['var(--font-roboto)'],
      serif: ['var(--font-cinzel)']

    }
  },
  plugins: [],
};
export default config;
