import { useState } from 'react'
import './Contact.css'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
    alert('Thanks for reaching out! I\'ll get back to you soon.')
  }

  return (
    <section className="contact-page">
      <div className="page-container">
        <div className="page-header">
          <h1 className="page-title">Get In Touch</h1>
          <p className="page-subtitle">Let's collaborate and create something amazing</p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-card-wrapper">
            <div className="contact-card">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-submit">Send Message</button>
              </form>
            </div>
          </div>

          <div className="contact-info">
            <div className="info-card-wrapper">
              <div className="info-card">
                <h3>📧 Email</h3>
                <p>jayson.velasco@urios.edu.ph</p>
              </div>
            </div>

            <div className="info-card-wrapper">
              <div className="info-card">
                <h3>💼 LinkedIn</h3>
                <p>linkedin.com/in/yourprofile</p>
              </div>
            </div>

            <div className="info-card-wrapper">
              <div className="info-card">
                <h3>🐙 GitHub</h3>
                <p>github.com/Jayson1215</p>
              </div>
            </div>
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
