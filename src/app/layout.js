import "./globals.css";
import localFont from "next/font/local";
import { Lexend } from "next/font/google";
import PortfolioContext from "./context/PortfolioContext";

const souvenirBold = localFont({
  src: "./Souvenir-Bold.woff",
  display: "swap",
  variable: "--font-souvenirBold",
});

const gemini = localFont({
  src: "./Gemini-Regular.woff",
  display: "swap",
  variable: "--font-gemini",
});

const superGrotesk = localFont({
  src: "./SuperGroteskWeb W03 Regular.woff",
  display: "swap",
  variable: "--font-superGrotesk",
});

const tango = localFont({
  src: "./TangoEF.woff",
  display: "swap",
  variable: "--font-tango",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${souvenirBold.variable} ${gemini.variable} ${superGrotesk.variable} ${tango.variable}`}
    >
      <PortfolioContext>
        <body>{children}</body>
      </PortfolioContext>
    </html>
  );
}
