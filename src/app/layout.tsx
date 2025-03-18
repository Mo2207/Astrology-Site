
import type { Metadata } from "next";
import { Geist, Geist_Mono, Raleway } from "next/font/google";
import "./globals.css";
import I18nProvider from "../app/components/I18nProvider";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // All weights
  variable: "--font-raleway",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mariya Kovalenko",
  description: "Online Intensive Resource",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${raleway.variable} overflow-x-hidden w-[100vw]`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden w-[100vw]`}
      >
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
