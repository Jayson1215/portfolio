import './Learning.css'

const learningItems = [
  {
    id: 1,
    title: 'TypeScript',
    description: 'Exploring type safety and advanced OOP concepts',
    progress: 65,
    icon: '📘'
  },
  {
    id: 2,
    title: 'Next.js & Server Components',
    description: 'Building full-stack applications with modern React patterns',
    progress: 50,
    icon: '⚡'
  },
  {
    id: 3,
    title: 'Web Performance Optimization',
    description: 'Mastering Core Web Vitals and optimization techniques',
    progress: 60,
    icon: '🚀'
  },
  {
    id: 4,
    title: 'Web3 & Smart Contracts',
    description: 'Learning Ethereum development and blockchain fundamentals',
    progress: 30,
    icon: '⛓️'
  }
]

export default function Learning() {
  return (
    <section id="learning" className="learning">
      <div className="section-container">
        <div className="section-header">
          <h2>Currently Learning</h2>
          <p>Growth mindset: Always expanding my skillset</p>
        </div>

        <div className="learning-grid">
          {learningItems.map((item) => (
            <div key={item.id} className="learning-card">
              <div className="learning-icon">{item.icon}</div>
              
              <h3>{item.title}</h3>
              <p>{item.description}</p>

              <div className="progress-container">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${item.progress}%` }}></div>
                </div>
                <span className="progress-text">{item.progress}%</span>
              </div>
            </div>
          ))}
        </div>

        <div className="learning-cta">
          <p>I'm always open to learning new technologies and collaborating on exciting projects.</p>
        </div>
      </div>
    </section>
  )
}
