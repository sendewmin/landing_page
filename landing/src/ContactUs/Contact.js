
import "./Contact.css";
import MapImage from "./assets/Map-image.png";
import WhatsappIcon from "./assets/whatsapp-icon.png";
import FacebookIcon from "./assets/facebook-icon.png";
import InstaIcon from "./assets/Insta-icon.png";
import ContactIcon from "./assets/contact-img.png";
import EmailIcon from "./assets/email-img.png";

function ContactUs(){
    //Form js functionalities
    const handleSubmit=(e)=>{
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;

        const subject= `Message from ${name}`;  // Subject of the email
        const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;  // Body of the email
        

        // // Opens the default email client
        // window.location.href = `mailto:mypersonal34432@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`; 
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=mypersonal34432@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(gmailUrl, "_blank");


    }


    return(
        <div id="contact-us" className="contact-whole-container">
            <div  className="card-container">
                <div className="left-card-container">
                    <div className="title">
                        <h1>Reach Out To Us</h1>
                        <p>Our team is always here to help with platform support, account
                        issues, or general inquiries. We’re committed to making your
                        rental experience secure and smooth.</p>
                    </div>

                    <div className="map-image">
                        {/* <img src={MapImage} alt="MapImageI192" className="card-map-image"/> */}
                         <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5067.662628274249!2d79.852057200656!3d6.894745045165493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25bdee494e9d3%3A0x629c2df0a6d82f99!2sIIT%20School%20Of%20Computing!5e0!3m2!1sen!2slk!4v1765260349607!5m2!1sen!2slk"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    <div className="contact-icons">
                        <div className="icon-container">
                            <img src={ContactIcon}/>
                            <span className="icon-title">Contact Us</span>
                            <span>011-233-1010</span>
                            <span>076-133-9090</span>
                        </div>

                        <div class="vertical-divider"></div>

                        <div className="icon-container">
                            <img src={EmailIcon}/>
                            <span className="icon-title">Email Us</span>
                            <span>rumi@outlook.lk</span>
                            <span>rumi@gmail.com</span>
                        </div>
                    </div>
                </div>

                <div className="right-card-container">


                    <div className="social-icons">
                        
                        <a href="https://wa.me/94788804005" target="_blank">
                            <img src={WhatsappIcon} alt="whatsapp"/>
                        </a>
                        <a href="https://web.facebook.com/iitsl/?_rdc=1&_rdr#" target="_blank">
                            <img src={FacebookIcon} alt="facebook"/>
                        </a>
                        <a href="https://www.instagram.com/iitlife/" target="_blank">
                            <img src={InstaIcon} alt="instagram"/>
                        </a>

                    </div>

                    <div className="form">
                        <form onSubmit={handleSubmit}>
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
                                <textarea id="message" name="message" placeholder="Write your message" rows={5}></textarea>
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