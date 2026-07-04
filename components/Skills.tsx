import { certifications, skillGroups } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        index="04"
        title="Skills & toolbox"
        blurb="The stack behind the numbers — from raw event data to executive-ready storyline."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 60} className="h-full">
            <div className="h-full rounded-2xl border border-edge bg-surface p-6 transition-colors hover:border-accent/40">
              <h3 className="font-mono text-sm font-semibold text-accent">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-edge bg-bg px-2.5 py-1 text-xs text-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-8">
        <div className="rounded-2xl border border-edge bg-surface p-6">
          <h3 className="font-mono text-sm font-semibold text-accent">
            certifications
          </h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 text-sm"
              >
                <svg
                  className="h-4 w-4 text-accent"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                {cert}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
