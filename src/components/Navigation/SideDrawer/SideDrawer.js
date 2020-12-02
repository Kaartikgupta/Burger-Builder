import React from "react";
import Logo from "../../Logo/Logo"
import NavigationItems from "../NavigationItems/NavigationItems"
import "./SideDrawer.css"
import Backdrop from "../../UI/Backdrop/Backdrop"
import Aux from "../../../hoc/Auxilary"

const sidedrawer=(props)=>{
    // let attachedClasses=[{classes.SideDrawer},{classes.Close}];
    // if(props.open){
    //     attachedClasses=["SideDrawer","Open"];
    // }
    return(
        <Aux>
        <Backdrop show={props.open} clicked={props.closed}/>
        <div className={props.open?"SideDrawer open":"SideDrawer close"}>
            <Logo height="11%"/>
            <nav>
                <NavigationItems />
            </nav>
        </div>
        </Aux>
    )
}
    

export default sidedrawer;