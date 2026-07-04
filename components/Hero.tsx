import Image from "next/image";
import { heroStats, site } from "@/lib/data";
import Counter from "./Counter";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid" aria-hidden />
      <div
        className="absolute -top-40 left-1/2 h-[28rem] w-[56rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-32 md:pt-40">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr,360px]">
          <div>
            <Reveal>
              <div className="flex items-center gap-4">
                <Image
                  src="/headshot.jpg"
                  alt={site.name}
                  width={1333}
                  height={2000}
                  priority
                  sizes="64px"
                  className="h-16 w-16 rounded-full border-2 border-accent/40 object-cover object-top lg:hidden"
                />
                <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 font-mono text-xs text-accent">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                  </span>
                  {site.availability}
                </span>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-7 text-4xl font-bold leading-[1.06] tracking-tight md:text-5xl lg:text-6xl">
                I turn acquisition funnels into{" "}
                <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">
                  growth engines
                </span>
                .
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted">
                {site.heroBlurb}
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#work"
                  className="rounded-lg bg-accent px-6 py-3 font-semibold text-bg transition-all hover:-translate-y-0.5 hover:opacity-90"
                >
                  View case studies
                </a>
                <a
                  href="#contact"
                  className="rounded-lg border border-edge px-6 py-3 font-semibold transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
                >
                  Get in touch
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="hidden lg:block">
            <div className="relative">
              <div
                className="absolute -inset-1 translate-x-5 translate-y-5 rounded-3xl border border-accent/30"
                aria-hidden
              />
              <div className="group relative overflow-hidden rounded-3xl border border-edge bg-surface">
                <Image
                  src="/headshot.jpg"
                  alt={`${site.name} — professional headshot`}
                  width={1333}
                  height={2000}
                  priority
                  sizes="(min-width: 1024px) 360px, 0px"
                  className="aspect-[4/5] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="absolute -left-8 bottom-8 rounded-xl border border-edge bg-surface/90 px-4 py-3 shadow-lg backdrop-blur">
                <p className="font-mono text-[11px] text-muted">currently</p>
                <p className="text-sm font-semibold">
                  Senior BA <span className="text-accent">@ Capital One</span>
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={320}>
          <dl className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-edge bg-surface/70 p-5 backdrop-blur-sm transition-colors hover:border-accent/40"
              >
                <dd className="font-mono text-3xl font-bold text-accent">
                  <Counter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </dd>
                <dt className="mt-1.5 text-sm text-muted">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
