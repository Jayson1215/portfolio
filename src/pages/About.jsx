import { Link } from 'react-router-dom'
import './About.css'

export default function AboutPage() {
  return (
    <section className="about-page" id="about">
      <div className="about-bg">
        <div className="about-gradient-1"></div>
        <div className="about-gradient-2"></div>
      </div>

      <div className="page-container">
        <h1 className="about-page-title">About Me</h1>

        <div className="about-content-wrapper">
          {/* Left Side - Image */}
          <div className="about-image-section">
            <div className="about-image-container">
              <img 
                src="/Profile.jpg" 
                alt="Jayson Velasco" 
                className="about-image"
              />
              <div className="image-frame"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="about-text-section">
            <div className="about-intro">
              <h2>Hi, I'm Jayson Velasco</h2>
              <p className="about-subtitle">Frontend Developer & Web Enthusiast</p>
              <p className="about-highlight-text">
                I'm passionate about creating beautiful, functional, and user-centered digital experiences. 
                With a strong foundation in modern web technologies, I transform ideas into elegant digital solutions.
              </p>
            </div>

            {/* Education Section */}
            <div className="about-section">
              <h3 className="section-heading">
                <span className="section-icon">🎓</span>
                Education
              </h3>
              <div className="education-item">
                <h4>Web Development Studies</h4>
                <p className="meta-info">Currently pursuing advanced training in modern web technologies</p>
                <p className="description">
                  Focusing on React, JavaScript, responsive design, and best practices in frontend development.
                </p>
              </div>
            </div>

            {/* Experience Section */}
            <div className="about-section">
              <h3 className="section-heading">
                <span className="section-icon">💼</span>
                Professional Experience
              </h3>
              <div className="experience-item">
                <h4>Frontend Developer</h4>
                <p className="meta-info">Building responsive web applications and components</p>
                <ul className="skills-list">
                  <li>Developed interactive React applications with modern JavaScript</li>
                  <li>Created responsive designs that work seamlessly across all devices</li>
                  <li>Implemented UI/UX best practices and accessibility standards</li>
                  <li>Collaborated with design teams to bring concepts to life</li>
                </ul>
              </div>
            </div>

            {/* Personal Interests Section */}
            <div className="about-section">
              <h3 className="section-heading">
                <span className="section-icon">⚡</span>
                About Me
              </h3>
              <p className="description">
                Beyond coding, I'm passionate about learning new technologies and staying updated with the latest 
                trends in web development. I enjoy exploring creative design concepts, contributing to open-source 
                projects, and sharing knowledge with the developer community.
              </p>
              <p className="description">
                I believe in continuous improvement and approach every project as an opportunity to grow my skills. 
                My goal is to create web experiences that not only look beautiful but also provide exceptional 
                functionality and user experience.
              </p>
            </div>

            {/* CTA */}
            <div className="about-cta">
              <p>Ready to work together?</p>
              <Link to="/contact" className="cta-button">Get In Touch</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
