"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function HomeOnlyBrand() {
  const pathname = usePathname();

  if (pathname !== "/") {
    return null;
  }

  return (
    <Link href="/" className="inline-flex items-center text-sm font-semibold tracking-tight text-[#2b2f38]">
      <Image src="/Airtable_Logo.svg" alt="Airtable" width={82} height={18} priority />
    </Link>
  );
}
