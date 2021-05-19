import React, { Component } from 'react';
import Layout from "./components/layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import {Redirect, Route, Switch} from 'react-router-dom';
import Checkout from './containers/checkout/checkout';
import Orders from './containers/orders/orders';
import Auth from'./containers/Auth/Auth';
import Logout from'./containers/Auth/Logout/Logout';
import {connect} from 'react-redux';
import * as action from './store/action/auth';

class App extends Component {
  componentDidMount(){
    this.props.onAutoSignin();
  }
  render(){
    let route=(
      <Switch>
        <Route path='/signup' component={Auth} />
        <Route path='/' exact component={BurgerBuilder} />
        <Redirect to='/' />
      </Switch>
    )
    if(this.props.isAuth)
    {
      route=(
        <Switch><Route path='/checkout' component={Checkout} />
        <Route path='/orders' component={Orders}></Route>
        <Route path='/signout' component={Logout} />
          <Route path='/' exact component={BurgerBuilder} />
          </Switch>
      )
    }
    return (
      <div>
        <Layout>
          {route}
        </Layout>
      </div>
    );
  }
};
const mapStatetoProps=(state)=>{
  return{
      isAuth: state.auth.token!==null
  }
}
const mapDispatchtoProps=dispatch=>{
  return{
    onAutoSignin:()=>dispatch(action.chechAuthState())
  }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(App);
