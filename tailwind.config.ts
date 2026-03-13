import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        night: {
          950: "#06070A",
          900: "#0B0D12",
          800: "#151922"
        },
        gold: {
          300: "#E8D3A3",
          400: "#D9B86A",
          500: "#B88737"
        },
        ruby: {
          500: "#A23B45",
          600: "#7E2432"
        },
        smoke: "#C9C4B8"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(217,184,106,0.18), 0 18px 60px rgba(126,36,50,0.24)"
      },
      backgroundImage: {
        "noise-overlay": "radial-gradient(circle at top, rgba(184,135,55,0.22), transparent 42%), radial-gradient(circle at 20% 20%, rgba(162,59,69,0.16), transparent 30%), linear-gradient(180deg, rgba(6,7,10,0.72), rgba(6,7,10,0.96))"
      }
    }
  },
  plugins: []
};

export default config;
