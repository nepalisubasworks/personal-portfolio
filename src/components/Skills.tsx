"use client";

import { useState } from "react";
import { skills } from "@/data/portfolio";
import { Search, Code2, Database, Shield, Wrench } from "lucide-react";

const groupIcons = [Code2, Database, Shield, Wrench];

export default function Skills() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSkills = skills.map((category) => ({
    ...category,
    items: category.items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  return (
    <section id="skills" className="border-b border-neutral-800/80 bg-neutral-950 py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              Learning Roadmap
            </p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-white sm:text-3xl text-balance">
              What I Am Learning & Practicing
            </h2>
            <p className="mt-3 text-sm text-neutral-400">
              An honest overview of technologies I am practicing daily, concepts I have explored with AI guidance, and academic foundations.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full max-w-xs">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search topics (e.g., React, SQL)..."
              className="w-full rounded-lg border border-neutral-800 bg-neutral-900/80 py-2 pl-9 pr-4 text-xs text-neutral-200 placeholder-neutral-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-500 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredSkills.map((category, idx) => {
            const Icon = groupIcons[idx % groupIcons.length];
            return (
              <div
                key={category.group}
                className="flex flex-col rounded-xl border border-neutral-800 bg-neutral-900/50 p-5 transition-colors hover:border-neutral-700"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-700/80 bg-neutral-800 text-emerald-400">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-white leading-tight">{category.group}</h3>
                    <span className="text-[10px] text-emerald-400/90 font-medium">
                      {category.statusBadge}
                    </span>
                  </div>
                </div>

                <p className="mt-3 text-[11px] text-neutral-400 leading-normal">
                  {category.description}
                </p>

                <div className="mt-5 flex-1 space-y-2.5">
                  {category.items.length === 0 ? (
                    <p className="text-xs text-neutral-500 italic py-2">No matching topics</p>
                  ) : (
                    category.items.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between border-b border-neutral-800/60 pb-2 text-xs"
                      >
                        <span className="text-neutral-200 text-[11px]">{skill.name}</span>
                        <span className="text-[9px] font-mono text-neutral-400 rounded bg-neutral-950 px-1.5 py-0.5">
                          {skill.stage}
                        </span>
                      </div>
                    ))
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Learning Commitment Note */}
        <div className="mt-8 rounded-xl border border-neutral-800 bg-neutral-900/40 p-4 text-xs text-neutral-400">
          <p className="leading-relaxed">
            <span className="font-semibold text-white">Continuous Growth: </span>
            I spend several hours daily following tutorials, reading official documentation, and building tiny sample apps. As I gain proficiency, I keep testing and refining my understanding.
          </p>
        </div>
      </div>
    </section>
  );
}
