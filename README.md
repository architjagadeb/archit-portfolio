# Archit Jagadeb -- Portfolio

## Setup

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually http://localhost:5173).

To build for production:
```bash
npm run build
npm run preview
```

## Things to swap in with your real content

1. **Hero portrait** -- replace `public/portrait-placeholder.svg` with your own
   photo, and update the `src` in `src/components/HeroSection.tsx` (search for
   `portrait-placeholder`). Square-ish, high-res images work best with the
   magnetic hover effect.

2. **Project screenshots** -- drop your images into `public/projects/` using
   these exact filenames (or update the paths in
   `src/components/ProjectsSection.tsx`):
   - `arthax-1.png`, `arthax-2.png`, `arthax-3.png`
   - `dailybot-1.png`, `dailybot-2.png`, `dailybot-3.png`
   - `vr-1.png`, `vr-2.png`, `vr-3.png`
   Until you add real images, each card shows an "Add screenshot" placeholder.

3. **Contact links** -- update the real URLs in
   `src/components/ContactSection.tsx` (LinkedIn, GitHub, Instagram).

4. **Live Project links** -- update the `href` on each project in
   `src/components/ProjectsSection.tsx` (currently `#`) to point to your
   deployed ArthaX app / GitHub repos.

5. **Bio & skill copy** -- the About section text and the 5 skill
   descriptions are starting drafts based on your resume. Edit
   `src/components/AboutSection.tsx` and `src/components/SkillsSection.tsx`
   to sound like you.

## Notes

- Built with React + TypeScript + Vite + Tailwind CSS + Framer Motion.
- Fully responsive with fluid typography (`clamp()`), mobile-first breakpoints.
- Respects `prefers-reduced-motion`.
- The marquee section shows your tech stack instead of the original template's
  client-site GIFs (those belonged to someone else's actual projects).
