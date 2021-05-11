import React, { Component } from "react";
import Aux from"../../hoc/Auxilary";
import Burger from"../../components/Burger/Burger";
import BurgerControls from "../../components/Burger/BurgerControls/BurgerControls";
import Modal from "../../components/UI/Modal/Modal"
import OrderSummary from "../../components/OrderSummary/OrderSummary"
import axios from '../../axios-order';
import Spinner from "../../components/UI/Spinner/Spinner"
const ingredient_price={
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.7
}
class BurgerBuilder extends Component{
    state={
        ingredients:null,
        purchaseable:false,
        totalprice:4,
        purchasing:false,
        loading:false
    }
    componentDidMount(){
    
    
        axios.get('https://burger-builder-rapp-default-rtdb.firebaseio.com/ingredients.json')
        .then(response=>{
            this.setState({ingredients:response.data})
        })
    }
    purchaseHandler=()=>{
        this.setState({purchasing:true})
    }
    updatePurchaseState=(ingredients)=>{
        
        const sum=Object.keys(ingredients)
        .map(igkey=>{
            return ingredients[igkey]
        })
        .reduce((sum,el)=>{
            return sum+el;
        },0);
        this.setState({purchaseable:sum>0})
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
        this.updatePurchaseState(updatedingredient);
    }
    
    removeIngredientHandler=(type)=>{
        const oldcount=this.state.ingredients[type];
        if(oldcount<=0)
        {
            return;
        }
        const updatedcount=oldcount-1;
        const updatedingredient={
            ...this.state.ingredients
        };
        updatedingredient[type]=updatedcount;
        const pricedec=ingredient_price[type];
        const oldprice=this.state.totalprice;
        const newprice=oldprice-pricedec;
        this.setState({totalprice:newprice,ingredients:updatedingredient}); 
        this.updatePurchaseState(updatedingredient);
    }
    purchaseCancelHandler=()=>{
        this.setState({purchasing:false})
    }
    purchaseContinueHandler=()=>{
        //alert('you continue!!')
        
        const query=[];
        for(let i in this.state.ingredients){
            query.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]))
        }
        query.push('price='+this.state.totalprice)
        const querystring=query.join('&');
        this.props.history.push({
            pathname:'/checkout',
            search:'?'+querystring
        });
    }
    render(){
        let Ordersummary=null;
         const disabledInfo={
            ...this.state.ingredients
         };
        for(let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key]<=0
        }
        let burger=<Spinner />
        if(this.state.ingredients){
         burger=(
             <Aux>   
                <Burger ingredients={this.state.ingredients}/>
                <BurgerControls ordered={this.purchaseHandler} disabled={disabledInfo} ingredientadded={this.addIngredientHandler} ingredientremove={this.removeIngredientHandler} price={this.state.totalprice} purchaseable={this.state.purchaseable}/>
            </Aux>
            );
            Ordersummary=<OrderSummary price={this.state.totalprice }ingredients={this.state.ingredients} purchaseCancel={this.purchaseCancelHandler} purchaseContinue={this.purchaseContinueHandler}/>
        
        }
        if(this.state.loading){
            Ordersummary=<Spinner/>
        }
        return(
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {Ordersummary}
                    </Modal>
                {burger}
                 </Aux>
        );
    }
}
export default BurgerBuilder;