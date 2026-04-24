// Icons
import creditCardRouletteIcon from './assets/icons/Credit-card-roulette.png';

// Images
import creditCardRouletteLightModeImg from './assets/light-mode/Credit-card-roulette.png';
import creditCardRouletteDarkModeImg from './assets/dark-mode/Credit-card-roulette.png';

export type Project = {
  icon: string
  title: string
  img: string
  description: string
  href: string
}

const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

export const projects: Project[] = [
  {
    icon: creditCardRouletteIcon,
    title: 'Credit Card Roulette',
    img: isDarkMode ? creditCardRouletteDarkModeImg : creditCardRouletteLightModeImg,
    description:
      '',
    href: 'https://jbeckintosh.github.io/credit-card-roulette/',
  }
]