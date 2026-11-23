import { Mail, Phone, MapPin, ExternalLink, Wifi, Briefcase, Clock, MessageSquare } from "lucide-react";
import type { ReactNode } from "react";
import DocumentsSection from "@/components/DocumentsSection";
import DownloadPdfButton from "@/components/DownloadPdfButton";
import MoreProjects from "@/components/MoreProjects";

const contacts: { icon: typeof Mail; text: string; href?: string }[] = [
  { icon: Mail, text: "nejeta9@gmail.com", href: "mailto:nejeta9@gmail.com" },
  { icon: Phone, text: "+251941582603", href: "tel:+251941582603" },
  { icon: MapPin, text: "Addis Ababa, Ethiopia / Remote" },
  { icon: ExternalLink, text: "GitHub", href: "https://github.com/NatinaelEjeta" },
  { icon: ExternalLink, text: "LinkedIn", href: "https://www.linkedin.com/in/natinalejeta" },
];

// Add level (e.g. "Adv.") and pct (0-100) to any skill to show a progress bar. Only add if true.
const skills: { name: string; level?: string; pct?: number }[] = [
  { name: "Next.js (App Router)" },
  { name: "React" },
  { name: "TypeScript" },
  { name: "Node.js" },
  { name: "Prisma ORM" },
  { name: "PostgreSQL" },
  { name: "Tailwind CSS" },
];

const competencies = [
  "Role-Based Access Control",
  "Secure Authentication",
  "Scheduling & Booking Logic",
  "Database Design & Migrations",
  "Automated Testing",
  "Remote Communication",
];

const expertise = ["REST API Design", "AI / LLM Integration", "Webhooks & Cron Jobs", "Data Encryption"];

const tools = ["Git", "GitHub", "Vercel", "Neon", "Vitest", "Zod", "JWT", "Auth.js", "bcrypt", "shadcn/ui", "TanStack Query", "Recharts", "OpenAI API", "SQL"];

const jobs = [
  {
    title: "Independent Full-Stack Developer",
    org: "Remote",
    date: "2025 - Present",
    bullets: [
      "Design, build and deploy complete web apps with Next.js, TypeScript, Prisma and PostgreSQL.",
      "Built and deployed four projects (see Projects below).",
      "Looking for clients and investors for my projects.",
    ],
  },
  {
    title: "Stock Controller",
    org: "OLA Energy at Bole Aviation, Addis Ababa",
    date: "2024 - 2025",
    bullets: [
      "Maintained accurate stock records and checked information for discrepancies.",
      "Organized documentation and shared updates with colleagues and management.",
    ],
  },
  {
    title: "GPS Data Control",
    org: "Siltun Balamuya Company (Sbaco), Addis Ababa",
    date: "2020 - 2023",
    bullets: [
      "Generated and reviewed daily trip reports for a fleet of about 120 vehicles using a GPS monitoring system.",
      "Identified safety and compliance concerns, talked with drivers about reported violations, and documented issues for management follow-up.",
      "Handled records responsibly, with attention to detail.",
    ],
  },
];

