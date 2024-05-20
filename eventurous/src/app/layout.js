import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Eventurous",
  description: "Eventurous offers full-service event management for  unforgettable corporate and business events. Specializing in innovative event planning, design, logistics, and on-site coordination, we deliver professional, high-quality experiences tailored to your unique needs. Experience excellence and creativity with Eventurous – where every event is an adventure",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
