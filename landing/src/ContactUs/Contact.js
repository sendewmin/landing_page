
import "./Contact.css";
import MapImage from "./assets/Map-image.png";
import WhatsappIcon from "./assets/whatsapp-icon.png";
import FacebookIcon from "./assets/facebook-icon.png";
import InstaIcon from "./assets/Insta-icon.png";
import ContactIcon from "./assets/contact-us.png";
import EmailIcon from "./assets/email-us.png";

function ContactUs(){

    return(
        <div className="contact-whole-container">
            <div className="card-container">
                <div className="left-card-container">
                    <div className="title">
                        <h1>Reach Out To Us</h1>
                        <p>Our team is always here to help with platform support, account
                        issues, or general inquiries. We’re committed to making your
                        rental experience secure and smooth.</p>
                    </div>

                    <div className="map-image">
                        <img src={MapImage} alt="MapImageI192" className="card-map-image"/>
                    </div>

                    <div className="contact-icons">
                        <div className="icon-container">
                            <img src={ContactIcon}/>
                            <span>011-233-1010</span>
                            <span>076-133-9090</span>
                        </div>

                        <div className="icon-container">
                            <img src={EmailIcon}/>
                            <span>rumi@outlook.lk</span>
                            <span>rumi@gmail.com</span>
                        </div>
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
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" placeholder="Enter your name" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" placeholder="Enter your email" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" placeholder="Write your message"></textarea>
                            </div>

                            <div className="submit-btn-container">
                                <button type="submit" className="submit-button">Submit</button>
                            </div>

                        </form>  
                    </div>

                    
                </div>
            </div>
            
        </div>
    );
}

export default ContactUs;