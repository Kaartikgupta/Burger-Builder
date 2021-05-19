import React, { Component } from "react";
import Aux from "../../hoc/Auxilary";
import "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer"
import {connect } from 'react-redux'
class Layout extends Component{
    state={
        showSideDrawer:true
    }
    SideDrawerClosedHandler=()=>{
        this.setState({showSideDrawer:false})
    }
    drawerTogglerClickedHandler=()=>{
        this.setState((prevsate)=>{
            return {showSideDrawer:!prevsate.showSideDrawer}
        })
        
    }
    render(){
        return(
        <Aux>
            <Toolbar isAuth={this.props.isAuth} drawerToogleClicked={this.drawerTogglerClickedHandler} />
            <SideDrawer closed={this.SideDrawerClosedHandler} open={this.state.showSideDrawer} />
            <main className="Content">{this.props.children}</main>
        </Aux>
        )
    }
}
const mapStatetoProps=state=>{
    return{
        isAuth: state.auth.token !==null
    }
}
export default connect(mapStatetoProps)(Layout);