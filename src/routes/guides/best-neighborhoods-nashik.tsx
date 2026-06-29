import { createFileRoute, Link } from "@tanstack/react-router";

const CANONICAL =
  "https://ravirajconstructions.lovable.app/guides/best-neighborhoods-nashik";

export const Route = createFileRoute("/guides/best-neighborhoods-nashik")({
  head: () => ({
    meta: [
      {
        title:
          "Top Residential Areas in Nashik for Building a Home (2026 Guide)",
      },
      {
        name: "description",
        content:
          "A local builder's guide to the best residential areas in Nashik — Gangapur Road, Indira Nagar, Mahatma Nagar and more — compared on amenities, plot value and future growth.",
      },
      {
        property: "og:title",
        content: "Top Residential Areas in Nashik for Building a Home",
      },
      {
        property: "og:description",
        content:
          "Compare Nashik's posh and emerging neighborhoods — amenities, plot prices and future value — from Raviraj Constructions.",
      },
      { property: "og:url", content: CANONICAL },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline:
            "Top Residential Areas in Nashik for Building a Home (2026 Guide)",
          author: {
            "@type": "Organization",
            name: "Raviraj Constructions",
          },
          publisher: {
            "@type": "Organization",
            name: "Raviraj Constructions",
          },
          mainEntityOfPage: CANONICAL,
          about: [
            "Residential areas in Nashik",
            "Posh area in Nashik",
            "Gangapur Road",
            "Indira Nagar Nashik",
            "Mahatma Nagar Nashik",
          ],
        }),
      },
    ],
  }),
  component: GuidePage,
});

type Area = {
  name: string;
  vibe: string;
  bestFor: string;
  plotRange: string;
  amenities: string[];
  futureValue: string;
  considerations: string;
};

const areas: Area[] = [
  {
    name: "Gangapur Road",
    vibe: "Established, leafy, premium",
    bestFor: "Families wanting top schools, hospitals and a 'central but calm' address.",
    plotRange: "₹55,000–₹90,000 / sq.yd (varies by lane)",
    amenities: [
      "Wockhardt, Sahyadri & Six Sigma hospitals nearby",
      "Top-rated schools: Fravashi, Wisdom High, Ashoka Universal",
      "Cafés, restaurants and City Centre Mall within 10 minutes",
      "Quick access to Mumbai-Agra highway via College Road",
    ],
    futureValue:
      "Already a mature market — appreciation is steady rather than explosive. Excellent rental demand and resale liquidity.",
    considerations:
      "Plot availability is limited; most opportunities are redevelopment or row-house clusters off the main road.",
  },
  {
    name: "Indira Nagar",
    vibe: "Self-contained, family-first, value-for-money",
    bestFor: "First-time home builders who want amenities without Gangapur Road prices.",
    plotRange: "₹35,000–₹55,000 / sq.yd",
    amenities: [
      "Reputed CBSE/ICSE schools within the neighbourhood",
      "Daily-needs markets, gyms and clinics walking distance",
      "Easy connectivity to Mumbai Naka and Nashik Road station",
      "Wide internal roads — comfortable for 2-storey bungalows",
    ],
    futureValue:
      "Strong end-user demand keeps prices stable; the area is benefiting from spillover from Gangapur Road and Tidke Colony.",
    considerations:
      "Older layouts can have narrower setbacks — verify side margins before finalising your house plan.",
  },
  {
    name: "Mahatma Nagar",
    vibe: "Premium, low-rise, well-planned",
    bestFor: "Buyers who want a quiet, organised colony with mature trees and wide roads.",
    plotRange: "₹50,000–₹75,000 / sq.yd",
    amenities: [
      "Gardens, jogging tracks and clubhouses inside the colony",
      "Schools and tuition hubs within 1 km",
      "10-minute drive to College Road and Sharanpur Road",
      "Quieter than Gangapur Road, with similar conveniences",
    ],
    futureValue:
      "Limited new plot supply protects prices. Strong long-hold value, especially for independent bungalows.",
    considerations:
      "Society bye-laws around facade and height are stricter — plan elevation early with your builder.",
  },
  {
    name: "Pathardi Phata & Mhasrul (Emerging)",
    vibe: "Fast-growing outskirts with bigger plots",
    bestFor: "Builders who want a larger footprint, vastu-aligned layouts, or a row-house project.",
    plotRange: "₹18,000–₹32,000 / sq.yd",
    amenities: [
      "Direct access to Mumbai-Agra highway and ring road",
      "New schools and hospitals coming up year-on-year",
      "Larger NA plots suited to row houses and twin bungalows",
      "Lower density — easier vastu-compliant orientation",
    ],
    futureValue:
      "Highest appreciation potential of the four — infrastructure is catching up quickly with central Nashik.",
    considerations:
      "Verify NA / 7-12 / sanctioned layout status carefully. A local builder's due-diligence is essential here.",
  },
];

function GuidePage() {
  return (
    <>
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-terracotta">
            Guide · Nashik
          </p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
            Top Residential Areas in Nashik for Building a Home
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Choosing the right neighbourhood matters as much as choosing the
            right builder. After 15+ years of building homes across Nashik, we
            put together this honest, local comparison of the city's most
            sought-after residential areas — Gangapur Road, Indira Nagar,
            Mahatma Nagar and the emerging pockets around Pathardi and Mhasrul
            — covering amenities, plot ranges and future value.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-4xl space-y-16 px-6 py-16 lg:px-10">
          {areas.map((a, i) => (
            <article key={a.name}>
              <p className="font-display text-2xl text-terracotta">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-2 font-display text-3xl text-ink">{a.name}</h2>
              <p className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">
                {a.vibe}
              </p>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="font-display text-lg text-ink">Best for</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {a.bestFor}
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-lg text-ink">
                    Indicative plot range
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {a.plotRange}
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-display text-lg text-ink">Amenities</h3>
                <ul className="mt-2 space-y-1 text-sm leading-relaxed text-muted-foreground">
                  {a.amenities.map((item) => (
                    <li key={item}>— {item}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="font-display text-lg text-ink">
                    Future value
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {a.futureValue}
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-lg text-ink">
                    Things to check
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {a.considerations}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-10">
          <h2 className="font-display text-3xl text-ink">
            How we help you choose
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Before construction starts, we visit shortlisted plots with our
            customers — checking sun orientation, vastu, setbacks, soil and
            access — so the neighbourhood you pick actually fits the home you
            want to build. If you have a plot in mind anywhere in Nashik, we're
            happy to give you an honest opinion.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="rounded-full bg-ink px-6 py-3 text-sm text-background transition-colors hover:bg-terracotta"
            >
              Talk to Raviraj Constructions
            </Link>
            <Link
              to="/projects"
              className="rounded-full border border-border px-6 py-3 text-sm text-ink transition-colors hover:bg-background"
            >
              See our projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
