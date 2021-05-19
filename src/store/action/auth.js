import * as actionType from './actionType';
import axios from 'axios';
export const authStart=()=>{
    return{
        type: actionType.AUTH_START
    }
}

export const authSuccess=(token, userId)=>{
    return{
        type: actionType.AUTH_SUCCESS,
        idToken: token,
        userId: userId 
    }
}
 export const authFail=(error)=>{
     return{
         type: actionType.AUTH_FAIL,
         error: error
     }
 }
 export const logout=()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('expiryDate')
    localStorage.removeItem('userId')
     return{
         type: actionType.AUTH_LOGOUT
     }
 }
 export const checkAuthTimeout=(expiryTime)=>{
    return dispatch=>{
        setTimeout(()=>{
            dispatch(logout())
        },expiryTime*1000)
    }
}
 export const auth=(email,password, isSignup)=>{
     return dispatch=>{
         dispatch(authStart());
         const authData={
             email:email,
             password: password,
             returnSecureToken: true
         } 
         let url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDfMc34Zo7AWOebMG3ntjTgaDRdaQCGwPw';
         if(!isSignup)
         {
             url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDfMc34Zo7AWOebMG3ntjTgaDRdaQCGwPw'
         }
         axios.post(url, authData)
         .then(response=>{
             console.log(response);
             const expiryDate=new Date(new Date().getTime()+ response.data.expiresIn*1000)
             localStorage.setItem('token', response.data.idToken);
             localStorage.setItem('expiryDate', expiryDate);
             localStorage.setItem('userId', response.data.localId);
             dispatch(authSuccess(response.data.idToken, response.data.localId));
             dispatch(checkAuthTimeout(response.data.expiresIn))

         })
         .catch(err=>{
             console.log(err);
             dispatch(authFail(err));
         }

         )
     }
 }

 export const chechAuthState=()=>{
     return dispatch=>{
         const token=localStorage.getItem('token');
         if(!token){
             dispatch(logout())
         }
         else{
             const expiryDate=new Date(localStorage.getItem('expiryDate'));
            if(expiryDate > new Date())
            {
                const userId=localStorage.getItem('userId');
                dispatch(authSuccess(token,userId));
                dispatch(checkAuthTimeout((expiryDate.getTime()-new Date().getTime())/1000))
            }
            else{
                dispatch(logout());
            }
             
         }
     }
 }