import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AOSInit from "@/components/AOSInit";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Women of Purpose International Network (W.O.P.I.N)",
  description: "Women of Purpose International Network (W.O.P.I.N)",
  openGraph: {
    title: "Women of Purpose International Network (W.O.P.I.N)",
    description: "Women of Purpose International Network (W.O.P.I.N)",
    url: "https://wopin-wheat.vercel.app",
    siteName: "Women of Purpose International Network (W.O.P.I.N)",
    images: [
      {
        url: "/header2.jpg",
        width: 1200,
        height: 630,
        alt: "WOPIN Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <AOSInit />
        {children}
      </body>
    </html>
  );
}