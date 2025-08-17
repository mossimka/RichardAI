import type { Metadata } from "next";
import "../core/styles/globals.css";
import Header from "@/core/ui/layout/header";
import Footer from "@/core/ui/layout/footer";
import Providers from "@/core/ui/providers";

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
      <head>
        <title>Richard AI</title>
        <link rel="icon" href="/logo.ico" />
      </head>
      <body>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
