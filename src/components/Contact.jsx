import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, you would send this data to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="contact">
      <div className="section-container">
        <div className="section-header">
          <h2>Let's Work Together</h2>
          <p>Have an exciting project in mind? I'd love to hear from you.</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <span className="info-icon">✉️</span>
              <div>
                <h4>Email</h4>
                <a href="mailto:contact@velasco.dev">contact@velasco.dev</a>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">🔗</span>
              <div>
                <h4>Connect With Me</h4>
                <div className="social-links">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                </div>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">📍</span>
              <div>
                <h4>Location</h4>
                <p>Available for remote work worldwide</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary btn-large">
              Send Message
            </button>

            {submitted && (
              <div className="success-message">
                ✓ Thanks for reaching out! I'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
