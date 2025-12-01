import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {isMobile,isTablet} from 'react-device-detect';
import { headers } from 'next/headers';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "Smart Inventory Management Software for Manufacturers | Third Eye Creative",
  description:
    "Improve manufacturing efficiency with Third Eye Creative’s inventory software. Real-time tracking, analytics, alerts, and seamless workflows for faster production decisions.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  
  const deviceClass = isTablet ? 'is-tablet' : (isMobile ? 'is-mobile' : 'is-desktop');
  console.log(deviceClass);
  
  return (
    <html lang="en">
      {/* add the mobile viewport */}
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="light only" />
      </head>
      <body
        cz-shortcut-listen="true"
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${deviceClass}`}
      >
        {children}
      </body>
    </html>
  );
}
