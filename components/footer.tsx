"use client";

import { Pagination, PaginationContent, PaginationItem } from "@/components/ui/pagination";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";
import { Button } from "./ui/button";
import { ArrowRightIcon, DownloadIcon } from "lucide-react";

const PAGES = [
  {
    label: "Usage",
    href: "/usage",
  },
  {
    label: "Super Power",
    href: "/super-power",
  },
  {
    label: "Sources",
    href: "/sources",
  },
  {
    label: "Archetype",
    href: "/archetype",
  },
  {
    label: "Summary",
    href: "/summary",
  }
]

const Footer = () => {

  const pathname = usePathname();
  const router = useRouter();
  const isCurrentPage = useCallback((page: { href: string }) => page.href === pathname, [pathname]);

  const handleNext = useCallback(() => {
    const currentIndex = PAGES.findIndex((page) => page.href === pathname);
    const nextPage = PAGES[currentIndex + 1];
    if (nextPage) {
      router.push(nextPage.href);
    }
  }, [pathname, router]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/SuperEOYWrappedAnton.png";
    link.download = "SuperEOYWrappedAnton.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer className="flex justify-between items-center px-8 py-4 fixed bottom-0 left-0 right-0 w-full">
      {pathname !== "/" && <Pagination className="max-w-4xl">
        <PaginationContent className="flex justify-between w-full">
          <div className="flex items-center">
            {PAGES.map((page) => (
              <PaginationItem key={page.href}>
                <Link href={page.href} className={"relative group rounded-full h-20 mx-1 flex items-center justify-center"}>
                  <div className={cn("transition-all duration-300 w-[120px] h-[4px] rounded-full group-hover:bg-foreground/50", isCurrentPage(page) ? "bg-foreground" : "bg-border")} />
                  <p className="text-center w-full font-semibold pointer-events-none opacity-0 h-0 group-hover:opacity-100 group-hover:h-6 transition-all duration-300 absolute bottom-2 left-0">{page.label}</p>
                </Link>
              </PaginationItem>
            ))}
          </div>

          {pathname !== PAGES[PAGES.length - 1].href ?
            <Button size="lg" onClick={handleNext}>
              Next
              <ArrowRightIcon className="w-4 h-4" />
            </Button>
            : <Button size="lg" onClick={handleDownload}>
              Share Card
              <DownloadIcon className="w-4 h-4" />
            </Button>
          }

        </PaginationContent>
      </Pagination>}
    </footer>
  );
};

export default Footer;