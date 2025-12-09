import React from "react";
import "./Feature.css";

const Feature = () => {
  return (
    <div className="detailed-features-section">
      <h2 className="detailed-features-title">Features</h2>
      
      <div className="detailed-features-grid">
        {/* Feature 1: AI Chatbot */}
        <div className="detailed-feature-card">
          <div className="detailed-feature-card-title">AI Chatbot</div>
          <div className="detailed-feature-card-content">
            <ul className="detailed-feature-list">
              <li>Fast and detailed property information</li>
              <li>Personalized search recommendations</li>
              <li>Automatic rental date scheduling</li>
            </ul>
          </div>
        </div>

        {/* Feature 2: Review System */}
        <div className="detailed-feature-card">
          <div className="detailed-feature-card-title">Review System</div>
          <div className="detailed-feature-card-content">
            <ul className="detailed-feature-list">
              <li>Post current room reviews and comments</li>
              <li>See past reviews and room user history</li>
              <li>Check which is the best room for you</li>
            </ul>
          </div>
        </div>

        {/* Feature 3: Map View */}
        <div className="detailed-feature-card">
          <div className="detailed-feature-card-title">Map View</div>
          <div className="detailed-feature-card-content">
            <ul className="detailed-feature-list">
              <li>See the exact location of rooms</li>
              <li>Interactive Google Maps integration</li>
              <li>Discover nearby rooms and alternatives</li>
            </ul>
          </div>
        </div>

        {/* Feature 4: Room Sharing */}
        <div className="detailed-feature-card">
          <div className="detailed-feature-card-title">Room Sharing</div>
          <div className="detailed-feature-card-content">
            <ul className="detailed-feature-list">
              <li><span className="feature-bold">Financial Benefits:</span> Split costs effectively</li>
              <li><span className="feature-bold">Lifestyle Benefits:</span> Practical living solutions</li>
              <li><span className="feature-bold">Social Benefits:</span> Build community connections</li>
            </ul>
          </div>
        </div>

        {/* Feature 5: 360° View */}
        <div className="detailed-feature-card">
          <div className="detailed-feature-card-title">360° Virtual Tour</div>
          <div className="detailed-feature-card-content">
            <ul className="detailed-feature-list">
              <li><span className="feature-bold">Immersive Experience:</span> Complete spatial understanding</li>
              <li><span className="feature-bold">Room Details:</span> See entire room layout and furniture</li>
              <li><span className="feature-bold">Time & Cost Savings:</span> Virtual pre-screening</li>
              <li><span className="feature-bold">Trust:</span> Increased transparency and confidence</li>
            </ul>
          </div>
        </div>

        {/* Feature 6: Online Booking */}
        <div className="detailed-feature-card">
          <div className="detailed-feature-card-title">Online Booking</div>
          <div className="detailed-feature-card-content">
            <ul className="detailed-feature-list">
              <li><span className="feature-bold">Rentals:</span> Complete online transactions</li>
              <li><span className="feature-bold">Bank Transactions:</span> Secure monthly payments</li>
              <li><span className="feature-bold">Cash Payment:</span> Flexible payment options</li>
              <li><span className="feature-bold">Notifications:</span> Automated rental date reminders</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;