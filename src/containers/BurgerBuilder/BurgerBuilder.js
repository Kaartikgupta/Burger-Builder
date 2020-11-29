import React, { Component } from "react";
import Aux from"../../hoc/Auxilary";
import Burger from"../../components/Burger/Burger";
import BurgerControls from "../../components/Burger/BurgerControls/BurgerControls";
const ingredient_price={
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.7
}
class BurgerBuilder extends Component{
    state={
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalprice:4
    }
    addIngredientHandler=(type)=>{
        const oldcount=this.state.ingredients[type];
        const updatedcount=oldcount+1;
        const updatedingredient={
            ...this.state.ingredients
        };
        updatedingredient[type]=updatedcount;
        const priceaddition=ingredient_price[type];
        const oldprice=this.state.totalprice;
        const newprice=oldprice+priceaddition;
        this.setState({totalprice:newprice,ingredients:updatedingredient});
    }
    
    removeIngredientHandler=(type)=>{
        
    }
    render(){
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
               <BurgerControls ingredientadded={this.addIngredientHandler}/>
            </Aux>
        );
    }
}
export default BurgerBuilder;