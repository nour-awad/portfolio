import Image from "next/image";
import techhub from "@/assets/techhub.jpg";

export function TechHubCover() {
  return (
    <div className="absolute inset-0 px-6 pt-8 sm:px-10 sm:pt-10">
      <div className="overflow-hidden rounded-t-lg border border-b-0 border-white/10 shadow-2xl shadow-black/70">
        <div className="flex items-center gap-1.5 bg-[#211c1f] px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
          <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
          <span className="h-2 w-2 rounded-full bg-[#28c840]" />
          <span className="ml-3 truncate rounded bg-black/40 px-2 py-0.5 font-mono text-[10px] text-dim">tech-hub · ASP.NET Core</span>
        </div>
        <Image
          src={techhub}
          alt="TechHub storefront home page with laptop, accessories and camera collections"
          placeholder="blur"
          sizes="(min-width: 1024px) 520px, 90vw"
          className="block h-auto w-full"
        />
      </div>
    </div>
  );
}
