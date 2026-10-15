"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";

const profile = {
  name: "Christofer Villagrán",
  initials: "CVR",
  role: "Desarrollo web · UX/UI · Sistemas",
  location: "Santiago, Chile",
  email: "villagranchristofer997@gmail.com",
  phone: "+56 9 5174 8432",
  whatsapp: "https://wa.me/56951748432",
  github: "https://github.com/chr1stack",
  cv: "/christofer-villagran-cv.pdf",
  summary:
    "Conecto desarrollo frontend, experiencia de usuario y operación real para convertir procesos complejos en sistemas claros.",
};

const navItems = [
  ["Trabajo", "#proyectos"],
  ["Perfil", "#perfil"],
  ["Stack", "#stack"],
  ["Experiencia", "#experiencia"],
  ["Contacto", "#contacto"],
];

const heroStack = [
  { name: "Next.js", logo: "/logos/nextdotjs.svg", color: "#000000" },
  { name: "TypeScript", logo: "/logos/typescript.svg", color: "#3178c6" },
  { name: "React", logo: "/logos/react.svg", color: "#00a3ff" },
  { name: "Tailwind", logo: "/logos/tailwindcss.svg", color: "#0ea5e9" },
  { name: "WordPress", logo: "/logos/wordpress.svg", color: "#21759b" },
  { name: "Figma", logo: "/logos/figma.svg", color: "#a259ff" },
  { name: "GitHub", logo: "/logos/github.svg", color: "#000000" },
];

const heroFacts = [
  ["03", "casos reales"],
  ["2026", "web actual"],
  ["ERP", "operación + sistemas"],
];

const services = [
  {
    number: "01",
    title: "Desarrollo web",
    description: "Next.js, React, TypeScript, Tailwind y performance visual.",
  },
  {
    number: "02",
    title: "UX/UI aplicada",
    description:
      "Arquitectura de información, jerarquía, claridad y experiencia.",
  },
  {
    number: "03",
    title: "Sistemas y soporte",
    description:
      "ERP, redes, continuidad operativa y plataformas empresariales.",
  },
  {
    number: "04",
    title: "Automatización operacional",
    description:
      "Procesos, datos, órdenes, trazabilidad y resolución de errores.",
  },
];

const technologies = [
  {
    name: "Next.js",
    logo: "/logos/nextdotjs.svg",
    color: "#000000",
    context: "Migración web, componentes, performance y estructura frontend.",
  },
  {
    name: "TypeScript",
    logo: "/logos/typescript.svg",
    color: "#3178c6",
    context: "Código más claro, mantenible y preparado para crecer.",
  },
  {
    name: "React",
    logo: "/logos/react.svg",
    color: "#00a3ff",
    context:
      "Interfaces interactivas, módulos reutilizables y estados visuales.",
  },
  {
    name: "Tailwind CSS",
    logo: "/logos/tailwindcss.svg",
    color: "#0ea5e9",
    context: "Sistemas visuales responsivos con composición precisa.",
  },
  {
    name: "WordPress",
    logo: "/logos/wordpress.svg",
    color: "#21759b",
    context:
      "Administración, mantención y migración de sitios institucionales.",
  },
  {
    name: "Figma",
    logo: "/logos/figma.svg",
    color: "#a259ff",
    context: "Prototipado, revisión visual, layout y decisiones UX.",
  },
  {
    name: "GitHub",
    logo: "/logos/github.svg",
    color: "#000000",
    context: "Control de versiones y coordinación técnica.",
  },
  {
    name: "Cloudflare",
    logo: "/logos/cloudflare.svg",
    color: "#ff4500",
    context: "Dominios, despliegue y soporte para proyectos web.",
  },
  {
    name: "SAP",
    logo: "/logos/sap.svg",
    color: "#0faaff",
    context: "Soporte y participación en migración desde JustTime a SAP.",
  },
  {
    name: "OSM / UIM",
    logo: null,
    color: "#ff4500",
    context: "Gestión y análisis de órdenes en plataformas operacionales.",
  },
  {
    name: "SIEBEL / TOA / BRM",
    logo: null,
    color: "#000000",
    context: "Revisión de inconsistencias y continuidad de flujo operacional.",
  },
  {
    name: "RANDOM ERP",
    logo: null,
    color: "#ff4500",
    context: "Cargas masivas, depuración y parametrización de información.",
  },
];

