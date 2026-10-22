import type { Cover } from "@/data/projects";
import { DroneCover } from "./DroneCover";
import { LinguaCover } from "./LinguaCover";
import { RagCover } from "./RagCover";
import { TechHubCover } from "./TechHubCover";
import { TinyMLCover } from "./TinyMLCover";
import { WhatsAppCover } from "./WhatsAppCover";

const covers: Record<Cover, () => React.JSX.Element> = {
  lingua: LinguaCover,
  whatsapp: WhatsAppCover,
  rag: RagCover,
  techhub: TechHubCover,
  tinyml: TinyMLCover,
  drone: DroneCover,
};

export function CoverFrame({ cover }: { cover: Cover }) {
  const Art = covers[cover];
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-raised transition duration-500 group-hover:border-pink/40">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_85%_0%,rgba(250,78,171,0.13),transparent_55%)]" />
      <div
        aria-hidden
        className="absolute inset-0 opacity-50 [background-image:radial-gradient(#2b2528_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]"
      />
      <div className="relative h-full w-full">
        <Art />
      </div>
    </div>
  );
}
