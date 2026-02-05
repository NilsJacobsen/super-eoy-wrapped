"use client";
import { useSuperData } from "@/components/superDataProvider";

export default function Usage() {
  const usage = useSuperData("demo", "usage");
  return (
    <div className="min-h-screen font-sans">
      <h1 className="text-5xl font-brand">Your Usage</h1>
      <p>{JSON.stringify(usage, null, 2)}</p>
    </div>
  );
}