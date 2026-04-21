export type Profile = {
  name: string
}

export type Project = {
  icon: string
  title: string
  img: string
  description: string
  href: string
}

export type FooterLink = {
  label: string
  href: string
}

export const profile: Profile = {
  name: 'Total Nottie',
}

export const projects: Project[] = [
  {
    icon: '',
    title: 'Credit Card Roulette',
    img: '',
    description:
      '',
    href: 'https://jbeckintosh.github.io/credit-card-roulette/',
  }
]

export const footerLinks: FooterLink[] = [];
