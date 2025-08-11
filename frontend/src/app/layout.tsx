import type { Metadata } from "next";
import { Atkinson_Hyperlegible } from "next/font/google";
import "../core/styles/globals.css";
import Header from "@/core/ui/layout/header";
import Footer from "@/core/ui/layout/footer";
import Providers from "@/core/ui/providers";

const atkinson = Atkinson_Hyperlegible({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Richard AI",
  description: "Become a better version of yourself",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${atkinson.className}`}>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
