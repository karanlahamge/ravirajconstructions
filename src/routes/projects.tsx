import { createFileRoute, Link } from "@tanstack/react-router";
import rowhouseImg from "../assets/project-rowhouse.jpg";
import residentialImg from "../assets/project-residential.jpg";
import commercialImg from "../assets/project-commercial.jpg";
import heroImg from "../assets/hero.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Raviraj Constructions, Nashik" },
      {
        name: "description",
        content:
          "Residential homes, row-houses, clinic and commercial civil work — a selection of projects delivered by Raviraj Constructions in Nashik.",
      },
      { property: "og:title", content: "Projects by Raviraj Constructions" },
      {
        property: "og:description",
        content:
          "Residential, row-house and commercial projects built across Nashik.",
      },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    title: "Vaastu Shree Row Houses",
    type: "Residential · Row Houses",
    location: "Nashik",
    img: rowhouseImg,
    blurb:
      "A row-house community delivered with timely handover and the quality our owners now happily recommend to their families.",
  },
  {
    title: "Modern Residential Building",
    type: "Residential · Apartments",
    location: "Nashik",
    img: residentialImg,
    blurb:
      "Apartment residences with thoughtful balconies, generous daylight and the finish standards that define our work.",
  },
  {
    title: "Private Home — Sharanpur Rd.",
    type: "Residential · Custom Home",
    location: "Nashik",
    img: heroImg,
    blurb:
      "A custom Nashik home in warm sandstone — designed with the family, built to last for generations.",
  },
  {
    title: "Clinic & Commercial Fit-out",
    type: "Commercial · Civil Work",
    location: "Nashik",
    img: commercialImg,
    blurb:
      "Civil work for a clinic interior — sequenced, on time, and ready for fit-out the very next day.",
  },
];

function ProjectsPage() {
  return (
    <>
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-terracotta">
            Projects
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-tight text-ink sm:text-6xl">
            Homes, row-houses and commercial spaces, built across Nashik.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            A selection of recent work. Every project — large or small — is
            delivered with the same standard of craftsmanship and the same
            customer-first care.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
            {projects.map((p, i) => (
              <article
                key={p.title}
                className={i % 2 === 1 ? "md:mt-16" : ""}
              >
                <div className="overflow-hidden rounded-sm">
                  <img
                    src={p.img}
                    alt={p.title}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-4">
                  <p className="text-xs uppercase tracking-wider text-terracotta">
                    {p.type}
                  </p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    {p.location}
                  </p>
                </div>
                <h2 className="mt-2 font-display text-2xl text-ink">{p.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.blurb}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-secondary/40">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-16 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>
            <h2 className="font-display text-3xl text-ink">
              Have a plot or a project in mind?
            </h2>
            <p className="mt-2 text-muted-foreground">
              Share your site details and we'll come back with a clear, honest plan.
            </p>
          </div>
          <Link
            to="/contact"
            className="self-start rounded-full bg-ink px-6 py-3 text-sm text-background hover:bg-terracotta lg:self-auto"
          >
            Start an inquiry
          </Link>
        </div>
      </section>
    </>
  );
}
