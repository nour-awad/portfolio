import { Contact } from "@/components/Contact";
import { Contributions } from "@/components/Contributions";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { SiteNav } from "@/components/SiteNav";
import { Skills } from "@/components/Skills";
import { Work } from "@/components/Work";
import { container } from "@/components/ui";
import { profile } from "@/data/profile";
import { featured, hiddenRepos, more, openSource, teamWork, type Project } from "@/data/projects";
import { formatMonth, getRepos } from "@/lib/github";

export default async function Home() {
  const repos = await getRepos(profile.githubUser);
  const byFullName = new Map(repos.map((r) => [`${profile.githubUser}/${r.name}`, r]));
  const meta = (p: Project) => (p.repo ? byFullName.get(p.repo) : undefined);

  const curated = new Set([...featured, ...more].map((p) => p.repo));
  const own = repos.filter((r) => !r.fork && !r.archived && !hiddenRepos.has(r.name));
  const extras = own.filter((r) => !curated.has(`${profile.githubUser}/${r.name}`));
  const latest = own[0];
  const builtAt = new Date().toISOString();

  return (
    <>
      <a href="#work" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-pink focus:px-4 focus:py-2 focus:text-ink">
        Skip to content
      </a>
      <SiteNav />
      <main>
        <Hero latest={latest} />
        <Work featured={featured} more={more} extras={extras} meta={meta} />
        <Experience />
        <Contributions openSource={openSource} teamWork={teamWork} />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-line py-10 pb-[max(2.5rem,env(safe-area-inset-bottom))]">
        <div className={`${container} flex flex-col gap-3 font-mono text-xs text-dim md:flex-row md:items-center md:justify-between`}>
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <p>
            Built with Next.js · GitHub data as of {formatMonth(builtAt)}
          </p>
          <a href="#top" className="transition hover:text-pink">
            Back to top ↑
          </a>
        </div>
      </footer>
    </>
  );
}
