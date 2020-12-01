import React from "react";
import "./NavigationItems.css"
import NavigationItem from "./NavigationItem/NavigationItem"
const navigatioitems=(props)=>(
    <ul className="NavigationItems">
        <NavigationItem link="/" active>
            BurgerBuilder
        </NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
);

export default navigatioitems;