import React from "react";
import "./NavigationItems.css"
import NavigationItem from "./NavigationItem/NavigationItem"
const navigatioitems=(props)=>(
    <ul className="NavigationItems">
        <NavigationItem link="/" exact>
            BurgerBuilder
        </NavigationItem>
        {props.isAuth ?<NavigationItem link="/orders">Orders</NavigationItem>:null}
        {!props.isAuth ?<NavigationItem link="/signup">Signup</NavigationItem> : <NavigationItem link="/signout">Signout</NavigationItem>}
    </ul>
);

export default navigatioitems;