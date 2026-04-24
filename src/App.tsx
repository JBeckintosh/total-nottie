import { Hero } from './components/Hero'
import { ProjectCard } from './components/ProjectCard'
import { projects } from './siteContent'

function App() {
  return (
    <div className="page">
      <Hero />
      <main className="main">
        <ul className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.href + project.title} project={project} />
          ))}
        </ul>
      </main>
    </div>
  )
}

export default App
