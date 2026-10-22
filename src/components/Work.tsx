import type { Project } from "@/data/projects";
import type { RepoMeta } from "@/lib/github";
import { CoverFrame } from "./covers";
import { ArrowUpRight } from "./icons";
import { RepoStats, SectionHeading, StackList, container, linkArrow } from "./ui";

type Meta = (project: Project) => RepoMeta | undefined;

function ProjectLinks({ project, meta }: { project: Project; meta?: RepoMeta }) {
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
      {project.links.length === 0 && <span className="font-mono text-[11px] text-dim">Private repository</span>}
      {project.links.map((l) => (
        <a key={l.href} href={l.href} target="_blank" rel="noopener" className={linkArrow}>
          {l.label}
          <ArrowUpRight className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      ))}
      <RepoStats meta={meta} />
    </div>
  );
}

function Meta({ project }: { project: Project }) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-dim">
      {project.year && (
        <>
          <span className="text-muted">{project.year}</span>
          <span className="mx-2">·</span>
        </>
      )}
      {project.context}
    </p>
  );
}

function FeaturedProject({ project, meta, index }: { project: Project; meta?: RepoMeta; index: number }) {
  const flip = index % 2 === 1;
  return (
    <article className="reveal group grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
      <div className={flip ? "lg:order-2" : undefined}>{project.cover && <CoverFrame cover={project.cover} />}</div>
      <div>
        <Meta project={project} />
        <h3 className="mt-4 font-display text-4xl leading-none tracking-tight md:text-5xl">{project.title}</h3>
        <p className="mt-3 text-lg text-fg/90">{project.tagline}</p>
        <p className="mt-4 text-pretty leading-relaxed text-muted">{project.summary}</p>
        {project.highlights && (
          <ul className="mt-6 space-y-2.5">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-sm leading-relaxed text-muted">
                <span aria-hidden className="mt-[0.7em] h-px w-4 shrink-0 bg-pink" />
                {h}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-6">
          <StackList items={project.stack} />
        </div>
        <div className="mt-7">
          <ProjectLinks project={project} meta={meta} />
        </div>
      </div>
    </article>
  );
}

function ProjectCard({ project, meta }: { project: Project; meta?: RepoMeta }) {
  return (
    <article className="reveal flex flex-col rounded-2xl border border-line bg-raised/50 p-6 transition duration-300 hover:-translate-y-1 hover:border-pink/40 md:p-7">
      <Meta project={project} />
      <h3 className="mt-5 font-display text-3xl leading-none tracking-tight">{project.title}</h3>
      <p className="mt-2 text-sm text-fg/85">{project.tagline}</p>
      <p className="mt-4 flex-1 text-pretty text-sm leading-relaxed text-muted">{project.summary}</p>
      <div className="mt-5">
        <StackList items={project.stack} />
      </div>
      <div className="mt-6 border-t border-line pt-5">
        <ProjectLinks project={project} meta={meta} />
      </div>
    </article>
  );
}

export function Work({
  featured,
  more,
  extras,
  meta,
}: {
  featured: Project[];
  more: Project[];
  extras: RepoMeta[];
  meta: Meta;
}) {
  return (
    <section id="work" className="py-24 md:py-36">
      <div className={container}>
        <SectionHeading index="01" kicker="Selected work" title={<>Things I&rsquo;ve <em className="text-pink">built</em></>}>
          From AI tutors and real-time chat to research on code retrieval — a mix of team builds, coursework and my own experiments.
        </SectionHeading>

        <div className="space-y-24 md:space-y-36">
          {featured.map((p, i) => (
            <FeaturedProject key={p.title} project={p} meta={meta(p)} index={i} />
          ))}
        </div>

        <h3 className="reveal mt-28 font-display text-4xl tracking-tight md:mt-40 md:text-5xl">More projects</h3>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {more.map((p) => (
            <ProjectCard key={p.title} project={p} meta={meta(p)} />
          ))}
        </div>

        {extras.length > 0 && (
          <div className="reveal mt-16">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-dim">Also on GitHub</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {extras.map((r) => (
                <li key={r.name}>
                  <a
                    href={r.html_url}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 font-mono text-xs text-muted transition hover:border-pink/50 hover:text-pink"
                  >
                    {r.name}
                    <ArrowUpRight width={11} height={11} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
