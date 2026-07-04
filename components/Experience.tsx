import Image from "next/image";
import { experience } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        index="03"
        title="Experience"
        blurb="From operations analytics in Hyderabad to acquisition strategy in Washington, D.C."
      />

      <ol className="relative space-y-14 border-l border-edge pl-8 md:pl-12">
        {experience.map((job, i) => (
          <li key={`${job.company}-${job.period}`} className="relative">
            <span
              className="absolute top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-bg -left-[39px] md:-left-[55px]"
              aria-hidden
            />
            <Reveal delay={i * 60}>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-edge bg-white p-1.5 shadow-sm">
                  {job.logo ? (
                    <Image
                      src={job.logo}
                      alt={`${job.company} logo`}
                      width={96}
                      height={96}
                      className="h-full w-full rounded-md object-contain"
                    />
                  ) : (
                    <span className="font-mono text-lg font-bold text-slate-800">
                      {job.company.charAt(0)}
                    </span>
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-xl font-bold tracking-tight">
                      {job.role}{" "}
                      <span className="text-accent">@ {job.company}</span>
                    </h3>
                    <p className="font-mono text-xs text-muted">
                      {job.period} · {job.location}
                    </p>
                  </div>
                  <ul className="mt-4 space-y-2.5">
                    {job.bullets.map((bullet) => (
                      <li
                        key={bullet.slice(0, 32)}
                        className="flex gap-3 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-0.5 text-accent">▸</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
