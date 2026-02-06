"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelectedUser } from "./superDataProvider";

export const SourceBar = ({ source, isFirst, className }: {
  source: {
    name: string;
    image: string;
    percentage: number;
  },
  isFirst: boolean,
  className?: string
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const { selectedUser } = useSelectedUser();
  const color = selectedUser.color;

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return <div className={cn("relative border border-border rounded-xl p-4 bg-white flex items-center justify-between", isFirst && "border-2 border-foreground", className)}>
    <div className="flex items-center gap-4">
      <Image src={source.image} alt={source.name} width={32} height={32} />
      <p className="text-xl font-brand font-medium">{source.name}</p>
    </div>
    <p className="z-10 text-lg font-bold text-foreground">{source.percentage}%</p>
    <div
      className="absolute top-0 right-0 h-full rounded-r-xl border-4 border-white transition-[width] duration-700 ease-out"
      style={{
        width: isMounted ? `${source.percentage}%` : "0%",
        backgroundColor: color + "90",
      }}
    />
    {isFirst && <p className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 text-sm text-white bg-foreground rounded-lg px-2 py-1">#1</p>}
  </div>
}