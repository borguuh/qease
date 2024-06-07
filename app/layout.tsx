import "./styles/globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import AppProvider from "@/source/components/general/AppProvider";

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "QEase - Navigating Queues with Ease!!!!!!",
  description: "Our innovative queue management system streamlines the queuing processes in banks, hospitals, and other companies, enhancing customer experience and operational efficiency.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <meta name="theme-color" content="#000000"></meta>
    </head>
    <body className={`${poppins.variable} font-poppins tracking-wide`}>
      <AppProvider>
        {children}
      </AppProvider>
    </body>
  </html>
  );
}
