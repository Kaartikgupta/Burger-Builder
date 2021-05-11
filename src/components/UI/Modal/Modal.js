// import { checkPropTypes } from "prop-types";
import React from "react";
import Aux from "../../../hoc/Auxilary"
import Backdrop from "../Backdrop/Backdrop"
import "./Modal.css";
const modal=(props)=>{
    return(<Aux>
        <Backdrop  show={props.show} clicked={props.modalClosed}/>
    <div className="Modal" style={{transform:props.show?'translateY(0)':'translateY(-100vh)'}}>
        {props.children}
    </div>
    </Aux>);
    
    }

export default modal;