import { createFileRoute, Link } from "@tanstack/react-router";
import craftImg from "../assets/about-craft.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Raviraj Constructions, Nashik" },
      {
        name: "description",
        content:
          "Led by Ravindra Rajguru, Raviraj Constructions is a Nashik builder & developer known for quality craftsmanship, reliable project management and customer-first delivery.",
      },
      { property: "og:title", content: "About Raviraj Constructions" },
      {
        property: "og:description",
        content:
          "A Nashik builder & developer known for quality work, commitment and a polite, customer-first team.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  {
    title: "Quality, never compromised",
    body: "From the first brick to the final finish, we hold every detail to a standard we'd accept in our own homes.",
  },
  {
    title: "Customer-oriented, always",
    body: "Clear communication, no surprises, and a polite team that listens — that's how we keep our customers satisfied.",
  },
  {
    title: "Reliable project management",
    body: "Skilled professionals, sequenced work and on-time delivery so your project moves forward without stalling.",
  },
  {
    title: "Affordable, honest pricing",
    body: "Best work in reasonable rates — exactly what our customers tell their friends and family about us.",
  },
];

function AboutPage() {
  return (
    <>
      <section className="border-b border-border/60">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.2em] text-terracotta">
              About
            </p>
            <h1 className="mt-4 font-display text-5xl leading-tight text-ink sm:text-6xl">
              A Nashik builder built on trust.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Raviraj Constructions is a Nashik-based builders & developers
              practice, led by{" "}
              <span className="text-ink">Mr. Ravindra Rajguru</span> — known
              across the city for a polite, humble approach, deep civil-field
              knowledge, and a team that delivers quality on time, every time.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Our work spans private residences, row-houses, clinic and commercial
              civil work, and renovations. Each project is treated as a long-term
              relationship — which is why most of our new customers walk in
              referred by an older one.
            </p>
          </div>
          <div className="lg:col-span-5">
            <img
              src={craftImg}
              alt="Mason laying bricks on a Raviraj Constructions site"
              width={1200}
              height={1500}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-sm object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <h2 className="max-w-2xl font-display text-4xl text-ink">
            What we stand for.
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-sm bg-border md:grid-cols-2">
            {values.map((v, i) => (
              <div key={v.title} className="bg-background p-8">
                <p className="font-display text-3xl text-terracotta">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-xl text-ink">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-16 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <p className="max-w-lg font-display text-2xl text-ink">
            Open to every customer, every community. LGBTQ+ friendly.
          </p>
          <Link
            to="/contact"
            className="self-start rounded-full bg-ink px-6 py-3 text-sm text-background hover:bg-terracotta lg:self-auto"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
