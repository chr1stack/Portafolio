import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";

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
    <main>
      <nav className="cs-nav" aria-label="Navegación del caso de estudio">
        <div className="cs-wrap">
          <Link href="/#proyectos" className="cs-back">
            ← Volver a proyectos
          </Link>
        </div>
      </nav>

      <header className="cs-header">
        <div className="cs-wrap">
          <p className="eyebrow">Caso de estudio · 01</p>
          <h1>Del Carpio</h1>
          <p className="cs-header__cat">Migración web corporativa</p>
          <span className="cs-badge">Lanzamiento noviembre 2026</span>
        </div>
      </header>

      <div className="cs-hero" aria-hidden="true">
        <div className="cs-wrap">
          <div className="cs-code-panel">
            <span>migration.config.ts</span>
            <code>{`from: "WordPress"\nto: "Next.js"\nstatus: "Lanzamiento nov 2026"`}</code>
          </div>
        </div>
      </div>

      <section className="cs-body" aria-label="Descripción del proyecto">
        <div className="cs-wrap cs-body__grid">
          <div className="cs-body__col">
            <div className="cs-text-block">
              <h2>Rol</h2>
              <p>
                Diseñador y desarrollador web en Del Carpio. Responsable del
                diseño, la migración de contenido y la implementación completa
                del nuevo sitio.
              </p>
            </div>
            <div className="cs-text-block">
              <h2>Contexto</h2>
              <p>
                Del Carpio es una empresa chilena del rubro industrial. Su sitio
                anterior, construido sobre WordPress, presentaba tiempos de
                carga elevados, un catálogo difícil de mantener y sin soporte
                para experiencias interactivas como tours virtuales.
              </p>
              <p>
                El objetivo fue migrar a una arquitectura moderna que mejorara
                el rendimiento, facilitara la gestión del catálogo y permitiera
                integrar un tour 360° sin degradar la experiencia.
              </p>
            </div>
          </div>

          <div className="cs-body__col">
            <div className="cs-text-block">
              <h2>Stack</h2>
              <ul className="cs-stack-list">
                {stack.map((item) => (
                  <li
                    key={item.name}
                    className="cs-stack-tag"
                    style={{ "--brand-color": item.color } as CSSProperties}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        className="cs-achievements-section"
        aria-labelledby="logros-heading"
      >
        <div className="cs-wrap">
          <p className="eyebrow" id="logros-heading">
            Logros
          </p>
          <ul className="cs-achievements-grid">
            {achievements.map((item) => (
              <li key={item.label} className="cs-achievement-card">
                <strong>{item.metric}</strong>
                <span>{item.label}</span>
                <p>{item.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="cs-resultado"
        aria-labelledby="resultado-heading"
      >
        <div className="cs-wrap">
          <h2 id="resultado-heading">Resultado</h2>
          <p>
            Catálogo filtrable de más de 80 productos con fichas dinámicas, tour
            virtual 360° integrado y una base preparada para escalar. El Speed
            Index bajó de 16.3s a 3.4s, mejorando la experiencia en dispositivos
            móviles.
          </p>
        </div>
      </section>

      <div className="cs-footer-bar">
        <div className="cs-wrap">
          <Link href="/#proyectos" className="cs-back-btn">
            ← Ver todos los proyectos
          </Link>
        </div>
      </div>
    </main>
  );
}
