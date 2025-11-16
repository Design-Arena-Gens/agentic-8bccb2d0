## Kling AI – Cinematic Video Intelligence

Kling AI is a polished marketing and product experience for an agentic creative platform that turns ideas into localized, cinematic video in minutes. The site showcases a feature-rich landing page and an interactive “narrative builder” sandbox where visitors can explore the creative workflow.

Built with **Next.js 16**, **React 19**, and **Tailwind CSS 4**, the project is optimized for instant deployment on Vercel.

---

## ✨ Highlights

- Hero experience with animated gradients and product storytelling
- Feature pillars, workflow walkthrough, testimonials, and enterprise CTA
- Interactive demo panel that simulates Kling’s agentic narrative builder
- Fully responsive design with glassmorphism-inspired visuals
- Rich metadata and Open Graph preview (`public/og.png`) for social sharing

---

## 🚀 Getting Started

Install dependencies and spin up the dev server:

```bash
npm install
npm run dev
```

Then visit [http://localhost:3000](http://localhost:3000).

---

## 📁 Project Structure

```
src/
  app/
    layout.tsx         # Global layout + metadata
    page.tsx           # Landing page content
    globals.css        # Tailwind layer + custom styles
  components/
    interactive-demo.tsx  # Client-side narrative builder
public/
  og.png               # Open Graph cover art
```

Tailwind CSS 4 runs in “configless” mode using the new `@tailwindcss/postcss` pipeline.

---

## 🧪 Available Scripts

```bash
npm run dev     # Start local development
npm run build   # Create production build
npm run start   # Serve the production build
npm run lint    # Run ESLint across the project
```

---

## 📦 Deployment

The project is ready for Vercel:

```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-8bccb2d0
```

After deployment, verify the production URL: `https://agentic-8bccb2d0.vercel.app`.

---

Enjoy shipping cinematic stories with Kling AI!
