import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        BlueP: "#18C2D8",
        BlueS: "#ACEEFE",
        GrayP: "#959595",
        GrayS: "#444444",
      },
    },
  },
  plugins: [],
} satisfies Config;
