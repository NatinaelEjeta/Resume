"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function MoreProjects({ children, count }: { children: ReactNode; count: number }) {
  const [open, setOpen] = useState(false);
  if (count <= 0) return null;

  return (
    <>
      <div className={open ? "block" : "hidden print:block"}>{children}</div>
      <div className="mt-4 text-center print:hidden">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="flex w-full items-center justify-center gap-1.5 rounded-lg border border-blue-200 bg-blue-50 px-4 py-3.5 text-[12px] font-semibold text-blue-700 transition hover:bg-blue-100"
        >
          {open ? (
            <>
              <ChevronUp size={13} /> Show less
            </>
          ) : (
            <>
              <ChevronDown size={13} /> More projects ({count})
            </>
          )}
        </button>
      </div>
    </>
  );
}