import "./App.css";

function App() {
  return (
    <div className="page">

      
      <div className="logo-row">
        <div className="logo-box">
          <img src="rumi.ico" alt="logo" className="logo-icon" />
        </div>
      </div>

     
      <div className="main">
        <h1 className="main-title">
          Every room.<br />
          One platform.<br />
          Across Sri Lanka.
        </h1>

        <p className="main-description">
          Looking for a place to stay? Discover trusted rooms, shared spaces, and
          verified listings anywhere in Sri Lanka. Book, pay, and move in with just a
          few clicks
        </p>

        <button className="find-room-btn">
          Find room
          <span className="arrow-circle">
            <img src="/right-arrow.png" alt="arrow" className="arrow-icon" />
          </span>
        </button>

        <img src="/renting.jpg" alt="Renting" className="renting-img" />

      </div>

      
      <div className="why-section">
        <div className="why-label">why us?</div>
        <div className="why-title">Seamless integration</div>

        <div className="features">
          <div className="feature-box">
            <img src="ic--outline-search.svg" alt="Smooth Booking" className="feature-icon" />
            <p className="feature-text">Smart Search & Discovery</p>
          </div>

          <div className="feature-box">
            <img src="ic--outline-handshake.svg" alt="Smooth Booking" className="feature-icon" />
            <p className="feature-text">Transparency & Trust Guaranteed</p>
          </div>

          <div className="feature-box">
            <img src="ic--sharp-tag-faces.svg" alt="Smooth Booking" className="feature-icon" />
            <p className="feature-text">Smooth Booking Experience</p>
          </div>

          <div className="feature-box">
            <img src="ic--outline-headset-mic.svg" alt="Smooth Booking" className="feature-icon" />
            <p className="feature-text">With Intelligent Assistance</p>          
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
