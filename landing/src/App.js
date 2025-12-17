
import logo from './rumisvg.svg';
import './App.css';
import AboutUs from './Components/AboutUs';


      
import "./App.css";
import Footer from "./Footer.js"
import Contact from "./ContactUs/Contact.js";  // import the Contact.js file from the ContactUs folder.
import Feature from "./Feature.js";

function App() {
  return (

    <div className="page">
      {/* Navbar - Sticky and wider container */}
      <div className="navbar-container">
        <div className="navbar"> 
          
          <div className="logo">
            <img 
              src="./rumi.png"
              alt="RUMI Logo"
              className="logo-icon" // Added class for image styling
            />
          </div>

          <ul className="nav-links">
            <li>
              <a href="#" className="nav-button active">
                Home
              </a>
            </li>
            <li>
              <a href="#aboutus">About</a>
            </li>
            <li>
              <a href="#Feature">Features</a>
            </li>
            <li>
              <a href="#contact-us">Contact Us</a>
            </li>
          </ul>

          <button className="book-now-btn">Book Now</button>
        </div>
      </div>

      {/* Main Content (Rest of the original code) */}
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
            <img src="./right-arrow.png" alt="arrow" className="arrow-icon" />
          </span>
        </button>

        <img src="./renting.jpg" alt="Renting" className="renting-img" />
      </div>

      <div className="why-section">
        <div className="why-label">why us?</div>
        <div className="why-title">Seamless integration</div>

        <div className="features">
          <div className="feature-box">
            <img src="ic--outline-search.svg" alt="Smart Search" className="feature-icon" />
            <p className="feature-text">Smart Search & Discovery</p>
          </div>

          <div className="feature-box">
            <img src="ic--outline-handshake.svg" alt="Transparency" className="feature-icon" />
            <p className="feature-text">Transparency & Trust Guaranteed</p>
          </div>

          <div className="feature-box">
            <img src="ic--sharp-tag-faces.svg" alt="Smooth Booking" className="feature-icon" />
            <p className="feature-text">Smooth Booking Experience</p>
          </div>

          <div className="feature-box">
            <img src="ic--outline-headset-mic.svg" alt="Intelligent Assistance" className="feature-icon" />
            <p className="feature-text">With Intelligent Assistance</p>
          </div>
        </div>
      </div>
      <AboutUs/>
      <Feature/> 
      <Contact/>
      <Footer/>
    </div>
      


    
  );
}

export default App;