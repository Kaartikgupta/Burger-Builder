import React from 'react';
import { Component } from 'react';
import Input from '../../components/Input/input';
import Button from '../../components/UI/Button/Button';
import * as action from '../../store/action/auth';
import {connect} from 'react-redux'
import Spinner from '../../components/UI/Spinner/Spinner';
import {Redirect} from 'react-router-dom'
class Auth extends Component{
    state={
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Email'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Your password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        },
        isSignup: true
    }
    checkValidity=(value, rules)=> {
        let isValid = true;
        if (!rules) {
            return true;
        }
        
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
    
        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }
    
        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }
    
        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }
    
        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }
    
        return isValid;
    }
    inputChangedHandler = (event, controlName) => {
        const updatedOrderForm = {
            ...this.state.controls,
            [controlName]:{
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched:true
            }
        };
        
        this.setState({controls: updatedOrderForm});
    }
    submitHandler=(event)=>{
        event.preventDefault();
        this.props.onAuth(this.state.controls.email.value,this.state.controls.password.value, this.state.isSignup);
    }
    switchAuthModeHandler=()=>{
        this.setState(prevState=>{
            return {isSignup:!prevState.isSignup}
        })
    }
    render(){
    const formElementsArray = [];
    for (let key in this.state.controls) {
        formElementsArray.push({
            id: key,
            config: this.state.controls[key]
        });
    }
    let form =formElementsArray.map(formElement=>(
        <Input 
                    key={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    invalid={!formElement.config.valid}
                    shouldValidate={formElement.config.validation}
                    touched={formElement.config.touched}
                    changed={(event) => this.inputChangedHandler(event, formElement.id)} />
    ))
    if(this.props.loading){
        form=<Spinner />
    }
    let errormessage=null;
    if(this.props.error){
        errormessage=(
            <p>Error signing</p>
        )
    }
    let authre=null;
    if(this.props.isAuth)
    {
        authre=<Redirect to='/' />
    }
        return(
            <div>
                {authre}
                {errormessage}
                <form onSubmit={this.submitHandler}>
                    {form}
                    <Button>Submit</Button>
                </form>
                <Button clicked={this.switchAuthModeHandler}>Switch to {this.state.isSignup?'signIn' :'signUp'}</Button>
            </div>

        )
    }
}
const mapStatetoProps=state=>{
    return{
       loading: state.auth.loading,
       error: state.auth.error,
       isAuth: state.auth.token !==null
    }
}
const mapDispatchtoProps=dispatch=>{
    return{
        onAuth:(email,password, isSignup)=>dispatch(action.auth(email,password, isSignup))
    }
}
export default connect(mapStatetoProps,mapDispatchtoProps)(Auth);