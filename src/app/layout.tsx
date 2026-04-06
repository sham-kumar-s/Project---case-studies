import "./globals.css";
import Footer from "@/app/components/ui/Footer";

export const metadata = {
  title: "Case Studies",
  description: "Engineering case studies and system design deep dives",
};

import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

import AppNavbar from "@/app/components/ui/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body className={`${manrope.className} bg-gray-50 text-neutral-900 antialiased`} suppressHydrationWarning>
        <AppNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
