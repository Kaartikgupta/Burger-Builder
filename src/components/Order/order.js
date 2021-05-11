import React from 'react';
import "./order.css";

const order=(props)=>{
    const ingredients=[];
    for(let name in props.ingredients){
        ingredients.push({name:name,amount:props.ingredients[name]})
    }
    const ingoutput=ingredients.map(ig=>{
        return <span key={ig.name}>{ig.name} ({ig.amount})</span>
    })
    return(
        <div >
            <p style={{width: "100%",
            border: "1px solid black",
            boxShadow: "0 2px 3px black",
            padding: "10px",
            margin: "10px auto",
            boxSizing: "border-box"}}>Ingredeints:{ingoutput}</p>
            <p style={{width: "100%",
            border: "1px solid black",
            boxShadow: "0 2px 3px black",
            padding: "10px",
            margin: "10px auto",
            boxSizing: "border-box"}}>price<strong>USD fixed</strong></p>

        </div>
    )
}

export default order;