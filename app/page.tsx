const projects = [
  {
    name: "GenHub",
    tag: "Live · Student platform",
    desc: "Academic platform for courses, timetables, materials and results, with class reminders, role-based access for class reps, announcements and a forum.",
    stack: ["React", "FastAPI", "PostgreSQL", "JWT", "Render"],
    live: "https://genhub-alertme.onrender.com",
    code: "https://github.com/Mickyhill/genhub",
  },
  {
    name: "ADY Marketplace",
    tag: "Live · Client project",
    desc: "Campus e-commerce platform with listings, verification, messaging, Paystack payments, disputes and an admin dashboard. Handed over to the client.",
    stack: ["React", "Node.js", "Express", "Prisma", "PostgreSQL", "Paystack"],
    live: "https://adymarketplace.com",
  },
  {
    name: "Topstone Marketplace",
    tag: "Live · Client project",
    desc: "Multi-category Nigerian classifieds site with admin-controlled categories, paid ad tiers and payment confirmation.",
    stack: ["TypeScript", "React", "PostgreSQL"],
    live: "https://topstonemarketplace.floot.app",
  },
  {
    name: "AI Pull Request Reviewer",
    tag: "Developer tooling",
    desc: "GitHub Actions workflow where Claude reviews every pull request, posts severity-rated inline comments and blocks merges on critical findings. 43 automated tests.",
    stack: ["GitHub Actions", "Node.js", "Claude Code"],
    code: "https://github.com/Mickyhill/genhub/pull/1",
  },
  {
    name: "MickyHill AI Trading Bot",
    tag: "Paper trading only",
    desc: "Python system with multi-timeframe signals, risk controls and Telegram alerts. Backtested 680+ trades, then ran out-of-sample tests that kept it off real money.",
    stack: ["Python", "Bybit API", "Telegram API", "SQLite"],
    code: "https://github.com/Mickyhill/Mickyhill-AI-Trading-Bot",
  },
];

const skills = [
  "Claude Code", "Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS",
  "Node.js", "Express", "Python", "FastAPI", "PostgreSQL", "Prisma",
  "Git", "GitHub Actions", "Render", "Vercel",
];

const links = [
  { label: "Email", href: "mailto:mickyhill4070@gmail.com" },
  { label: "GitHub", href: "https://github.com/Mickyhill" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/michael-churchill-1912ab253/" },
  { label: "WhatsApp", href: "https://wa.me/2349039756183" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <header className="mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-emerald-400">
            MickyHill Engineering
          </p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Michael Churchill</h1>
          <p className="mt-2 text-lg text-zinc-400">
            AI-assisted full-stack developer · Software Engineering student, FUTIA, Nigeria
          </p>
          <p className="mt-6 max-w-2xl leading-relaxed text-zinc-300">
            I ship working products by directing AI coding agents like Claude Code, then
            reviewing, testing and deploying what they produce. I have built client
            marketplaces, a live student platform and developer tooling.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-zinc-700 px-4 py-2 text-sm hover:border-emerald-400 hover:text-emerald-400"
              >
                {l.label}
              </a>
            ))}
          </div>
        </header>

        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-semibold">Projects</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((p) => (
              <article key={p.name} className="flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
                <p className="text-xs font-medium uppercase tracking-wide text-emerald-400">{p.tag}</p>
                <h3 className="mt-2 text-xl font-semibold">{p.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-md bg-zinc-800 px-2 py-1 text-xs text-zinc-300">{s}</span>
                  ))}
                </div>
                <div className="mt-5 flex gap-4 text-sm">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline">
                      Live site
                    </a>
                  )}
                  {p.code && (
                    <a href={p.code} target="_blank" rel="noreferrer" className="text-zinc-300 hover:underline">
                      Code
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-semibold">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span key={s} className="rounded-full border border-zinc-800 px-3 py-1 text-sm text-zinc-300">{s}</span>
            ))}
          </div>
        </section>

        <footer className="border-t border-zinc-800 pt-6 text-sm text-zinc-500">
          Class Representative · HNG Internship 15 · Built with Next.js and deployed on Vercel
        </footer>
      </div>
    </main>
  );
}