const projects = [
  {
    name: "Clinic Appointment Booking System",
    stack: "Next.js, TypeScript, Prisma, PostgreSQL, Vitest",
    live: "https://clinic-booking-system-kappa.vercel.app",
    code: "https://github.com/NatinaelEjeta/clinic-booking-system",
    bullets: [
      "Patients choose a service, doctor, date and time, with separate roles for patients, doctors and admins.",
      "Wrote the slot engine that returns only open times: inside working hours, outside time off, with minimum notice and no overlaps.",
      "Prevented double booking by re-checking availability inside a database transaction.",
      "Added a 24-hour cancel and reschedule cutoff, email reminders from a scheduled endpoint, and Vitest unit tests; stored UTC and calculated in the clinic's time zone.",
    ],
  },
  {
    name: "School Management System",
    stack: "Next.js, Node.js, Prisma, PostgreSQL, Zod",
    live: "https://school-management-system-sigma-five.vercel.app",
    code: "https://github.com/NatinaelEjeta/school-management-system",
    bullets: [
      "Role-based app for admins, teachers and students covering courses, enrollment, attendance and grades.",
      "JWT sessions in httpOnly cookies, bcrypt hashing, and server permission checks on every API route.",
      "Prevented duplicate attendance with database constraints; validated every request body with Zod.",
      "Admin dashboard with charts, downloadable PDF report cards and change-password.",
    ],
  },
  {
    name: "Ethio Betting",
    stack: "Next.js, TypeScript, Prisma, Neon PostgreSQL, Vercel",
    live: "https://ethiobetting.vercel.app/",
    code: "https://github.com/NatinaelEjeta/EthioBetting",
    bullets: [
      "Online sports betting platform with registration, login and an admin panel.",
      "Synced sports data automatically through a scheduled endpoint called by an external scheduler.",
      "Built a manual admin-approval flow for Telebirr deposits and admin-editable support contacts.",
      "Migrated the database from SQLite to hosted Neon PostgreSQL for production.",
    ],
  },
  {
    name: "ReplyMate AI (in development)",
    stack: "Next.js 16, TypeScript, Prisma, Auth.js, OpenAI, Resend",
    code: "https://github.com/NatinaelEjeta/Smart-Ai-Reply",
    bullets: [
      "Multi-tenant inbox that suggests AI replies; nothing is sent without explicit user approval, which is recorded in the database.",
      "Designed a 13-table Prisma data model; built email verification, password reset, account deletion and session revocation.",
      "Reply preferences: 8 tones, 3 variants, English, Oromo and Amharic.",
      "Encrypted platform tokens at rest (AES-256-GCM) and wrote tests proving cross-tenant data isolation.",
      "Treats customer messages as untrusted input to guard against prompt injection.",
    ],
  },
];

const availability = [
  { icon: Wifi, text: "Remote Work", cls: "bg-emerald-50 border-emerald-200 text-emerald-700" },
  { icon: Briefcase, text: "Freelance & Junior Roles", cls: "bg-blue-50 border-blue-200 text-blue-700" },
  { icon: Clock, text: "Async Written Updates", cls: "bg-amber-50 border-amber-200 text-amber-700" },
  { icon: MessageSquare, text: "Open to Investors", cls: "bg-purple-50 border-purple-200 text-purple-700" },
];

function SideCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="rounded-xl border border-slate-200 bg-slate-100/80 p-4 print:break-inside-avoid">
      <h2 className="mb-3 border-b border-slate-200 pb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">{title}</h2>
      {children}
    </section>
  );
}

function Heading({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-3 mt-6 border-b border-slate-200 pb-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-blue-500 first:mt-0">
      {children}
    </h2>
  );
}

