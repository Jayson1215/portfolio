import { useState } from 'react'
import './Projects.css'

const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform built with React and Node.js. Features include product filtering, shopping cart, and secure checkout.',
    category: 'What I Know',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#',
    image: '🛍️',
    color: '#FF6B6B'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Interactive task management application with drag-and-drop functionality. Built with React hooks and localStorage for persistence.',
    category: 'What I Learned',
    tags: ['React Hooks', 'CSS Grid', 'Local Storage'],
    link: '#',
    image: '✓',
    color: '#4ECDC4'
  },
  {
    id: 3,
    title: 'AI Chat Interface',
    description: 'Modern chat application with real-time messaging and AI integration. Currently building to explore advanced React patterns and APIs.',
    category: 'What I\'m Aspiring To Do',
    tags: ['React', 'WebSocket', 'AI/ML', 'TypeScript'],
    link: '#',
    image: '💬',
    color: '#95E1D3'
  }
]

export default function Projects() {
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <section id="projects" className="projects">
      <div className="section-container">
        <div className="section-header">
          <h2>The Big Three</h2>
          <p>Projects that showcase my growth and capabilities</p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className={`project-card ${hoveredId === project.id ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{ '--card-color': project.color }}
            >
              <div className="project-icon">{project.image}</div>
              
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="project-category">{project.category}</span>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="tag">{tag}</span>
                ))}
              </div>

              <a href={project.link} className="project-link">
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
