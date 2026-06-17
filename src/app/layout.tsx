import type { Metadata } from "next";
import { cormorant, josefin } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Haze Lab Studio",
  description: "Haze Lab Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${josefin.variable} h-full antialiased`}
    >
      <body
        className={`${josefin.className} flex min-h-full flex-col bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
