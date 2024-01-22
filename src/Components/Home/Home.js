import React from "react";
import './Home.css';
import { faTruck, faCreditCard, faHeadset } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


function Home(){
    return(
        <div>
            <div className="banner">
                
                <div className="bannerinner">
                    <label className="offerlabel">25% on all Products</label>
                    <h1 className="bannertitle">Explore a range of premium electronic items & Accessories.
                    </h1>
                    <button className="shopNow"><Link to='/products' className="shopnowlink">Shop Now <label>{'>'}</label></Link></button>
                </div>
                <img src={require('./electronics.png')} className="bannerimg"/>
            </div>
            <div className="shippingbanner"> 
                <div className="items">
                    <FontAwesomeIcon icon={faTruck} className="icon"/>
                    <label>Free Shiping</label>
                </div>
                <div className="items">
                    <FontAwesomeIcon icon={faCreditCard} className="icon"/>
                    <label>Safe Payement</label>
                </div>                
                <div className="items">
                    <FontAwesomeIcon icon={faHeadset} className="icon"/>
                    <label>24/7 Support</label>
                </div>
            </div>
        </div>
    )
}



export default Home;