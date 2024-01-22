import React from "react";
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faSkype, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import {faLocationDot,  faPhone}  from '@fortawesome/free-solid-svg-icons';
import { faEnvelope} from '@fortawesome/free-regular-svg-icons'


function Footer(props){
    const {theme} = props;
    return(
        <div className="FooterContainer">
            <div className={theme?"Footer1 darkfoot":"Footer1"}>
                <div className="websiteinfo">
                    <h1 className="footerheading">1 Stop</h1> 
                    <p>
                        Explore a diverse range of electronics, fashion, 
                        home decor, and accessories meticulously selected to 
                        cater to your needs. From cutting-edge technology to 
                        timeless classics, we ensure that every item meets our 
                        high standards of excellence.
                    </p>
                    <div className="websitesocial">
                        <FontAwesomeIcon icon={faFacebook} className="icon"/>
                        <FontAwesomeIcon icon={faTwitter} className="icon"/>
                        <FontAwesomeIcon icon={faSkype} className="icon"/>
                        <FontAwesomeIcon icon={faLinkedin} className="icon"/>
                    </div>
                </div>


                <div className="Companydetails">
                    <h1 className="footerheading">Company</h1>
                    <Link to='/about' className="aboutlink">About Us</Link>
                    <Link to='/products' className="aboutlink">Shop</Link>
                    <Link to='/' className="aboutlink">Blog</Link>
                    <Link to='/contact' className="aboutlink">Contact Us</Link>
                </div>


                <div className="contactdetails">
                    <h1 className="footerheading">Contact</h1>
                    <label><FontAwesomeIcon icon={faLocationDot} className="icon"/> <p>7 Green Valley Street, CrawfordValley, IN 4554</p></label>
                    <label><FontAwesomeIcon icon={faPhone} className="icon"/> <p>+1 808 111 202 331</p></label>
                    <label><FontAwesomeIcon icon={faEnvelope} className="icon"/> <p>1stopsupport@help.com</p></label>
                </div>

                <div className="newsletter">
                    <h1 className="footerheading">Newsletter</h1>
                    <label>You will be notified when new Products were added.</label>
                    <div className="mailsubscribe">
                        <form>
                            <input type="email" placeholder="Email Address*"/>
                            <button><FontAwesomeIcon icon={faEnvelope}/></button>
                        </form>                        
                    </div>
                </div>
            </div>
            <div className="Footer2">
                <label>© 2023 <Link></Link>. All Rights Reserved</label>
            </div>
        </div>
    )
}


export default Footer;