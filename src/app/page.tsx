"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Github, Linkedin, FileText, ExternalLink } from "lucide-react";
import { site } from "@/content/site";

const container = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-black/5 dark:border-white/10">
        <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <Link href="#" className="font-semibold tracking-tight">{site.name}</Link>
          <div className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:opacity-80">About</a>
            <a href="#projects" className="hover:opacity-80">Projects</a>
            <a href="#experience" className="hover:opacity-80">Experience</a>
            <a href="#contact" className="hover:opacity-80">Contact</a>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm hover:bg-foreground hover:text-background transition"
            >
              <Mail size={16} /> Contact
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
            <motion.div initial="hidden" animate="show" variants={container} className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium opacity-80">
                  Available for new opportunities
                </span>
                <h1 className="mt-6 text-4xl/tight sm:text-5xl/tight font-semibold tracking-tight">
                  {site.name}
                </h1>
                <p className="mt-4 text-base/7 text-foreground/80">{site.bio}</p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2 text-sm font-medium hover:opacity-90 transition"
                  >
                    View projects <ArrowRight size={16} />
                  </a>
                  <a
                    href={site.resumeUrl ?? "/resume.pdf"}
                    className="inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-medium hover:bg-foreground hover:text-background transition"
                  >
                    <FileText size={16} /> Resume
                  </a>
                  <a
                    href={site.social.github ?? "https://github.com/"}
                    target="_blank"
                    className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm hover:bg-foreground hover:text-background transition"
                  >
                    <Github size={16} /> GitHub
                  </a>
                  <a
                    href={site.social.linkedin ?? "https://linkedin.com/in/"}
                    target="_blank"
                    className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm hover:bg-foreground hover:text-background transition"
                  >
                    <Linkedin size={16} /> LinkedIn
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square w-full max-w-sm mx-auto rounded-2xl border overflow-hidden">
                  <Image src={site.headshot ?? "/next.svg"} alt={site.name} width={512} height={512} className="object-cover p-0" />
                </div>
              </div>
            </motion.div>
          </div>
          {/* subtle gradient */}
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.15),transparent_60%)]" />
        </section>

        {/* About */}
        <section id="about" className="mx-auto max-w-6xl px-6 py-20">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={container}>
            <h2 className="text-2xl font-semibold tracking-tight">About</h2>
            <p className="mt-4 text-foreground/80">
              I love building end-to-end products — from clean, accessible interfaces to robust APIs and infrastructure.
              Recently, I’ve worked with React 19, Next.js 15, Server Actions, Edge runtimes, and modern CSS.
            </p>
          </motion.div>
        </section>

        {/* Projects */}
        <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
            <Link href="#" className="text-sm hover:underline inline-flex items-center gap-1">
              See all <ExternalLink size={14} />
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {site.projects.map((p) => (
              <motion.a
                key={p.title}
                href={p.url}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group rounded-2xl border p-5 hover:shadow-lg transition bg-background/50"
              >
                <div className="aspect-video rounded-lg border bg-gradient-to-br from-foreground/5 to-transparent" />
                <h3 className="mt-4 font-medium tracking-tight group-hover:underline">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-foreground/70">{p.description}</p>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
          <ol className="mt-8 space-y-6 border-l pl-6">
            {site.experience.map((item) => (
              <li key={item.role} className="relative">
                <span className="absolute -left-[9px] top-1.5 h-2.5 w-2.5 rounded-full bg-foreground" />
                <div className="flex flex-wrap justify-between gap-2">
                  <p className="font-medium">
                    {item.role} • {item.company}
                  </p>
                  <p className="text-sm text-foreground/70">{item.period}</p>
                </div>
                <ul className="mt-2 list-disc pl-5 text-sm text-foreground/80">
                  {item.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
          <div className="rounded-2xl border p-8">
            <h2 className="text-2xl font-semibold tracking-tight">Get in touch</h2>
            <p className="mt-2 text-foreground/80">
              Want to collaborate or just say hi? I’d love to hear from you.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2 text-sm font-medium hover:opacity-90 transition"
              >
                <Mail size={16} /> Email me
              </a>
              <a
                href={site.social.github ?? "https://github.com/"}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-medium hover:bg-foreground hover:text-background transition"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href={site.social.linkedin ?? "https://linkedin.com/in/"}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-medium hover:bg-foreground hover:text-background transition"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-10">
        <div className="mx-auto max-w-6xl px-6 text-sm text-foreground/70">
          © <span suppressHydrationWarning>{new Date().getFullYear()}</span> Cristian García. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
