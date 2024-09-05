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
        'octo-blue': "#3fa8c6",
        'octo-pale-blue': "#8ccbdd",
        'octo-red': "#d34957", 
        'octo-pale-red': "#eaa4ac", 
        'octo-yellow': "#f2da79", 
        'octo-pale-yellow': "#fdefc2", 
      }
    },
  },
  plugins: [],
};
export default config;
