import React from "react";
import { Link } from "react-router-dom";
import './Register.css';

function Register(props){
    const {theme} = props;
    return(
        <div className="RegisterContainer">
            <h1 className="Registertitle">Register</h1>
            <form className="Registerform">
                <div className={theme?"Registerdetails darkRegister":"Registerdetails"}>
                    <label>Full Name</label>
                    <input type="email" placeholder="Enter your Name"/>
                </div>
                <div className={theme?"Registerdetails darkRegister":"Registerdetails"}>
                    <label>Email address</label>
                    <input type="email" placeholder="examle@mail.com"/>
                </div>
                <div className={theme?"Registerdetails darkRegister":"Registerdetails"}>
                    <label className="Registerdetails">Password</label>
                    <input type="password" placeholder="Password"/>
                </div>
                <div className="AgreeTC">
                        <input type="checkbox" id="AgreeTC"/>
                        <label>Agree Terms and Conditions</label>
                    </div>
                <label className="newhere">Already have an Account? <Link to='/login' className="register">Login</Link> Here</label>
                <button className="Register">Register</button>
            </form>
        </div>
    )
}

export default Register;