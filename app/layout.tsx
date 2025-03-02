import "@/styles/globals.css";
import clsx from "clsx";
import { Metadata } from "next";

import "../styles/focus.scss";
import "../styles/text.scss";

import { Providers } from "./providers";

import { Navbar } from "@/components/navbar";
import { merriweather, merriweatherSans } from "@/config/fonts";

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
          merriweatherSans.variable,
          merriweather.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <Navbar />
          <main className="w-full ">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
