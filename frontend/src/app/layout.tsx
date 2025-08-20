import type { Metadata } from "next";
import "../core/styles/globals.css";
import Header from "@/core/ui/layout/header/header";
import Footer from "@/core/ui/layout/footer";
import Providers from "@/core/ui/providers";
import { Atkinson_Hyperlegible } from "next/font/google";

export const metadata: Metadata = {
  title: "Richard AI",
  description: "Become a better version of yourself",
  icons: {
    icon: "/logo.ico",
  },
};

const atkinson = Atkinson_Hyperlegible({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

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
