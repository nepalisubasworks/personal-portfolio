"use client";

import { useState } from "react";
import { profile } from "@/data/portfolio";
import { FileText, Mail } from "lucide-react";
import ResumeModal from "./ResumeModal";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "My Journey", href: "#journey" },
  { label: "Practice Projects", href: "#projects" },
  { label: "Learning Skills", href: "#skills" },
  { label: "Internship & Studies", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-neutral-800/80 bg-neutral-950/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          {/* Logo / Name */}
          <div className="flex items-center gap-2.5">
            <a
              href="#"
              className="text-base font-bold tracking-tight text-white hover:text-emerald-400 transition-colors whitespace-nowrap"
            >
              {profile.name}
            </a>
            <span className="hidden sm:inline-block rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-400 border border-emerald-500/20">
              Learner
            </span>
          </div>

          {/* Navigation links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-400">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-emerald-400 transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action buttons */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setIsResumeOpen(true)}
              className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-700/80 bg-neutral-900/60 px-3 py-1.5 text-xs font-medium text-neutral-200 transition-colors hover:border-emerald-500/60 hover:text-emerald-400 whitespace-nowrap"
            >
              <FileText className="h-3.5 w-3.5 text-emerald-400" />
              <span>Resume</span>
            </button>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500 px-3 py-1.5 text-xs font-semibold text-neutral-950 transition-colors hover:bg-emerald-400 whitespace-nowrap"
            >
              <Mail className="h-3 w-3" />
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
      </header>

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
}
