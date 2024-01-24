import type { Metadata } from "next";
import { Nova_Square } from "next/font/google";
import "./globals.css";

const nova = Nova_Square({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Path of Gaming",
  description: "The gaming coach",
  icons: {
    icon: "favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nova.className} bg-[#0A0908]`}>{children}</body>
    </html>
  );
}
