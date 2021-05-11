import React from "react";
import BurgerIngr from "./BurgerIngredient/BurgerIngredient";
import "./Burger.css"
import {withRouter} from 'react-router-dom';
const Burger=(props)=>{
    const transformedIngredients=Object.keys(props.ingredients)//Object.keys will convert the object to array like[bacon,salad etc]
    .map(igkey=>{//on this array it will apply map method on which each array element i.e. igkey
            return[...Array(props.ingredients[igkey])]//it will first spread and then create a empty array with igkey ,number of empty location
            .map((_,i)=>{// here _ represents the argument which does't matter and i represents the index of the element
                    return <BurgerIngr key={igkey+i} type={igkey} />// key will be unique
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