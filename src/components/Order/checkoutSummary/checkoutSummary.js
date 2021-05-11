import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import '../../UI/Button/Button.css';
import './checkoutSummary.css'
const checkoutSummary=(props)=>{
    return(
        <div Classname="checkoutSummary">
            <h2>Thanks!</h2>
            <div style={{width:'100%',margin:'auto'}}>
            <Burger ingredients={props.ingredients}/>
            </div>
            <Button className="Danger" clicked={props.checkoutCancel}>Cancel</Button>
            <Button className="Success" clicked={props.checkoutContinue}>Continue</Button>
        </div>
    );
}

export default checkoutSummary;