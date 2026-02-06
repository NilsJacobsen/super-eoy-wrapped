"use client";

import { useSelectedUser, useSuperData } from "@/components/superDataProvider";
import InsightBlock from "@/components/insightBlock";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function SuperPower() {
  const { selectedUser } = useSelectedUser();
  const superPower = useSuperData(selectedUser.username, "superPower");

  const [isMounted, setIsMounted] = useState(false);
  const cards = [
    {
      count: `${superPower?.assistants[0].runs}x`,
      src: "/super/assistant-01.svg",
      initial: "-translate-x-[calc(50%+50px)] rotate-5",
      animated: "-rotate-12 -translate-x-[calc(50%+120px)]",
    },
    {
      count: `${superPower?.assistants[1].runs}x`,
      src: "/super/assistant-02.svg",
      initial: "-translate-x-[calc(50%-50px)] rotate-5",
      animated: "rotate-12 -translate-x-[calc(50%-120px)]",
    },
  ];

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="min-h-screen font-sans py-16 flex flex-col items-center">
      <InsightBlock caption={superPower?.caption} insight={superPower?.insight} highlightedCharacters={superPower?.highlightedCharacters} />
      <div className="relative h-[400px] w-full mt-8">
        {cards.map((card) => (
          <div
            key={card.count}
            className="absolute w-[240px] top-1/2 left-1/2 -translate-y-1/2"
          >
            <div
              className={cn(
                "transition-transform duration-500 ease-out",
                card.initial,
                isMounted && card.animated,
              )}
            >
              <div className="font-brand font-bold absolute top-0 translate-y-[-60%] left-1/2 -translate-x-1/2 flex z-10 px-2 py-1 rounded-md text-background bg-foreground">
                {card.count}
              </div>
              <Image src={card.src} alt="Assistant" width={1000} height={1000} />
            </div>
          </div>
        ))}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent to-background" />
      </div>
    </div>
  );
}