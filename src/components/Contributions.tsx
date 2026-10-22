import type { Contribution } from "@/data/projects";
import { ArrowUpRight } from "./icons";
import { SectionHeading, container } from "./ui";

function Row({ c }: { c: Contribution }) {
  return (
    <li className="reveal">
      <a
        href={c.href}
        target="_blank"
        rel="noopener"
        className="group grid gap-2 border-b border-line py-6 transition hover:bg-raised/40 md:grid-cols-[18rem_1fr_auto] md:items-baseline md:gap-10 md:px-3"
      >
        <span className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-sm text-fg transition group-hover:text-pink">{c.repo}</span>
          {c.badge && (
            <span className="rounded-full bg-pink/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-pink">{c.badge}</span>
          )}
        </span>
        <span className="text-pretty leading-relaxed text-muted">
          {c.work} <span className="whitespace-nowrap font-mono text-[11px] text-dim">— {c.stack}</span>
        </span>
        <ArrowUpRight className="hidden text-dim transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-pink md:block" />
      </a>
    </li>
  );
}

export function Contributions({ openSource, teamWork }: { openSource: Contribution[]; teamWork: Contribution[] }) {
  return (
    <section id="contributions" className="py-24 md:py-36">
      <div className={container}>
        <SectionHeading index="03" kicker="Open source & teamwork" title={<>In other people&rsquo;s <em className="text-pink">repos</em></>}>
          Merged upstream work, plus the parts I owned on team and course projects.
        </SectionHeading>

        <h3 className="reveal font-mono text-xs uppercase tracking-[0.18em] text-dim">Open source</h3>
        <ul className="mt-2 border-t border-line">
          {openSource.map((c) => (
            <Row key={c.repo} c={c} />
          ))}
        </ul>

        <h3 className="reveal mt-14 font-mono text-xs uppercase tracking-[0.18em] text-dim">Team &amp; course repositories</h3>
        <ul className="mt-2 border-t border-line">
          {teamWork.map((c) => (
            <Row key={c.repo} c={c} />
          ))}
        </ul>
      </div>
    </section>
  );
}
