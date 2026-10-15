import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Del Carpio — Caso de estudio | Christofer Villagrán",
  description:
    "Migración web corporativa de Del Carpio: de WordPress a Next.js con TypeScript y Tailwind. Speed Index de 16.3s a 3.4s, catálogo de +80 productos y tour 360°.",
};

const stack = [
  { name: "Next.js", color: "#000000" },
  { name: "TypeScript", color: "#3178c6" },
  { name: "Tailwind CSS", color: "#0ea5e9" },
  { name: "Vercel", color: "#000000" },
];

const achievements = [
  {
    metric: "16.3s → 3.4s",
    label: "Speed Index",
    detail: "Reducción de carga inicial medida con Lighthouse.",
  },
  {
    metric: "+80",
    label: "Productos en catálogo",
    detail: "Fichas dinámicas con filtros por categoría y especificaciones.",
  },
  {
    metric: "360°",
    label: "Tour virtual",
    detail: "Recorrido interactivo integrado directamente en el sitio.",
  },
];

export default function DelCarpioPage() {
  return (
    <main className="case-study">
      <nav className="case-study__breadcrumb">
        <Link href="/#proyectos">← Volver a proyectos</Link>
      </nav>

      <header className="case-study__header">
        <p className="eyebrow">Caso de estudio · 01</p>
        <h1>Del Carpio</h1>
        <p className="case-study__category">Migración web corporativa</p>

        <span className="case-study__badge">Lanzamiento noviembre 2026</span>
      </header>

      <section className="case-study__section" aria-labelledby="rol-heading">
        <h2 id="rol-heading">Rol</h2>
        <p>
          Desarrollador web frontend responsable del diseño técnico, la
          migración de contenido y la implementación completa del nuevo sitio.
          Trabajo directo con el cliente desde el relevamiento hasta el
          despliegue.
        </p>
      </section>

      <section className="case-study__section" aria-labelledby="contexto-heading">
        <h2 id="contexto-heading">Contexto</h2>
        <p>
          Del Carpio es una empresa chilena del rubro industrial. Su sitio
          anterior, construido sobre WordPress, presentaba tiempos de carga
          elevados, un catálogo difícil de mantener y sin soporte para
          experiencias interactivas como tours virtuales.
        </p>
        <p>
          El objetivo fue migrar a una arquitectura moderna que mejorara el
          rendimiento, facilitara la gestión del catálogo y permitiera integrar
          un tour 360° sin degradar la experiencia.
        </p>
      </section>

      <section className="case-study__section" aria-labelledby="stack-heading">
        <h2 id="stack-heading">Stack</h2>
        <ul className="case-study__stack">
          {stack.map((item) => (
            <li
              key={item.name}
              className="case-study__stack-item"
              style={{ "--brand-color": item.color } as React.CSSProperties}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </section>

      <section className="case-study__section" aria-labelledby="logros-heading">
        <h2 id="logros-heading">Logros</h2>
        <ul className="case-study__achievements">
          {achievements.map((item) => (
            <li key={item.label} className="case-study__achievement">
              <strong>{item.metric}</strong>
              <span>{item.label}</span>
              <p>{item.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="case-study__section" aria-labelledby="resultado-heading">
        <h2 id="resultado-heading">Resultado</h2>
        <p>
          Catálogo filtrable de más de 80 productos con fichas dinámicas, tour
          virtual 360° integrado y una base preparada para escalar. El Speed
          Index bajó de 16.3s a 3.4s, mejorando la experiencia en dispositivos
          móviles y el posicionamiento orgánico.
        </p>
      </section>

      <footer className="case-study__footer">
        <Link href="/#proyectos">← Ver todos los proyectos</Link>
      </footer>
    </main>
  );
}
