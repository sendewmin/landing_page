import React, { useState, useEffect } from 'react'
import ExploreGate from './Component/ExploreGate.jsx'
import Header from './Component/Header.jsx'
import Hero from './Component/Hero.jsx'
import WhyUs from './Component/Whyus.jsx'
import About from './Component/About.jsx'
import Features from './Component/Features.jsx'
import Contact from './Component/Contect.jsx'
import Footer from './Component/Footer.jsx'
import './global.css'

export default function App() {
  const [explored, setExplored] = useState(false)
  const [visible, setVisible] = useState(false)

  const handleExplore = () => {
    setExplored(true)
    setTimeout(() => setVisible(true), 100)
  }

  return (
    <>
      {!explored && <ExploreGate onExplore={handleExplore} />}
      {explored && (
        <div className={`page-wrapper ${visible ? 'page-visible' : ''}`}>
          <Header />
          <main>
            <Hero />
            <WhyUs />
            <About />
            <Features />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  )
}