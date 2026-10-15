import type { Metadata } from "next";
import { Archivo, Inter, Montserrat } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-meta",
});

export const metadata: Metadata = {
  title: "Christofer Villagrán - Desarrollo Web, UX/UI y Sistemas",
  description:
    "Portafolio de Christofer Villagrán: desarrollo frontend, UX/UI, soporte técnico, sistemas y productos digitales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${archivo.variable} ${inter.variable} ${montserrat.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
