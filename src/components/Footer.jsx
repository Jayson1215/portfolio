import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="section-container">
        <div className="footer-content">
          <p>Crafted with <span className="heart">♥</span> by Velasco</p>
          <p className="footer-text">© {currentYear} All rights reserved. Built with React & Vite.</p>
        </div>
        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}
