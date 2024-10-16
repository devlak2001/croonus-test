import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import QueryProvider from "./queryPorvider";

const jost = localFont({
  src: [
    { path: "./fonts/Jost100Hairline.otf", weight: "100" },
    { path: "./fonts/Jost200Thin.otf", weight: "200" },
    { path: "./fonts/Jost300Light.otf", weight: "300" },
    { path: "./fonts/Jost400Book.otf", weight: "400" },
    { path: "./fonts/Jost500Medium.otf", weight: "500" },
    { path: "./fonts/Jost600Semi.otf", weight: "600" },
    { path: "./fonts/Jost700Bold.otf", weight: "700" },
    { path: "./fonts/Jost800Heavy.otf", weight: "800" },
    { path: "./fonts/Jost900Black.otf", weight: "900" },
  ],
});

export const metadata: Metadata = {
  title: "Ringz&Thingz",
  description: "Discover Timeless Elegance with Ringz&Thingz Jewelry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${jost.className} antialiased flex flex-col items-center overflow-x-hidden`}
      >
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
