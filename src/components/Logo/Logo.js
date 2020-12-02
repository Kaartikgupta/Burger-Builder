import React from "react";
import Imglogo from "../../assets/images/burger-logo.png";
import "./Logo.css";
const logo=(props)=>(
    <div className="Logo" style={{height: props.height}}>
        <img src={Imglogo} alt="My burger" />
    </div>
);

export default logo;