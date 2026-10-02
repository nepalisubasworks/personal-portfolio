"use client";

import Image from "next/image";
import { profile } from "@/data/portfolio";
import { BookOpen, Bot, Shield, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="border-b border-neutral-800/80 bg-neutral-950 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Portrait & Student Details */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6">
              <div className="relative aspect-square w-full max-w-xs mx-auto overflow-hidden rounded-xl border border-neutral-700/80">
                <Image
                  src="/profile.jpg"
                  alt={`${profile.name} profile photo`}
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover"
                  priority
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between text-xs border-b border-neutral-800/80 pb-2">
                  <span className="text-neutral-400">Current Studies</span>
                  <span className="font-semibold text-white">5th Semester BICTE</span>
                </div>
                <div className="flex items-center justify-between text-xs border-b border-neutral-800/80 pb-2">
                  <span className="text-neutral-400">Institution</span>
                  <span className="font-semibold text-white">Tribhuvan University (ABC)</span>
                </div>
                <div className="flex items-center justify-between text-xs border-b border-neutral-800/80 pb-2">
                  <span className="text-neutral-400">Current Internship</span>
                  <span className="font-semibold text-emerald-400">3-Month Security Intern</span>
                </div>
                <div className="flex items-center justify-between text-xs pb-1">
                  <span className="text-neutral-400">Learning Path</span>
                  <span className="font-semibold text-white">Full-Stack Web Development</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Learning Approach */}
          <div className="lg:col-span-7">
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              About Me
            </p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-white sm:text-3xl text-balance">
              Curious Student, Continuous Learner
            </h2>

            <div className="mt-5 space-y-4 text-sm leading-relaxed text-neutral-300">
              {profile.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {/* How I Approach Learning */}
            <div className="mt-8 space-y-4 border-t border-neutral-800/80 pt-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                How I Approach Learning Every Day:
              </h3>

              <div className="grid gap-3 sm:grid-cols-2 text-xs">
                <div className="rounded-xl border border-neutral-800/80 bg-neutral-900/40 p-4">
                  <div className="flex items-center gap-2 font-semibold text-white">
                    <BookOpen className="h-4 w-4 text-emerald-400" />
                    <span>Focusing on Fundamentals</span>
                  </div>
                  <p className="mt-1.5 text-neutral-400 leading-relaxed">
                    Prioritizing real comprehension of JavaScript, HTML/CSS structure, and SQL relations over memorization.
                  </p>
                </div>

                <div className="rounded-xl border border-neutral-800/80 bg-neutral-900/40 p-4">
                  <div className="flex items-center gap-2 font-semibold text-white">
                    <Bot className="h-4 w-4 text-emerald-400" />
                    <span>Using AI as a Teacher</span>
                  </div>
                  <p className="mt-1.5 text-neutral-400 leading-relaxed">
                    Prompting AI to explain difficult concepts, show code examples, and review my practice attempts step by step.
                  </p>
                </div>

                <div className="rounded-xl border border-neutral-800/80 bg-neutral-900/40 p-4">
                  <div className="flex items-center gap-2 font-semibold text-white">
                    <Shield className="h-4 w-4 text-emerald-400" />
                    <span>Security Awareness</span>
                  </div>
                  <p className="mt-1.5 text-neutral-400 leading-relaxed">
                    Leveraging my 3-month cybersecurity internship experience to remember input validation and authentication hygiene.
                  </p>
                </div>

                <div className="rounded-xl border border-neutral-800/80 bg-neutral-900/40 p-4">
                  <div className="flex items-center gap-2 font-semibold text-white">
                    <Sparkles className="h-4 w-4 text-emerald-400" />
                    <span>Humble & Receptive</span>
                  </div>
                  <p className="mt-1.5 text-neutral-400 leading-relaxed">
                    Open about being a beginner, eager for feedback from seniors, and willing to put in the time to learn properly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
