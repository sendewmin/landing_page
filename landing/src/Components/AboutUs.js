import React, { useEffect, useRef } from "react";
import iit_logo from '../images/iit_logo.png';
import westminister_logo from '../images/westminster_logo.png';
import './aboutus.css';

// Scroll Line Component
function ScrollLine() {
  const lineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        lineRef.current.classList.add("grow");
      }
    }, { threshold: 0.2 });

    observer.observe(lineRef.current);
  }, []);

  return <div ref={lineRef} className="scroll-line"></div>;
}

// Count Up Component
function CountUp({ end, duration = 1500 }) {
  const ref = useRef(null);

  useEffect(() => {
    let observer;
    let started = false;

    function startCounting() {
      if (started) return;
      started = true;
      let start = 0;
      const increment = end / (duration / 30); // update every 30ms
      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(counter);
        }
        if (ref.current) ref.current.innerText = Math.floor(start);
      }, 30);
    }

    if (ref.current) {
      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) startCounting();
      }, { threshold: 0.3 });

      observer.observe(ref.current);
    }

    return () => observer && observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>0</span>;
}

export default function AboutUs() {
  return (
    <div className="about-container">
      <br />
      <div className="about_topic">
        <br /><br />
        <h2>About Us</h2><br />
        <h1>We’re giving everyone the power to  <br/>find their perfect space.</h1>
        <br /><br />
      </div>
      <br /><br />
      <ScrollLine />

      <div className="vision">
        <br />
        <h3>Vision</h3>
        <p>To become the most trusted and efficient room rental platform, 
          helping people find their ideal living spaces easily, safely, 
          and without wasting time.
        </p><br /><br />
      </div>

      <ScrollLine />

      <div className="mission">
        <br />
        <h3>Mission</h3>
        <p>Our mission is to simplify the room-hunting process by connecting 
          renters and landlords through a secure, transparent, and time-saving 
          digital platform.
        </p><br /><br />
      </div>

      <ScrollLine />

      <div className="backed_by">
        <br />
        <div className="backed_by_container">
          <div className="backed_box">
            <div className="backed_topic">
              <h3>Backed By</h3>
            </div>
          </div>

          <div className="backed_box">
            <img src={iit_logo} alt="iit university logo" /><br />
            <img src={westminister_logo} alt="westminister university logo" />
          </div>
        </div>
        <br /><br />
      </div>

      <ScrollLine />

      {/* By the numbers with CountUp */}
      <div className="num_data">
        <br />
        <div className="num_data_container">
          <div className="num_box">
            <div className="num_topic">
              <h3>By the<br />numbers</h3>
            </div>
          </div>

          <div className="num_box">
            <div className="num_subbox">
              <h4><CountUp end={6} /></h4>
              <span>Team member</span>
            </div>
            <div className="num_subbox">
              <h4><CountUp end={2025} /></h4>
              <span>Year Founded</span>
            </div>
            <div className="num_subbox">
              <h4><CountUp end={300} />+</h4>
              <span>User (Renter)</span>
            </div>
            <div className="num_subbox">
              <h4><CountUp end={30} />+</h4>
              <span>User (Landlord)</span>
            </div>
          </div>
        </div>
        <br /><br />
      </div>

      <ScrollLine />

      {/* Review section with stars */}
      <div className="review">
        <br />
        <div className="review_container">
          <div className="review_box">
            <div className="review_topic">
              <h3>Review</h3>
            </div>
          </div>

          <div className="review_box">
            <div className="star">
              <span className="star1">★</span>
              <span className="star2">★</span>
              <span className="star3">★</span>
              <span className="star4">★</span>
              <span className="star5">★</span>
            </div>
          </div>
        </div>
        <br /><br />
      </div>

      <ScrollLine />
      <br />

    </div>
  );
}
