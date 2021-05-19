import * as actionType from '../action/actionType';
const initialState={
    ingredients:null,
    totalprice:4
}
const ingredient_price={
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.7
}
const reducer =(state=initialState,action)=>{
    switch(action.type){
        case actionType.ADD_INGREDIENTS:
            return{
                ...state,//this will spres the state to update state immutably but wont create a deep copy i.e. ingredient object
                ingredients:{
                    ...state.ingredients,//this will do the work of creating the deep copy
                    [action.ingredientName]: state.ingredients[action.ingredientName]+1
                },
                totalprice:state.totalprice+ingredient_price[action.ingredientName]

            };
        case actionType.REMOVE_INGREDIENTS:
            return{
                ...state,//this will spres the state to update state immutably but wont create a deep copy i.e. ingredient object
                ingredients:{
                    ...state.ingredients,//this will do the work of creating the deep copy
                    [action.ingredientName]: state.ingredients[action.ingredientName]-1
                },
                totalprice:state.totalprice-ingredient_price[action.ingredientName]
            };
            case actionType.SET_INGREDIENTS:
                return{
                    ...state,
                    ingredients:action.ingredients,
                    totalprice:4
                };
        default:
            return state;
    }
    

};

export default reducer;