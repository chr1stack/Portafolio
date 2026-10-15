"use client";

import { useEffect, useRef, useState } from "react";

type NavItem = readonly [label: string, href: string];

type HeaderProps = {
  email: string;
  name: string;
  navItems: readonly NavItem[];
};

function Sunburst() {
  return (
    <svg aria-hidden="true" className="h-9 w-9 text-orange" viewBox="0 0 64 64">
      <path
        d="M32 2v18M32 44v18M2 32h18M44 32h18M10.8 10.8l12.7 12.7M40.5 40.5l12.7 12.7M53.2 10.8 40.5 23.5M23.5 40.5 10.8 53.2"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="4"
      />
      <circle cx="32" cy="32" r="7" fill="currentColor" />
    </svg>
  );
}

export function Header({ email, name, navItems }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (!panelRef.current?.contains(event.target as Node)) setOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-charcoal/10 bg-warm/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a
          href="#inicio"
          className="group flex items-center gap-3 font-mono text-xs font-semibold tracking-[0.28em]"
        >
          <Sunburst />
          <span>{name.toUpperCase()}</span>
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-7 lg:flex">
          {navItems.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="font-mono text-xs tracking-[0.22em] text-muted transition hover:text-orange"
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href={`mailto:${email}`}
          className="hidden rounded-full bg-charcoal px-5 py-3 font-mono text-xs font-semibold tracking-[0.18em] text-white transition hover:bg-orange lg:inline-flex"
        >
          HABLEMOS
        </a>

        <div ref={panelRef} className="relative lg:hidden">
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
            className="rounded-full border border-charcoal/20 px-4 py-2 font-mono text-xs font-semibold tracking-[0.18em]"
          >
            MENÚ
          </button>
          {open ? (
            <div
              id="mobile-menu"
              className="absolute right-0 mt-3 w-64 border border-charcoal/15 bg-white p-4 shadow-2xl"
            >
              <div className="flex flex-col gap-3">
                {navItems.map(([label, href]) => (
                  <a
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    className="py-2 font-mono text-xs tracking-[0.22em] text-charcoal"
                  >
                    {label}
                  </a>
                ))}
                <a
                  href={`mailto:${email}`}
                  className="mt-2 bg-orange px-4 py-3 text-center font-mono text-xs font-semibold tracking-[0.18em] text-white"
                >
                  HABLEMOS
                </a>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
