import Link from "next/link";

import { MainNav } from "@/components//main-nav";
import { Icons } from "@/components/icons";

export const Header = () => {
  return (
    <header className="fixed top-0 z-50 h-20 w-full border-b border-accent-border bg-[rgba(253,253,254,0.75)] backdrop-blur-md dark:bg-[rgba(19,22,32,0.75)]">
      <div className="container flex h-full items-center justify-between">
        <Link
          href="/"
          aria-label="Go to home page"
          className="text-text-base transition hover:text-text-contrast"
        >
          <div className="flex items-center gap-2">
            <Icons.MatheusPiresLogo />
            <span className="hidden sm:block">Matheus Pires</span>
          </div>
        </Link>

        <MainNav />
      </div>
    </header>
  );
};
