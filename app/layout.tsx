import type { Metadata } from "next";
import { Russo_One, Hind } from "next/font/google";
import "./globals.css";

const russoOne = Russo_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-russo",
});

const hind = Hind({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-hind",
});

export const metadata: Metadata = {
  title: "Christofer Villagran — Desarrollador Web & Soporte TI",
  description: "Portafolio de Christofer Villagran. Desarrollador Web con Next.js, especialista en Soporte TI y Medios Digitales. Disponible en Santiago, Chile.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${russoOne.variable} ${hind.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}