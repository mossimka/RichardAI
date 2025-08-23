import type { Metadata } from "next";
import "../core/styles/globals.css";
import Header from "@/core/ui/layout/header/header";
import Footer from "@/core/ui/layout/footer";
import Providers from "@/core/ui/providers";
import {
  Unbounded,
  Lora,
  Merriweather,
  Libre_Baskerville,
} from "next/font/google";

export const metadata: Metadata = {
  title: "Richard AI",
  description: "Become a better version of yourself",
  icons: {
    icon: "/logo.ico",
  },
};

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-unbounded",
});

const libre_baskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"], // normal + bold
  style: ["normal", "italic"], // optional
  variable: "--font-libre-baskerville",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${unbounded.variable} ${libre_baskerville.variable}`}>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
