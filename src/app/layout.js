import "./globals.css";
import localFont from "next/font/local";
import { Lexend } from "next/font/google";
import PortfolioContext from "./context/PortfolioContext";

const souvenirBold = localFont({
  src: "./Souvenir-Bold.woff",
  display: "swap",
  variable: "--font-souvenirBold",
});

const walsheimUltra = localFont({
  src: "./gt-walsheim-ultra-bold.woff",
  display: "swap",
  variable: "--font-walsheimUltra",
});

const gemini = localFont({
  src: "./Gemini-Regular.woff",
  display: "swap",
  variable: "--font-gemini",
});

const lexendSans = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-lexendSans",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${souvenirBold.variable} ${gemini.variable} ${lexendSans.variable} ${walsheimUltra.variable}`}
    >
      <PortfolioContext>
        <body>{children}</body>
      </PortfolioContext>
    </html>
  );
}
