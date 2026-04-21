import type { Profile } from '../siteContent'

type HeroProps = {
  profile: Profile
}

export function Hero({ profile }: HeroProps) {
  return (
    <header className="hero">
      <h1 className="hero__title">{profile.name}</h1>
      <p className="hero__eyebrow">Projects:</p>
    </header>
  )
}
