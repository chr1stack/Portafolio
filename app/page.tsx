"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const experiencias = [
  { cargo: "Coordinador de TI y Medios Digitales", empresa: "Faculdade Batista — Brasil", periodo: "2025", tech: ["WordPress", "Marketing Digital", "TI"], logro: "Aumenté la visibilidad digital de la institución con campañas y optimización web." },
  { cargo: "Analista de Órdenes", empresa: "HAINTECH – ClaroVTR", periodo: "2025", tech: ["Fullstack", "GSA", "Soporte"], logro: "Regularización de órdenes fallidas y reducción de inconsistencias operativas." },
  { cargo: "Asistente Informático", empresa: "Francisco Petricio", periodo: "2023–2025", tech: ["SAP", "JustTime", "Redes"], logro: "Migración de JustTime a SAP y soporte técnico integral." },
  { cargo: "Digitador", empresa: "Metecno", periodo: "2022–2023", tech: ["RANDOM ERP", "Bases de datos"], logro: "Parametrización y cargas masivas de datos con alta precisión." },
  { cargo: "Asistente de Producción", empresa: "TECHINT – QB2", periodo: "2021–2022", tech: ["Gestión", "Logística"], logro: "Control de producción para más de 150 trabajadores." },
  { cargo: "Asistente de Redes", empresa: "VTR – Emetel", periodo: "2019–2021", tech: ["Redes", "BLE", "BTD"], logro: "Mantenimiento de nodos ópticos y soporte de conectividad." },
];

const proyectos = [
  {
    num: "01",
    nombre: "Avora",
    tipo: "Plataforma · Educación · Diseño",
    desc: "Plataforma digital de cursos online para la comunidad cristiana. Construida desde cero con Next.js, diseño editorial oscuro y animaciones premium.",
    problema: "Conocimiento valioso atrapado en comunidades sin acceso a educación digital accesible.",
    solucion: "Plataforma de cursos con experiencia de usuario premium, pagos integrados y podcast.",
    tech: ["Next.js", "React", "Tailwind", "Framer Motion", "Vercel"],
    resultado: "Sitio publicado, listo para lanzamiento en Chile con 3 cursos iniciales.",
    link: "https://avora-phi.vercel.app",
    emoji: "🎓",
    color: "from-purple-900/40 to-purple-600/10",
    border: "border-purple-500/40",
  },
  {
    num: "02",
    nombre: "FTBB",
    tipo: "Web Institucional · WordPress · Brasil",
    desc: "Administración y optimización del sitio web de la Faculdade Batista Teológica de Brasília durante pasantía internacional.",
    problema: "Sitio web institucional con baja visibilidad, sin estrategia digital definida.",
    solucion: "Optimización web, campañas publicitarias y gestión de contenido digital estratégico.",
    tech: ["WordPress", "Marketing Digital", "SEO", "Redes Sociales"],
    resultado: "Aumento de visibilidad institucional y mejora en métricas de alcance digital.",
    link: "https://ftbb.edu.br/",
    emoji: "🌐",
    color: "from-blue-900/40 to-blue-600/10",
    border: "border-blue-500/40",
  },
];

const habilidades = [
  { cat: "Frontend", items: ["Next.js", "React", "Tailwind CSS", "HTML/CSS", "JavaScript", "Framer Motion"] },
  { cat: "Diseño", items: ["Figma", "UI/UX", "Branding", "WordPress", "Diseño Editorial"] },
  { cat: "IA & Tools", items: ["Claude", "ChatGPT", "Midjourney", "GitHub", "Vercel"] },
  { cat: "Marketing", items: ["SEO", "Redes Sociales", "Campañas", "Analítica", "Branding Digital"] },
  { cat: "Soporte TI", items: ["SAP", "ERP", "Redes", "Hardware", "Soporte técnico"] },
];

