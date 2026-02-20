import React, { useEffect, useRef } from 'react'
import './WhyUs.css'

const cards = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
      </svg>
    ),
    title: 'Smart Search & Discovery',
    desc: 'Filter by location, price, amenities, and more to find exactly what you need.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: 'Transparency & Trust Guaranteed',
    desc: 'All listings are verified. Real reviews, real landlords, zero surprises.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>
      </svg>
    ),
    title: 'Smooth Booking Experience',
    desc: 'Book online, pay securely, and get instant confirmation — no hassle.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
      </svg>
    ),
    title: 'With Intelligent Assistance',
    desc: 'AI chatbot ready to answer questions, suggest rooms, and schedule viewings.',
  },
]

export default function WhyUs() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.15 }
    )
    const cards = sectionRef.current.querySelectorAll('.whyus-card')
    cards.forEach(c => observer.observe(c))
    const title = sectionRef.current.querySelector('.whyus-head')
    if (title) observer.observe(title)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="whyus" ref={sectionRef}>
      <div className="whyus-inner">
        <div className="whyus-head reveal">
          <p className="section-label">Why Us?</p>
          <h2 className="section-title">Seamless Integration</h2>
          <p className="whyus-sub">Everything you need to find, book, and enjoy your perfect space.</p>
        </div>

        <div className="whyus-grid">
          {cards.map((card, i) => (
            <div
              key={i}
              className="whyus-card reveal"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className="whyus-icon">{card.icon}</div>
              <h3 className="whyus-card-title">{card.title}</h3>
              <p className="whyus-card-desc">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}