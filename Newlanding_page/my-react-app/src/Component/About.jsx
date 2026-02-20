import React, { useEffect, useRef } from 'react'
import './About.css'

const stats = [
  { value: '6', label: 'Team Members' },
  { value: '2025', label: 'Year Founded' },
  { value: '300+', label: 'Renters' },
  { value: '30+', label: 'Landlords' },
]

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.15 }
    )
    sectionRef.current.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="about" ref={sectionRef}>
      {/* Background wave */}
      <div className="about-wave" />

      <div className="about-inner">
        {/* Mission headline */}
        <div className="about-hero reveal">
          <p className="section-label">About Us</p>
          <h2 className="about-headline">
            We're giving everyone the power to find their{' '}
            <span className="about-em">perfect space.</span>
          </h2>
        </div>

        {/* Vision & Mission */}
        <div className="about-vismis reveal" style={{ transitionDelay: '0.1s' }}>
          <div className="about-block">
            <div className="about-block-header">
              <div className="about-block-icon">👁</div>
              <h3>Vision</h3>
            </div>
            <p>To become the most trusted and efficient room rental platform, helping people find their ideal living spaces easily, safely, and without wasting time.</p>
          </div>
          <div className="about-block">
            <div className="about-block-header">
              <div className="about-block-icon">🎯</div>
              <h3>Mission</h3>
            </div>
            <p>Our mission is to simplify the room-hunting process by connecting renters and landlords through a secure, transparent, and time-saving digital platform.</p>
          </div>
        </div>

        {/* Stats */}
        <div className="about-stats reveal" style={{ transitionDelay: '0.2s' }}>
          <p className="about-stats-label">By the Numbers</p>
          <div className="about-stats-grid">
            {stats.map((s, i) => (
              <div key={i} className="about-stat-item">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Review */}
        <div className="about-review reveal" style={{ transitionDelay: '0.3s' }}>
          <p className="about-review-label">User Rating</p>
          <div className="about-stars">
            {[1,2,3,4].map(i => (
              <span key={i} className="star filled">★</span>
            ))}
            <span className="star">★</span>
            <span className="about-rating-text">4.0 / 5</span>
          </div>
        </div>

        {/* Backed by */}
        <div className="about-backed reveal" style={{ transitionDelay: '0.4s' }}>
          <p className="about-backed-label">Backed By</p>
          <div className="about-backed-logos">
            <div className="backed-logo">
              <div className="backed-logo-icon iit">IIT</div>
              <div>
                <strong>Informatics Institute of Technology</strong>
                <small>Academic Partner</small>
              </div>
            </div>
            <div className="backed-logo">
              <div className="backed-logo-icon westminster">UW</div>
              <div>
                <strong>University of Westminster</strong>
                <small>Research Partner</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}