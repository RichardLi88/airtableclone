"use client";

import { cn } from "~/lib/utils";

type AirtableIconProps = {
  name: string;
  className?: string;
  size?: number;
};

export function AirtableIcon({ name, className, size = 16 }: AirtableIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      aria-hidden="true"
      className={cn("flex-none", className)}
      style={{ shapeRendering: "geometricPrecision" }}
    >
      <use fill="currentColor" href={`/icons/airtable_icon_definitions.svg#${name}`} />
    </svg>
  );
}
