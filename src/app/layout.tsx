import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header_Section from "./Components/Header_Section";
import Footer_Section from "./Components/Footer_Section";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ship-over",
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header_Section/>
        {children}
        <Footer_Section/>
        </body>
    </html>
  );
}
