import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import PracticeAreas from './pages/PracticeAreas'
import Team from './pages/Team'
import Contact from './pages/Contact'
import BookConsultation from './pages/BookConsultation'


// App version (must match version.json)
const APP_VERSION = "1.0.1";


function App() {
  
    // Version check + force refresh
  useEffect(() => {
    fetch("/version.json", { cache: "no-store" })
      .then(res => res.json())
      .then(data => {
        if (data.version !== APP_VERSION) {
          window.location.reload(true);
          console.log("New version detected, refreshing...");
        }
      })
      .catch(() => {
        console.log("Version check failed");
      });
  }, []);


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/consultation" element={<BookConsultation />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/practice" element={<PracticeAreas />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