function Dots({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5">
      {items.map((t) => (
        <li key={t} className="flex items-center gap-2 text-[11px] text-blue-700">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
          {t}
        </li>
      ))}
    </ul>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 space-y-1">
      {items.map((t) => (
        <li key={t} className="flex gap-2 text-[11.5px] leading-snug text-slate-700">
          <span className="mt-[6px] h-1 w-1 shrink-0 rounded-full bg-blue-500" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

function ProjectItem({ p }: { p: (typeof projects)[number] }) {
  return (
    <div className="print:break-inside-avoid">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-[13px] font-bold text-slate-900">{p.name}</h3>
        <span className="text-[10.5px] font-semibold">
          {p.live && <a href={p.live} className="text-blue-600 hover:underline">Live demo</a>}
          {p.live && <span className="mx-1.5 text-slate-300">|</span>}
          <a href={p.code} className="text-blue-600 hover:underline">Code</a>
        </span>
      </div>
      <p className="text-[11px] text-blue-600">{p.stack}</p>
      <Bullets items={p.bullets} />
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-200/70 px-3 py-8 font-sans text-slate-800 print:bg-white print:p-0">
      <div className="mx-auto max-w-[1000px] rounded-2xl bg-white px-6 py-8 shadow-2xl sm:px-6 md:px-6 print:rounded-none print:shadow-none">
        <header className="text-center">
          <div className="mb-3 flex justify-end print:hidden"><DownloadPdfButton /></div>
          <h1 className="text-3xl font-extrabold uppercase tracking-wide text-slate-900 sm:text-4xl">Full-Stack Developer</h1>
          <p className="mt-1 text-base font-medium uppercase tracking-[0.2em] text-blue-500">Natinael Ejeta</p>
          <div className="mx-auto my-3 h-4 w-px bg-slate-300" />
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-[11px] text-slate-500">
            {contacts.map(({ icon: Icon, text, href }) => {
              const inner = (
                <span className="inline-flex items-center gap-1.5">
                  <Icon size={12} />
                  {text}
                </span>
              );
              return href ? (
                <a key={text} href={href} className="hover:text-blue-600">{inner}</a>
              ) : (
                <span key={text}>{inner}</span>
              );
            })}
          </div>
          <div className="mt-4 border-b border-slate-200" />
        </header>

        <div className="mt-6 grid gap-6 md:grid-cols-[250px_1fr] print:grid-cols-[230px_1fr]">
          <aside className="space-y-4">
            <SideCard title="Technical Skills">
              <ul className="space-y-2.5">
                {skills.map((s) => (
                  <li key={s.name}>
                    <div className="flex items-baseline justify-between text-[11px] text-slate-700">
                      <span>{s.name}</span>
                      {s.level && <span className="text-[9px] font-semibold text-blue-500">{s.level}</span>}
                    </div>
                    {typeof s.pct === "number" && (
                      <div className="mt-1 h-1 rounded-full bg-slate-200">
                        <div className="h-1 rounded-full bg-blue-500" style={{ width: `${s.pct}%` }} />
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </SideCard>
            <SideCard title="Core Competencies"><Dots items={competencies} /></SideCard>
            <SideCard title="Technical Expertise"><Dots items={expertise} /></SideCard>
            <SideCard title="Tools & Services">
              <div className="flex flex-wrap gap-1.5">
                {tools.map((t) => (
                  <span key={t} className="rounded border border-slate-300 bg-white px-2 py-0.5 text-[10px] text-slate-600">{t}</span>
                ))}
              </div>
            </SideCard>
            <DocumentsSection />
          </aside>

          <div>
            <Heading>Profile</Heading>
            <p className="text-[11.5px] leading-relaxed text-slate-700">
              Full-stack developer who designs, builds and deploys complete web apps, from the database to a live site. I have built and deployed four projects with role-based access, secure authentication, scheduling logic, automated tests and AI features. Open to freelance, remote and junior roles, and to clients or investors interested in my projects.
            </p>

            <Heading>Professional Experience</Heading>
            <div className="space-y-5">
              {jobs.map((j) => (
                <div key={j.title} className="print:break-inside-avoid">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-[13px] font-bold text-slate-900">{j.title}</h3>
                    <span className="rounded bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-blue-600">{j.date}</span>
                  </div>
                  <p className="text-[11px] text-blue-600">{j.org}</p>
                  <Bullets items={j.bullets} />
                </div>
              ))}
            </div>

            <Heading>Projects</Heading>
            <div className="space-y-5">
              {projects.filter((p) => p.name === "School Management System").map((p) => (
                <ProjectItem key={p.name} p={p} />
              ))}
            </div>
            <MoreProjects count={projects.length - 1}>
              <div className="space-y-5 pt-5">
                {projects.filter((p) => p.name !== "School Management System").map((p) => (
                  <ProjectItem key={p.name} p={p} />
                ))}
              </div>
            </MoreProjects>

            <Heading>Education</Heading>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h3 className="text-[13px] font-bold text-slate-900">Bachelor of Software Engineering</h3>
                <p className="text-[11px] text-slate-500">Wolkite University</p>
              </div>
              <span className="text-[10px] font-semibold text-blue-600">2019</span>
            </div>

            <Heading>Languages</Heading>
            <div className="flex flex-wrap gap-2">
              {["Oromo (native)", "English (fluent)", "Amharic (fluent)"].map((l) => (
                <span key={l} className="rounded border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-semibold text-slate-600">{l}</span>
              ))}
            </div>

            <Heading>Availability</Heading>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {availability.map(({ icon: Icon, text, cls }) => (
                <div key={text} className={`flex items-center gap-2 rounded-lg border px-3 py-2.5 text-[10.5px] font-semibold ${cls}`}>
                  <Icon size={14} className="shrink-0" />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      <footer className="mt-8 border-t border-slate-200 pt-4 text-center print:break-inside-avoid">
          <a
            href="https://natinaelejeta.vercel.app/portfolio.html"
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-blue-600 hover:underline"
          >
            <ExternalLink size={12} />
            View my portfolio: natinaelejeta.vercel.app/portfolio.html
          </a>
          <p className="mt-1 text-[10px] text-slate-400">Natinael Ejeta | Full-Stack Developer</p>
        </footer>
      </div>
    </main>
  );
}