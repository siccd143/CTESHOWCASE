import type { Metadata } from "next";
import { GlobalOrangeCursor } from "@/components/global-orange-cursor";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ayaan Bijinemula",
  description: "A personal portfolio for Ayaan Bijinemula.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GlobalOrangeCursor />
        {children}
      </body>
    </html>
  );
}
