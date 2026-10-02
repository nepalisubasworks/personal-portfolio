"use client";

import { profile } from "@/data/portfolio";
import { BookOpen, Compass, Lightbulb, Bot, Shield, Code } from "lucide-react";

export default function LearningJourney() {
  return (
    <section id="journey" className="border-b border-neutral-800/80 bg-neutral-900/30 py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
            <Compass className="h-3.5 w-3.5" />
            <span>My Transition to Development</span>
          </div>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl text-balance">
            From Cybersecurity Intern to Aspiring Full-Stack Developer
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-400">
            How a 3-month cybersecurity internship and a conversation with my supervisor inspired my path into web development.
          </p>
        </div>

        {/* Narrative Box */}
        <div className="mt-10 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="space-y-4 text-sm leading-relaxed text-neutral-300 lg:col-span-7">
              <p>
                I am a 5th-semester BICTE student at Tribhuvan University. Like many technology students, I wanted practical industry exposure early on, so I started a <span className="font-semibold text-white">3-month cybersecurity internship</span> at Inpro Academy.
              </p>
              <p>
                Working with Kali Linux, virtual machines, and network basics gave me great respect for how systems operate. But whenever we analyzed web applications, I found myself captivated not just by security, but by <span className="text-emerald-400 font-medium">how the web apps were built in the first place</span>.
              </p>
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-4">
                <div className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 shrink-0 text-emerald-400 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                      The Turning Point (Supervisor Advice)
                    </h4>
                    <p className="mt-1 text-xs text-neutral-300">
                      My internship supervisor noticed that I spent extra time dissecting frontend UI structures and database schemas. They advised: <span className="italic text-white">“You have a genuine curiosity for creating software. You should seriously explore the software and web development field.”</span>
                    </p>
                  </div>
                </div>
              </div>
              <p>
                I took that advice wholeheartedly. I decided to pursue <span className="font-semibold text-white">full-stack web development</span>. I know I am at the beginning of the road, and I am committed to practicing every day and learning the fundamentals thoroughly.
              </p>
            </div>

            {/* AI as a Learning Accelerator card */}
            <div className="flex flex-col justify-between rounded-xl border border-neutral-800 bg-neutral-950/60 p-6 lg:col-span-5">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-400">
                  <Bot className="h-4 w-4 text-emerald-400" />
                  <span>How I Learn with AI</span>
                </div>
                <h3 className="mt-2 text-lg font-bold text-white">
                  Using AI as a Patient Tutor
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-neutral-400">
                  Because I am a beginner, I use modern AI tools to accelerate my learning:
                </p>
                <ul className="mt-4 space-y-2.5 text-xs text-neutral-300">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>Explaining confusing error messages in plain language.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>Guiding me on how React components and states connect.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>Generating practice concept code that I read, dissect, and experiment with.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 rounded-lg border border-neutral-800 bg-neutral-900/80 p-3 text-xs text-neutral-400">
                <span className="font-semibold text-emerald-400">Honest note:</span> The projects shown here were built with AI assistance to help me grasp full-stack concepts while I build my foundational coding skills.
              </div>
            </div>
          </div>
        </div>

        {/* 4-Step Journey Progression */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {profile.journeySteps.map((step, idx) => (
            <div
              key={step.title}
              className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-5 transition-colors hover:border-neutral-700"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-emerald-400">0{idx + 1}</span>
                {idx === 0 && <BookOpen className="h-4 w-4 text-neutral-400" />}
                {idx === 1 && <Shield className="h-4 w-4 text-neutral-400" />}
                {idx === 2 && <Lightbulb className="h-4 w-4 text-emerald-400" />}
                {idx === 3 && <Code className="h-4 w-4 text-emerald-400" />}
              </div>
              <h3 className="mt-3 text-sm font-bold text-white">{step.title}</h3>
              <p className="text-xs font-medium text-emerald-400/90">{step.subtitle}</p>
              <p className="mt-2 text-xs leading-relaxed text-neutral-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
