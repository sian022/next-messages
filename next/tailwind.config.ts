import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: colors.blue[800],
        primaryHover: colors.blue[900],
        primaryActive: colors.blue[700],
        secondary: colors.purple[600],
        secondaryHover: colors.purple[700],
        secondaryActive: colors.purple[500],
        neutral: colors.slate[50],
        neutralHover: colors.slate[100],
        neutralActive: colors.slate[200],
      },
    },
  },
  plugins: [daisyui],
};
export default config;
