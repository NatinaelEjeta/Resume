"use client";

import { Download } from "lucide-react";

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

  return (
    <button
      type="button"
      onClick={save}
      className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-3.5 py-2 text-[11px] font-semibold text-white shadow-sm transition hover:bg-blue-500"
    >
      <Download size={13} />
      Download PDF
    </button>
  );
}