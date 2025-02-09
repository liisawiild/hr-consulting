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
        'evo-dark-blue': "#08383a",
        'evo-blue': "#204c45",
        'evo-pale-blue': "#678a7c",
        'evo-orange': "#8b561e",
        'evo-base': "#e0d4c2",
        'evo-dark-gold': "#8d6d36",
        'evo-gold': "#dfb665",
      }
    },
  },
  plugins: [],
};
export default config;
