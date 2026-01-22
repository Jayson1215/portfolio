import './Projects.css'
import { useState } from 'react'

export default function ProjectsPage() {
  const [clickedId, setClickedId] = useState(null)
  
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React and Node.js",
      tags: ["React", "Node.js", "MongoDB"],
      image: "📦",
      link: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates",
      tags: ["React", "Firebase", "Tailwind"],
      image: "✅",
      link: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Beautiful weather app with location-based forecasts",
      tags: ["React", "API", "Charts"],
      image: "🌤️",
      link: "#"
    }
  ]

  const handleViewProject = (projectLink, projectId) => {
    setClickedId(projectId)
    setTimeout(() => {
      if (projectLink !== "#") {
        window.open(projectLink, "_blank")
      } else {
        alert("Project link coming soon!")
      }
      setClickedId(null)
    }, 300)
  }

  return (
    <section className="projects-page">
      <div className="page-container">
        <div className="page-header">
          <h1 className="page-title">My Projects</h1>
          <p className="page-subtitle">Explore my latest work and creations</p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card-wrapper">
              <div className="project-card">
                <div className="project-icon">{project.image}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <button 
                  className={`btn btn-small ${clickedId === project.id ? 'clicked' : ''}`}
                  onClick={() => handleViewProject(project.link, project.id)}
                >
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 3D Background Elements */}
        <div className="float-element float-1"></div>
        <div className="float-element float-2"></div>
        <div className="float-element float-3"></div>
      </div>
    </section>
  )
}

