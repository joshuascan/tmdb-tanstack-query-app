import type { Metadata } from "next";
import TanstackProvider from "@/components/providers/TanstackProvider";
import "./globals.css";
import { css } from "../../styled-system/css";

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
      <body className={css({ bg: "#ffffff" })}>
        <TanstackProvider>{children}</TanstackProvider>
      </body>
    </html>
  );
}
