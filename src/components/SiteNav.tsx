"use client";

import { useEffect, useState } from "react";
import { asset } from "@/lib/asset";
import { profile } from "@/data/profile";

const links = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition-colors duration-300 ${
        scrolled || open ? "border-b border-line bg-ink/90 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 md:px-8" aria-label="Main">
        <a href="#top" className="font-display text-2xl tracking-tight" onClick={() => setOpen(false)}>
          Nour<span className="text-pink">.</span>
        </a>

        <ul className="hidden items-center gap-8 text-sm text-muted md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition hover:text-fg">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={asset(profile.resume)}
              target="_blank"
              rel="noopener"
              className="rounded-full border border-line px-4 py-2 text-fg transition hover:border-pink/60 hover:text-pink"
            >
              Résumé
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="-mr-2 grid h-10 w-10 place-items-center rounded-full text-fg md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="relative block h-3 w-5">
            <span className={`absolute left-0 h-px w-5 bg-current transition ${open ? "top-1.5 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 h-px w-5 bg-current transition ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
          </span>
        </button>
      </nav>

      <div id="mobile-menu" hidden={!open} className="border-t border-line md:hidden">
        <ul className="mx-auto flex max-w-6xl flex-col px-5 py-4">
          {[...links, { href: asset(profile.resume), label: "Résumé (PDF)" }].map((l) => (
            <li key={l.href}>
              <a href={l.href} className="block py-3 font-display text-3xl" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
