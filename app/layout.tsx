import type { Metadata } from "next";
import { Roboto as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Head from "next/head";

const fontSans = FontSans({weight : ['100','300','400','500','700','900'],subsets : ['latin'],variable : '--font-roboto'});

export const metadata: Metadata = {
  title: "The movie center",
  description:
    "Explore a vast collection of movies ranging from the latest blockbusters to timeless classics, all curated to suit your taste. Our intuitive interface allows you to effortlessly browse genres, watch trailers, and read reviews, ensuring you find the perfect film for any mood.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scrollbar-hide ">
      <Head>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <body
        className={cn(
          "min-h-screen bg-[#121212]  text-white font-sans antialiased ",
          fontSans.variable
        )}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
