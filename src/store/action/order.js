import * as actionType from './actionType';
import axios from '../../axios-order';
import { useImperativeHandle } from 'react';

export const purchaseBurgerSuccess=(id, orderData)=>{
    return{
        type:actionType.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData:orderData
    }
}
export const purchaseBurgerFail=(error)=>{
    return{
        type:actionType.PURCHASE_BURGER_FAIL,
        error: error
    }
}
export const purchaseBurgerStart=()=>{
    return {
        type:actionType.PURCHASE_BURGER_START
    }
}
export const purchaseBurger=(orderData,token)=>{
    return dispatch=>{
        dispatch(purchaseBurgerStart());
        axios.post( '/orders.json?auth='+token, orderData )
        .then( response => {
           dispatch(purchaseBurgerSuccess(response.data.name, orderData))
        } )
        .catch( error => {
            dispatch(purchaseBurgerFail(error))
        } );
    }
}

export const purchaseInit=()=>{
    return{
        type: actionType.PURCHASE_INIT
    }
}


export const fetchBurgerSuccess=(orders)=>{
    return{
        type:actionType.FETCH_BURGER_SUCCESS,
        orders:orders,
      
    }
}
export const fetchBurgerFail=(error)=>{
    return{
        type:actionType.FETCH_BURGER_FAIL,
        error: error
    }
}
export const fetchBurgerStart=()=>{
    return {
        type:actionType.FETCH_BURGER_START
    }
}
export const fetchBurger=(token,userId)=>{
    return dispatch=>{
       const wuryParams='?auth='+token+'&orderBy="userId"&equalTo="'+userId+'"';
        axios.get('/orders.json' + wuryParams)
        .then((res)=>{
            const fetchorder=[];
            for(let key in res.data){
                fetchorder.push({...res.data[key], id:key})
            }
            dispatch(fetchBurgerSuccess(fetchorder))
        })
            // this.setState({loading:false,orders:fetchorder}) 
            .catch( error => {
                dispatch(fetchBurgerFail(error))
            } );
        
        
    }
}