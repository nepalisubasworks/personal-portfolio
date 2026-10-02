"use client";

import { useState } from "react";
import Image from "next/image";
import { profile } from "@/data/portfolio";
import {
  ArrowRight,
  Mail,
  Check,
  Copy,
  FolderGit2,
  Globe,
  FileText,
  Terminal,
  BookOpen,
  GraduationCap,
  Sparkles,
  Compass
} from "lucide-react";
import ResumeModal from "./ResumeModal";

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <>
      <section className="relative overflow-hidden border-b border-neutral-800/80 bg-gradient-to-b from-neutral-950 via-neutral-950 to-neutral-900/60 py-16 sm:py-24">
        {/* Subtle background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl"
        />

        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left 7 cols: Story & Introduction */}
            <div className="lg:col-span-7">
              {/* Learning Status Pill */}
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3.5 py-1 text-xs font-medium text-emerald-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                </span>
                <span>Active Learning Phase · Full-Stack Development</span>
              </div>

              {/* Headline */}
              <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl text-balance">
                Learning to build the web, step by step.
              </h1>

              {/* Role & Pitch */}
              <p className="mt-3 text-base font-medium text-emerald-400">
                Subas Nepali · 5th Semester BICTE Student & 3-Month Cybersecurity Intern
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-300 text-balance">
                I am a student at Tribhuvan University currently undergoing a 3-month cybersecurity internship. During our training, my supervisor noticed my passion for how applications work and suggested I explore software development. I am now actively learning full-stack web development — practicing fundamentals and building concept prototypes with the guidance of AI tools.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-xs font-semibold text-neutral-950 transition-colors hover:bg-emerald-400"
                >
                  <span>View Practice Projects</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>

                <a
                  href="#journey"
                  className="inline-flex items-center gap-2 rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-2 text-xs font-medium text-neutral-200 transition-colors hover:border-emerald-500 hover:text-white"
                >
                  <Compass className="h-3.5 w-3.5 text-emerald-400" />
                  <span>My Transition Story</span>
                </a>

                <button
                  onClick={() => setIsResumeOpen(true)}
                  className="inline-flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-950 px-3.5 py-2 text-xs font-medium text-neutral-300 transition-colors hover:border-neutral-700 hover:text-white"
                >
                  <FileText className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Student Resume</span>
                </button>

                {/* Email Copy Affordance */}
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-xs font-mono text-neutral-300 transition-colors hover:border-neutral-700 hover:text-white"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="h-3 w-3 text-emerald-400" />
                      <span className="text-[11px] text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3 text-neutral-400" />
                      <span className="text-[11px]">{profile.email}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Social Profiles */}
              <div className="mt-7 flex items-center gap-4 text-xs text-neutral-400">
                <span className="uppercase tracking-wider text-neutral-500 text-[10px]">Links:</span>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 transition-colors hover:text-emerald-400"
                >
                  <FolderGit2 className="h-3.5 w-3.5" />
                  <span>GitHub</span>
                </a>
                <span aria-hidden="true" className="text-neutral-700">·</span>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 transition-colors hover:text-emerald-400"
                >
                  <Globe className="h-3.5 w-3.5" />
                  <span>LinkedIn</span>
                </a>
                <span aria-hidden="true" className="text-neutral-700">·</span>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-1 transition-colors hover:text-emerald-400"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>Email Me</span>
                </a>
              </div>
            </div>

            {/* Right 5 cols: Student Snapshot Card */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md rounded-2xl border border-neutral-800 bg-neutral-900/90 p-6 shadow-xl backdrop-blur">
                <div className="flex items-center gap-4">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-neutral-700">
                    <Image
                      src="/profile.jpg"
                      alt={`${profile.name} portrait`}
                      width={80}
                      height={80}
                      className="h-full w-full object-cover"
                      priority
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{profile.name}</h3>
                    <p className="text-xs text-neutral-400">{profile.location}</p>
                    <div className="mt-1.5 inline-flex items-center gap-1 rounded bg-neutral-950 px-2 py-0.5 text-[11px] text-emerald-400 border border-neutral-800">
                      <Sparkles className="h-3 w-3" />
                      <span>Aspiring Web Developer</span>
                    </div>
                  </div>
                </div>

                {/* Quick Info */}
                <div className="mt-5 space-y-2.5 border-t border-neutral-800 pt-4 text-xs">
                  <div className="flex items-center justify-between text-neutral-400">
                    <span className="flex items-center gap-1.5">
                      <GraduationCap className="h-3.5 w-3.5 text-neutral-500" />
                      <span>Education:</span>
                    </span>
                    <span className="font-medium text-neutral-200">5th Sem BICTE, TU</span>
                  </div>

                  <div className="flex items-center justify-between text-neutral-400">
                    <span className="flex items-center gap-1.5">
                      <Terminal className="h-3.5 w-3.5 text-neutral-500" />
                      <span>Current Internship:</span>
                    </span>
                    <span className="font-medium text-neutral-200">3-Month Security Intern</span>
                  </div>

                  <div className="flex items-center justify-between text-neutral-400">
                    <span className="flex items-center gap-1.5">
                      <BookOpen className="h-3.5 w-3.5 text-neutral-500" />
                      <span>Current Focus:</span>
                    </span>
                    <span className="font-medium text-emerald-400">HTML, CSS, JS, React Basics</span>
                  </div>
                </div>

                {/* Friendly learning disclaimer */}
                <div className="mt-5 rounded-xl border border-neutral-800 bg-neutral-950/80 p-3 text-xs text-neutral-400">
                  <p className="leading-relaxed">
                    <strong className="text-neutral-200">Beginner Note: </strong>
                    I am in my early learning phase. I use AI to help explain code, explore concepts, and build practice exercises. I welcome any advice, resources, or mentorship!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Facts Strip */}
          <div className="mt-12 grid grid-cols-2 gap-4 border-t border-neutral-800/80 pt-6 sm:grid-cols-4">
            {profile.quickFacts.map((fact) => (
              <div key={fact.label} className="border-l border-neutral-800 pl-4">
                <p className="text-sm font-bold text-white">
                  {fact.value}
                </p>
                <p className="mt-0.5 text-xs text-neutral-400">{fact.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
}
