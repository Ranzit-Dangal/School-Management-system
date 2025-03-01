import type { Config } from "tailwindcss";

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
        notoSky:"#C3EBFA",
        notoSkyLight:"#EDF9FD",
        notoPurple:"#CFCEFF",
        notoPurpleLight:"#F1F0FF",
        notoYellow:"#FAE27C",
        notoYellowLight:"#FEFCE8",


      },
    },
  },
  plugins: [],
} satisfies Config;
