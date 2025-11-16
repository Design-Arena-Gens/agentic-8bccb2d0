"use client";

import { FormEvent, useMemo, useState } from "react";

const narrativeIntents = [
  {
    id: "cinematic",
    title: "Cinematic",
    description: "High-contrast imagery, dramatic pacing, orchestral score.",
    palette: "Electric teal · Obsidian",
  },
  {
    id: "documentary",
    title: "Documentary",
    description: "Handheld shots, grounded tone, informative narration.",
    palette: "Deep navy · Silver grain",
  },
  {
    id: "energetic",
    title: "Energetic",
    description: "Punchy motion, kinetic typography, bass-heavy beat.",
    palette: "Vivid magenta · Midnight",
  },
];

const regionPresets = [
  { id: "global", label: "Global English", voice: "Neutral Mid-Atlantic" },
  { id: "latam", label: "Latin America", voice: "Spanish (MX)" },
  { id: "emea", label: "EMEA", voice: "French (FR) + Subtitles" },
  { id: "apac", label: "APAC", voice: "Japanese (JP)" },
];

const deliverables = [
  { id: "storyboard", label: "Storyboard Frames" },
  { id: "voiceover", label: "Voiceover Script" },
  { id: "subtitles", label: "Dynamic Captions" },
  { id: "social", label: "9:16 Social Version" },
];

type IntentId = (typeof narrativeIntents)[number]["id"];

const regionalFlairs: Record<string, string> = {
  global: "Keeps the hero cinematic with refined English narration and ADR-ready timing.",
  latam: "Applies warm lighting, upbeat percussion, and colloquial Spanish voiceover.",
  emea: "Switches palette to cooler tones and layers bilingual subtitle styling for compliance.",
  apac: "Introduces animated line art and precise Japanese VO with adaptive lip sync adjustments.",
};

const promptStarters = [
  "Launch a revolutionary product that reimagines remote collaboration.",
  "Explain how our AI copilot personalizes onboarding for every customer role.",
  "Announce a sustainability initiative that turns manufacturing waste into energy.",
];

function synthesizeShots(intent: IntentId, energy: number, duration: number) {
  const energyLevel = energy > 70 ? "high-energy cuts" : energy > 40 ? "steady pacing" : "contemplative pacing";
  const durationLabel = duration >= 65 ? "extended hero sequence" : duration >= 35 ? "balanced arc" : "micro-story format";

  const baselineShots: Record<IntentId, string[]> = {
    cinematic: [
      "Establishing aerial sweep over neon city skyline at golden hour.",
      "Close-up of protagonist interacting with holographic interface, light trails matching brand colors.",
      "Slow-motion product reveal with volumetric lighting and cascading particles.",
    ],
    documentary: [
      "On-the-ground handheld shot introducing team inside innovation lab.",
      "B-roll montage of product in real-world environments with lower-thirds overlays.",
      "Interview-style framing with authentic lighting and gentle depth of field shift.",
    ],
    energetic: [
      "Hyper-speed montage of user reactions synced to beat-matched UI pulses.",
      "Dynamic camera push through product exploded view with kinetic typography callouts.",
      "High-contrast hero shot with glitch transitions and bold title card.",
    ],
  };

  return baselineShots[intent].map((shot, index) => ({
    id: index,
    summary: shot,
    tempo: energyLevel,
    focus: durationLabel,
  }));
}

function generateScript(intent: IntentId, energy: number, regions: string[], includeDeliverables: string[]) {
  const tone =
    intent === "cinematic"
      ? "Evocative and aspirational"
      : intent === "documentary"
        ? "Clear and trustworthy"
        : "Bold and adrenaline-fueled";
  const beats = [
    `Opening hook that sets a ${tone.toLowerCase()} narrative arc.`,
    `${energy > 60 ? "Accelerated rhythm" : "Measured cadence"} through feature storytelling.`,
    "Resolution that lands on a memorable brand promise.",
  ];

  const regionalNotes = regions.map((region) => regionalFlairs[region]).join(" ");
  const deliverableNote =
    includeDeliverables.length === 0
      ? "No additional outputs selected — storyboard only."
      : `Kling will also assemble ${includeDeliverables.join(", ")} for final delivery.`;

  return {
    tone,
    beats,
    regionalNotes,
    deliverableNote,
  };
}

