import * as actionType from '../action/actionType';
const initialState={
    orders:[],
    loading: false,
    purchased: false
}

const reducer =(state=initialState,action)=>{
    switch(action.type){
        case actionType.PURCHASE_BURGER_SUCCESS:
            const newOrder={
                ...action.orderData,
                id: action.orderId
            }
            return{
                ...state,
                loading: false,
                purchased: true,
                orders: state.orders.concat(newOrder)
            }
        case actionType.PURCHASE_BURGER_FAIL:
            return{
                ...state,
                loading: true,
            }
            case actionType.PURCHASE_BURGER_START:
            return{
                ...state,
                loading: true,
            }
            case actionType.PURCHASE_INIT:
            return{
                ...state,
                purchased: false,
            }
            case actionType.FETCH_BURGER_SUCCESS:
                return{
                    ...state,
                    orders:action.orders,
                    loading: false
                }
                case actionType.FETCH_BURGER_FAIL:
                    return{
                        ...state,
                        loading: false
                    }
                    case actionType.FETCH_BURGER_START:
                        return{
                            ...state,
                            loading: true
                        }
                        
        default:
            return state;
    }
}
export default reducer;

