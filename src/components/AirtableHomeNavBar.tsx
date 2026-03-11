"use client";

import { Bell, List, MagnifyingGlass, Question } from "@phosphor-icons/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { HomeOnlyBrand } from "~/components/HomeOnlyBrand";

export function AirtableHomeNavBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [homeSearch, setHomeSearch] = useState(searchParams.get("q") ?? "");

  useEffect(() => {
    setHomeSearch(searchParams.get("q") ?? "");
  }, [searchParams]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        searchInputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const updateHomeSearch = (nextValue: string) => {
    setHomeSearch(nextValue);

    const params = new URLSearchParams(searchParams.toString());
    if (nextValue.trim()) {
      params.set("q", nextValue.trim());
    } else {
      params.delete("q");
    }

    const query = params.toString();
    router.replace(query ? `/?${query}` : "/");
  };

  return (
    <nav className="flex h-10 w-full items-center px-2.5">
      <button className="mr-3 grid h-6 w-6 place-items-center rounded text-[#646f80] hover:bg-[#eef1f6]">
        <List size={15} />
      </button>
      <HomeOnlyBrand />
      <div className="mx-auto flex h-8 w-full max-w-[360px] items-center rounded-full border border-[#d8dde6] bg-[#f7f8fa] px-3">
        <MagnifyingGlass size={14} className="text-[#768094]" />
        <input
          ref={searchInputRef}
          value={homeSearch}
          onChange={(event) => updateHomeSearch(event.target.value)}
          placeholder="Search..."
          className="ml-2 w-full bg-transparent text-[12px] text-[#4f5867] placeholder:text-[#7b8493] outline-none"
          aria-label="Search bases"
        />
        <span className="ml-auto text-[11px] text-[#9aa3b2]">Ctrl K</span>
      </div>
      <div className="ml-3 flex items-center gap-2 text-[#5e6777]">
        <button className="grid h-6 w-6 place-items-center rounded hover:bg-[#eef1f6]">
          <Question size={14} />
        </button>
        <button className="grid h-6 w-6 place-items-center rounded hover:bg-[#eef1f6]">
          <Bell size={14} />
        </button>
        <button className="grid h-6 w-6 place-items-center rounded-full bg-[#e03a7b] text-[11px] font-semibold text-white">
          R
        </button>
      </div>
    </nav>
  );
}
