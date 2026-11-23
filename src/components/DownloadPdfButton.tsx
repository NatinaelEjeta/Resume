"use client";

import { Download, FileStack } from "lucide-react";

export default function DownloadPdfButton() {
  const save = () => {
    const prev = document.title;
    document.title = "Natinael_Ejeta_Resume";
    const restore = () => {
      document.title = prev;
      window.removeEventListener("afterprint", restore);
    };
    window.addEventListener("afterprint", restore);
    window.print();
  };

  const cls =
    "inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-[11px] font-semibold shadow-sm transition";

  return (
    <div className="flex flex-wrap justify-end gap-2">
      <button type="button" onClick={save} className={`${cls} bg-blue-600 text-white hover:bg-blue-500`}>
        <Download size={13} />
        Download Resume
      </button>
      <a
        href="/Natinael_Ejeta_Resume_with_Documents.pdf"
        download="Natinael_Ejeta_Resume_with_Documents.pdf"
        className={`${cls} border border-blue-600 bg-white text-blue-700 hover:bg-blue-50`}
      >
        <FileStack size={13} />
        Resume + Documents
      </a>
    </div>
  );
}