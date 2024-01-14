import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { min: "320px", max: "480px" },
      md: { min: "481px", max: "768px" },
      lg: { min: "769px", max: "1067px" },
      xl: { min: "1068px", max: "1200px" },
      "2xl": { min: "1201px" },
    },
    extend: {
      colors: {
        main: "#31b6bf",
        twitter: "#42b1f7",
        linkedin: "#007abc",
        portfolio: "#f64b77",
        instagram: "#973989",
        facebook: "#44578a",
      },
      fontFamily: {
        "san-jakarta": ["Plus Jakarta Sans"],
        fasthand: ["Fasthand"],
      },
      boxShadow: {
        "card-shadow": "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      },
    },
  },
  plugins: [],
} satisfies Config;
