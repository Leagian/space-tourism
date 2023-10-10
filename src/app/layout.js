import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Space Tourism",
  description: "Travel to space",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="fr">
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <body className={inter.className}>{children}</body>
      </html>
    </>
  );
}
