import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('G5bE6mqBBE2XbTR4W') // Public key from EmailJS
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus('')

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        'service_contact', // Service ID
        'template_contact', // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'jaysonvelascowp@gmail.com'
        }
      )

      console.log('Email sent successfully:', result)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      alert('Thanks for reaching out! I\'ll get back to you soon.')
      
      // Clear status message after 5 seconds
      setTimeout(() => setSubmitStatus(''), 5000)
    } catch (error) {
      console.error('Failed to send email:', error)
      setSubmitStatus('error')
      alert('Failed to send message. Please try again.')
      
      // Clear status message after 5 seconds
      setTimeout(() => setSubmitStatus(''), 5000)
    } finally {
      setIsLoading(false)
    }
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
                    placeholder="Input your name"
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
                    placeholder="Input your email"
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
                    placeholder="Input your message"
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary btn-submit"
                  disabled={isLoading}
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
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
                <a href="https://github.com/Jayson1215" target="_blank" rel="noopener noreferrer" className="github-contact-button">
                  View My GitHub
                </a>
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
