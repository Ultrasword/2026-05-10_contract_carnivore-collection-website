import type { Metadata } from "next";
import { DM_Serif_Display, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { RecipeDrawerProvider } from "@/components/recipe/RecipeDrawerProvider";
import Header from "@/components/layout/Header";
import YoutubeBar from "@/components/layout/YoutubeBar";
import Footer from "@/components/layout/Footer";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Carnivore Collections — Recipes for people who eat meat",
  description:
    "A weekly carnivore cookbook. Every Sunday we send one tested recipe — beef, butter, eggs, cheese — written tight and built around what actually works in a home kitchen.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${hanken.variable} ${jetbrains.variable}`}>
      <body>
        <RecipeDrawerProvider>
          <div className="page">
            <Header />
            <YoutubeBar />
            <main>{children}</main>
            <Footer />
          </div>
        </RecipeDrawerProvider>
      </body>
    </html>
  );
}
