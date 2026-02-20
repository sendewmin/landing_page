import React, { useEffect, useRef, useState } from 'react'
import './ExploreGate.css'

export default function ExploreGate({ onExplore }) {
  const canvasRef = useRef(null)
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let w, h, particles

    function resize() {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }

    function createParticles() {
      particles = Array.from({ length: 120 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 2.5 + 0.5,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.6 + 0.1,
        color: Math.random() > 0.5 ? '79,53,210' : '0,198,224',
      }))
    }

    function draw() {
      ctx.clearRect(0, 0, w, h)

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(79,53,210,${0.08 * (1 - dist / 120)})`
            ctx.lineWidth = 1
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      particles.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.color},${p.opacity})`
        ctx.fill()
        p.x += p.dx
        p.y += p.dy
        if (p.x < 0 || p.x > w) p.dx *= -1
        if (p.y < 0 || p.y > h) p.dy *= -1
      })

      animId = requestAnimationFrame(draw)
    }

    resize()
    createParticles()
    draw()
    window.addEventListener('resize', () => { resize(); createParticles() })

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  const handleClick = () => {
    setClicked(true)
    setTimeout(onExplore, 800)
  }

  return (
    <div className={`gate ${clicked ? 'gate-exit' : ''}`}>
      <canvas ref={canvasRef} className="gate-canvas" />

      {/* Floating blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      <div className="gate-content">
        <div className="gate-logo">
          <span className="logo-r">R</span>UMI
        </div>
        <p className="gate-tagline">Every room. One platform. Across Sri Lanka.</p>

        <button
          className={`explore-btn ${clicked ? 'explore-clicked' : ''}`}
          onClick={handleClick}
        >
          <span className="explore-text">Explore</span>
          <span className="explore-dot" />
        </button>

        <p className="gate-hint">Click to enter</p>
      </div>
    </div>
  )
}