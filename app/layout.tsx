import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./ui/navbar";

export const metadata: Metadata = {
  title: "House Inventory App",
  description: "An app to keep track of your house inventory",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-full max-w-full m-0">
      <body className="w-full max-w-full m-0">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
