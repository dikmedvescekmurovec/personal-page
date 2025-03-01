import "@/styles/globals.css";
import clsx from "clsx";
import { Metadata, Viewport } from "next";
import { Merriweather, Merriweather_Sans } from "next/font/google";

import { Providers } from "./providers";

import { Navbar } from "@/components/navbar";
import { fontSans } from "@/config/fonts";

export const metadata: Metadata = {
  title: "DiMM Digital - Web App Development",
  description:
    "Building high-quality web applications, that are responsive, performant and easy to use.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const merriweatherSans = Merriweather_Sans({
  variable: "--font-merriweather-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <Navbar />
          <main className="w-full bg-gradient-to-tr from-[#360E6A] via-[#1E1D27] via-25% to-[#1E1D27]">
            <div className="container mx-auto max-w-7xl pt-16 px-6 flex-grow ">
              {children}
            </div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
