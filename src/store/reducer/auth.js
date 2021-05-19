import * as actionType from '../action/actionType';

const initialState={
    token: null,
    userId: null,
    error: null,
    loading: false
};

const reducer=(state=initialState, action)=>{
    switch(action.type){
        case actionType.AUTH_START:
            return {
                ...state,
                error: null,
                laoding: true
            }
            case actionType.AUTH_SUCCESS:
                return {
                    ...state,
                    token: action.idToken,
                    userId:action.userId,
                    error: null,
                    laoding: false
                }
                case actionType.AUTH_FAIL:
                return {
                    ...state,
                   
                    error: action.error,
                    laoding: false
                }
                case actionType.AUTH_LOGOUT:
                    return{
                        ...state,
                        token: null,
                        userId: null
                    }
        default :
            return state;
    }
}

export default reducer;