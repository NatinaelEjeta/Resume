import { Download, ExternalLink, FileText } from "lucide-react";

const RESUME_URL = "/Natinael_Ejeta_Resume.pdf";

const SECTIONS = [
  "SUMMARY",
  "TECHNICAL SKILLS",
  "EXPERIENCE",
  "PROJECTS",
  "EDUCATION",
  "LANGUAGES",
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1B2A4A]">
      <main className="flex-1 w-full">
        {/* ---------------------------------------------------------- */}
        {/* Header band                                                */}
        {/* ---------------------------------------------------------- */}
        <header className="w-full border-b border-[#1B2A4A]/15">
          <div className="mx-auto max-w-3xl px-5 py-10 sm:px-8 sm:py-14">
            <h1 className="text-3xl font-bold uppercase tracking-tight text-[#1B2A4A] sm:text-5xl">
              Natinael Ejeta
            </h1>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#1B2A4A]/70 sm:text-sm">
              Full-Stack Developer
            </p>

            <div className="mt-5 h-px w-full bg-[#1B2A4A]" />

            <p className="mt-4 text-sm leading-relaxed text-[#1B2A4A]/80 sm:text-[15px]">
              +251941582603&nbsp;|&nbsp;
              <a
                href="mailto:nejeta9@gmail.com"
                className="font-medium text-[#1B2A4A] underline decoration-[#1B2A4A]/40 underline-offset-4 transition-colors hover:decoration-[#1B2A4A]"
              >
                nejeta9@gmail.com
              </a>
              &nbsp;|&nbsp;Addis Ababa, Ethiopia&nbsp;|&nbsp;
              <a
                href="https://github.com/NatinaelEjeta"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#1B2A4A] underline decoration-[#1B2A4A]/40 underline-offset-4 transition-colors hover:decoration-[#1B2A4A]"
              >
                github.com/NatinaelEjeta
              </a>
              &nbsp;|&nbsp;
              <a
                href="https://linkedin.com/in/natinalejeta"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#1B2A4A] underline decoration-[#1B2A4A]/40 underline-offset-4 transition-colors hover:decoration-[#1B2A4A]"
              >
                linkedin.com/in/natinalejeta
              </a>
            </p>
          </div>
        </header>

        {/* ---------------------------------------------------------- */}
        {/* Content                                                    */}
        {/* ---------------------------------------------------------- */}
        <section className="mx-auto w-full max-w-3xl px-5 py-8 sm:px-8 sm:py-10">
          <div className="flex flex-col gap-6">
            {/* --- Download card ------------------------------------- */}
            <div className="rounded-xl border border-[#1B2A4A]/15 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-start gap-4">
                <span className="hidden shrink-0 items-center justify-center rounded-lg bg-[#1B2A4A] p-3 text-white sm:flex">
                  <FileText className="h-6 w-6" />
                </span>
                <div className="min-w-0 flex-1">
                  <h2 className="text-lg font-bold uppercase tracking-tight text-[#1B2A4A] sm:text-xl">
                    Resume PDF
                  </h2>
                  <p className="mt-1 text-sm leading-relaxed text-[#1B2A4A]/70">
                    Natinael_Ejeta_Resume.pdf · 2 pages · A4 · ~40 KB ·
                    selectable text · clickable links
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={RESUME_URL}
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[#1B2A4A] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#1B2A4A]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B2A4A] focus-visible:ring-offset-2"
                >
                  <Download className="h-4 w-4" />
                  Download PDF
                </a>
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-[#1B2A4A] bg-white px-5 py-3 text-sm font-semibold text-[#1B2A4A] transition-colors hover:bg-[#1B2A4A]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B2A4A] focus-visible:ring-offset-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  Open in new tab
                </a>
              </div>
            </div>

            {/* --- Page preview (rendered images, always visible) ------ */}
            <div className="rounded-xl border border-[#1B2A4A]/15 bg-white p-4 shadow-sm sm:p-6">
              <div className="mb-4 flex items-center gap-2">
                <FileText className="h-4 w-4 text-[#1B2A4A]" />
                <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1B2A4A]">
                  Preview
                </h2>
                <span className="ml-auto text-xs font-medium text-[#1B2A4A]/50">
                  Page 1 of 2 · Page 2 of 2
                </span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-lg border border-[#1B2A4A]/20 bg-white transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B2A4A]"
                >
                  <img
                    src="/resume-page-1.png"
                    alt="Resume page 1"
                    className="block w-full"
                  />
                </a>
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-lg border border-[#1B2A4A]/20 bg-white transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B2A4A]"
                >
                  <img
                    src="/resume-page-2.png"
                    alt="Resume page 2"
                    className="block w-full"
                  />
                </a>
              </div>
              <p className="mt-3 text-xs text-[#1B2A4A]/50">
                Click either page to open the full PDF, or use the download button above.
              </p>
            </div>

            {/* --- At a glance --------------------------------------- */}
            <div className="rounded-xl border border-[#1B2A4A]/15 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1B2A4A]">
                At a Glance
              </h2>
              <p className="mt-1 text-sm text-[#1B2A4A]/60">
                Resume section order
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {SECTIONS.map((label) => (
                  <li
                    key={label}
                    className="inline-flex items-center rounded-full border border-[#1B2A4A]/25 bg-[#1B2A4A]/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#1B2A4A]"
                  >
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* ---------------------------------------------------------- */}
      {/* Sticky footer                                              */}
      {/* ---------------------------------------------------------- */}
      <footer className="mt-auto w-full">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="h-px w-full bg-[#1B2A4A]" />
        </div>
        <div className="px-5 py-6 text-center text-xs text-[#1B2A4A]/70 sm:px-8 sm:text-sm">
          © 2025 Natinael Ejeta · Resume generated as PDF
        </div>
      </footer>
    </div>
  );
}
