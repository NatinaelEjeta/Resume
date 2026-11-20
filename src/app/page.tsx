import { Download, ExternalLink, FileText, Mail, Github, Linkedin, MapPin, Phone } from "lucide-react";

const RESUME_URL = "/Natinael_Ejeta_Resume.pdf";

type Bullet = string;

interface Job {
  title: string;
  company: string;
  dates: string;
  bullets: Bullet[];
}

interface Project {
  num: number;
  title: string;
  stack: string;
  inDev?: boolean;
  liveUrl?: string;
  liveLabel?: string;
  codeUrl: string;
  bullets: Bullet[];
}

const JOBS: Job[] = [
  {
    title: "Independent Full-Stack Developer",
    company: "Remote",
    dates: "2025 - Present",
    bullets: [
      "Design, build and deploy complete web apps with Next.js, TypeScript, Prisma and PostgreSQL.",
      "Built and deployed 4 production projects covering booking, school management, betting and AI-assisted communication (see Projects).",
      "Open to clients, freelance engagements and investors interested in these projects.",
    ],
  },
  {
    title: "Stock Controller",
    company: "OLA Energy at Bole Aviation, Addis Ababa",
    dates: "2024 - 2025",
    bullets: [
      "Maintained accurate stock records and verified information to catch discrepancies before they escalated.",
      "Organized documentation and shared timely updates with colleagues and management to keep operations aligned.",
    ],
  },
  {
    title: "GPS Data Control",
    company: "Siltun Balamuya Company (Sbaco), Addis Ababa",
    dates: "2020 - 2023",
    bullets: [
      "Generated and reviewed daily trip reports for a fleet of about 120 vehicles using a GPS monitoring system.",
      "Identified safety and compliance concerns, communicated with drivers about reported violations, and documented issues for management follow-up.",
      "Handled records responsibly with consistent attention to detail.",
    ],
  },
];

const PROJECTS: Project[] = [
  {
    num: 1,
    title: "Clinic Appointment Booking System",
    stack: "Next.js, TypeScript, Prisma, PostgreSQL, Vitest",
    liveUrl: "https://clinic-booking-system-kappa.vercel.app",
    liveLabel: "clinic-booking-system-kappa.vercel.app",
    codeUrl: "https://github.com/NatinaelEjeta/clinic-booking-system",
    bullets: [
      "Built a booking app where patients choose a service, doctor, date and time, with separate roles for patients, doctors and admins.",
      "Wrote the slot engine that returns only open times: inside working hours, outside time off, with minimum notice, and no overlapping appointments.",
      "Prevented double booking by re-checking availability inside a database transaction; a second request for the same slot is rejected.",
      "Implemented cancel/reschedule rules (24-hour cutoff) and email reminders via a scheduled endpoint; added unit tests for scheduling rules, stored UTC and calculated in the clinic's time zone. Deployed on Vercel with Neon PostgreSQL.",
    ],
  },
  {
    num: 2,
    title: "School Management System",
    stack: "Next.js, Node.js, Prisma, PostgreSQL, Zod",
    liveUrl: "https://school-management-system-sigma-five.vercel.app",
    liveLabel: "school-management-system-sigma-five.vercel.app",
    codeUrl: "https://github.com/NatinaelEjeta/school-management-system",
    bullets: [
      "Built a role-based app for admins, teachers and students covering students, courses, enrollment, attendance and grades.",
      "Implemented JWT sessions in httpOnly cookies and bcrypt hashing, with server permission checks on every API route.",
      "Prevented duplicate attendance with database constraints and validated every request body with Zod.",
      "Built an admin dashboard with charts, downloadable PDF report cards and a change-password feature. Deployed on Vercel with Neon PostgreSQL.",
    ],
  },
  {
    num: 3,
    title: "Ethio Betting",
    stack: "Next.js, TypeScript, Prisma, Neon PostgreSQL, Vercel",
    liveUrl: "https://ethiobetting.vercel.app",
    liveLabel: "ethiobetting.vercel.app",
    codeUrl: "https://github.com/NatinaelEjeta/EthioBetting",
    bullets: [
      "Built an online sports betting platform with registration, login and an admin panel.",
      "Synced sports data automatically with a scheduled endpoint (/api/cron/run) called by an external scheduler (cron-job.org).",
      "Built a manual admin-approval flow for Telebirr deposits and admin-editable support contacts (phone, email, Telegram).",
      "Migrated the database from SQLite to hosted Neon PostgreSQL for production.",
    ],
  },
  {
    num: 4,
    title: "ReplyMate AI",
    stack: "Next.js 16, TypeScript, Tailwind CSS, shadcn/ui, Prisma, Auth.js, OpenAI, Resend",
    inDev: true,
    codeUrl: "https://github.com/NatinaelEjeta/Smart-Ai-Reply",
    bullets: [
      "Multi-tenant inbox that suggests AI replies; nothing is sent without explicit user approval, which is recorded in the database.",
      "Designed a 13-table Prisma data model with migrations, encrypted platform tokens at rest (AES-256-GCM), and wrote integration tests proving cross-tenant data isolation.",
      "Built email verification, password reset, account-deletion cascade and session revocation; reply preferences include 8 tones, 3 variants, and English/Oromo/Amharic.",
      "Treats customer messages as untrusted input to guard against prompt injection.",
    ],
  },
];

