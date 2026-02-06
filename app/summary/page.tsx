"use client";

import FontBackground from "@/components/fontBackground";
import Metric from "@/components/metric";
import { useSelectedUser, useSuperData } from "@/components/superDataProvider";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Summary() {
  const { selectedUser } = useSelectedUser();
  const usage = useSuperData(selectedUser.username, "usage");
  const sources = useSuperData(selectedUser.username, "sources");
  const superPower = useSuperData(selectedUser.username, "superPower");
  const archetype = useSuperData(selectedUser.username, "archetype");

  return (
    <div className="relative h-full font-sans w-full flex items-center justify-center">
      <div className="relative z-10 flex flex-col gap-6 max-w-[400px] w-full border border-border rounded-xl p-6 bg-white justify-between min-h-96">
        <div className="flex items-center gap-4">
          <Metric className="flex-1" metric={{ name: usage.metrics[0].name, value: usage.metrics[0].value, trend: usage.metrics[0].trend, description: usage.metrics[0].description }} />
          <Image src={archetype.image} alt="Archetype" width={169} height={146} className="h-[146px]" />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-muted-foreground">Your Sources</p>
          <div className="flex items-center gap-2">
            {sources.sources.map((source, index) => (
              <div key={source.name} className={cn("relative w-20 h-20 flex items-center justify-center border border-border rounded-xl bg-white", index === 0 && "border-2 border-foreground")}>
                <Image src={source.image} alt={source.name} width={40} height={40} />
                {index === 0 && <p className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 text-sm font-brand font-medium bg-foreground text-white rounded-lg px-2 py-1">#1</p>}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-2">
          <p className="text-sm text-muted-foreground">Your Super Power</p>
          <div className="flex flex-col items-center gap-2">
            {superPower.assistants.map((superPower) => (
              <div key={superPower.name} className="flex items-center w-full border border-border rounded-xl p-3 gap-3">
                <p className="text-sm font-brand font-semibold text-white bg-foreground rounded-lg px-2 py-1">{superPower.runs}x</p>
                <p className="text-md font-brand">{superPower.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-sm font-brand text-muted-foreground">End of Year Wrapped by</p>
          <Image src="/Super_Wordmark_Dark.svg" alt="Logo" width={150} height={40} className="h-7 opacity-50" />
        </div>
      </div>
      <div
        className="fixed -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] rotate-45 rounded-full h-[120px] bg-linear-to-r from-[#EF91F7] to-[#176BE5] pointer-events-none blur-3xl animate-[pulse_3s_ease-in-out_infinite]"
      />
      <FontBackground />
    </div>
  );
}