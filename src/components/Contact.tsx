"use client";

import { useState } from "react";
import { profile } from "@/data/portfolio";
import {
  Mail,
  Copy,
  Check,
  FolderGit2,
  Globe,
  Send,
  MessageSquareHeart,
  Sparkles
} from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [selectedIntent, setSelectedIntent] = useState<string>(
    "Mentorship & Learning Advice"
  );
  const [senderName, setSenderName] = useState("");
  const [senderMessage, setSenderMessage] = useState("");

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

  const intents = [
    "Mentorship & Learning Advice",
    "Feedback on My Practice Projects",
    "Study Buddy / Fellow Learner Connect",
    "Internship & Learning Opportunities"
  ];

  const mailtoSubject = encodeURIComponent(`[Portfolio Connect] ${selectedIntent} from ${senderName || "Fellow Developer"}`);
  const mailtoBody = encodeURIComponent(
    `Hi Subas,\n\nI visited your portfolio and wanted to reach out regarding: ${selectedIntent}.\n\nName: ${senderName}\nMessage / Feedback:\n${senderMessage || "Keep up the great work on your learning journey!"}\n\nBest regards,`
  );
  const mailtoLink = `mailto:${profile.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

  return (
    <section id="contact" className="bg-neutral-950 py-20 border-t border-neutral-800/80">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
              <MessageSquareHeart className="h-3.5 w-3.5" />
              <span>Say Hello</span>
            </div>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl text-balance">
              Let&apos;s Connect & Learn Together
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-400">
              As a beginner, I am eager to learn from experienced developers, receive feedback on my practice projects, or connect with fellow tech students.
            </p>

            {/* Direct Email Action Card */}
            <div className="mt-6 flex flex-col gap-3">
              <div className="flex items-center justify-between rounded-xl border border-neutral-800 bg-neutral-900/60 p-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-emerald-400" />
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-neutral-500 font-semibold">
                      My Direct Email
                    </p>
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-xs font-medium text-white hover:text-emerald-400 underline"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="rounded-lg border border-neutral-700 bg-neutral-800 px-2.5 py-1 text-xs font-medium text-neutral-200 transition-colors hover:border-emerald-500 hover:text-white"
                >
                  {copied ? (
                    <span className="flex items-center gap-1 text-emerald-400">
                      <Check className="h-3 w-3" /> Copied!
                    </span>
                  ) : (
                    <span className="flex items-center gap-1">
                      <Copy className="h-3 w-3" /> Copy
                    </span>
                  )}
                </button>
              </div>

              {/* Profiles */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-neutral-800 bg-neutral-900/60 p-3 text-xs font-medium text-neutral-200 hover:border-neutral-700 hover:text-white transition-colors"
                >
                  <FolderGit2 className="h-4 w-4 text-neutral-400" />
                  <span>GitHub Profile</span>
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-neutral-800 bg-neutral-900/60 p-3 text-xs font-medium text-neutral-200 hover:border-neutral-700 hover:text-white transition-colors"
                >
                  <Globe className="h-4 w-4 text-emerald-400" />
                  <span>LinkedIn Connect</span>
                </a>
              </div>

              {/* Location Badge */}
              <div className="rounded-xl border border-neutral-800 bg-neutral-900/30 p-3 text-xs text-neutral-400">
                <span className="text-white font-medium">Location: </span>
                {profile.location} · Open to remote learning and collaborations
              </div>
            </div>
          </div>

          {/* Right Column: Pre-filled Email Composer */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
                <Sparkles className="h-4 w-4" />
                <span>Send a Friendly Message</span>
              </div>
              <h3 className="mt-1 text-lg font-bold text-white">Quick Email Composer</h3>
              <p className="mt-1 text-xs text-neutral-400">
                Select a topic and send an email directly to my inbox.
              </p>

              {/* Topic Selector */}
              <div className="mt-5">
                <label className="text-xs font-medium text-neutral-300 block mb-2">
                  What would you like to connect about?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {intents.map((intent) => (
                    <button
                      key={intent}
                      type="button"
                      onClick={() => setSelectedIntent(intent)}
                      className={`text-left rounded-lg p-2.5 text-xs transition-colors border ${
                        selectedIntent === intent
                          ? "border-emerald-500 bg-emerald-950/40 text-emerald-300 font-semibold"
                          : "border-neutral-800 bg-neutral-950 text-neutral-400 hover:border-neutral-700 hover:text-neutral-200"
                      }`}
                    >
                      {intent}
                    </button>
                  ))}
                </div>
              </div>

              {/* Form Fields */}
              <div className="mt-5 space-y-4">
                <div>
                  <label className="text-xs font-medium text-neutral-300 block mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Ramesh / Senior Dev / Student"
                    className="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-xs text-neutral-200 placeholder-neutral-600 focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-neutral-300 block mb-1">
                    Your Message / Advice / Notes
                  </label>
                  <textarea
                    rows={3}
                    value={senderMessage}
                    onChange={(e) => setSenderMessage(e.target.value)}
                    placeholder="Write a quick message or advice here..."
                    className="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-xs text-neutral-200 placeholder-neutral-600 focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <a
                    href={mailtoLink}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 px-4 py-2.5 text-xs font-bold text-neutral-950 transition-colors hover:bg-emerald-400"
                  >
                    <Send className="h-3.5 w-3.5" />
                    <span>Send Email to Subas ({profile.email})</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
