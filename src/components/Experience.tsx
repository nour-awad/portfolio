import { education, experience } from "@/data/profile";
import { SectionHeading, StackList, container } from "./ui";

export function Experience() {
  return (
    <section id="experience" className="border-t border-line bg-raised/30 py-24 md:py-36">
      <div className={container}>
        <SectionHeading index="02" kicker="Experience" title={<>Where I&rsquo;ve <em className="text-pink">worked</em></>}>
          I graduated in Computer Science &amp; AI from Zewail City in 2026, and now split my week between full-time engineering and an
          MSc in Web Science.
        </SectionHeading>

        <ol className="border-t border-line">
          {experience.map((job) => (
            <li key={job.org} className="reveal grid gap-4 border-b border-line py-10 md:grid-cols-[14rem_1fr] md:gap-10">
              <div className="font-mono text-xs leading-relaxed text-dim">
                <p className="text-muted">{job.period}</p>
                <p>{job.place}</p>
                <p>{job.mode}</p>
              </div>
              <div>
                <h3 className="font-display text-3xl leading-tight tracking-tight md:text-4xl">
                  {job.role} <span className="text-pink">@ {job.org}</span>
                </h3>
                <ul className="mt-5 space-y-2">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-3 leading-relaxed text-muted">
                      <span aria-hidden className="mt-[0.75em] h-px w-4 shrink-0 bg-pink" />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <StackList items={job.stack} />
                </div>
              </div>
            </li>
          ))}
        </ol>

        <h3 className="reveal mt-20 font-mono text-xs uppercase tracking-[0.18em] text-pink">Education</h3>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {education.map((e) => (
            <div key={e.school} className="reveal rounded-2xl border border-line bg-ink/60 p-6 md:p-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-dim">
                <span className="text-muted">{e.period}</span>
                <span className="mx-2">·</span>
                {e.place}
              </p>
              <p className="mt-4 font-display text-2xl leading-snug md:text-3xl">{e.degree}</p>
              <p className="mt-2 text-muted">{e.school}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
