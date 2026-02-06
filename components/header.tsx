"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Settings2, XIcon } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { DropdownMenu } from "./ui/dropdown-menu";
import { useSelectedUser } from "./superDataProvider";

const Header = () => {
  const pathname = usePathname();
  const { setSelectedUser } = useSelectedUser();

  return (
    <header className="flex justify-between items-center px-8 fixed top-0 left-0 right-0 w-full h-18">
      <Link href="/" className="pt-2">
        <Image src="/Super_Wordmark_Dark.svg" alt="Logo" width={75} height={20} className="h-6" />
      </Link>
      <div className="flex items-center gap-4">

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Settings2 className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Users</DropdownMenuLabel>
            <DropdownMenuItem className="cursor-pointer" onClick={() => setSelectedUser({ username: "anton", color: "#CE6BD6" })}>Anton</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer" onClick={() => setSelectedUser({ username: "carla", color: "#91A9F7" })}>Carla</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        {pathname !== "/" && <Link href="/">
          <Button variant="ghost">
            <XIcon className="w-4 h-4" />
            Close
          </Button>
        </Link>}
      </div>
    </header>
  );
};

export default Header;