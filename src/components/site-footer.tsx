import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-ink text-background/80">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-4 lg:px-10">
        <div className="lg:col-span-2">
          <p className="font-display text-2xl text-background">
            Raviraj Constructions
          </p>
          <p className="mt-1 font-deva text-sm text-background/60">
            रविराज कंस्ट्रक्शन — बिल्डर्स & डेवलेपर्स
          </p>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-background/70">
            Building dreams, brick by brick. Expertly crafted homes, row-houses
            and commercial spaces across Nashik since day one — driven by
            quality, commitment and an unwavering customer-first ethic.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-background/50">
            Visit
          </p>
          <p className="mt-3 text-sm leading-relaxed">
            02 Omkar Niwas Apt, Prabhat Nagar,
            <br />
            Vadhane Colony, Mhasrul Gaon,
            <br />
            Nashik, Maharashtra 422004
          </p>
          <p className="mt-3 text-xs text-background/50">Open · Closes 7 pm</p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-background/50">
            Contact
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href="tel:+919922325070" className="hover:text-ochre">
                099223 25070
              </a>
            </li>
            <li>
              <Link to="/contact" className="hover:text-ochre">
                Send an inquiry
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-ochre">
                See our work
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-background/50 sm:flex-row sm:justify-between lg:px-10">
          <p>© {new Date().getFullYear()} Raviraj Constructions. All rights reserved.</p>
          <p>Nashik, Maharashtra · LGBTQ+ friendly</p>
        </div>
      </div>
    </footer>
  );
}
