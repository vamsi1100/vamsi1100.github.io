import { caseStudies, moreProjects } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function FeaturedWork() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        index="02"
        title="Featured case studies"
        blurb="Acquisition programs designed, shipped, and measured end-to-end — each one tied to a dollar figure."
      />

      <div className="space-y-7">
        {caseStudies.map((cs, i) => (
          <Reveal key={cs.title} delay={i * 80}>
            <article className="group grid gap-8 rounded-2xl border border-edge bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_12px_48px_-16px_rgb(var(--accent)/0.3)] md:grid-cols-[230px,1fr] md:p-10">
              <div>
                <p className="font-mono text-4xl font-bold text-accent md:text-5xl">
                  {cs.metric.value}
                </p>
                <p className="mt-2 text-sm leading-snug text-muted">
                  {cs.metric.label}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-2xl font-bold tracking-tight transition-colors group-hover:text-accent">
                    {cs.title}
                  </h3>
                  <p className="font-mono text-xs text-muted">
                    {cs.org} · {cs.period}
                  </p>
                </div>
                <p className="mt-3 leading-relaxed text-muted">{cs.summary}</p>
                <ul className="mt-5 space-y-2.5">
                  {cs.results.map((result) => (
                    <li
                      key={result}
                      className="flex gap-3 text-sm leading-relaxed"
                    >
                      <span className="mt-0.5 text-accent">▸</span>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {cs.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-edge bg-bg px-3 py-1 font-mono text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mb-6 mt-16">
        <h3 className="font-mono text-sm text-muted">
          <span className="text-accent">//</span> more analytics work
        </h3>
      </Reveal>

      <div className="grid gap-5 md:grid-cols-3">
        {moreProjects.map((project, i) => (
          <Reveal key={project.title} delay={i * 80} className="h-full">
            <article className="flex h-full flex-col rounded-2xl border border-edge bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50">
              <p className="font-mono text-xs text-muted">{project.org}</p>
              <h4 className="mt-2 text-lg font-bold tracking-tight">
                {project.title}
              </h4>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {project.summary}
              </p>
              <p className="mt-5 font-mono text-sm font-semibold text-accent">
                {project.impact}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
