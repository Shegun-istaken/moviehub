import "./globals.css";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

const DMSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MovieBox",
  description: "Home for Everything Movies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={DMSans.className}>{children}</body>
    </html>
  );
}
