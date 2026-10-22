import Image from "next/image";
import home from "@/assets/lingua-home.jpg";

export function LinguaCover() {
  return (
    <div className="absolute inset-0">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_50%_70%,rgba(14,138,180,0.25),transparent_60%)]" />
      <div className="absolute left-1/2 top-[9%] w-[42%] -translate-x-1/2 -rotate-2 overflow-hidden rounded-[1.25rem] border-[3px] border-[#2a2a30] bg-black shadow-2xl shadow-black/70 sm:rounded-[1.75rem] sm:border-4">
        <Image
          src={home}
          alt="LinguaAI home screen with streak, practice-speaking card, current lesson and level progress"
          placeholder="blur"
          sizes="(min-width: 1024px) 220px, 42vw"
          className="block h-auto w-full"
        />
      </div>
    </div>
  );
}
