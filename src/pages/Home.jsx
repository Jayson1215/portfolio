import './Home.css'

export default function Home() {
  return (
    <section className="home-page">
      <div className="page-container">
        <div className="hero-wrapper">
          <div className="hero-card">
            <div className="card-inner">
              <div className="card-front">
                <div className="hero-content">
                  <div className="hero-text">
                    <h1 className="hero-title">
                      Hi, I'm <span className="highlight">Jayson T. Velasco</span>
                    </h1>
                    <p className="hero-subtitle">
                      Frontend Developer passionate about creating beautiful, accessible, and functional user experiences.
                    </p>
                    <p className="hero-description">
                      I transform ideas into elegant digital solutions. Specializing in React, modern JavaScript, and responsive design.
                    </p>
                    <div className="hero-buttons">
                      <a href="/projects" className="btn btn-primary">View My Work</a>
                      <a href="/contact" className="btn btn-secondary">Get In Touch</a>
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

        {/* 3D Background Elements */}
        <div className="float-element float-1"></div>
        <div className="float-element float-2"></div>
        <div className="float-element float-3"></div>
      </div>
    </section>
  )
}
