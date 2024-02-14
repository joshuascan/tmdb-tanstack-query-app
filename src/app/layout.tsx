import type { Metadata } from "next";
import TanstackProvider from "@/components/providers/TanstackProvider";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "TMDB App",
  description: "TMDB app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TanstackProvider>
          <Header />
          {children}
        </TanstackProvider>
      </body>
    </html>
  );
}
