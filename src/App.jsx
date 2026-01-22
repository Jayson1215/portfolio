import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import ProjectsPage from './pages/Projects'
import LearningPage from './pages/Learning'
import ContactPage from './pages/Contact'
import Footer from './components/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <Router>
      <div className="app">
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/learning" element={<LearningPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
