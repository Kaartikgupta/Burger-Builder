import React from "react";
import BurgerIngr from "./BurgerIngredient/BurgerIngredient";
import "./Burger.css"
const Burger=(props)=>{
    const transformedIngredients=Object.keys(props.ingredients)
    .map(igkey=>{
            return[...Array(props.ingredients[igkey])]
            .map((_,i)=>{
                    return <BurgerIngr key={igkey+i} type={igkey} />
                });
        })
        .reduce((arr, el)=>{
            return arr.concat(el)
        },[]
        )
return(
    <div className="Burger">
        <BurgerIngr type="bread-top" />
        {transformedIngredients}
        <BurgerIngr type="bread-bottom" />
    </div>
)
};

export default Burger;