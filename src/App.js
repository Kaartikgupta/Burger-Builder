import React, { Component } from 'react';
import Layout from "./components/layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import {Route, Switch} from 'react-router-dom';
import Checkout from './containers/checkout/checkout';
import Orders from './containers/orders/orders';

class App extends Component {
  render(){
    return (
      <div>
        <Layout>
          <Switch>
            <Route path='/orders' component={Orders} />
        <Route path='/checkout' component={Checkout} />
          <Route path='/' exact component={BurgerBuilder} />
          {/* <Route path='/checkout' component={Checkout} /> */}
          </Switch>
        </Layout>
      </div>
    );
  }
};

export default App;
