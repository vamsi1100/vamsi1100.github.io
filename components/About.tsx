import { about, education } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        index="01"
        title="About"
        blurb="Four years of analytics across consumer credit, startups, and supply chains — always in service of one question: where is the growth, and what is it worth?"
      />

      <div className="grid gap-10 lg:grid-cols-[3fr,2fr]">
        <Reveal>
          <div className="space-y-5 text-lg leading-relaxed text-muted">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>

          <blockquote className="mt-8 rounded-r-xl border-l-2 border-accent bg-accent/5 px-6 py-5">
            <p className="text-lg font-medium leading-relaxed text-ink">
              &ldquo;{about.philosophy}&rdquo;
            </p>
            <footer className="mt-2 font-mono text-xs text-accent">
              — my growth philosophy
            </footer>
          </blockquote>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {education.map((school) => (
              <div
                key={school.school}
                className="rounded-xl border border-edge bg-surface p-5 transition-colors hover:border-accent/40"
              >
                <p className="font-mono text-xs text-accent">
                  {school.period} · {school.location}
                </p>
                <p className="mt-2 font-semibold leading-snug">
                  {school.degree}
                </p>
                <p className="mt-1 text-sm text-muted">{school.school}</p>
                <p className="mt-2 text-xs text-muted">{school.note}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="h-full">
          <div className="h-full rounded-2xl border border-edge bg-surface p-7">
            <h3 className="font-mono text-sm font-semibold text-accent">
              how_i_work
            </h3>
            <ul className="mt-6 space-y-6">
              {about.principles.map((principle, i) => (
                <li key={principle.title} className="flex gap-4">
                  <span className="font-mono text-sm text-accent/70">
                    0{i + 1}
                  </span>
                  <div>
                    <p className="font-semibold">{principle.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {principle.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
