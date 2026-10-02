"use client";

import { experience, education } from "@/data/portfolio";
import { Briefcase, GraduationCap, MapPin, CheckCircle2, Lightbulb } from "lucide-react";

export default function Timeline() {
  return (
    <section id="experience" className="border-b border-neutral-800/80 bg-neutral-950 py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-400">
            Current Education & Internship
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-white sm:text-3xl text-balance">
            Where I Am Learning & Practicing
          </h2>
          <p className="mt-3 text-sm text-neutral-400">
            My ongoing 3-month cybersecurity internship experience alongside my 5th-semester BICTE undergraduate studies.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Internship Experience Column */}
          <div>
            <div className="flex items-center gap-3 border-b border-neutral-800 pb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                <Briefcase className="h-4 w-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Current Internship</h3>
                <span className="text-[11px] text-neutral-400">3-Month Foundational Training</span>
              </div>
            </div>

            <div className="mt-6 space-y-6">
              {experience.map((exp) => (
                <div
                  key={exp.role + exp.company}
                  className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 transition-colors hover:border-neutral-700"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <h4 className="text-base font-bold text-white">{exp.role}</h4>
                    <span className="font-mono text-xs text-emerald-400">{exp.period}</span>
                  </div>

                  <div className="mt-1 flex items-center gap-2 text-xs text-neutral-400">
                    <span className="font-medium text-neutral-300">{exp.company}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {exp.location}
                    </span>
                  </div>

                  <p className="mt-3 text-xs leading-relaxed text-neutral-300">
                    {exp.description}
                  </p>

                  {/* Supervisor Pivot Callout */}
                  <div className="mt-4 rounded-lg border border-emerald-500/30 bg-emerald-950/20 p-3 text-xs text-neutral-300">
                    <div className="flex items-start gap-2">
                      <Lightbulb className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
                      <p className="text-[11px]">
                        <strong className="text-emerald-300">Supervisor Suggestion: </strong>
                        During this internship, my supervisor noticed my enthusiasm for web technologies and encouraged me to direct my focus into full-stack development.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                      Internship Learnings:
                    </p>
                    <ul className="space-y-1.5 text-xs text-neutral-300">
                      {exp.learnings.map((learning) => (
                        <li key={learning} className="flex items-start gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-400 mt-0.5" />
                          <span>{learning}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 pt-3 border-t border-neutral-800/80">
                    <span className="text-[11px] font-mono text-neutral-400">
                      Tools & Topics: {exp.toolsUsed.join(" · ")}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <div className="flex items-center gap-3 border-b border-neutral-800 pb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                <GraduationCap className="h-4 w-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Undergraduate Studies</h3>
                <span className="text-[11px] text-neutral-400">Tribhuvan University</span>
              </div>
            </div>

            <div className="mt-6 space-y-6">
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 transition-colors hover:border-neutral-700"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <h4 className="text-base font-bold text-white">{edu.degree}</h4>
                    <span className="font-mono text-xs text-emerald-400">{edu.period}</span>
                  </div>

                  <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-neutral-400">
                    <span className="font-medium text-neutral-300">{edu.institution}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-emerald-400/90">{edu.status}</span>
                  </div>

                  <p className="mt-3 text-xs leading-relaxed text-neutral-300">
                    {edu.description}
                  </p>

                  <div className="mt-5 rounded-lg border border-neutral-800/80 bg-neutral-950 p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                      Academic Coursework Studied
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
                      {edu.coursework.map((course) => (
                        <div key={course} className="flex items-center gap-1.5">
                          <span className="text-emerald-400 font-bold">›</span>
                          <span>{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
