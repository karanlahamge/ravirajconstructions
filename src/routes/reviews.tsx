import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — Raviraj Constructions (5.0 ★ · 48 reviews)" },
      {
        name: "description",
        content:
          "Customer reviews for Raviraj Constructions — 5.0 stars across 48 Google reviews. Quality work, customer-oriented service and a commitment to quality.",
      },
      { property: "og:title", content: "Reviews — Raviraj Constructions" },
      {
        property: "og:description",
        content:
          "5.0 ★ on Google. Hear directly from Nashik customers who've built with us.",
      },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: ReviewsPage,
});

const themes = [
  "Quality work",
  "Customer-oriented",
  "Commitment to quality",
  "Reasonable rates",
  "Timely delivery",
];

const reviews = [
  {
    name: "Urwashi Malu",
    when: "9 months ago",
    body: "Rajguru sir is very polite and humble and his team is superb. My clinic civil work was done by Rajguru sir — it's perfect and his super-fast work, lining up second-day work, is really amazing. I would highly recommend.",
  },
  {
    name: "Suchita Rajguru",
    when: "2 years ago",
    body: "Raviraj Construction is known for high-quality craftsmanship, reliable project management and excellent customer service. They have a team of experienced and skilled professionals who ensure every project is completed to the highest standard.",
  },
  {
    name: "Pranay Kshirsagar",
    when: "1 year ago",
    body: "Mr. Ravindra Rajguru has a very polite and humble nature. Excellent knowledge in the civil field. Maintaining quality in the project with timely delivery — we are happy to choose you as a builder for Vaastu Shree row-houses.",
  },
];

function ReviewsPage() {
  return (
    <>
      <section className="border-b border-border/60">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.2em] text-terracotta">
              Reviews
            </p>
            <h1 className="mt-4 font-display text-5xl leading-tight text-ink sm:text-6xl">
              5.0 ★ from 48 customers.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Our reputation in Nashik is built on real customer experiences.
              Here's what people who've actually built with us have to say.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {themes.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-sm border border-border bg-card p-8">
              <p className="font-display text-7xl text-ink">5.0</p>
              <p className="mt-1 text-terracotta">★★★★★</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Based on 48 Google reviews
              </p>
              <a
                href="https://www.google.com/search?q=Raviraj+Construction+Builders+%26+Developers+Nashik"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex rounded-full bg-ink px-5 py-2.5 text-sm text-background hover:bg-terracotta"
              >
                Write a review
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-8 md:grid-cols-3">
            {reviews.map((r) => (
              <figure
                key={r.name}
                className="flex h-full flex-col rounded-sm border border-border bg-card p-8"
              >
                <p className="text-terracotta">★★★★★</p>
                <blockquote className="mt-4 flex-1 text-base leading-relaxed text-ink">
                  “{r.body}”
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <p className="font-medium text-ink">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.when} · Google review</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
