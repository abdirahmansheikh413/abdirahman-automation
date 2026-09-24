import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { site } from "@/lib/site";

const links = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#lead-response", label: "Lead Response" },
  { href: "#demo", label: "Demo" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-ink-950/70 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-6">
        <a href="#top" className="flex min-w-0 items-center gap-3 rounded-lg">
          <Logo />
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-[15px] font-semibold tracking-tight text-white">{site.name}</span>
            <span className="hidden text-xs text-dim sm:block">{site.tagline}</span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-3.5 py-2 text-sm text-muted transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#contact"
          className="inline-flex h-9 shrink-0 items-center rounded-full border border-white/12 bg-white/[0.04] px-4 text-sm font-medium text-soft transition duration-300 hover:border-white/25 hover:bg-white/[0.08]"
        >
          Contact
        </a>
      </Container>
    </header>
  );
}
