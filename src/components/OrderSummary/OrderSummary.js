import React from "react";
import Aux from "../../hoc/Auxilary";
import Button from "../UI/Button/Button";
import "../UI/Button/Button.css"
const ordersummary=(props)=>{
    const ingredeintSummary=Object.keys(props.ingredients)
    .map(igkey=>{
    return <li key={igkey}>{igkey}:{props.ingredients[igkey]}</li>
    })
    return(
        <Aux>
            <h3>Your Order</h3>
            <p>
                Following order
            </p>
            <ul>
                {ingredeintSummary}
            </ul>
            <p>Checkout?

            </p>
    <p><strong>Total Price:{props.price.toFixed(2)}</strong></p>
            <Button className="Danger" clicked={props.purchaseCancel}>Cancel</Button>
            <Button className="Success" clicked={props.purchaseContinue}>Continue</Button>
        </Aux>
    )
}

export default ordersummary;