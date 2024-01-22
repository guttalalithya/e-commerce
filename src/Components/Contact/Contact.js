import React from "react";
import './Contact.css';

function Contact(props){
    const {theme,settheme} = props;
    return(
        <div className="ContactContainer">
            <h1 className="Contacttitle">Contact Us</h1>
            <hr/>
            <form className="contactform">
                <div className={theme?"darkinput input":"input"}>
                    <label>Name</label>
                    <input type="text" placeholder="Enter your Name"/>
                </div>
                <div className={theme?"darkinput input":"input"}>
                    <label>Email</label>
                    <input type="email" placeholder="Enter your Email"/>
                </div>
                <div className={theme?"darkinput input":"input"}>
                    <label>Message</label>
                    <textarea placeholder="Enter your message"/>
                </div>
                <button className="contactsend">Send</button>
            </form>
        </div>
    )
}

export default Contact;