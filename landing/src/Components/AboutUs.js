import React from "react"
import iit_logo from '../images/iit_logo.png'
import westminister_logo from '../images/westminster_logo.png'
import './aboutus.css'

export default function AboutUs(){
    return(
        <div className="about">
            <div className="about_topic">
                <br/>
                <h2>About Us</h2><br/>
                <h1>We’re giving everyone the power to find their perfect space.</h1>
                <br/>
                <hr/>
            </div>

            <div className="vison">
            <br/>
            <h3>Vision</h3>
            <p>To become the most trusted and efficient room rental platform, 
                helping people find their ideal living spaces easily, safely, 
                and without wasting time.
            </p><br/><br/>
            <hr/>
            </div>

            <div className="mission">
            <br/>
            <h3>Misson</h3>
            <p>Our mission is to simplify the room-hunting process by connecting 
                renters and landlords through a secure, transparent, and time-saving 
                digital platform.
            </p><br/><br/>
            <hr/>
            </div>

            <div className="backed_by">
                <br/>
                    <div className="backed_by_container">
                        <div className="backed_box">
                            <div className="backed_topic">
                                <h3>Backed By</h3>
                            </div>
                        </div>

                        <div className="backed_box">
                            <img src={iit_logo} art="iit university logo"/><br/>
                            <img src={westminister_logo} art ="westminister university logo"/>
                        </div>
                    </div>
                <br/><br/>
                <hr/>
            </div>

            <div className="num_data">
                <br/>
                    <div className="num_data_container">
                        <div className="num_box">
                            <div className="num_topic">
                                <h3>By the<br/>numbers</h3>
                            </div>
                        </div>

                        <div className="num_box">
                            <div className="num_subbox">
                                <h4>6</h4>
                                <span>Team member</span>
                            </div>
                            <div className="num_subbox" >
                                <h4>2025</h4>
                                <span>Year Founded</span>
                            </div>
                            <div className="num_subbox">
                                <h4>300+</h4>
                                <span>User ( Renter )</span>
                            </div>
                            <div className="num_subbox">
                                <h4>30+</h4>
                                <span>User ( Landloard )</span>
                            </div>
                        </div>
                    </div>
                <br/><br/>
                <hr/>
            </div>

            <div className="review">
                <br/>
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
                <br/><br/>
                <hr/><br/>
            </div>

        </div>
        
    )
}