const projects = [
  {
    number: "01",
    name: "Del Carpio",
    category: "Migración web corporativa",
    href: "/proyectos/del-carpio",
    image: null,
    visualTitle: "migration.config.ts",
    visualCode: `from: "WordPress"
to: "Next.js"
focus: ["Catálogo", "Fichas", "360"]`,
    description:
      "Migración desde WordPress hacia una arquitectura moderna con Next.js, TypeScript y Tailwind.",
    result:
      "Catálogo filtrable, fichas dinámicas, tour 360 y una base preparada para rendimiento.",
    stack: ["Next.js", "TypeScript", "Tailwind", "WordPress"],
  },
  {
    number: "02",
    name: "C3ACADEMY",
    category: "Plataforma educativa digital",
    href: "https://c3academy.cl",
    image: "/projects/c3academy.webp",
    description:
      "Producto educativo con cursos online, podcast, comunidad, expositores y base para dashboard futuro.",
    result:
      "Una experiencia web clara para presentar contenido educativo y escalar comunidad.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Cloudflare"],
  },
  {
    number: "03",
    name: "FTBB",
    category: "Portal institucional",
    href: "https://ftbb.edu.br/",
    image: "/ftbb.png",
    description:
      "Sitio institucional y soporte digital para una institución educativa en Brasil.",
    result: "Gestión WordPress, contenido, medios digitales y soporte TI.",
    stack: ["WordPress", "SEO", "Contenido digital", "Soporte TI"],
  },
];

const experience = [
  {
    period: "2026 - Actualidad",
    role: "Desarrollador Web",
    company: "Del Carpio Ltda · Santiago",
    text: "Migración desde WordPress a Next.js, fichas dinámicas, catálogo filtrable, tour virtual 360 y optimización de rendimiento.",
    tools: ["Next.js", "TypeScript", "Tailwind", "Core Web Vitals"],
  },
  {
    period: "2025",
    role: "Analista de Órdenes",
    company: "HAINTECH · ClaroVTR",
    text: "Regularización de órdenes fallidas, análisis de inconsistencias y soporte a plataformas operacionales.",
    tools: ["OSM", "UIM", "SIEBEL", "TOA", "BRM"],
  },
  {
    period: "2025",
    role: "Coordinador TI y Medios Digitales",
    company: "Faculdade Batista Teológica de Brasília",
    text: "Administración del sitio institucional, soporte TI, campañas digitales y mejora de presencia online.",
    tools: ["WordPress", "SEO", "Marketing digital", "Soporte TI"],
  },
  {
    period: "2023 - 2025",
    role: "Asistente Informático",
    company: "Francisco Petricio · Antofagasta",
    text: "Soporte en hardware, software y redes; administración de JustTime y apoyo en migración hacia SAP.",
    tools: ["SAP", "JustTime", "Redes", "Hardware"],
  },
  {
    period: "2019 - 2023",
    role: "Operación, datos y redes",
    company: "Metecno · TECHINT · VTR",
    text: "Control operacional, depuración de datos, cargas ERP, inventario, producción y mantenimiento de redes.",
    tools: ["RANDOM ERP", "Producción", "Inventario", "Redes"],
  },
];

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      ✦
    </span>
  );
}

