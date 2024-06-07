import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./source/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    screens: {
      // => @media (min-width: 350px) { ... }
      'sxm': '350px',
      // => @media (min-width: 400px) { ... }
      'ssm': '400px',
      // => @media (min-width: 500px) { ... }
      'smm': '500px',
      // => @media (min-width: 640px) { ... }
      'sm': '640px',
      // => @media (min-width: 768px) { ... }
      'md': '768px',
      // => @media (min-width: 1024px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1280px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1400px) { ... }
      '1.5xl': '1400px',
      // => @media (min-width: 1500px) { ... }
      '2xl': '1500px',
      // => @media (min-width: 1600px) { ... }
      '3xl': '1600px',
      // => @media (min-width: 1700px) { ... }
      '4xl': '1700px',
      // => @media (min-width: 1800px) { ... }
      '5xl': '1800px',
    },
    fontFamily: {
      "poppins": ["var(--font-poppins)", "sans-serif"],
    },
    extend: {
      colors: {
        "dark-bg": "#020d17",
        "highlight": "#FFD700",
      }
    },
  },
  plugins: [],
};
export default config;
