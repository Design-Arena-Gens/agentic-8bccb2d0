import Link from "next/link";
import { InteractiveDemo } from "@/components/interactive-demo";

const heroHighlights = [
  {
    title: "Storyboard → shotlist",
    caption: "Automation that respects your creative intent.",
  },
  {
    title: "Authentic dubbing",
    caption: "Accent-aware voice actors tuned for every market.",
  },
  {
    title: "API-first delivery",
    caption: "Trigger renders and localization directly from your stack.",
  },
];

const featurePillars = [
  {
    title: "Generative Story Engine",
    description:
      "Transform a single sentence into multi-shot storyboards, scripts, and motion references with automatic pacing intelligence.",
    metrics: "Storyboard in 12s",
  },
  {
    title: "Realtime Localization",
    description:
      "Auto-dub voices across 28 languages with accent-aware lip sync and regionally tuned subtitles.",
    metrics: "28 language pairs",
  },
  {
    title: "AI-Native Editing",
    description:
      "Edit with intent-level controls — describe the change once and Kling propagates it across every output.",
    metrics: "One prompt revisions",
  },
];

const useCases = [
  {
    name: "Launch Campaigns",
    detail: "Ship launch films with instant variants for each channel and geography.",
  },
  {
    name: "Learning & Enablement",
    detail: "Spin up localized explainers for every persona without bringing in a video crew.",
  },
  {
    name: "Product Walkthroughs",
    detail: "Demonstrate features with guided UI captures, narration, and branded motion.",
  },
];

const workflow = [
  {
    stage: "01 · Sync",
    title: "Capture the spark",
    copy: "Start from a prompt, PDF, or Figma board. Kling dissects your material into scenes, beats, and visuals.",
  },
  {
    stage: "02 · Compose",
    title: "Generate cinematic boards",
    copy: "Preview fully rendered sequences in seconds, complete with voice, music, and typography that match your system.",
  },
  {
    stage: "03 · Adapt",
    title: "Localize in one click",
    copy: "Translate, re-voice, and reformat outputs per market. Kling keeps timing, captions, and brand safe.",
  },
  {
    stage: "04 · Deliver",
    title: "Push everywhere",
    copy: "Export directly to marketing stacks, LMS tools, or schedule as social drops via the API.",
  },
];

const testimonials = [
  {
    quote:
      "Kling collapsed our storyboard-to-publish cycle from six weeks to six hours. It's now the creative co-pilot for the entire studio.",
    author: "Amelia Kwan",
    role: "Head of Content, Lunar Labs",
  },
  {
    quote:
      "Localization used to be the bottleneck. Kling lets us launch globally on day one with fluent voice and adaptive motion.",
    author: "Rodrigo Mendez",
    role: "Director of Brand, Flux Robotics",
  },
];

