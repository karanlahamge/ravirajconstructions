import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "../assets/hero.jpg";
import rowhouseImg from "../assets/project-rowhouse.jpg";
import residentialImg from "../assets/project-residential.jpg";
import commercialImg from "../assets/project-commercial.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Raviraj Constructions — Builders & Developers in Nashik" },
      {
        name: "description",
        content:
          "Building dreams brick by brick. Quality homes, row-houses and commercial spaces in Nashik. 5.0 ★ rated by 48 customers.",
      },
      { property: "og:title", content: "Raviraj Constructions — Nashik" },
      {
        property: "og:description",
        content:
          "Expertly crafted homes in Nashik. Quality construction, customer-first delivery.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const stats = [
  { value: "5.0★", label: "Google rating" },
  { value: "48", label: "Verified reviews" },
  { value: "Nashik", label: "Built locally since" },
];

const projects = [
  {
    title: "Vaastu Shree Row Houses",
    type: "Residential · Row Houses",
    img: rowhouseImg,
  },
  {
    title: "Apartment Residences",
    type: "Residential · Apartments",
    img: residentialImg,
  },
  {
    title: "Clinic & Commercial Civil",
    type: "Commercial · Fit-out",
    img: commercialImg,
  },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-12 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:pt-20">
          <div className="lg:col-span-6 lg:pt-12">
            <p className="font-deva text-sm text-terracotta">
              रविराज कंस्ट्रक्शन
            </p>
            <h1 className="mt-4 font-display text-5xl leading-[1.05] text-ink sm:text-6xl lg:text-7xl">
              Building dreams,
              <br />
              <span className="italic text-terracotta">brick by brick.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Expertly crafted homes, row-houses and commercial spaces in Nashik —
              delivered with the quality, honesty and care that earned us a perfect
              5.0 from 48 customers.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="rounded-full bg-ink px-6 py-3 text-sm text-background transition-colors hover:bg-terracotta"
              >
                See our work
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-ink/15 bg-background px-6 py-3 text-sm text-ink transition-colors hover:bg-secondary"
              >
                Start an inquiry
              </Link>
            </div>

            <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-border/60 pt-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-3xl text-ink">{s.value}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={heroImg}
                alt="Modern residential building constructed by Raviraj Constructions in Nashik"
                width={1600}
                height={1200}
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 rounded-sm bg-background/90 p-5 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.2em] text-terracotta">
                  Featured
                </p>
                <p className="mt-1 font-display text-lg text-ink">
                  Quality construction, timely delivery — every project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we build */}
      <section className="border-t border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-terracotta">
                What we build
              </p>
              <h2 className="mt-3 max-w-2xl font-display text-4xl text-ink">
                Honest craftsmanship across residential and commercial work.
              </h2>
            </div>
            <Link
              to="/projects"
              className="hidden text-sm text-ink underline-offset-4 hover:underline md:inline"
            >
              All projects →
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {projects.map((p) => (
              <article key={p.title} className="group">
                <div className="overflow-hidden rounded-sm">
                  <img
                    src={p.img}
                    alt={p.title}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="mt-4 text-xs uppercase tracking-wider text-muted-foreground">
                  {p.type}
                </p>
                <h3 className="mt-1 font-display text-xl text-ink">{p.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="border-t border-border/60">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.2em] text-terracotta">
              Reviews
            </p>
            <h2 className="mt-3 font-display text-4xl text-ink">
              5.0 ★ from 48 customers on Google.
            </h2>
            <Link
              to="/reviews"
              className="mt-6 inline-block text-sm text-ink underline-offset-4 hover:underline"
            >
              Read all reviews →
            </Link>
          </div>
          <blockquote className="border-l-2 border-terracotta pl-6 lg:col-span-8">
            <p className="font-display text-2xl leading-relaxed text-ink">
              “Rajguru sir is very polite and humble and his team is superb. My
              clinic civil work was perfectly executed — fast, precise, and the
              quality is genuinely outstanding.”
            </p>
            <footer className="mt-6 text-sm text-muted-foreground">
              — Urwashi Malu · Google review
            </footer>
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/60 bg-ink text-background">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="max-w-xl font-display text-4xl">
                Planning to build in Nashik?
              </h2>
              <p className="mt-3 max-w-lg text-background/70">
                Let's talk through your site, scope and timeline. Most of our
                customers come from word of mouth — we'd love to earn yours.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+919922325070"
                className="rounded-full bg-background px-6 py-3 text-sm text-ink hover:bg-ochre"
              >
                Call 099223 25070
              </a>
              <Link
                to="/contact"
                className="rounded-full border border-background/30 px-6 py-3 text-sm text-background hover:bg-background/10"
              >
                Visit our office
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
