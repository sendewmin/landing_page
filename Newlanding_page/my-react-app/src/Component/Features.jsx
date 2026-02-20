import React, { useEffect, useRef } from 'react'
import './Features.css'

const features = [
  {
    icon: '🤖',
    title: 'AI Chatbot',
    color: '#4f35d2',
    items: [
      'Fast and detailed property information',
      'Personalized search recommendations',
      'Automatic rental date scheduling',
    ],
  },
  {
    icon: '⭐',
    title: 'Review System',
    color: '#00c6e0',
    items: [
      'Post current room reviews and comments',
      'See past reviews and room user history',
      'Check which is the best room for you',
    ],
  },
  {
    icon: '🗺️',
    title: 'Map View',
    color: '#f59e0b',
    items: [
      'See the exact location of rooms',
      'Interactive Google Maps integration',
      'Discover nearby rooms and alternatives',
    ],
  },
  {
    icon: '🏠',
    title: 'Room Sharing',
    color: '#10b981',
    items: [
      'Financial Benefits: Split costs effectively',
      'Lifestyle Benefits: Practical living solutions',
      'Social Benefits: Build community connections',
    ],
  },
  {
    icon: '🎯',
    title: '360° Virtual Tour',
    color: '#ec4899',
    items: [
      'Immersive Experience: Complete spatial understanding',
      'Room Details: See entire room layout and furniture',
      'Time & Cost Savings: Virtual pre-screening',
    ],
  },
  {
    icon: '💳',
    title: 'Online Booking',
    color: '#8b5cf6',
    items: [
      'Rentals: Complete online transactions',
      'Bank Transactions: Secure monthly payments',
      'Cash Payment: Flexible payment options',
    ],
  },
]

export default function Features() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.1 }
    )
    sectionRef.current.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="features" className="features" ref={sectionRef}>
      <div className="features-inner">
        <div className="features-head reveal">
          <p className="section-label">Platform Features</p>
          <h2 className="section-title">Everything You Need</h2>
          <p className="features-sub">Powerful tools for renters and landlords, all in one place.</p>
        </div>

        <div className="features-grid">
          {features.map((feat, i) => (
            <div
              key={i}
              className="feat-card reveal"
              style={{ transitionDelay: `${i * 0.1}s`, '--feat-color': feat.color }}
            >
              <div className="feat-icon">{feat.icon}</div>
              <div className="feat-accent" />
              <h3 className="feat-title">{feat.title}</h3>
              <ul className="feat-list">
                {feat.items.map((item, j) => (
                  <li key={j}>
                    <span className="feat-check">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}