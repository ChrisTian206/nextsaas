import type { Metadata } from "next";
import { Source_Sans_3 as fontSans } from "next/font/google";
import "./globals.css";

const fontSansConfig = fontSans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});


export const metadata: Metadata = {
  title: "ChatPDF",
  description: "This is a saas for chat with PDF files",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontSansConfig.variable} ${fontSansConfig.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
