import React, { Component } from 'react';
import Order from '../../components/Order/order';
import axios from '../../axios-order';

class Orders extends Component{
    state={
        orders:[],
        loading:true
    }
    componentDidMount(){
        
        axios.get('/orders.json')
        .then((res)=>{
            const fetchorder=[];
            for(let key in res.data){
                fetchorder.push({...res.data[key], id:key})
            }
            this.setState({loading:false,orders:fetchorder})
            
        })
        .catch(err=>{
            this.setState({loading:false})
        })
        
    }
    render(){
        return(
            <div>
               {this.state.orders.map(order=>(
                    <Order 
                        key={order.key}
                        ingredients={order.ingredients}
                        
                    />
               ))}
            </div>
        )
    }
}

export default Orders;