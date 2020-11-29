import React from "react";
import "./BurgerControl.css";

const BurgerControl=(props)=>{
    return(
    <div className="BuildControl">
        <div className="Label">{props.label}</div>
        <button className="Less" onClick={props.removed}>Less</button>
        <button className="More" onClick={props.added}>More</button>
    </div>)
}
export default BurgerControl;