function TechLogo({
  name,
  logo,
  color,
}: {
  name: string;
  logo: string | null;
  color: string;
}) {
  return (
    <span
      className="tech-logo"
      style={{ "--brand-color": color } as CSSProperties}
    >
      {logo ? (
        <Image
          src={logo}
          alt=""
          width={22}
          height={22}
          unoptimized
          aria-hidden="true"
        />
      ) : (
        <span aria-hidden="true">{name.slice(0, 2).toUpperCase()}</span>
      )}
    </span>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const onPointerDown = (event: PointerEvent) => {
      if (!panelRef.current?.contains(event.target as Node)) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, []);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a href="#inicio" className="wordmark" aria-label="Ir al inicio">
          <BrandMark />
          <span>{profile.name}</span>
        </a>

        <nav className="desktop-nav" aria-label="Principal">
          {navItems.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>

        <a href={`mailto:${profile.email}`} className="header-cta">
          Iniciar proyecto
        </a>

        <div ref={panelRef} className="mobile-menu-shell">
          <button
            type="button"
            className="mobile-menu-button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            Menú
          </button>

          {open && (
            <div id="mobile-menu" className="mobile-menu">
              {navItems.map(([label, href]) => (
                <a key={href} href={href} onClick={() => setOpen(false)}>
                  {label}
                </a>
              ))}
              <a href={profile.cv} download onClick={() => setOpen(false)}>
                Descargar CV
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="section-heading">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      {text ? <span>{text}</span> : null}
    </div>
  );
}

function AbstractProjectVisual({
  title,
  code,
}: {
  title: string;
  code: string;
}) {
  return (
    <div className="abstract-project" aria-hidden="true">
      <div className="abstract-project__shape" />
      <div className="abstract-project__panel">
        <span>{title}</span>
        <code>{code}</code>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <Header />

      <section id="inicio" className="hero">
        <div className="hero__backdrop" aria-hidden="true">
          C
        </div>

        <div className="hero__content">
          <div className="hero__copy" data-reveal>
            <h1>
              No presento un CV.
              <span>Construyo sistemas digitales.</span>
            </h1>
            <p className="hero__summary">{profile.summary}</p>

            <div className="hero-identity" aria-label="Perfil profesional">
              <strong>Christofer Villagrán Rivera</strong>
              <span>
                Desarrollador web frontend con base en UX/UI, soporte TI,
                sistemas operacionales y resolución de problemas digitales.
              </span>
            </div>

            <div className="hero__actions" aria-label="Acciones principales">
              <a href="#proyectos">Ver trabajo</a>
              <a href={profile.cv} download>
                Descargar CV
              </a>
            </div>
          </div>

          <div className="hero__portrait" data-reveal>
            <div className="hero-seal" aria-hidden="true">
              <span>· CODE · UX · IMPACT · </span>
            </div>
            <div className="portrait-cut">
              <Image
                src="/foto.png"
                alt="Retrato real de Christofer Villagrán"
                fill
                preload
                className="object-cover object-top grayscale"
                sizes="(min-width: 1024px) 34vw, 92vw"
              />
            </div>
            <div className="code-note" aria-label="Resumen técnico">
              <span>{}</span>
              <code>frontend · UX · sistemas</code>
            </div>
          </div>

          <div className="hero__bottom" data-reveal>
            <div className="tech-row" aria-label="Tecnologías de trabajo">
              {heroStack.map((item) => (
                <span
                  key={item.name}
                  style={{ "--brand-color": item.color } as CSSProperties}
                >
                  <Image
                    src={item.logo}
                    alt=""
                    width={18}
                    height={18}
                    unoptimized
                    aria-hidden="true"
                  />
                  {item.name}
                </span>
              ))}
            </div>

            <div className="hero-facts" aria-label="Resumen profesional">
              {heroFacts.map(([value, label]) => (
                <div key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="perfil" className="services section-shell">
        <div className="services__intro">
          <p className="eyebrow">Qué hago</p>
          <h2>Diseño experiencias que también funcionan por dentro.</h2>
        </div>

        <div className="service-list">
          {services.map((service) => (
            <article key={service.number}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <b aria-hidden="true">↗</b>
            </article>
          ))}
        </div>
      </section>

      <section className="manifesto section-shell" aria-label="Manifiesto">
        <p>Tu web no debería verse como una plantilla.</p>
        <h2>Debe explicar valor antes de que alguien lea todo tu perfil.</h2>
        <a href="#contacto">Construyamos algo claro</a>
      </section>

      <section id="proyectos" className="projects section-shell">
        <SectionHeading
          eyebrow="Trabajo seleccionado"
          title="Proyectos presentados como productos reales."
          text="Menos galería. Más contexto, desafío, solución y resultado verificable."
        />

        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.name} className="project-card">
              <div className="project-card__media">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`Captura de pantalla del sitio ${project.name}`}
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 1024px) 42vw, 92vw"
                  />
                ) : (
                  <AbstractProjectVisual
                    title={project.visualTitle ?? project.name}
                    code={project.visualCode ?? project.description}
                  />
                )}
              </div>
              <div className="project-card__body">
                <p className="project-card__meta">
                  {project.number} · {project.category}
                </p>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <strong>{project.result}</strong>
                <ul>
                  {project.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a
                  href={project.href}
                  target={
                    project.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    project.href.startsWith("http") ? "noreferrer" : undefined
                  }
                >
                  Ver proyecto
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="stack" className="stack section-shell">
        <SectionHeading
          eyebrow="Stack"
          title="Herramientas con contexto, no logos decorativos."
          text="Cada tecnología aparece conectada a una situación real de trabajo, producto o soporte."
        />

        <div className="technology-grid">
          {technologies.map((technology) => (
            <article
              key={technology.name}
              style={{ "--brand-color": technology.color } as CSSProperties}
            >
              <TechLogo
                name={technology.name}
                logo={technology.logo}
                color={technology.color}
              />
              <h3>{technology.name}</h3>
              <p>{technology.context}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="experiencia" className="experience section-shell">
        <SectionHeading
          eyebrow="Experiencia"
          title="Resolución de problemas en sistemas reales."
          text="La parte técnica importa, pero también importa entender operación, personas, datos y continuidad."
        />

        <div className="timeline">
          {experience.map((item) => (
            <article key={`${item.period}-${item.role}`}>
              <p>{item.period}</p>
              <div>
                <h3>{item.role}</h3>
                <span>{item.company}</span>
              </div>
              <div>
                <p>{item.text}</p>
                <ul>
                  {item.tools.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contacto" className="contact section-shell">
        <div>
          <p className="eyebrow">Contacto</p>
          <h2>Hagamos que tu próximo sistema sea fácil de entender.</h2>
          <p>
            Disponible para proyectos web, mejora de interfaces, soporte técnico
            y soluciones digitales con foco operativo.
          </p>
          <a href={`mailto:${profile.email}`}>Iniciar proyecto</a>
        </div>

        <address>
          <span>{profile.location}</span>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.whatsapp} target="_blank" rel="noreferrer">
            {profile.phone}
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </address>
      </section>

      <footer className="footer">
        <a href="#inicio" className="wordmark">
          <BrandMark />
          <span>{profile.name}</span>
        </a>
        <p>© 2026 · Desarrollo web, UX/UI y sistemas.</p>
        <div>
          <a href={profile.cv} download>
            CV
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={`mailto:${profile.email}`}>Correo</a>
        </div>
      </footer>
    </main>
  );
}
