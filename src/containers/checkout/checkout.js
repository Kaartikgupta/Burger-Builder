import React,{Component} from 'react';
import CheckoutSummary from '../../components/Order/checkoutSummary/checkoutSummary';
import {Route, Redirect} from 'react-router-dom';
import Contact from './contact/contact';
import {connect} from 'react-redux'

class Checkout extends Component{
   
    // componentWillMount(){
    //     const query=new URLSearchParams(this.props.location.search);
    //     const ingredients={};
    //     let price=0;
    //     for(let param of query.entries()){
    //         if(param[0]==='price')
    //         {price=param[1]}
    //         else{
    //         ingredients[param[0]]=+param[1];}
    //     }
    //         this.setState({ingredients:ingredients,price:price});
    // }
    checkoutCancelHandler=()=>{
        this.props.history.goBack();
    }
    checkoutContinueHandler=()=>{
        this.props.history.replace('/checkout/contact-us');
    }
    render(){
        let summary=<Redirect to='/' />
        if(this.props.ings){
            const purRedirect=(this.props.purchased)?<Redirect to='/' />:null;
            summary=(<div>
                 {purRedirect}
                <CheckoutSummary ingredients={this.props.ings} 
                checkoutCancel={this.checkoutCancelHandler} 
                checkoutContinue={this.checkoutContinueHandler} 
                />;
                <Route path={this.props.match.path+'/contact-us'} component={Contact}></Route>
            </div>
               
            );
            
        
              }
        return(
            <div>
               
                {summary}
                
            </div>
        );
    }
}
const mapStatetoProps=(state)=>{
    return{
        ings:state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    }
}


export default connect(mapStatetoProps)(Checkout);