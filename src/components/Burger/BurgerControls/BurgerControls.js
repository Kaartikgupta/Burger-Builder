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
            {controls.map(ctrl=>(
                 <BuildControl key={ctrl.label} label={ctrl.label} added={()=>props.ingredientadded(ctrl.type)} />
            ))};
        </div>
    );
export default BurgerControls;