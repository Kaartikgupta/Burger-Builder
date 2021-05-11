import React from "react";
import "./NavigationItems.css"
import NavigationItem from "./NavigationItem/NavigationItem"
const navigatioitems=(props)=>(
    <ul className="NavigationItems">
        <NavigationItem link="/" exact>
            BurgerBuilder
        </NavigationItem>
        <NavigationItem link="/orders">Orders</NavigationItem>
    </ul>
);

export default navigatioitems;