export function InteractiveDemo() {
  const [promptIndex, setPromptIndex] = useState(0);
  const [intent, setIntent] = useState<IntentId>("cinematic");
  const [energy, setEnergy] = useState(55);
  const [duration, setDuration] = useState(45);
  const [regions, setRegions] = useState<string[]>(["global", "latam"]);
  const [selectedDeliverables, setSelectedDeliverables] = useState<string[]>(["storyboard", "voiceover"]);

  const shots = useMemo(() => synthesizeShots(intent, energy, duration), [intent, energy, duration]);
  const script = useMemo(
    () => generateScript(intent, energy, regions, selectedDeliverables),
    [intent, energy, regions, selectedDeliverables],
  );

  const toggleRegion = (id: string) => {
    setRegions((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
  };

  const toggleDeliverable = (id: string) => {
    setSelectedDeliverables((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id].sort(),
    );
  };

  const cyclePrompt = (event: FormEvent) => {
    event.preventDefault();
    setPromptIndex((idx) => (idx + 1) % promptStarters.length);
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[1.05fr_1.1fr]">
      <section className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-900/50 p-6">
        <header className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">Creative controls</h3>
          <button
            onClick={cyclePrompt}
            className="rounded-full border border-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-slate-200 transition hover:border-cyan-300/60 hover:text-white"
          >
            Shuffle prompt
          </button>
        </header>

        <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-sm text-slate-300">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Narrative seed</p>
          <p className="pt-2 text-base text-slate-100">{promptStarters[promptIndex]}</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">Intent</p>
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            {narrativeIntents.map((option) => {
              const isActive = option.id === intent;
              return (
                <button
                  key={option.id}
                  onClick={() => setIntent(option.id)}
                  className={`rounded-2xl border px-4 py-4 text-left transition ${
                    isActive
                      ? "border-cyan-400/80 bg-cyan-400/10"
                      : "border-white/10 bg-slate-950/60 hover:border-cyan-300/40"
                  }`}
                >
                  <p className="text-sm font-semibold text-white">{option.title}</p>
                  <p className="pt-1 text-xs text-slate-400">{option.description}</p>
                  <p className="pt-2 text-[11px] uppercase tracking-[0.28em] text-slate-500">{option.palette}</p>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid gap-5 rounded-2xl border border-white/10 bg-slate-950/70 p-5 md:grid-cols-2">
          <label className="block space-y-3 text-xs uppercase tracking-[0.3em] text-slate-400">
            Energy
            <input
              type="range"
              min={10}
              max={100}
              step={5}
              value={energy}
              onChange={(event) => setEnergy(Number(event.target.value))}
              className="w-full accent-cyan-400"
            />
            <span className="text-base font-semibold text-white">{energy}</span>
          </label>
          <label className="block space-y-3 text-xs uppercase tracking-[0.3em] text-slate-400">
            Duration (sec)
            <input
              type="range"
              min={15}
              max={90}
              step={5}
              value={duration}
              onChange={(event) => setDuration(Number(event.target.value))}
              className="w-full accent-fuchsia-400"
            />
            <span className="text-base font-semibold text-white">{duration}</span>
          </label>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">Delivery regions</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {regionPresets.map((region) => {
              const isActive = regions.includes(region.id);
              return (
                <button
                  key={region.id}
                  onClick={() => toggleRegion(region.id)}
                  className={`rounded-2xl border px-4 py-3 text-left transition ${
                    isActive
                      ? "border-fuchsia-400/70 bg-fuchsia-400/10"
                      : "border-white/10 bg-slate-950/60 hover:border-fuchsia-300/40"
                  }`}
                >
                  <p className="text-sm font-semibold text-white">{region.label}</p>
                  <p className="pt-2 text-xs text-slate-400">{region.voice}</p>
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">Deliverables</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {deliverables.map((deliverable) => {
              const isSelected = selectedDeliverables.includes(deliverable.id);
              return (
                <label
                  key={deliverable.id}
                  className={`flex cursor-pointer items-center gap-3 rounded-2xl border px-4 py-3 transition ${
                    isSelected
                      ? "border-cyan-400/70 bg-cyan-400/10"
                      : "border-white/10 bg-slate-950/60 hover:border-cyan-300/40"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => toggleDeliverable(deliverable.id)}
                    className="size-4 accent-cyan-400"
                  />
                  <span className="text-sm text-slate-200">{deliverable.label}</span>
                </label>
              );
            })}
          </div>
        </div>
      </section>

      <section className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-900/50 p-6">
        <header className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">Projected output</p>
            <h3 className="text-2xl font-semibold text-white">Scene architecture</h3>
          </div>
          <div className="text-xs uppercase tracking-[0.3em] text-slate-400">
            {regions.length} region{regions.length === 1 ? "" : "s"} · {selectedDeliverables.length} deliverable
            {selectedDeliverables.length === 1 ? "" : "s"}
          </div>
        </header>

        <div className="space-y-4">
          {shots.map((shot) => (
            <article
              key={shot.id}
              className="rounded-2xl border border-white/10 bg-slate-950/70 p-4"
            >
              <header className="flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-[0.28em] text-slate-500">
                <span>{shot.tempo}</span>
                <span>{shot.focus}</span>
              </header>
              <p className="pt-3 text-sm leading-7 text-slate-200">{shot.summary}</p>
            </article>
          ))}
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 text-sm text-slate-200">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Narrative direction</p>
          <ul className="mt-3 list-inside list-disc space-y-2 text-slate-300">
            {script.beats.map((beat) => (
              <li key={beat}>{beat}</li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-slate-400">{script.regionalNotes}</p>
          <p className="mt-3 text-xs text-slate-400">{script.deliverableNote}</p>
        </div>
      </section>
    </div>
  );
}
