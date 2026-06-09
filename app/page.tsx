"use client";

import Image from "next/image";
import { useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";

const profile = {
  name: "Christofer Villagrán",
  location: "Santiago, Chile",
  email: "villagranchristofer997@gmail.com",
  whatsapp: "https://wa.me/56951748432",
  github: "https://github.com/chr1stack",
  role: "Desarrollo Web · Soporte TI · UX Operativo · Automatización",
  summary:
    "Combino tecnología, operación y experiencia de usuario para convertir problemas complejos en sistemas claros, útiles y mantenibles.",
};

const nav = [
  ["Trabajo", "#trabajo"],
  ["Impacto", "#impacto"],
  ["Habilidades", "#habilidades"],
  ["Tecnologías", "#tecnologias"],
  ["Contacto", "#contacto"],
];

type Project = {
  number: string;
  name: string;
  type: string;
  image: string;
  link: string;
  intro: string;
  problem: string;
  solution: string;
  result: string;
  stack: string[];
  theme: string;
};

const projects: Project[] = [
  {
    number: "01",
    name: "Avora",
    type: "Producto educativo digital",
    image: "/avora.png",
    link: "https://avora-phi.vercel.app",
    intro:
      "Plataforma digital de cursos online para transformar conocimiento de comunidad en una experiencia clara, moderna y escalable.",
    problem:
      "El contenido educativo necesitaba una presencia digital que transmitiera confianza, orden y potencial comercial.",
    solution:
      "Diseñé y construí una plataforma con Next.js, estructura editorial, secciones de cursos y despliegue en Vercel.",
    result:
      "Producto publicado y listo para evolucionar hacia lanzamiento, contenidos y ventas.",
    stack: ["Next.js", "React", "Tailwind", "Framer Motion", "Vercel"],
    theme: "bg-[#e9fff4]",
  },
  {
    number: "02",
    name: "FTBB",
    type: "Web institucional y medios digitales",
    image: "/ftbb.png",
    link: "https://ftbb.edu.br/",
    intro:
      "Gestión y optimización digital para una institución académica en Brasil.",
    problem:
      "La institución necesitaba mejorar visibilidad, contenido y claridad en su presencia online.",
    solution:
      "Administré WordPress, contenidos, campañas, soporte digital y optimización de comunicación institucional.",
    result:
      "Presencia digital más consistente, legible y conectada con su comunidad.",
    stack: ["WordPress", "SEO", "Marketing Digital", "Contenido", "Analítica"],
    theme: "bg-[#eaf2ff]",
  },
];

const impact = [
  {
    title: "Regularización de órdenes para Claro y VTR",
    company: "HAINTECH · Analista de Órdenes",
    period: "2025",
    text: "Análisis de errores complejos, revisión de estados y coordinación entre plataformas para recuperar continuidad operativa.",
    tools: ["OSM", "UIM", "SIEBEL", "TOA", "BRM", "GSA"],
  },
  {
    title: "Transformación digital académica en Brasil",
    company: "Faculdade Batista · Coordinador de TI y Medios Digitales",
    period: "2025",
    text: "Gestión web, soporte TI, campañas, contenido y optimización digital para mejorar visibilidad institucional.",
    tools: ["WordPress", "SEO", "Marketing Digital", "Soporte TI"],
  },
  {
    title: "Migración y soporte de sistemas internos",
    company: "Francisco Petricio · Asistente Informático",
    period: "2023 - 2025",
    text: "Apoyo en migración de JustTime a SAP, soporte a usuarios, continuidad técnica y resolución diaria de incidencias.",
    tools: ["SAP", "ERP", "Redes", "Hardware", "Soporte"],
  },
  {
    title: "Datos operativos y parametrización",
    company: "Metecno · Digitador",
    period: "2022 - 2023",
    text: "Cargas masivas, revisión de datos y parametrización en ERP con foco en precisión y orden.",
    tools: ["ERP", "RANDOM", "Bases de datos"],
  },
  {
    title: "Control operativo en terreno",
    company: "TECHINT · Asistente de Producción",
    period: "2021 - 2022",
    text: "Control de producción y seguimiento de información para equipos de más de 150 trabajadores.",
    tools: ["Gestión", "Logística", "Control"],
  },
  {
    title: "Infraestructura y conectividad",
    company: "VTR / Emetel · Asistente de Redes",
    period: "2019 - 2021",
    text: "Mantenimiento de nodos ópticos, soporte de conectividad y aprendizaje técnico desde infraestructura real.",
    tools: ["Redes", "Fibra", "BLE", "BTD"],
  },
];

const skills = [
  {
    area: "Infraestructura",
    value: "Entiendo redes, conectividad, equipos y continuidad técnica.",
    items: ["Redes", "Fibra", "Hardware", "Diagnóstico", "Continuidad"],
  },
  {
    area: "Desarrollo Web",
    value: "Construyo interfaces modernas, responsivas y fáciles de entender.",
    items: ["Next.js", "React", "Tailwind", "HTML", "CSS", "JavaScript"],
  },
  {
    area: "Soporte TI",
    value: "Resuelvo incidencias, acompaño usuarios y ordeno sistemas.",
    items: ["SAP", "ERP", "Usuarios", "Documentación", "Escalamiento"],
  },
  {
    area: "Automatización",
    value: "Uso IA y herramientas digitales para acelerar tareas y mejorar procesos.",
    items: ["ChatGPT", "Claude", "Prompts", "Flujos", "Productividad"],
  },
  {
    area: "Experiencia de Usuario",
    value: "Organizo información para que el usuario sepa qué hacer y por qué importa.",
    items: ["UI/UX", "Figma", "Jerarquía", "Storytelling", "Claridad"],
  },
  {
    area: "Análisis Operacional",
    value: "Cruzo datos, plataformas y errores para encontrar causas reales.",
    items: ["Órdenes", "Patrones", "Datos", "Procesos", "Trazabilidad"],
  },
];

const tech = [
  ["OSM", "Regularización y seguimiento de órdenes en telecomunicaciones."],
  ["UIM", "Validación de información técnica asociada a servicios."],
  ["SIEBEL", "Revisión de datos comerciales, clientes y estados."],
  ["TOA", "Visibilidad operativa y coordinación de trabajo en terreno."],
  ["BRM", "Cruce de información para resolver inconsistencias."],
  ["SAP", "Soporte y adopción en migración de sistemas internos."],
  ["Dynamics 365", "Gestión y seguimiento de información operacional."],
  ["Next.js", "Construcción de productos web modernos y escalables."],
  ["React", "Interfaces interactivas basadas en componentes."],
  ["Tailwind", "Sistemas visuales rápidos, consistentes y responsivos."],
  ["GitHub", "Control de versiones y organización del trabajo técnico."],
  ["WordPress", "Gestión web institucional, contenido y optimización."],
];

const titleStyle = {
  fontFamily: "var(--font-hind), Arial, sans-serif",
  fontWeight: 600,
  letterSpacing: "-0.06em",
};

function Label({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`mb-4 text-xs font-semibold uppercase tracking-[0.28em] ${light ? "text-white/45" : "text-slate-500"}`}>
      {children}
    </p>
  );
}

