import * as actionType from './actionType';
import axios from '../../axios-order';
export const addIngredient=(name)=>{
    return{
        type:actionType.ADD_INGREDIENTS,
        ingredientName: name
    }
}
export const removeIngredient=(name)=>{
    return{
        type:actionType.REMOVE_INGREDIENTS,
        ingredientName: name
    }
}
export const setIngredients=(ingredients)=>{
    return {
         type: actionType.SET_INGREDIENTS,
         ingredients:ingredients
    }
}
export const initIngredients=()=>{
    return dispatch=>{
       
            axios.get('https://burger-builder-rapp-default-rtdb.firebaseio.com/ingredients.json')
                .then(response=>{
                dispatch(setIngredients(response.data))
            }) 
        
    };
};  