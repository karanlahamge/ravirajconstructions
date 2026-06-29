import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Raviraj Constructions, Nashik" },
      {
        name: "description",
        content:
          "Get in touch with Raviraj Constructions in Nashik. Call 099223 25070 or visit our office at Omkar Niwas Apt, Prabhat Nagar, Vadhane Colony, Mhasrul Gaon.",
      },
      { property: "og:title", content: "Contact Raviraj Constructions" },
      {
        property: "og:description",
        content: "Call 099223 25070 or visit our office in Nashik.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-terracotta">
            Contact
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-tight text-ink sm:text-6xl">
            Let's talk about what you'd like to build.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Call us, visit the office, or send us a message — Mr. Rajguru and
            the team will personally walk you through next steps.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-12 lg:px-10">
          <div className="space-y-10 lg:col-span-5">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-terracotta">
                Call
              </p>
              <a
                href="tel:+919922325070"
                className="mt-2 block font-display text-3xl text-ink hover:text-terracotta"
              >
                099223 25070
              </a>
              <p className="mt-1 text-sm text-muted-foreground">
                Open today · Closes 7 pm
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-terracotta">
                Visit
              </p>
              <p className="mt-2 text-base leading-relaxed text-ink">
                02 Omkar Niwas Apt, Prabhat Nagar,
                <br />
                4, Vadhane Colony, Mhasrul Gaon,
                <br />
                Nashik, Maharashtra 422004
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Raviraj+Construction+Builders+Developers+Nashik"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-sm text-ink underline underline-offset-4 hover:text-terracotta"
              >
                Get directions →
              </a>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-terracotta">
                Email
              </p>
              <a
                href="mailto:hello@ravirajconstructions.in"
                className="mt-2 block text-base text-ink hover:text-terracotta"
              >
                hello@ravirajconstructions.in
              </a>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-terracotta">
                Hours
              </p>
              <dl className="mt-3 space-y-1 text-sm text-muted-foreground">
                <div className="flex justify-between border-b border-border/60 py-1">
                  <dt>Mon – Sat</dt>
                  <dd className="text-ink">9 am – 7 pm</dd>
                </div>
                <div className="flex justify-between py-1">
                  <dt>Sunday</dt>
                  <dd>By appointment</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-sm border border-border">
              <iframe
                title="Raviraj Constructions location in Nashik"
                src="https://www.google.com/maps?q=Raviraj+Construction+Builders+%26+Developers+Nashik&output=embed"
                width="100%"
                height="520"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
