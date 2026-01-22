import './Learning.css'

export default function LearningPage() {
  const skills = [
    {
      id: 1,
      category: "Frontend",
      items: ["React", "JavaScript", "TypeScript", "CSS3", "Tailwind CSS"]
    },
    {
      id: 2,
      category: "Backend",
      items: ["Node.js", "Express", "MongoDB", "PostgreSQL"]
    },
    {
      id: 3,
      category: "Tools & Others",
      items: ["Git", "Docker", "REST APIs", "Figma", "VS Code"]
    }
  ]

  const currentlyLearning = [
    { skill: "Next.js", progress: 75 },
    { skill: "GraphQL", progress: 60 },
    { skill: "Web3/Blockchain", progress: 40 }
  ]

  return (
    <section className="learning-page">
      <div className="page-container">
        <div className="page-header">
          <h1 className="page-title">Currently Learning</h1>
          <p className="page-subtitle">Skills & Technologies I'm Mastering</p>
        </div>

        <div className="learning-section">
          <h2 className="section-title">My Skills</h2>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill.id} className="skill-card-wrapper">
                <div className="skill-card">
                  <h3 className="skill-category">{skill.category}</h3>
                  <div className="skill-list">
                    {skill.items.map((item) => (
                      <div key={item} className="skill-item">{item}</div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="learning-section">
          <h2 className="section-title">Currently Mastering</h2>
          <div className="progress-cards">
            {currentlyLearning.map((item) => (
              <div key={item.skill} className="progress-card-wrapper">
                <div className="progress-card">
                  <div className="progress-header">
                    <h4>{item.skill}</h4>
                    <span className="progress-percent">{item.progress}%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${item.progress}%` }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3D Background Elements */}
        <div className="float-element float-1"></div>
        <div className="float-element float-2"></div>
        <div className="float-element float-3"></div>
      </div>
    </section>
  )
}
