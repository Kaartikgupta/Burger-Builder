import React from "react";
import "./BurgerControls.css";
import BuildControl from "./BurgerControl/BurgerControl"
const controls=[
    {label:'Salad',type:'salad'},
    {label:'Cheese',type:'cheese'},
    {label:'Meat',type:'meat'},
    {label:'Bacon',type:'bacon'},
];
const BurgerControls=(props)=>(
   
        <div className="BuildControls">
            <p>Current Price:<strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(ctrl=>(
                 <BuildControl key={ctrl.label} label={ctrl.label} added={()=>props.ingredientadded(ctrl.type)} removed={()=>props.ingredientremove(ctrl.type)}  />
                 
            ))};
            <button className="OrderButton" disabled={!props.purchaseable} onClick={props.ordered}>
                     Order Now
                 </button>
        </div>
    );
export default BurgerControls;