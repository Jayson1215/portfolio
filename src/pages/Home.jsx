import './Home.css'
import AboutPage from './About'
import ProjectsPage from './Projects'
import LearningPage from './Learning'
import ContactPage from './Contact'

export default function Home() {
  const skills = [
    { category: 'Frontend', items: ['React', 'JavaScript', 'CSS3', 'HTML5', 'Tailwind CSS'] },
    { category: 'Tools', items: ['Git', 'VS Code', 'Webpack', 'NPM', 'Vite'] },
    { category: 'Design', items: ['UI/UX', 'Responsive Design', 'Figma', 'Accessibility'] }
  ];

  const experience = [
    {
      title: 'Frontend Developer',
      company: 'Your Company',
      period: '2023 - Present',
      description: 'Building responsive web applications with React and modern JavaScript'
    },
    {
      title: 'Web Developer',
      company: 'Previous Company',
      period: '2022 - 2023',
      description: 'Developed and maintained web applications and components'
    }
  ];

  return (
    <>
      {/* Home Section */}
      <section className="home-page" id="home">
        <div className="animated-background">
          <div className="bg-gradient-1"></div>
          <div className="bg-gradient-2"></div>
          <div className="bg-gradient-3"></div>
          <div className="float-element float-1"></div>
          <div className="float-element float-2"></div>
          <div className="float-element float-3"></div>
        </div>

        <div className="page-container">
          <div className="hero-wrapper">
            <div className="hero-card">
              <div className="card-inner">
                <div className="card-front">
                  <div className="hero-content">
                    <div className="hero-text">
                      <h1 className="hero-title">
                        Hi, I'm <span className="highlight">Jayson Velasco</span>
                       </h1>
                      <p className="hero-subtitle">
                        Frontend Developer passionate about creating beautiful, accessible, and functional user experiences.
                      </p>
                      <p className="hero-description">
                        I transform ideas into elegant digital solutions. Specializing in React, modern JavaScript, and responsive design.
                      </p>
                      <div className="hero-buttons">
                        <a href="#projects" className="btn btn-primary">View My Work</a>
                        <a href="#contact" className="btn btn-secondary">Get In Touch</a>
                      </div>
                    </div>
                    
                    <div className="hero-visual">
                      <img src="/Profile.jpg" alt="Velasco Profile" className="profile-image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="scroll-indicator">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="section-bg">
          <div className="bg-gradient-alt-1"></div>
          <div className="bg-gradient-alt-2"></div>
        </div>
        <div className="page-container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a passionate frontend developer with a love for creating stunning, user-centric digital experiences. 
                With a strong foundation in React and modern JavaScript, I craft responsive, accessible web applications 
                that solve real-world problems.
              </p>
              <p>
                My journey in web development has been driven by curiosity and a desire to master the craft. 
                I believe in continuous learning and staying updated with the latest technologies and best practices.
              </p>
              <p>
                When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, 
                or sharing knowledge with the developer community.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat-item">
                <h3>50+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat-item">
                <h3>30+</h3>
                <p>Happy Clients</p>
              </div>
              <div className="stat-item">
                <h3>3+</h3>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section" id="skills">
        <div className="section-bg">
          <div className="bg-gradient-1"></div>
          <div className="bg-gradient-2"></div>
        </div>
        <div className="page-container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="skill-card">
                <h3 className="skill-category">{skillGroup.category}</h3>
                <div className="skill-items">
                  {skillGroup.items.map((skill, i) => (
                    <span key={i} className="skill-badge">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section" id="experience">
        <div className="section-bg">
          <div className="bg-gradient-alt-1"></div>
          <div className="bg-gradient-alt-2"></div>
        </div>
        <div className="page-container">
          <h2 className="section-title">Experience</h2>
          <div className="experience-timeline">
            {experience.map((job, idx) => (
              <div key={idx} className="experience-item">
                <div className="experience-marker"></div>
                <div className="experience-content">
                  <h3 className="experience-title">{job.title}</h3>
                  <p className="experience-company">{job.company}</p>
                  <p className="experience-period">{job.period}</p>
                  <p className="experience-description">{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Page */}
      <section id="about-page">
        <AboutPage />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <ProjectsPage />
      </section>

      {/* Learning/Skills Section */}
      <section id="learning">
        <LearningPage />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ContactPage />
      </section>
    </>
  )
}
