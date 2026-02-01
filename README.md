# Review My Cafe

Company website for **Review My Cafe** — a service that helps cafés and restaurants get Google reviews in ~10 seconds via QR code and simple checkpoints.

## Tech stack

- **React** (Vite)
- **Tailwind CSS**
- **React Router**

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Pages

- **Home** — Hero, benefits, “Try it now” CTA
- **About** — Company description, benefits, human-written reviews, subscription model
- **How it works** — 4-step flow (QR → branded page → submit → Google review)
- **Pricing** — Starter & Growth plans (placeholder)
- **Contact** — Contact form
- **Try Demo** — Simulated customer feedback flow (checkpoints + star rating, no star section on “screen” as per spec)

## Notes

- Try Demo mimics the customer screen: café logo area at top, checkpoints (food, service, ambience, value), star rating for submission. In production each café has its own logo and optional custom checkpoints.
- Brand colors and fonts (DM Sans, Outfit) are set in `tailwind.config.js` and `src/index.css`.
