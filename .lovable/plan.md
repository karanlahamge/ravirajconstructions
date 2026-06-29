## Raviraj Constructions — Website Plan

A professional multi-page marketing site for Raviraj Construction (Builders & Developers, Nashik), inspired by their 5.0-star reputation and "Building Dreams, Brick by Brick" tagline.

### Pages (TanStack Router routes)

1. **Home (`/`)** — Hero with tagline, trust strip (5.0 ★ · 48 reviews · Nashik), featured projects preview, services snapshot, testimonial highlight, CTA to contact.
2. **About (`/about`)** — Company story, Ravindra Rajguru's leadership, values (quality, commitment, customer-oriented), why choose us, LGBTQ+ friendly note.
3. **Projects (`/projects`)** — Grid of project types: residential homes, row-houses (Vaastu Shree), commercial/clinic civil work, renovations. Placeholder project cards with generated imagery.
4. **Reviews (`/reviews`)** — 5.0 rating summary, featured Google reviews (Urwashi Malu, Suchita Rajguru, Pranay Kshirsagar), review themes (quality work, customer oriented, commitment to quality), link to write a review.
5. **Contact (`/contact`)** — Phone (099223 25070), address (Omkar Niwas Apt, Prabhat Nagar, Vadhane Colony, Mhasrul Gaon, Nashik 422004), hours (Open · Closes 7 pm), embedded Google Map, simple mailto/tel CTAs. No backend form (per your selection — Home/About/Projects/Reviews/Contact only).

### Design direction

- **Aesthetic**: Confident, grounded, architectural. Warm neutrals (cream, deep charcoal) with a structural accent (burnt-terracotta/ochre). Avoids generic SaaS-purple and stock construction-yellow.
- **Type**: Serif display (Fraunces or Playfair) for headlines paired with clean sans (Inter) for body — feels established, not corporate-cold.
- **Layout**: Generous whitespace, large editorial imagery, numeric stats (48 reviews, 5.0★, years building), bilingual touch using the Marathi name "रविराज कंस्ट्रक्शन" as a tasteful subtitle.
- **Imagery**: Generated hero + project images (modern Indian residential architecture, row-houses, interior civil work).

### Tech notes

- TanStack Start file-based routes under `src/routes/`.
- Shared header/footer in `__root.tsx` shell.
- Per-route `head()` metadata: unique title, description, og:title/description, canonical, og:url. JSON-LD `LocalBusiness` / `GeneralContractor` on Home with address, phone, aggregateRating (5.0/48).
- Tailwind v4 tokens in `src/styles.css`; fonts loaded via `<link>` in root head.
- `public/robots.txt` + `public/sitemap.xml` with relative URLs (no domain yet).
- No backend, no Cloud — pure marketing site.

### Out of scope (ask later if needed)

- Inquiry form with database storage
- Project detail pages / CMS
- Multi-language (Marathi) full translation
- Custom domain setup