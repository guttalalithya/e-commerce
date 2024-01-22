import React from "react";
import { Link } from "react-router-dom";
import './Login.css'

function Login(props){
    const {theme} = props;
    return(
        <div className="LoginContainer">
            <div>
                <h1 className="Logintitle">Login</h1>
                <form className="loginform">
                    <div className={theme?"logindetails darklogin":"logindetails"}>
                        <label>Email address</label>
                        <input type="email" placeholder="examle@mail.com"/>
                    </div>
                    <div className={theme?"logindetails darklogin":"logindetails"}>
                        <label className="logindetails">Password</label>
                        <input type="password" placeholder="Password"/>
                    </div>
                    <div className="forgetremember">
                        <div className="remember">
                            <input type="checkbox" id="remember"/>
                            <label>Remember me</label>
                        </div>
                        <Link className={theme?"forgetpass darkforget":"forgetpass"}>Forgot your password?</Link>
                    </div>
                    <label className="newhere">New Here? <Link to='/register' className="register">Register</Link> Here</label>
                    <button className="login">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;