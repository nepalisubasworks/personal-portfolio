"use client";

import { useState } from "react";
import { projects, ProjectConcept } from "@/data/portfolio";
import {
  ExternalLink,
  FolderGit2,
  Bot,
  BookOpen,
  ArrowRight,
  X,
  CheckCircle2,
  Lightbulb
} from "lucide-react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectConcept | null>(null);

  return (
    <section id="projects" className="border-b border-neutral-800/80 bg-neutral-950 py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-400">
            Learning By Doing
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-white sm:text-3xl text-balance">
            Practice & Concept Projects
          </h2>
          <p className="mt-3 text-sm text-neutral-400">
            Prototypes and exercises I explored to understand web development concepts. These projects were created with the guidance of AI tools as an interactive tutor.
          </p>
        </div>

        {/* Transparent Beginner Disclosure */}
        <div className="mt-8 flex items-start gap-3 rounded-xl border border-neutral-800 bg-neutral-900/60 p-4 text-xs text-neutral-300">
          <Bot className="h-5 w-5 shrink-0 text-emerald-400 mt-0.5" />
          <div>
            <span className="font-semibold text-white">How these projects were made: </span>
            I am in my beginner learning phase. Rather than claiming expert production mastery, I built these concepts with AI assistance to understand how components, routing, forms, and database schemas work in modern web development.
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col justify-between rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 transition-all duration-200 hover:border-emerald-500/40 hover:bg-neutral-900"
            >
              <div>
                {/* Category & AI Tag */}
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-emerald-400">{project.category}</span>
                  {project.builtWithAI ? (
                    <span className="inline-flex items-center gap-1 rounded bg-neutral-800 px-2 py-0.5 text-[10px] text-neutral-300">
                      <Bot className="h-3 w-3 text-emerald-400" />
                      <span>AI Assisted Concept</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 rounded bg-neutral-800 px-2 py-0.5 text-[10px] text-neutral-300">
                      <BookOpen className="h-3 w-3 text-neutral-400" />
                      <span>College Coursework</span>
                    </span>
                  )}
                </div>

                {/* Title & Tagline */}
                <h3 className="mt-4 text-lg font-bold tracking-tight text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-neutral-400">
                  {project.tagline}
                </p>

                {/* Concept Explored Box */}
                <div className="mt-4 rounded-lg border border-neutral-800/80 bg-neutral-950 p-3">
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400">
                    <Lightbulb className="h-3.5 w-3.5" />
                    <span>Concept Explored:</span>
                  </div>
                  <p className="mt-1 text-xs text-neutral-300 leading-relaxed">
                    {project.conceptExplored}
                  </p>
                </div>

                {/* Tech List */}
                <div className="mt-4">
                  <p className="text-[10px] uppercase tracking-wider text-neutral-500 font-semibold mb-1">
                    Technologies Explored:
                  </p>
                  <p className="text-xs text-neutral-300 font-mono">
                    {project.tech.join(" · ")}
                  </p>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <span>What I Learned</span>
                  <ArrowRight className="h-3 w-3" />
                </button>

                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-white transition-colors"
                      title="GitHub Code"
                    >
                      <FolderGit2 className="h-4 w-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-emerald-400 transition-colors"
                      title="View Live Demo"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Learning Details Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <div
              className="fixed inset-0 bg-neutral-950/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
              aria-hidden="true"
            />
            <div className="relative z-10 flex max-h-[90vh] w-full max-w-2xl flex-col rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-neutral-800 bg-neutral-950 px-6 py-4">
                <div className="flex items-center gap-2 text-xs text-neutral-400">
                  <span className="font-semibold text-white">{selectedProject.title}</span>
                  <span>·</span>
                  <span className="text-emerald-400">{selectedProject.category}</span>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="rounded-lg p-1.5 text-neutral-400 hover:bg-neutral-800 hover:text-white transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Content */}
              <div className="overflow-y-auto p-6 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white">{selectedProject.title}</h3>
                  <p className="mt-1 text-xs text-neutral-400">{selectedProject.description}</p>
                </div>

                {/* Concept explored */}
                <div className="rounded-xl border border-neutral-800 bg-neutral-950/70 p-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    The Main Concept Explored
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-neutral-300">
                    {selectedProject.conceptExplored}
                  </p>
                </div>

                {/* Key Takeaways */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
                    What I Learned from Building This:
                  </h4>
                  <ul className="space-y-2 text-xs text-neutral-300">
                    {selectedProject.whatILearned.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-400 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 border-t border-neutral-800 pt-4 text-xs">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-emerald-400 hover:underline font-medium"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      <span>Open Live Project</span>
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-neutral-300 hover:text-white font-medium"
                    >
                      <FolderGit2 className="h-3.5 w-3.5" />
                      <span>View GitHub Repo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
