import type { ReactNode } from "react";
import type { RepoMeta } from "@/lib/github";
import { formatMonth } from "@/lib/github";
import { StarIcon } from "./icons";

export const container = "mx-auto w-full max-w-6xl px-5 md:px-8";

export const btnPrimary =
  "inline-flex items-center gap-2 rounded-full bg-pink px-5 py-3 text-sm font-medium text-ink transition hover:bg-[#ff6dbb] active:scale-[0.98]";

export const btnGhost =
  "inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-medium text-fg transition hover:border-pink/60 hover:text-pink";

export const linkArrow =
  "group inline-flex items-center gap-1.5 text-sm font-medium text-fg underline decoration-pink/40 decoration-1 underline-offset-[6px] transition hover:text-pink hover:decoration-pink";

export function SectionHeading({
  index,
  kicker,
  title,
  children,
}: {
  index: string;
  kicker: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className="reveal mb-12 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-pink">
          {index} <span className="text-dim">/</span> {kicker}
        </p>
        <h2 className="mt-4 font-display text-5xl leading-[0.95] tracking-tight md:text-7xl">{title}</h2>
      </div>
      {children && <p className="max-w-sm text-pretty text-muted md:text-right">{children}</p>}
    </header>
  );
}

export function StackList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Tech stack">
      {items.map((item) => (
        <li key={item} className="rounded-full border border-line bg-ink/40 px-3 py-1 font-mono text-[11px] text-muted">
          {item}
        </li>
      ))}
    </ul>
  );
}

export function RepoStats({ meta }: { meta?: RepoMeta }) {
  if (!meta) return null;
  return (
    <p className="flex items-center gap-3 font-mono text-[11px] text-dim">
      {meta.stargazers_count > 0 && (
        <span className="inline-flex items-center gap-1" title={`${meta.stargazers_count} stars on GitHub`}>
          <StarIcon className="text-pink" /> {meta.stargazers_count}
        </span>
      )}
      <span title="Last pushed">updated {formatMonth(meta.pushed_at)}</span>
    </p>
  );
}
