import { site } from "@/lib/data";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 pb-28 pt-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-edge bg-surface px-6 py-16 text-center md:py-20">
          <div className="absolute inset-0 bg-grid opacity-70" aria-hidden />
          <div
            className="absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
            aria-hidden
          />

          <div className="relative">
            <p className="font-mono text-sm text-accent">/05 · contact</p>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight md:text-5xl">
              Let&apos;s find the growth hiding in your funnel.
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted">
              Open to senior roles in growth analytics, marketing science, and
              acquisition strategy. The fastest way to reach me is email — I
              reply within a day.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${site.email}`}
                className="rounded-lg bg-accent px-6 py-3 font-semibold text-bg transition-all hover:-translate-y-0.5 hover:opacity-90"
              >
                {site.email}
              </a>
              <a
                href={site.resume}
                download
                className="rounded-lg border border-accent/40 px-6 py-3 font-semibold text-accent transition-all hover:-translate-y-0.5 hover:bg-accent/10"
              >
                Download résumé ↓
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-edge px-6 py-3 font-semibold transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
              >
                LinkedIn ↗
              </a>
            </div>
            <p className="mt-7 font-mono text-sm text-muted">
              {site.location} ·{" "}
              <a
                href={site.phoneHref}
                className="transition-colors hover:text-accent"
              >
                {site.phone}
              </a>
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-xs leading-relaxed text-muted/80">
              Target roles: {site.targetRoles.join(" · ")}
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
