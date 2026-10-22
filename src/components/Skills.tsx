import { skills } from "@/data/profile";
import { SectionHeading, container } from "./ui";

export function Skills() {
  return (
    <section id="skills" className="border-t border-line bg-raised/30 py-24 md:py-36">
      <div className={container}>
        <SectionHeading index="04" kicker="Toolkit" title={<>What I <em className="text-pink">work</em> with</>}>
          The languages, frameworks and infrastructure behind the projects above.
        </SectionHeading>

        <div className="reveal grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((g) => (
            <div key={g.group} className="bg-ink p-6 md:p-8">
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-pink">{g.group}</h3>
              <ul className="mt-5 flex flex-wrap gap-x-2 gap-y-1.5 text-lg leading-snug">
                {g.items.map((item, i) => (
                  <li key={item} className="text-fg/90">
                    {item}
                    {i < g.items.length - 1 && <span className="ml-2 text-dim">/</span>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
