import type { Metadata } from "next";
import { Hind } from "next/font/google";
import "./globals.css";

const hind = Hind({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-hind",
});

export const metadata: Metadata = {
  title: "Christofer Villagrán - Desarrollo Web, TI y UX",
  description:
    "Portafolio de Christofer Villagrán: desarrollo web, soporte TI, análisis operacional, automatización y experiencia de usuario.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${hind.variable} antialiased`}>{children}</body>
    </html>
  );
}
