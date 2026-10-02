"use client";

import { useEffect } from "react";
import { X, Printer, Mail, MapPin, FolderGit2, Globe, ExternalLink } from "lucide-react";
import { profile, skills, experience, education, projects } from "@/data/portfolio";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-neutral-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative z-10 flex max-h-[90vh] w-full max-w-4xl flex-col rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl overflow-hidden">
        {/* Modal Header Controls */}
        <div className="flex items-center justify-between border-b border-neutral-800 bg-neutral-950/90 px-6 py-4">
          <div className="flex items-center gap-2 text-xs text-neutral-400">
            <span className="font-semibold text-white">Student Curriculum Vitae</span>
            <span aria-hidden="true">·</span>
            <span>Subas Nepali · BICTE Learner</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-700 bg-neutral-800 px-3 py-1.5 text-xs font-medium text-neutral-200 transition-colors hover:border-emerald-500 hover:text-emerald-400"
            >
              <Printer className="h-3.5 w-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="rounded-lg p-1.5 text-neutral-400 hover:bg-neutral-800 hover:text-white transition-colors"
              aria-label="Close resume preview"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Modal Printable Content */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-7 bg-neutral-900 text-neutral-200 print:bg-white print:text-black">
          {/* Header */}
          <div className="border-b border-neutral-800 pb-6 print:border-black">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
              <div>
                <h1 className="text-2xl font-bold tracking-tight text-white print:text-black">
                  {profile.name}
                </h1>
                <p className="mt-1 text-sm font-medium text-emerald-400 print:text-black">
                  {profile.role}
                </p>
              </div>
              <div className="text-xs text-neutral-400 space-y-1 sm:text-right print:text-gray-700">
                <div className="flex items-center gap-1.5 sm:justify-end">
                  <MapPin className="h-3.5 w-3.5 text-neutral-500" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center gap-1.5 sm:justify-end">
                  <Mail className="h-3.5 w-3.5 text-neutral-500" />
                  <a href={`mailto:${profile.email}`} className="hover:text-emerald-400 underline">
                    {profile.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 sm:justify-end pt-1">
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-emerald-400 hover:underline"
                  >
                    <FolderGit2 className="h-3 w-3" /> GitHub
                  </a>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-emerald-400 hover:underline"
                  >
                    <Globe className="h-3 w-3" /> LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-neutral-300 print:text-gray-800">
              {profile.tagline}
            </p>
          </div>

          {/* Education */}
          <section className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-400 print:text-black">
              Education
            </h2>
            {education.map((edu) => (
              <div key={edu.degree} className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between text-xs">
                  <span className="font-semibold text-white print:text-black">{edu.degree}</span>
                  <span className="font-mono text-[11px] text-neutral-400 print:text-gray-600">{edu.period}</span>
                </div>
                <div className="text-xs text-neutral-400 print:text-gray-700">
                  <span>{edu.institution}</span>
                  <span className="mx-1.5">·</span>
                  <span>{edu.status}</span>
                </div>
                <div className="text-xs text-neutral-400 pt-1 print:text-gray-800">
                  <span className="font-medium text-neutral-300 print:text-black">Key Coursework: </span>
                  {edu.coursework.join(" · ")}
                </div>
              </div>
            ))}
          </section>

          {/* Internship Experience */}
          <section className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-400 print:text-black">
              Internship Experience
            </h2>
            {experience.map((exp) => (
              <div key={exp.role + exp.company} className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between text-xs">
                  <div>
                    <span className="font-semibold text-white print:text-black">{exp.role}</span>
                    <span className="text-neutral-400 print:text-gray-700"> — {exp.company}</span>
                  </div>
                  <span className="font-mono text-[11px] text-neutral-400 print:text-gray-600">{exp.period}</span>
                </div>
                <p className="text-xs text-neutral-300 print:text-gray-800">{exp.description}</p>
                <ul className="list-disc list-inside text-xs text-neutral-400 space-y-0.5 pl-1 print:text-gray-700">
                  {exp.learnings.map((learning) => (
                    <li key={learning}>{learning}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Practice & Concept Projects */}
          <section className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-400 print:text-black">
              Practice & Concept Projects (Built with AI Guidance)
            </h2>
            <div className="space-y-3">
              {projects.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex items-baseline justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white print:text-black">{proj.title}</span>
                      {proj.liveUrl && (
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-0.5 text-xs text-emerald-400 hover:underline"
                        >
                          Demo <ExternalLink className="h-2.5 w-2.5" />
                        </a>
                      )}
                    </div>
                    <span className="text-[11px] text-neutral-400 print:text-gray-600">{proj.tech.slice(0, 4).join(" · ")}</span>
                  </div>
                  <p className="text-xs text-neutral-300 print:text-gray-800">{proj.description}</p>
                  <p className="text-[11px] text-neutral-400 print:text-gray-700">
                    <span className="font-medium text-emerald-400 print:text-black">Concept Explored: </span>
                    {proj.conceptExplored}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Learning Topics */}
          <section className="space-y-2 border-t border-neutral-800 pt-4 print:border-black">
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-400 print:text-black">
              Learning Focus & Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {skills.map((cat) => (
                <div key={cat.group} className="space-y-0.5">
                  <span className="font-medium text-white print:text-black">{cat.group}: </span>
                  <span className="text-neutral-400 print:text-gray-700">
                    {cat.items.map((i) => i.name).join(", ")}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