export default function Portafolio() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeExp, setActiveExp] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.15], [0, -80]);
  const springX = useSpring(mousePos.x, { stiffness: 50, damping: 20 });
  const springY = useSpring(mousePos.y, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <main className="bg-[#0d0d0d] text-white overflow-x-hidden" style={{ fontFamily: "var(--font-inter)" }}>

      {/* Cursor */}
      <motion.div className="fixed top-0 left-0 w-6 h-6 rounded-full border border-purple-500/60 pointer-events-none z-50 mix-blend-difference" style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }} />
      <motion.div className="fixed top-0 left-0 w-2 h-2 rounded-full bg-purple-500 pointer-events-none z-50" style={{ x: mousePos.x, y: mousePos.y, translateX: "-50%", translateY: "-50%" }} />

      {/* Nav */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-8 py-5 transition-all duration-300 ${scrolled ? "bg-[#0d0d0d]/90 backdrop-blur-md border-b border-white/5" : ""}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-sm font-bold tracking-widest uppercase text-white/60">CV</span>
        <div className="flex gap-8 text-xs font-medium tracking-widest uppercase text-white/30">
          {["Proyectos", "Experiencia", "Habilidades", "Contacto"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors duration-300">{item}</a>
          ))}
        </div>
        <a href="mailto:villagranchristofer997@gmail.com" className="text-xs font-medium tracking-widest uppercase text-white/30 hover:text-white transition-colors">
          Disponible ·
        </a>
      </motion.nav>

      {/* Hero */}
      <motion.section ref={heroRef} className="relative h-screen flex flex-col items-start justify-end px-8 md:px-16 pb-20 overflow-hidden" style={{ opacity: heroOpacity, y: heroY }}>
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80" alt="" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d]/60 via-transparent to-[#0d0d0d]" />
          <motion.div className="absolute w-[800px] h-[800px] rounded-full bg-purple-600/5 blur-3xl" animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 4, repeat: Infinity }} />
        </div>
        <motion.span className="absolute top-32 right-16 text-[200px] font-bold text-white/[0.02] leading-none select-none" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>01</motion.span>
        <div className="relative z-10 max-w-5xl">
          <motion.p className="text-xs font-medium tracking-[0.3em] uppercase text-purple-400/80 mb-8" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            Disponible · Santiago, Chile · 2026
          </motion.p>
          {"Christofer\nVillagrán".split("").map((char, i) => (
            <motion.span key={i} className={`inline-block text-[clamp(36px,6vw,96px)] font-bold leading-none tracking-tight" style={{ fontFamily: "var(--font-playfair)" }} ${char === "\n" ? "block" : ""}`} style={{ color: char === "\n" ? "transparent" : "white" }} initial={{ opacity: 0, y: 60 }} animate={{ opacity: char === "\n" ? 0 : 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 + i * 0.03 }}>
              {char === "\n" ? <br /> : char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
          <motion.p className="text-white/30 text-lg md:text-xl mt-6 mb-10 max-w-lg leading-relaxed" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.2 }}>
            Desarrollador Web · Diseñador Digital · Constructor de Experiencias
          </motion.p>
          <motion.div className="flex gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.4 }}>
            <a href="#proyectos" className="group flex items-center gap-3 bg-white text-black text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-full hover:bg-purple-400 transition-colors duration-300">Ver proyectos <span className="group-hover:translate-x-1 transition-transform">→</span></a>
            <a href="#contacto" className="flex items-center gap-3 border border-white/20 text-white/60 hover:text-white hover:border-white/40 text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-full transition-colors duration-300">Contacto</a>
          </motion.div>
        </div>
        <motion.div className="absolute bottom-8 right-8 flex flex-col items-center gap-2" animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <span className="text-xs tracking-widest uppercase text-white/20">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
        </motion.div>
      </motion.section>

      {/* Sobre mí */}
      <section className="relative px-8 md:px-16 py-32 border-t border-white/5 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1550439062-609e1531270e?w=1600&q=80" alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.03]" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d0d] via-transparent to-[#0d0d0d]" />
        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p className="text-xs tracking-[0.3em] uppercase text-white/20 mb-6">Sobre mí</p>
            
            <p className="text-white/40 text-lg leading-relaxed mb-6">Autodidacta con más de 6 años combinando soporte TI, desarrollo web y medios digitales. He trabajado desde redes físicas hasta plataformas digitales en Chile y Brasil.</p>
            <p className="text-white/30 text-base leading-relaxed">Actualmente construyo productos digitales desde cero — como Avora — combinando visión creativa, tecnología moderna y propósito real.</p>
          </motion.div>
          <motion.div className="flex flex-col gap-6" initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-white/5">
              <img src="/foto.png" alt="Christofer Villagran" className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-transparent" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[{ n: "6+", label: "Años de experiencia" }, { n: "2", label: "Proyectos web activos" }, { n: "5+", label: "Empresas" }, { n: "2", label: "Países" }].map((stat, i) => (
                <motion.div key={i} className="border border-white/5 rounded-2xl p-4 hover:border-purple-500/20 transition-colors duration-300" whileHover={{ scale: 1.02 }}>
                  <p className="text-3xl font-bold text-white mb-1">{stat.n}</p>
                  <p className="text-white/30 text-xs">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Proyectos */}
      <section id="proyectos" className="px-8 md:px-16 py-32 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div className="mb-20" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-xs tracking-[0.3em] uppercase text-white/20 mb-4">Proyectos destacados</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Lo que construyo</h2>
          </motion.div>
          <div className="flex flex-col gap-6">
            {proyectos.map((p, i) => (
              <motion.div key={i} className={`group border ${p.border} rounded-3xl overflow-hidden transition-all duration-500`} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ scale: 1.01 }}>
                <div className={`relative bg-gradient-to-br ${p.color} p-8 md:p-12 overflow-hidden`}>
                  <img src={p.num === "01" ? "/avora.png" : "/ftbb.png"} alt={p.nombre} className="absolute inset-0 w-full h-full object-cover opacity-[0.04] object-top" />
                  <div className="relative z-10 flex flex-col md:flex-row justify-between gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-4xl">{p.emoji}</span>
                        <div>
                          <p className="text-white/30 text-xs tracking-widest uppercase">{p.num}</p>
                          <h3 className="text-3xl font-bold text-white">{p.nombre}</h3>
                        </div>
                      </div>
                      <p className="text-white/30 text-xs tracking-widest uppercase mb-4">{p.tipo}</p>
                      <p className="text-white/60 text-lg leading-relaxed mb-6 max-w-lg">{p.desc}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="bg-white/5 rounded-xl p-4">
                          <p className="text-white/30 text-xs uppercase tracking-widest mb-2">Problema</p>
                          <p className="text-white/60 text-sm leading-relaxed">{p.problema}</p>
                        </div>
                        <div className="bg-white/5 rounded-xl p-4">
                          <p className="text-white/30 text-xs uppercase tracking-widest mb-2">Solución</p>
                          <p className="text-white/60 text-sm leading-relaxed">{p.solucion}</p>
                        </div>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4 mb-6">
                        <p className="text-white/30 text-xs uppercase tracking-widest mb-2">Resultado</p>
                        <p className="text-white/60 text-sm">{p.resultado}</p>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-8">
                        {p.tech.map((t, j) => (<span key={j} className="text-xs border border-white/10 text-white/40 px-3 py-1 rounded-full">{t}</span>))}
                      </div>
                      <a href={p.link} target="_blank" className="inline-flex items-center gap-2 bg-white text-black text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-full hover:bg-purple-400 transition-colors duration-300">Ver proyecto →</a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiencia */}
      <section id="experiencia" className="relative px-8 md:px-16 py-32 border-t border-white/5 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80" alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.04]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d] via-transparent to-[#0d0d0d]" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div className="mb-20" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-xs tracking-[0.3em] uppercase text-white/20 mb-4">Trayectoria</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Experiencia</h2>
          </motion.div>
          <div className="flex flex-col gap-px">
            {experiencias.map((exp, i) => (
              <motion.div key={i} className="group border-t border-white/5 py-8 cursor-pointer" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} onHoverStart={() => setActiveExp(i)} onHoverEnd={() => setActiveExp(null)}>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-6">
                    <span className="text-white/10 text-sm font-mono w-8">0{i + 1}</span>
                    <div>
                      <p className="text-white font-bold text-lg group-hover:text-purple-300 transition-colors duration-300">{exp.cargo}</p>
                      <p className="text-white/30 text-sm">{exp.empresa}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 ml-14 md:ml-0">
                    <span className="text-white/20 text-sm font-mono">{exp.periodo}</span>
                    <motion.span className="text-white/60 text-sm max-w-xs leading-relaxed" initial={{ opacity: 0 }} animate={{ opacity: activeExp === i ? 1 : 0 }} transition={{ duration: 0.2 }}>{exp.logro}</motion.span>
                  </div>
                </div>
                <motion.div className="flex flex-wrap gap-2 ml-14 mt-3" initial={{ opacity: 0 }} animate={{ opacity: activeExp === i ? 1 : 0 }} transition={{ duration: 0.2 }}>
                  {exp.tech.map((t, j) => (<span key={j} className="text-xs border border-purple-500/20 text-purple-400/60 px-2 py-0.5 rounded-full">{t}</span>))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Habilidades */}
      <section id="habilidades" className="relative px-8 md:px-16 py-32 border-t border-white/5 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1600&q=80" alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.03]" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d0d] via-transparent to-[#0d0d0d]" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div className="mb-20" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-xs tracking-[0.3em] uppercase text-white/20 mb-4">Stack</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Habilidades</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {habilidades.map((grupo, i) => (
              <motion.div key={i} className="border border-white/5 rounded-2xl p-6 hover:border-purple-500/20 transition-colors duration-300" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ scale: 1.02 }}>
                <p className="text-white/40 text-xs tracking-widest uppercase mb-4">{grupo.cat}</p>
                <div className="flex flex-col gap-2">
                  {grupo.items.map((skill, j) => (
                    <motion.span key={j} className="text-white/60 text-sm py-1 border-b border-white/5 last:border-0" initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 + j * 0.03 }}>{skill}</motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Idiomas y Educación */}
      <section className="relative px-8 md:px-16 py-24 border-t border-white/5 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1600&q=80" alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.03]" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d0d] via-transparent to-[#0d0d0d]" />
        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-xs tracking-[0.3em] uppercase text-white/20 mb-6">Educación</p>
            <div className="flex flex-col gap-6">
              {[
                { titulo: "Ingeniería en Computación e Informática", inst: "Universidad Andrés Bello", periodo: "Cursado hasta 6° semestre", desc: "Formación en computación, programación y sistemas informáticos." },
                { titulo: "Licencia Media Técnica Industrial", inst: "Liceo Industrial Eulogio Gordo Moneo", periodo: "Antofagasta", desc: "Formación técnica industrial con enfoque en procesos y sistemas." },
              ].map((ed, i) => (
                <motion.div key={i} className="border-l-2 border-purple-500/20 pl-5" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <p className="text-white font-bold mb-1">{ed.titulo}</p>
                  <p className="text-purple-400/60 text-sm mb-1">{ed.inst}</p>
                  <p className="text-white/20 text-xs mb-2">{ed.periodo}</p>
                  <p className="text-white/30 text-sm">{ed.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-xs tracking-[0.3em] uppercase text-white/20 mb-6">Idiomas</p>
            <div className="flex flex-col gap-6">
              {[
                { idioma: "Español", nivel: "Nativo", pct: 100 },
                { idioma: "Inglés", nivel: "Básico", pct: 55 },
                { idioma: "Portugués", nivel: "Básico", pct: 25 },
              ].map((lang, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <div className="flex justify-between mb-2">
                    <p className="text-white font-medium">{lang.idioma}</p>
                    <p className="text-white/30 text-sm">{lang.nivel}</p>
                  </div>
                  <div className="w-full h-px bg-white/5 rounded-full overflow-hidden">
                    <motion.div className="h-full bg-gradient-to-r from-purple-500 to-purple-300" initial={{ width: 0 }} whileInView={{ width: `${lang.pct}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: i * 0.1 }} />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="relative px-8 md:px-16 py-32 border-t border-white/5 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&q=80" alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.03]" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d0d] via-transparent to-[#0d0d0d]" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-xs tracking-[0.3em] uppercase text-white/20 mb-6">Contacto</p>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">¿Trabajamos<br /><span className="text-white/20">juntos?</span></h2>
            <p className="text-white/30 text-xl mb-16 max-w-lg leading-relaxed">Estoy disponible para proyectos freelance, trabajo full-time y colaboraciones creativas.</p>
            <div className="flex flex-wrap gap-4">
              {[
                { label: "Email", value: "villagranchristofer997@gmail.com", href: "mailto:villagranchristofer997@gmail.com" },
                { label: "WhatsApp", value: "+56 9 5174 8432", href: "https://wa.me/56951748432" },
                { label: "GitHub", value: "chr1stack", href: "https://github.com/chr1stack" },
                { label: "Avora", value: "avora-phi.vercel.app", href: "https://avora-phi.vercel.app" },
              ].map((c, i) => (
                <motion.a key={i} href={c.href} target="_blank" className="group flex flex-col border border-white/10 rounded-2xl px-6 py-5 hover:border-purple-500/40 transition-colors duration-300" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ scale: 1.02 }}>
                  <span className="text-white/20 text-xs tracking-widest uppercase mb-1">{c.label}</span>
                  <span className="text-white/60 group-hover:text-white transition-colors text-sm">{c.value}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 md:px-16 py-8 border-t border-white/5 flex justify-between items-center">
        <span className="text-white/20 text-xs tracking-widest uppercase">Christofer Villagran Rivera · 2026</span>
        <span className="text-white/10 text-xs">Construido con Next.js · Tailwind · Framer Motion</span>
      </footer>

    </main>
  );
}