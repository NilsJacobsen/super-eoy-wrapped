"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { XIcon } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center px-8 py-4 fixed top-0 left-0 right-0 w-full">
      <Link href="https://super.work" target="_blank">
        <Image src="/Super_Wordmark_Dark.svg" alt="Logo" width={75} height={20} className="h-6"/>
      </Link>
      {pathname !== "/" && <div className="flex items-center gap-4">
        <Link href="/">
          <Button variant="ghost" className="font-semibold">
            <XIcon className="w-4 h-4" />
            Close
          </Button>
        </Link>
      </div>}
    </header>
  );
};

export default Header;