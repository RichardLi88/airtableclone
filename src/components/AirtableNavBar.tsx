"use client";

import { AirtableBaseNavBar } from "~/components/AirtableBaseNavBar";
import { AirtableHomeNavBar } from "~/components/AirtableHomeNavBar";

type AirtableNavBarProps = {
  isHome: boolean;
  baseId?: string;
};

export function AirtableNavBar({ isHome, baseId }: AirtableNavBarProps) {
  if (isHome) {
    return <AirtableHomeNavBar />;
  }

  if (!baseId) {
    return null;
  }

  return <AirtableBaseNavBar baseId={baseId} />;
}
