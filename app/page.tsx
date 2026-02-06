"use client";

import FontBackground from "@/components/fontBackground";
import { useSelectedUser } from "@/components/superDataProvider";
import { Button } from "@/components/ui/button";
import { cn, gradientText } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const { selectedUser } = useSelectedUser();

  return (
    <div className="relative h-full font-sans w-full flex items-center justify-center">
      <div className="relative z-10 flex flex-col gap-4 max-w-[400px] w-full border border-border rounded-xl p-6 bg-white justify-between min-h-96">
        <div className="flex flex-col items-end">
          <p className="text-lg font-brand text-muted-foreground">End of Year Wrapped by</p>
          <Image src="/Super_Wordmark_Dark.svg" alt="Logo" width={150} height={40} className="h-10 opacity-50" />
        </div>
        <div className="flex flex-col gap-4">
          <p className={cn("w-fit text-4xl font-brand font-bold", gradientText)}>
            2026
          </p>
          <p className="text-4xl font-brand pr-2">{`Hi ${selectedUser.username.charAt(0).toUpperCase() + selectedUser.username.slice(1)}, your Wrapped is here.`}</p>
          <Button variant="default" size="lg" className="text-lg mt-4" onClick={() => router.push("/usage")}>Reveal now</Button>
        </div>
      </div>
      <div
        className="fixed -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] rotate-45 rounded-full h-[120px] bg-linear-to-r from-[#EF91F7] to-[#176BE5] pointer-events-none blur-3xl animate-[pulse_3s_ease-in-out_infinite]"
      />
      <FontBackground />
    </div>
  );
}
