import Image from "next/image";
import portrait from "@/assets/portrait.jpg";
import { profile } from "@/data/profile";
import { asset } from "@/lib/asset";
import { formatMonth, type RepoMeta } from "@/lib/github";
import { ArrowDown, GitHubIcon, LinkedInIcon, MailIcon, WhatsAppIcon } from "./icons";
import { btnGhost, btnPrimary, container } from "./ui";

const socials = [
  { href: profile.links.github, label: "GitHub", Icon: GitHubIcon },
  { href: profile.links.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: `mailto:${profile.email}`, label: "Email", Icon: MailIcon },
  { href: profile.links.whatsapp, label: "WhatsApp", Icon: WhatsAppIcon },
];

const delay = (i: number) => ({ "--i": i }) as React.CSSProperties;

export function Hero({ latest }: { latest?: RepoMeta }) {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-32 md:pb-24 md:pt-44">
      <div aria-hidden className="pointer-events-none absolute -right-40 -top-56 h-[40rem] w-[40rem] rounded-full bg-pink/15 blur-[140px]" />

      <div className={`${container} relative grid items-end gap-14 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16`}>
        <div>
          <p className="rise flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs uppercase tracking-[0.18em] text-muted" style={delay(0)}>
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-pink" />
            </span>
            {profile.role} <span className="text-dim">·</span> {profile.location}
          </p>

          <h1 className="rise mt-7 font-display text-[clamp(4rem,13vw,9.5rem)] leading-[0.86] tracking-[-0.02em]" style={delay(1)}>
            Nour <em className="text-pink">Awad</em>
          </h1>

          <p className="rise mt-9 max-w-2xl text-pretty text-lg leading-relaxed text-muted md:text-xl" style={delay(2)}>
            I build products end to end — <span className="text-fg">real-time messaging services</span>,{" "}
            <span className="text-fg">AI-powered learning apps</span>, <span className="text-fg">retrieval pipelines for code</span>, and
            even neural networks small enough for a microcontroller. Right now I&rsquo;m shipping a superapp at Ramses with Elixir and
            Next.js, and studying for an MSc in Web Science.
          </p>

          <div className="rise mt-10 flex flex-wrap items-center gap-3" style={delay(3)}>
            <a href="#work" className={btnPrimary}>
              Selected work <ArrowDown />
            </a>
            <a href={asset(profile.resume)} target="_blank" rel="noopener" className={btnGhost}>
              Résumé · PDF
            </a>
            <ul className="ml-1 flex items-center gap-1">
              {socials.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener"
                    aria-label={label}
                    className="grid h-11 w-11 place-items-center rounded-full text-muted transition hover:bg-raised hover:text-pink"
                  >
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <figure className="rise relative mx-auto w-full max-w-[19rem] sm:max-w-sm lg:mx-0 lg:max-w-none" style={delay(2)}>
          <div aria-hidden className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] border border-pink/50" />
          <div className="relative overflow-hidden rounded-[2rem] border border-line bg-raised">
            <Image
              src={portrait}
              alt="Nour Awad"
              priority
              placeholder="blur"
              sizes="(min-width: 1024px) 380px, (min-width: 640px) 384px, 304px"
              className="h-auto w-full"
            />
          </div>
          <figcaption className="absolute -left-3 bottom-6 rounded-full border border-line bg-ink/85 px-3.5 py-1.5 font-mono text-[11px] text-muted backdrop-blur">
            MSc Web Science · BUE
          </figcaption>
        </figure>
      </div>

      {latest && (
        <div className={`${container} rise relative mt-16 md:mt-24`} style={delay(4)}>
          <a
            href={latest.html_url}
            target="_blank"
            rel="noopener"
            className="group flex flex-wrap items-center gap-x-4 gap-y-1 border-y border-line py-4 font-mono text-xs text-dim transition hover:text-muted"
          >
            <span className="uppercase tracking-[0.18em] text-pink">Latest on GitHub</span>
            <span className="text-fg transition group-hover:text-pink">{latest.name}</span>
            {latest.description && <span className="hidden md:inline">— {latest.description}</span>}
            <span className="ml-auto">pushed {formatMonth(latest.pushed_at)}</span>
          </a>
        </div>
      )}
    </section>
  );
}