function AnimatedWord({
  text,
  delay = 0,
  stroke = false,
  block = false,
}: {
  text: string;
  delay?: number;
  stroke?: boolean;
  block?: boolean;
}) {
  const chars = [...text];
  return (
    <span
      className={block ? "block pb-3" : "inline-block"}
      style={{ perspective: "800px" }}
    >
      {chars.map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          style={
            stroke
              ? {
                  WebkitTextStroke: "2.5px rgba(255,255,255,0.92)",
                  color: "transparent",
                }
              : {
                  color: "white",
                  textShadow: "0 2px 28px rgba(0,0,0,0.55)",
                }
          }
          initial={{ opacity: 0, y: 56, rotateX: -75 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.55,
            delay: delay + i * 0.04,
            ease: [0.33, 1, 0.68, 1],
          }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}


function ProjectRow({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);
  const [open, setOpen] = useState(false);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const smoothX = useSpring(rawX, { stiffness: 180, damping: 22 });
  const smoothY = useSpring(rawY, { stiffness: 180, damping: 22 });
  const imgX = useTransform(smoothX, (v) => v - 160);
  const imgY = useTransform(smoothY, (v) => v - 240);

  return (
    <div
      className="relative"
      onMouseMove={(e) => {
        rawX.set(e.clientX);
        rawY.set(e.clientY);
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <button
        className={`flex w-full items-center gap-6 border-b border-black/10 py-8 text-left transition-colors duration-200 md:gap-10 ${hovered ? "bg-black/[0.025]" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span className="w-10 shrink-0 text-sm font-semibold text-slate-400 md:w-16">
          {project.number}
        </span>
        <span
          className="flex-1 uppercase leading-none"
          style={{
            ...titleStyle,
            fontSize: "clamp(2.4rem, 5vw, 5rem)",
            color: hovered ? "#ef4b2a" : "inherit",
            transition: "color 0.2s ease",
          }}
        >
          {project.name}
        </span>
        <span className="hidden shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 md:block">
          {project.type}
        </span>
        <motion.span
          className="ml-auto shrink-0 text-xl text-slate-400"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
        >
          ↓
        </motion.span>
      </button>

      <AnimatePresence>
        {hovered && (
          <motion.div
            className="pointer-events-none fixed left-0 top-0 z-50 w-72 overflow-hidden rounded-2xl shadow-[0_24px_72px_rgba(15,23,42,0.28)] md:w-80"
            style={{ x: imgX, y: imgY }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.18 }}
          >
            <Image
              src={project.image}
              alt={project.name}
              width={320}
              height={200}
              className="h-auto w-full object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            style={{ overflow: "hidden" }}
          >
            <div className={`my-5 rounded-[1.6rem] ${project.theme} border border-black/8 p-6 md:p-10`}>
              <p className="mb-8 max-w-2xl text-xl leading-relaxed text-slate-600">
                {project.intro}
              </p>
              <div className="grid gap-5 border-t border-black/10 pt-6 md:grid-cols-3">
                {[
                  ["Problema", project.problem],
                  ["Solución", project.solution],
                  ["Resultado", project.result],
                ].map(([label, text]) => (
                  <div key={label}>
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-slate-500">
                      {label}
                    </p>
                    <p className="leading-snug text-slate-700">{text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-black/10 px-4 py-1.5 text-sm text-slate-700"
                  >
                    {item}
                  </span>
                ))}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="ml-auto rounded-full bg-black px-5 py-2.5 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#ef4b2a]"
                  onClick={(e) => e.stopPropagation()}
                >
                  Ver →
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Portfolio() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <main className="min-h-screen bg-[#f4f0e8] text-slate-950">
        <motion.div
          className="fixed left-0 top-0 z-50 h-1 bg-[#ef4b2a]"
          style={{ scaleX: progress, transformOrigin: "0%" }}
        />

        <nav className="fixed left-1/2 top-5 z-40 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 rounded-full border border-white/30 bg-black/70 px-5 py-3 text-white shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl">
          <div className="flex items-center justify-between gap-4">
            <a href="#inicio" className="text-sm font-semibold uppercase tracking-[0.28em]">
              CVR
            </a>
            <div className="hidden items-center gap-1 md:flex">
              {nav.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="rounded-full px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/55 transition hover:bg-white hover:text-black"
                >
                  {label}
                </a>
              ))}
            </div>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-black transition hover:bg-[#b8ff62]"
            >
              Hablemos
            </a>
          </div>
        </nav>

        {/* HERO */}
        <section
          id="inicio"
          className="hero-minimal relative min-h-screen overflow-x-hidden px-4 pb-10 pt-28 text-white md:px-8"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.14),transparent_36%)]" />
          <div className="relative mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl flex-col justify-end">
            <motion.div
              className="pb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="mb-8 flex flex-wrap gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <span className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/65">
                  {profile.location}
                </span>
                <span className="rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-black">
                  Disponible
                </span>
              </motion.div>

              <h1
                className="uppercase"
                style={{
                  ...titleStyle,
                  fontSize: "clamp(4rem, 11vw, 10rem)",
                  lineHeight: 0.88,
                }}
              >
                <AnimatedWord text="CHRISTOFER" delay={0.2} />
                <AnimatedWord text="VILLAGRÁN" delay={0.55} stroke block />
              </h1>

              <motion.div
                className="mt-8 grid max-w-3xl gap-4 md:grid-cols-[0.72fr_1.28fr]"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/40">
                  {profile.role}
                </p>
                <p className="text-xl leading-snug text-white/76 md:text-2xl">
                  {profile.summary}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* SOBRE MÍ */}
        <section className="bg-[#f4f0e8] px-4 py-24 md:px-8 md:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Texto */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65 }}
            >
              <Label>Sobre mí</Label>
              <h2
                className="mb-6 uppercase leading-[0.88]"
                style={{ ...titleStyle, fontSize: "clamp(2.6rem, 5vw, 5rem)" }}
              >
                Tecnología con criterio humano
              </h2>
              <p className="mb-10 max-w-lg text-xl leading-relaxed text-slate-600">
                Autodidacta con más de 6 años combinando soporte TI, desarrollo web y medios digitales. He trabajado desde redes físicas hasta plataformas digitales en Chile y Brasil.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  ["6+", "Años"],
                  ["2", "Proyectos"],
                  ["5+", "Empresas"],
                  ["2", "Países"],
                ].map(([num, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-black/10 bg-white/60 px-6 py-5"
                  >
                    <p
                      className="leading-none text-slate-950"
                      style={{ ...titleStyle, fontSize: "clamp(2.4rem, 4vw, 3.2rem)" }}
                    >
                      {num}
                    </p>
                    <p className="mt-1 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Foto */}
            <motion.div
              className="relative h-[500px] overflow-hidden rounded-2xl shadow-[0_40px_120px_rgba(15,23,42,0.18)]"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, delay: 0.1 }}
            >
              <Image
                src="/foto.png"
                alt="Christofer Villagrán"
                fill
                className="object-cover object-top"
              />
            </motion.div>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="select-none overflow-hidden bg-black py-5">
          <motion.div
            className="flex whitespace-nowrap text-sm font-bold uppercase tracking-widest text-white"
            style={titleStyle}
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 18, ease: "linear", repeat: Infinity }}
          >
            {[...Array(4)].map((_, i) => (
              <span key={i} className="shrink-0 pr-20">
                DESARROLLO WEB &nbsp;·&nbsp; SOPORTE TI &nbsp;·&nbsp; UX OPERATIVO &nbsp;·&nbsp; AUTOMATIZACIÓN
              </span>
            ))}
          </motion.div>
        </div>

        {/* PROYECTOS */}
        <section id="trabajo" className="bg-[#f4f0e8] px-4 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 grid gap-6 md:grid-cols-[0.7fr_1.3fr]">
              <Label>Trabajo seleccionado</Label>
              <h2
                className="text-5xl uppercase leading-[0.9] md:text-8xl"
                style={titleStyle}
              >
                Proyectos presentados como productos reales.
              </h2>
            </div>
            <div className="border-t border-black/10">
              {projects.map((project) => (
                <ProjectRow key={project.name} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* IMPACTO */}
        <section id="impacto" className="bg-[#101010] px-4 py-24 text-white md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 grid gap-6 md:grid-cols-[0.72fr_1.28fr]">
              <Label light>Contribuciones</Label>
              <h2
                className="text-5xl uppercase leading-[0.9] md:text-8xl"
                style={titleStyle}
              >
                No son cargos. Son problemas resueltos.
              </h2>
            </div>
            <div className="grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10">
              {impact.map((item, index) => (
                <motion.article
                  key={item.title}
                  className="grid gap-6 bg-[#101010] p-6 transition hover:bg-white hover:text-black md:grid-cols-[0.35fr_0.65fr] md:p-8"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.35, delay: index * 0.035 }}
                >
                  <div>
                    <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] opacity-45">
                      {item.period}
                    </p>
                    <h3
                      className="text-3xl uppercase leading-none md:text-5xl"
                      style={titleStyle}
                    >
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm opacity-55">{item.company}</p>
                  </div>
                  <div>
                    <p className="max-w-3xl text-xl leading-snug opacity-75">
                      {item.text}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-full border border-current/15 px-3 py-1 text-sm opacity-70"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* HABILIDADES */}
        <section id="habilidades" className="bg-[#f0f0f0] px-4 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 grid gap-6 md:grid-cols-[0.75fr_1.25fr]">
              <Label>Habilidades</Label>
              <h2
                className="text-5xl uppercase leading-[0.9] md:text-8xl"
                style={titleStyle}
              >
                Lo que sé hacer, explicado por áreas.
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill, index) => (
                <motion.article
                  key={skill.area}
                  className="min-h-80 rounded-[1.8rem] border border-black/10 bg-white/70 p-6 shadow-[0_30px_90px_rgba(15,23,42,0.08)] backdrop-blur transition hover:-translate-y-2 hover:bg-black hover:text-white"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                >
                  <p className="mb-16 text-xs font-bold uppercase tracking-[0.24em] opacity-45">
                    0{index + 1}
                  </p>
                  <h3 className="text-4xl uppercase leading-none" style={titleStyle}>
                    {skill.area}
                  </h3>
                  <p className="mt-5 text-lg leading-snug opacity-70">{skill.value}</p>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-current/15 px-3 py-1 text-sm opacity-70"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* TECNOLOGÍAS */}
        <section id="tecnologias" className="bg-[#eaf2ff] px-4 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 grid gap-6 md:grid-cols-[0.75fr_1.25fr]">
              <Label>Tecnologías</Label>
              <h2
                className="text-5xl uppercase leading-[0.9] md:text-8xl"
                style={titleStyle}
              >
                Herramientas reales usadas en trabajo real.
              </h2>
            </div>
            <div className="grid gap-px overflow-hidden rounded-[2rem] border border-black/10 bg-black/10 md:grid-cols-2 lg:grid-cols-3">
              {tech.map(([name, use], index) => (
                <div
                  key={name}
                  className={`min-h-52 cursor-default p-6 transition-all duration-300 hover:bg-black hover:text-white ${
                    index % 2 === 0 ? "bg-[#eaf2ff]" : "bg-white"
                  }`}
                >
                  <p className="mb-10 text-xs font-bold uppercase tracking-[0.22em] opacity-45">
                    Tool · {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-4xl uppercase leading-none" style={titleStyle}>
                    {name}
                  </h3>
                  <p className="mt-5 leading-snug opacity-70">{use}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="contact-bg px-4 py-24 md:px-8 md:py-32">
          <div className="mx-auto grid max-w-7xl gap-8 rounded-[2.5rem] border border-black/10 bg-white/65 p-6 shadow-[0_50px_140px_rgba(15,23,42,0.14)] backdrop-blur-xl md:grid-cols-[3fr_2fr] md:p-12">
            <div>
              <Label>Contacto</Label>
              <h2
                className="text-5xl uppercase leading-[0.86] md:text-9xl"
                style={titleStyle}
              >
                Si necesitas claridad técnica, conversemos.
              </h2>
            </div>
            <div className="flex flex-col justify-end gap-4">
              <p className="text-xl leading-snug text-slate-700">
                Puedo aportar desarrollo web, soporte TI, análisis operacional,
                automatización y criterio UX en una misma conversación.
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full bg-black px-6 py-4 text-center font-bold uppercase text-white transition hover:bg-[#ef4b2a]"
                style={{ fontSize: "0.7rem", letterSpacing: "0.1em" }}
              >
                {profile.email}
              </a>
              <div className="flex gap-3">
                <a
                  href={profile.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 rounded-full border border-black/15 px-5 py-4 text-center text-xs font-bold uppercase tracking-[0.18em] transition hover:bg-[#b8ff62]"
                >
                  WhatsApp
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 rounded-full border border-black/15 px-5 py-4 text-center text-xs font-bold uppercase tracking-[0.18em] transition hover:bg-[#b8ff62]"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-black px-4 py-8 text-white md:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 text-xs uppercase tracking-[0.22em] text-white/45 md:flex-row md:items-center md:justify-between">
            <span>Christofer Villagrán Rivera · 2026</span>
            <span>Desarrollo Web · TI · UX · Automatización</span>
          </div>
        </footer>
    </main>
  );
}
