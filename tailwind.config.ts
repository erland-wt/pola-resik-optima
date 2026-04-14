// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pro: {
          blue: "#3057B6",
          dark: "#1c3d7a",
          light: "#cfe2ff",
        },
        resik: {
          green: "#239530",
          dark: "#1a6b22",
          light: "#d1f7c4",
        },
      },
    },
  },
  plugins: [],
};
export default config;