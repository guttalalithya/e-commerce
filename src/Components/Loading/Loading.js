import React from "react";
import './Loading.css';


function Loading(props){
    const {loading} = props;
    return(
        <>
            {
                loading?
                <div className="LoadingContainer">
                    <div className="Loader">
                        <label className="loader1"></label>
                        <label className="loader2"></label>
                        <label className="loader3"></label>
                        <label className="loader4"></label>
                        <label className="loader5"></label>
                        <img src={require('./2 (1).png')} alt="sorry!"/>
                    </div>        
                </div>
                :
                ''
            }
        </>
    )
}

export default Loading;