import type { AppProps } from "next/app";
import { Bebas_Neue, Manrope } from "next/font/google";
import "@/styles/globals.css";

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body"
});

const headingFont = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display"
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${bodyFont.variable} ${headingFont.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