export default function Home() {
  return (
    <main className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-24 px-6 pb-24 pt-20 sm:px-10 lg:px-12">
      <header className="relative overflow-hidden rounded-3xl border border-white/5 bg-slate-900/40 p-10 shadow-2xl shadow-cyan-500/10 backdrop-blur">
        <div className="absolute -left-40 -top-40 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-52 right-8 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="relative flex flex-col gap-12 lg:flex-row">
          <div className="max-w-2xl space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">
              Introducing Kling AI
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-slate-50 sm:text-5xl lg:text-6xl">
              Design, generate, and localize cinematic stories in minutes.
            </h1>
            <p className="text-lg leading-relaxed text-slate-300">
              Kling AI is the creative operating system built for brand, product,
              and learning teams. Prompt once, then co-edit with an agentic
              workflow that understands pacing, narrative tension, and every
              market you ship to.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#demo"
                className="glow-ring rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-fuchsia-400 px-7 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
              >
                Try the narrative builder
              </Link>
              <Link
                href="#workflow"
                className="rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/60 hover:text-white"
              >
                Explore the workflow
              </Link>
            </div>
            <dl className="grid gap-6 pt-6 sm:grid-cols-3">
              {heroHighlights.map((item) => (
                <div key={item.title} className="space-y-2 text-sm text-slate-300">
                  <dt className="text-base font-semibold text-slate-100">{item.title}</dt>
                  <dd className="text-xs leading-5 text-slate-400">{item.caption}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative isolate flex flex-1 items-center justify-center">
            <div className="glow-ring relative w-full max-w-md rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-lg">
              <div className="flex items-center justify-between text-xs uppercase tracking-wider text-slate-400">
                <span>Creative Timeline</span>
                <span>Realtime</span>
              </div>
              <div className="mt-6 space-y-6 text-sm text-slate-300">
                {featurePillars.map((pillar) => (
                  <div key={pillar.title} className="rounded-2xl border border-white/5 bg-slate-900/60 p-4">
                    <div className="flex items-center justify-between text-xs font-semibold text-cyan-200">
                      <span>{pillar.metrics}</span>
                      <span className="text-slate-500">AI Assist</span>
                    </div>
                    <p className="pt-3 text-base font-medium text-slate-100">
                      {pillar.title}
                    </p>
                    <p className="pt-2 text-sm leading-6 text-slate-400">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="grid gap-6 text-sm text-slate-300 sm:grid-cols-3">
        {[
          { stat: "92%", label: "faster concept-to-publish cycle with automated motion intelligence" },
          { stat: "28", label: "languages with accent-aware dubbing and typography presets" },
          { stat: "45 min", label: "average time saved per editor on multi-market releases" },
        ].map((item) => (
          <div
            key={item.stat}
            className="rounded-3xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur"
          >
            <span className="text-3xl font-semibold text-white">{item.stat}</span>
            <p className="pt-3 leading-6 text-slate-400">{item.label}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-slate-50 lg:text-4xl">
            Every phase of the creative lifecycle, orchestrated by agents.
          </h2>
          <p className="text-lg text-slate-300">
            Kling’s multimodal stack listens to your brand voice, pulls from
            product knowledge, and coordinates specialized models to hit the brief.
            Automations stay transparent, so producers can jump in at any moment.
          </p>
          <div className="space-y-4">
            {featurePillars.map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl border border-white/10 bg-slate-900/40 p-6 shadow-lg shadow-cyan-500/5 transition hover:-translate-y-1 hover:border-cyan-400/50"
              >
                <div className="flex items-center justify-between text-xs uppercase tracking-widest text-cyan-200">
                  <span>{feature.metrics}</span>
                  <span>Agentic stack</span>
                </div>
                <p className="pt-3 text-xl font-semibold text-white">{feature.title}</p>
                <p className="pt-2 text-sm leading-7 text-slate-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="glow-ring rounded-[2.5rem] border border-white/10 bg-slate-950/80 p-8">
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-500">
            <span>Live scene breakdown</span>
            <span>v3.2</span>
          </div>
          <div className="mt-6 grid gap-4 text-sm text-slate-300">
            {["Prompt to shotlist detection", "Character emotion mapping", "Mood & palette locking", "Motion continuity passes"].map(
              (step) => (
                <div key={step} className="rounded-2xl border border-white/5 bg-slate-900/60 p-4">
                  <p className="text-sm font-medium text-white">{step}</p>
                  <p className="pt-1 text-xs text-slate-400">
                    Kling coordinates vision, audio, and language models to maintain editorial integrity across every asset.
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section id="workflow" className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-200">Workflow</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              From spark to shipped in four agent-guided stages.
            </h2>
          </div>
          <Link
            href="https://vercel.com/templates/ai"
            target="_blank"
            className="rounded-full border border-white/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-200 transition hover:border-cyan-300/60 hover:text-white"
          >
            Watch the demo
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {workflow.map((item) => (
            <article
              key={item.stage}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40 p-6"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-cyan-500/10 opacity-0 transition hover:opacity-100" />
              <p className="text-xs font-semibold uppercase tracking-[0.38em] text-slate-500">
                {item.stage}
              </p>
              <h3 className="pt-3 text-2xl font-semibold text-white">{item.title}</h3>
              <p className="pt-4 text-sm leading-7 text-slate-300">{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="demo" className="space-y-8 rounded-[2.5rem] border border-white/10 bg-slate-950/80 p-8 shadow-xl shadow-cyan-500/10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-200">Interactive lab</p>
            <h2 className="text-3xl font-semibold text-white">
              Prototype a sequence with Kling’s narrative builder.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-300">
            Adjust tone, pacing, and regions to see how Kling orchestrates agents in real time.
            The output is fully reproducible inside the platform.
          </p>
        </div>
        <InteractiveDemo />
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="rounded-[2.5rem] border border-white/10 bg-slate-900/40 p-8">
          <h2 className="text-3xl font-semibold text-white">Where teams plug Kling in.</h2>
          <p className="pt-3 text-sm leading-7 text-slate-300">
            The platform integrates into your creative ecosystem via APIs, webhooks, and collaboration hubs.
            Every agent is auditable, and every edit stays versioned.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {useCases.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl border border-white/5 bg-slate-950/70 p-4 text-sm leading-6 text-slate-300"
              >
                <p className="text-sm font-semibold text-white">{item.name}</p>
                <p className="pt-2 text-xs text-slate-400">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[2.5rem] border border-white/10 bg-slate-900/40 p-8">
          <h2 className="text-2xl font-semibold text-white">Trusted by frontier creators.</h2>
          <div className="mt-6 space-y-6">
            {testimonials.map((item) => (
              <blockquote key={item.author} className="rounded-2xl border border-white/5 bg-slate-950/70 p-6">
                <p className="text-sm leading-7 text-slate-200">&ldquo;{item.quote}&rdquo;</p>
                <footer className="pt-4 text-xs font-medium uppercase tracking-[0.25em] text-slate-500">
                  {item.author} · {item.role}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-br from-cyan-500/20 via-slate-900/80 to-fuchsia-500/20 p-10 text-center shadow-2xl shadow-cyan-500/20">
        <h2 className="text-4xl font-semibold text-white">Bring Kling AI to your creative stack.</h2>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-100">
          Start with a private workspace, add your brand kit, and co-direct your next story with an agentic creative team.
          Full audit logs, SOC 2 Type II compliance, enterprise SSO, and a rock-solid API.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="https://agentic-8bccb2d0.vercel.app/api/signup"
            className="glow-ring rounded-full bg-white px-8 py-3 text-sm font-semibold text-slate-900 transition hover:scale-[1.01]"
          >
            Request enterprise access
          </Link>
          <Link
            href="mailto:hello@kling.ai"
            className="rounded-full border border-white/30 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Talk to our team
          </Link>
        </div>
      </section>
    </main>
  );
}
