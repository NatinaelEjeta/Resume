"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { createPortal } from "react-dom";
import { FileText, X, Download, ExternalLink } from "lucide-react";
import doc from "@/data/documents.json";

type Group = { group: string; names: string[] };
type Doc = { title: string; file: string; ext: string; groups: Group[] };

const overlay: CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: "100vw",
  height: "100dvh",
  zIndex: 2147483647,
  display: "flex",
  flexDirection: "column",
  background: "#0f172a",
};

const bar: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 12,
  padding: "8px 14px",
  color: "#fff",
  borderBottom: "1px solid #334155",
  flex: "0 0 auto",
};

const btn: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 4,
  background: "#2563eb",
  color: "#fff",
  padding: "6px 12px",
  borderRadius: 6,
  fontSize: 12,
  fontWeight: 600,
  textDecoration: "none",
  border: 0,
  cursor: "pointer",
};

export default function DocumentsSection() {
  const [open, setOpen] = useState(false);
  const d = doc as Doc;
  const url = `/documents/${d.file}`;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const viewer = open && (
    <div style={overlay} role="dialog" aria-modal="true" aria-label={d.title} className="print:hidden">
      <div style={bar}>
        <strong style={{ fontSize: 14 }}>{d.title}</strong>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <a href={url} target="_blank" rel="noreferrer" style={btn}>
            <ExternalLink size={13} /> Open in new tab
          </a>
          <a href={url} download style={btn}>
            <Download size={13} /> Download
          </a>
          <button type="button" onClick={() => setOpen(false)} aria-label="Close" style={{ ...btn, background: "#334155" }}>
            <X size={15} /> Close
          </button>
        </div>
      </div>
      <iframe
        src={`${url}#zoom=page-width&view=FitH`}
        title={d.title}
        style={{ flex: "1 1 auto", width: "100%", border: 0, background: "#fff", minHeight: 0 }}
      />
    </div>
  );

  return (
    <>
      <section className="rounded-xl border border-slate-200 bg-slate-100/80 p-4 print:break-inside-avoid">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="block w-full rounded-lg border border-slate-200 bg-white p-3 text-left transition hover:border-blue-300 hover:bg-blue-50"
        >
          <span className="flex items-center gap-2 border-b border-slate-200 pb-2 text-[11px] font-bold text-slate-800">
            <FileText size={14} className="shrink-0 text-blue-500" />
            {d.title}
          </span>
          <span className="mt-2 block space-y-1.5">
            {d.groups.map((g) => (
              <span key={g.group} className="block text-[9.5px] leading-snug text-slate-500">
                <b className="font-semibold text-slate-700">{g.group}: </b>
                {g.names.join(", ")}
              </span>
            ))}
          </span>
          <span className="mt-2 block text-[9.5px] font-semibold text-blue-600">Click to view all documents</span>
        </button>
      </section>
      {viewer ? createPortal(viewer, document.body) : null}
    </>
  );
}