import React , {Component} from 'react';
import * as action from '../../../store/action/auth';
import {connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
class Logout extends Component{
    componentDidMount(){
        this.props.nLogout();
    }
    render(){
        return <Redirect to='/' />
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        nLogout: ()=>dispatch(action.logout())
    }
}
export default connect(null,mapDispatchToProps)(Logout)