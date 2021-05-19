import React, { Component } from 'react';
import Order from '../../components/Order/order';
// import axios from '../../axios-order';
import * as action from '../../store/action/order';
import {connect } from 'react-redux';
class Orders extends Component{
    state={
        orders:[],
        loading:true
    }
    componentDidMount(){
        this.props.onFetchOrder(this.props.token,this.props.userId)
    }
    render(){
        return(
            <div>
               {this.props.orders.map(order=>(
                    <Order 
                        key={order.key}
                        ingredients={order.ingredients}
                        
                    />
               ))}
            </div>
        )
    }
}
const mapStatetoProps=state=>{
    return{
        orders: state.order.orders,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId
    };
}
const mapDispatchToProps=(dispatch)=>{
    return{
        onFetchOrder: (token,userId)=>dispatch(action.fetchBurger(token,  userId))
    }
}
export default connect(mapStatetoProps,mapDispatchToProps)(Orders);