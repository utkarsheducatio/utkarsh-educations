import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Utkarsh Education - Best NEET, JEE, MHT-CET Coaching in Akola",
  description: "Utkarsh Education provides the best and high quality education for NEET | JEE | MHTCET entrance exams with regular classes, doubt sessions, mock tests, and personal attention.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
