import React, { Component } from "react";
import Aux from"../../hoc/Auxilary";
import Burger from"../../components/Burger/Burger";
import BurgerControls from "../../components/Burger/BurgerControls/BurgerControls";
import Modal from "../../components/UI/Modal/Modal"
import OrderSummary from "../../components/OrderSummary/OrderSummary"
import axios from '../../axios-order';
import Spinner from "../../components/UI/Spinner/Spinner";
import {connect } from 'react-redux';
import * as actionType from '../../store/action/burgerBuilder';
import * as action from '../../store/action/order';


class BurgerBuilder extends Component{
    state={
        
        // purchaseable:false,// these two states will be going to redux
        // totalprice:4,
        purchasing:false,
        // loading:false
    }
    componentDidMount(){
    
        this.props.onInitIngredients()
        // axios.get('https://burger-builder-rapp-default-rtdb.firebaseio.com/ingredients.json')
        // .then(response=>{
        //     this.setState({ingredients:response.data})
        // })
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
        return sum>0
    }
    
    purchaseCancelHandler=()=>{
        this.setState({purchasing:false})
    }
    purchaseContinueHandler=()=>{
        // //alert('you continue!!')
        
        // const query=[];
        // for(let i in this.state.ingredients){
        //     query.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]))
        // }
        // query.push('price='+this.state.totalprice)
        // const querystring=query.join('&');
        this.props.onPurchaseInit();
        this.props.history.push('/checkout');
            // pathname:'/checkout',
            // search:'?'+querystring
       
    }
    render(){
        let Ordersummary=null;
         const disabledInfo={
            ...this.props.ings
         };
        for(let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key]<=0
        }
        let burger=<Spinner />
        if(this.props.ings){
         burger=(
             <Aux>   
                <Burger ingredients={this.props.ings}/>
                <BurgerControls ordered={this.purchaseHandler} disabled={disabledInfo} ingredientadded={this.props.onIngredientAdded} ingredientremove={this.props.onIngredientRemoved} price={this.props.price} purchaseable={this.updatePurchaseState(this.props.ings)}/>
            </Aux>
            );
            Ordersummary=<OrderSummary price={this.props.price }ingredients={this.props.ings} purchaseCancel={this.purchaseCancelHandler} purchaseContinue={this.purchaseContinueHandler}/>
        
        }
        // if(this.state.loading){
        //     Ordersummary=<Spinner/>
        // }
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

const mapStatetoProps=state=>{
    return{
        ings:state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalprice
    };
}

const mapDispatchToProps=dispatch=>{
    return{
        onIngredientAdded:(ingName)=>dispatch(actionType.addIngredient(ingName)),
        onIngredientRemoved:(ingName)=>dispatch(actionType.removeIngredient(ingName)),
        onInitIngredients: ()=>dispatch(actionType.initIngredients()),
        onPurchaseInit: ()=>dispatch(action.purchaseInit())
    };
}
export default connect(mapStatetoProps,mapDispatchToProps)(BurgerBuilder);            