"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/data";

const links = [
  { label: "About", href: "#about" },
  { label: "Case Studies", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

function SunIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4m11.4-11.4 1.4-1.4" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    setTheme(
      document.documentElement.classList.contains("dark") ? "dark" : "light"
    );
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setTheme(next);
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-edge bg-bg/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="flex items-center gap-2.5 font-mono text-sm font-semibold tracking-tight"
        >
          <svg className="h-5 w-5" viewBox="0 0 64 64" aria-hidden>
            <rect x="10" y="36" width="11" height="18" rx="2" className="fill-accent" />
            <rect x="26.5" y="24" width="11" height="30" rx="2" className="fill-accent2" />
            <rect x="43" y="10" width="11" height="44" rx="2" className="fill-accent" />
          </svg>
          <span>
            vamsi<span className="text-accent">.analytics</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-md border border-edge p-2 text-muted transition-colors hover:border-accent/50 hover:text-accent"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <a
            href={site.resume}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-edge px-3.5 py-1.5 text-sm font-medium text-muted transition-colors hover:border-accent/50 hover:text-accent"
          >
            Résumé
          </a>
          <a
            href={`mailto:${site.email}`}
            className="rounded-md border border-accent/40 px-3.5 py-1.5 text-sm font-medium text-accent transition-colors hover:bg-accent/10"
          >
            Hire me
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-md border border-edge p-2 text-muted"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="rounded-md border border-edge p-2 text-muted"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-edge px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <a
              href={site.resume}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              Résumé
            </a>
            <a
              href={`mailto:${site.email}`}
              className="w-fit rounded-md border border-accent/40 px-3.5 py-1.5 text-sm font-medium text-accent"
            >
              Hire me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
