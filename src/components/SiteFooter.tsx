import type { FooterLink } from '../siteContent'

type SiteFooterProps = {
  links: FooterLink[]
}

export function SiteFooter({ links }: SiteFooterProps) {
  if (links.length === 0) {
    return null
  }

  return (
    <footer className="site-footer">
      <nav aria-label="Social and profiles">
        <ul className="site-footer__list">
          {links.map((link) => (
            <li key={link.href}>
              <a
                className="site-footer__link"
                href={link.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  )
}
