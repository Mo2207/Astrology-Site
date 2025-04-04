

import type { Metadata } from "next";
import { Geist, Geist_Mono, Raleway } from "next/font/google";
import "./globals.css";
import I18nProvider from "../app/components/I18nProvider";
import Script from "next/script";

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

export default function RootLayout({ children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" className={`${raleway.variable} overflow-x-hidden w-[100vw]`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden w-[100vw]`}
      >

      {/* meta pixel code */}
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '663368119726030');
          fbq('track', 'PageView');
        `}
      </Script>
      
      {/* Meta Pixel NoScript fallback */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=663368119726030&ev=PageView&noscript=1"
        />
      </noscript>

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9V0PJQ81XL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9V0PJQ81XL');
          `}
        </Script>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
