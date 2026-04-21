import { Hero } from './components/Hero'
import { ProjectCard } from './components/ProjectCard'
import { SiteFooter } from './components/SiteFooter'
import { footerLinks, profile, projects } from './siteContent'

function App() {
  return (
    <div className="page">
      <Hero profile={profile} />
      <main className="main">
        <ul className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.href + project.title} project={project} />
          ))}
        </ul>
      </main>
      <SiteFooter links={footerLinks} />
    </div>
  )
}

export default App
