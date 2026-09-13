import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Logo />
          <div className="leading-tight">
            <p className="text-sm font-semibold text-white">{site.name}</p>
            <p className="text-xs text-dim">{site.tagline}</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-dim">
          <a href={`mailto:${site.email}`} className="transition-colors hover:text-white">
            {site.email}
          </a>
          {site.linkedin && (
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
              LinkedIn
            </a>
          )}
          <p>© {new Date().getFullYear()} {site.name}</p>
        </div>
      </Container>
    </footer>
  );
}
