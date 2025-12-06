
import "./Contact.css";
import MapImage from "./contact-us-images/Map-image.png";
import WhatsappIcon from "./contact-us-images/whatsapp-icon.png";
import FacebookIcon from "./contact-us-images/facebook-icon.png";
import InstaIcon from "./contact-us-images/Insta-icon.png";

function ContactUs(){

    return(
        <div className="contact-whole-container">
            <div className="left-card-container">
                <h1>Reach Out To Us</h1>
                <p>Our team is always here to help with platform support, account
                issues, or general inquiries. We’re committed to making your
                rental experience secure and smooth.</p>

                <div className="map-image">
                    <img src={MapImage} alt="MapImageI192" className="card-map-image"/>
                </div>

                <div className="contact-icons">

                </div>
            </div>

            <div className="right-card-container">


                <div className="social-icons">
                    
                    <a href="#">
                        <img src={WhatsappIcon} alt="whatsapp"/>
                    </a>
                    <a href="#">
                        <img src={FacebookIcon} alt="facebook"/>
                    </a>
                    <a href="#">
                        <img src={InstaIcon} alt="instagram"/>
                    </a>

                </div>

                <div className="form">

                </div>

                <div className="submit-button">

                </div>
            </div>
            
        </div>
    );
}

export default ContactUs;