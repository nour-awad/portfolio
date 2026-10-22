import { profile } from "@/data/profile";
import { ContactForm } from "./ContactForm";
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from "./icons";
import { container } from "./ui";

const channels = [
  { href: profile.links.linkedin, label: "LinkedIn", handle: "in/nour-wan", Icon: LinkedInIcon },
  { href: profile.links.github, label: "GitHub", handle: "@nour-awad", Icon: GitHubIcon },
  { href: profile.links.whatsapp, label: "WhatsApp", handle: "Message me", Icon: WhatsAppIcon },
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-line py-24 md:py-36">
      <div aria-hidden className="pointer-events-none absolute -bottom-72 -left-40 h-[36rem] w-[36rem] rounded-full bg-pink/10 blur-[140px]" />
      <div className={`${container} relative grid gap-16 lg:grid-cols-2 lg:gap-24`}>
        <div className="reveal">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-pink">
            05 <span className="text-dim">/</span> Contact
          </p>
          <h2 className="mt-4 font-display text-5xl leading-[0.95] tracking-tight md:text-7xl">
            Let&rsquo;s build <em className="text-pink">something</em>.
          </h2>
          <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-muted">
            Have a role, a project or a question? My inbox is open — I usually reply within a couple of days.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-10 inline-block break-all font-display text-3xl text-fg underline decoration-pink/50 decoration-1 underline-offset-8 transition hover:text-pink md:text-4xl"
          >
            {profile.email}
          </a>
          <ul className="mt-10 space-y-1">
            {channels.map(({ href, label, handle, Icon }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener" className="group flex items-center gap-4 py-2 text-muted transition hover:text-fg">
                  <Icon className="text-dim transition group-hover:text-pink" />
                  <span className="w-24 font-mono text-xs uppercase tracking-[0.16em]">{label}</span>
                  <span>{handle}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal rounded-3xl border border-line bg-raised/60 p-6 md:p-10">
          <ContactForm action={profile.formspree} />
        </div>
      </div>
    </section>
  );
}
