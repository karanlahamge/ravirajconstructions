import { Link } from "@tanstack/react-router";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-display text-xl tracking-tight text-ink">
            Raviraj
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-terracotta">
            Constructions
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="text-sm text-muted-foreground transition-colors hover:text-ink data-[status=active]:text-ink data-[status=active]:font-medium"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:+919922325070"
            className="rounded-full bg-ink px-4 py-2 text-sm text-background transition-colors hover:bg-terracotta"
          >
            099223 25070
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden"
        >
          <div className="space-y-1.5">
            <span className="block h-px w-6 bg-ink" />
            <span className="block h-px w-6 bg-ink" />
            <span className="block h-px w-6 bg-ink" />
          </div>
        </button>
      </div>

      {open && (
        <nav className="border-t border-border/60 bg-background px-6 py-4 md:hidden">
          <ul className="space-y-3">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: item.to === "/" }}
                  className="block text-base text-muted-foreground data-[status=active]:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="tel:+919922325070"
                className="inline-block rounded-full bg-ink px-4 py-2 text-sm text-background"
              >
                099223 25070
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
