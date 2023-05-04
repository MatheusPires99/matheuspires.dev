"use client";

import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";

import { Icons } from "@/components/icons";

export const SearchInput = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [, startTransition] = useTransition();

  const handleSearch = (search: string) => {
    const params = new URLSearchParams(window.location.search);

    if (search) {
      params.set("search", search);
    } else {
      params.delete("search");
    }

    startTransition(() => {
      router.replace(`${pathname}?${params.toString()}`);
    });
  };

  return (
    <div className="relative w-full">
      <div className="absolute left-4 top-1/2 flex -translate-y-1/2 items-center justify-center">
        <Icons.Search className="h-5 w-5 text-accent-placeholder" />
      </div>
      <input
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search..."
        className="h-12 w-full rounded border border-accent-border bg-transparent pl-11 pr-4 text-text-base placeholder:text-accent-placeholder focus:ring-2 focus:ring-border-hover focus-visible:outline-none"
      />
    </div>
  );
};
