import type { Metadata } from "next";
import { Component as MagicCursor } from "@/components/ui/magic-cursor";
import "./globals.css";

export const metadata: Metadata = {
  title: "CTE Showcase",
  description: "A modern showcase for Career and Technical Education programs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MagicCursor />
        {children}
      </body>
    </html>
  );
}