const SKILLS: { label: string; values: string }[] = [
  { label: "Languages", values: "TypeScript, JavaScript, SQL, HTML, CSS" },
  { label: "Front end", values: "React, Next.js (App Router), Tailwind CSS, shadcn/ui, TanStack Query, Recharts" },
  { label: "Back end", values: "Node.js, REST APIs, Prisma ORM, PostgreSQL, Zod validation, JWT authentication, Auth.js, bcrypt, webhooks, cron jobs, AES-256 encryption" },
  { label: "AI", values: "LLM APIs (OpenAI), prompt-injection-aware design" },
  { label: "Tools", values: "Git, GitHub, Vercel, Neon, Vitest" },
];

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h2 className="mt-10 text-sm font-bold uppercase tracking-[0.15em] text-[#1B2A4A] sm:text-base">
        {children}
      </h2>
      <div className="mt-1.5 h-px w-full bg-[#1B2A4A]" />
    </>
  );
}

function Bullets({ items }: { items: Bullet[] }) {
  return (
    <ul className="mt-2 space-y-1.5">
      {items.map((b, i) => (
        <li
          key={i}
          className="flex gap-2 text-[15px] leading-relaxed text-[#1F2937] sm:text-[15.5px]"
        >
          <span aria-hidden className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-[#1B2A4A]" />
          <span>{b}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1B2A4A]">
      <main className="flex-1 w-full">
        {/* ---------------------------------------------------------- */}
        {/* Resume document                                            */}
        {/* ---------------------------------------------------------- */}
        <article className="mx-auto w-full max-w-3xl px-5 py-10 sm:px-8 sm:py-14">
          {/* --- Header --- */}
          <header>
            <h1 className="text-3xl font-bold uppercase tracking-tight text-[#1B2A4A] sm:text-4xl">
              Natinael Ejeta
            </h1>
            <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#1F2937] sm:text-xs">
              F U L L &ndash; S T A C K &nbsp; D E V E L O P E R
            </p>
            <div className="mt-3 h-px w-full bg-[#1B2A4A]" />
            <p className="mt-3 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[13px] text-[#1F2937] sm:text-sm">
              <span className="inline-flex items-center gap-1">
                <Phone className="h-3.5 w-3.5 text-[#1B2A4A]" />
                +251941582603
              </span>
              <span aria-hidden className="text-[#1B2A4A]/40">|</span>
              <a
                href="mailto:nejeta9@gmail.com"
                className="inline-flex items-center gap-1 font-medium text-[#1B2A4A] underline decoration-[#1B2A4A]/40 underline-offset-4 transition-colors hover:decoration-[#1B2A4A]"
              >
                <Mail className="h-3.5 w-3.5" />
                nejeta9@gmail.com
              </a>
              <span aria-hidden className="text-[#1B2A4A]/40">|</span>
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5 text-[#1B2A4A]" />
                Addis Ababa, Ethiopia
              </span>
              <span aria-hidden className="text-[#1B2A4A]/40">|</span>
              <a
                href="https://github.com/NatinaelEjeta"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium text-[#1B2A4A] underline decoration-[#1B2A4A]/40 underline-offset-4 transition-colors hover:decoration-[#1B2A4A]"
              >
                <Github className="h-3.5 w-3.5" />
                github.com/NatinaelEjeta
              </a>
              <span aria-hidden className="text-[#1B2A4A]/40">|</span>
              <a
                href="https://linkedin.com/in/natinalejeta"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium text-[#1B2A4A] underline decoration-[#1B2A4A]/40 underline-offset-4 transition-colors hover:decoration-[#1B2A4A]"
              >
                <Linkedin className="h-3.5 w-3.5" />
                linkedin.com/in/natinalejeta
              </a>
            </p>
          </header>

          {/* --- Summary --- */}
          <SectionHeading>Summary</SectionHeading>
          <p className="mt-3 text-[15px] leading-relaxed text-[#1F2937] sm:text-[15.5px]">
            Full-stack developer who designs, builds and deploys complete web apps from
            database to live site. Built and deployed 4 projects with role-based access,
            secure authentication, scheduling logic, automated tests and AI features. Open
            to freelance, remote and junior roles, and to clients or investors interested in
            my projects.
          </p>

          {/* --- Technical Skills --- */}
          <SectionHeading>Technical Skills</SectionHeading>
          <dl className="mt-3 space-y-1.5">
            {SKILLS.map((s) => (
              <div
                key={s.label}
                className="text-[15px] leading-relaxed text-[#1F2937] sm:text-[15.5px]"
              >
                <dt className="inline font-bold text-[#1B2A4A]">{s.label}:</dt>{" "}
                <dd className="inline">{s.values}</dd>
              </div>
            ))}
          </dl>

          {/* --- Experience --- */}
          <SectionHeading>Experience</SectionHeading>
          <div className="mt-4 space-y-5">
            {JOBS.map((job) => (
              <div key={job.title}>
                <p className="text-[15px] leading-snug text-[#1F2937] sm:text-[15.5px]">
                  <span className="font-bold text-[#1B2A4A]">{job.title}</span>
                  <span className="text-[#1B2A4A]/50"> &nbsp;|&nbsp; </span>
                  {job.company}
                  <span className="text-[#1B2A4A]/50"> &nbsp;|&nbsp; </span>
                  <span className="text-[#4B5563]">{job.dates}</span>
                </p>
                <Bullets items={job.bullets} />
              </div>
            ))}
          </div>

          {/* --- Projects --- */}
          <SectionHeading>Projects</SectionHeading>
          <div className="mt-4 space-y-6">
            {PROJECTS.map((p) => (
              <div key={p.num}>
                <p className="text-[15px] leading-snug text-[#1F2937] sm:text-[15.5px]">
                  <span className="font-bold text-[#1B2A4A]">
                    {p.num}. {p.title}
                  </span>
                  {p.inDev && (
                    <span className="text-[#4B5563]"> (in development)</span>
                  )}
                  <span className="text-[#1B2A4A]/50"> &nbsp;|&nbsp; </span>
                  <span className="text-[#4B5563]">{p.stack}</span>
                </p>
                <p className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[13px] text-[#1F2937] sm:text-[13.5px]">
                  {p.liveUrl && p.liveLabel && (
                    <>
                      <span className="text-[#4B5563]">Live:</span>
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-[#1B2A4A] underline decoration-[#1B2A4A]/40 underline-offset-4 transition-colors hover:decoration-[#1B2A4A]"
                      >
                        {p.liveLabel}
                      </a>
                      <span aria-hidden className="text-[#1B2A4A]/40">|</span>
                    </>
                  )}
                  <span className="text-[#4B5563]">Code:</span>
                  <a
                    href={p.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#1B2A4A] underline decoration-[#1B2A4A]/40 underline-offset-4 transition-colors hover:decoration-[#1B2A4A]"
                  >
                    {p.codeUrl.replace("https://", "")}
                  </a>
                </p>
                <Bullets items={p.bullets} />
              </div>
            ))}
          </div>

          {/* --- Education --- */}
          <SectionHeading>Education</SectionHeading>
          <p className="mt-3 text-[15px] leading-snug text-[#1F2937] sm:text-[15.5px]">
            <span className="font-bold text-[#1B2A4A]">Bachelor&apos;s degree</span>
            <span className="text-[#1B2A4A]/50"> &nbsp;|&nbsp; </span>
            Wolkite University
            <span className="text-[#1B2A4A]/50"> &nbsp;|&nbsp; </span>
            <span className="text-[#4B5563]">2016 - 2019</span>
          </p>

          {/* --- Languages --- */}
          <SectionHeading>Languages</SectionHeading>
          <p className="mt-3 text-[15px] leading-relaxed text-[#1F2937] sm:text-[15.5px]">
            Oromo (native) <span className="text-[#1B2A4A]/40">&bull;</span> English (fluent){" "}
            <span className="text-[#1B2A4A]/40">&bull;</span> Amharic (fluent)
          </p>

          {/* ---------------------------------------------------------- */}
          {/* Resume PDF download card (at the end)                      */}
          {/* ---------------------------------------------------------- */}
          <div className="mt-12 rounded-xl border border-[#1B2A4A]/15 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-start gap-4">
              <span className="hidden shrink-0 items-center justify-center rounded-lg bg-[#1B2A4A] p-3 text-white sm:flex">
                <FileText className="h-6 w-6" />
              </span>
              <div className="min-w-0 flex-1">
                <h2 className="text-lg font-bold uppercase tracking-tight text-[#1B2A4A] sm:text-xl">
                  Resume PDF
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-[#1B2A4A]/70">
                  Natinael_Ejeta_Resume.pdf · 2 pages · A4 · ~40 KB · selectable text ·
                  clickable links
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
        </article>
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
