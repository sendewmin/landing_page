import React, { useEffect, useRef } from 'react'
import './hero.css'

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let w, h

    const dots = Array.from({ length: 80 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 2 + 0.5,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.4 + 0.05,
    }))

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect()
      w = canvas.width = rect.width
      h = canvas.height = rect.height
    }

    function draw() {
      ctx.clearRect(0, 0, w, h)
      dots.forEach(d => {
        const x = d.x * w
        const y = d.y * h
        ctx.beginPath()
        ctx.arc(x, y, d.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(91,155,213,${d.opacity})`
        ctx.fill()
        d.x += d.dx / w
        d.y += d.dy / h
        if (d.x < 0 || d.x > 1) d.dx *= -1
        if (d.y < 0 || d.y > 1) d.dy *= -1
      })
      animId = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <section id="home" className="hero">
      <canvas ref={canvasRef} className="hero-canvas" />

      {/* Decorative shapes */}
      <div className="hero-shape hero-shape-1" />
      <div className="hero-shape hero-shape-2" />

      <div className="hero-inner">
        <div className="hero-text">
          <div className="hero-badge">🇱🇰 Sri Lanka's Room Platform</div>
          <h1 className="hero-heading">
            Every room.<br />
            One platform.<br />
            <span className="hero-highlight">Across Sri Lanka.</span>
          </h1>
          <p className="hero-desc">
            Looking for a place to stay? Discover trusted rooms, shared spaces,
            and verified listings anywhere in Sri Lanka. Book, pay, and move in with just a few clicks.
          </p>
          <div className="hero-actions">
            <a href="#features" className="hero-btn-primary">
              Find Room
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="#about" className="hero-btn-ghost">Learn More</a>
          </div>
          <div className="hero-stats">
            <div className="stat"><strong>300+</strong><span>Renters</span></div>
            <div className="stat-divider" />
            <div className="stat"><strong>30+</strong><span>Landlords</span></div>
            <div className="stat-divider" />
            <div className="stat"><strong>4.0★</strong><span>Rating</span></div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1584738766473-61c083514bf4?w=800&auto=format&fit=crop"
              alt="Colombo skyline"
              className="hero-img"
            />
            <div className="hero-img-badge">
              <span>🏠</span>
              <div>
                <strong>Verified Listings</strong>
                <small>100% Trusted</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll</span>
      </div>
    </section>
  )
}