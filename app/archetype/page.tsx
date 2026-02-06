"use client";

import { useSelectedUser, useSuperData } from "@/components/superDataProvider";
import InsightBlock from "@/components/insightBlock";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Archetype() {
  const { selectedUser } = useSelectedUser();
  const archetype = useSuperData(selectedUser.username, "archetype");
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setTimeout(() => setIsRevealed(true), 2000));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="min-h-screen font-sans py-16">
      <InsightBlock className="px-20 h-[180px]" caption={archetype?.caption} insight={isRevealed ? archetype?.insight : "What kind of super user are you?"} />
      <div className="relative flex justify-center items-center mt-16">
        <div className="relative">
          <Image
            src={archetype?.image}
            alt="Archetype"
            width={440}
            height={380}
            className={`w-[360px] transition-all duration-500 ease-out ${isRevealed ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
          />
          <div
            className={`absolute inset-0 flex items-center justify-center text-[160px] font-brand font-bold text-muted-foreground/70 transition-all duration-500 ease-out ${isRevealed ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
          >
            ?
          </div>
        </div>
        <Image src="/archetypes/holder.svg" alt="Holder" width={740} height={398} className={`absolute -z-10 top-0 left-1/2 -translate-x-1/2 w-[600px] transition-all duration-500 ease-out ${isRevealed ? "opacity-100 -translate-y-full" : "opacity-0 -translate-y-[calc(100%+20px)]"
          }`} />
      </div>
    </div>
  );
}