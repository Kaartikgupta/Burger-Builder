import React from "react";
import "./Toolbar.css"
import Logo from "../../Logo/Logo"
import NavigationItems from "../NavigationItems/NavigationItems"
import DrawerToogle from "../SideDrawer/DrawerToggle/DrawerToggle"
const toolbar=(props)=>(
    <header className="Toolbar">
        <div><DrawerToogle clicked={props.drawerToogleClicked}/></div>
        <Logo height="80%"/>
        <nav className="DesktopOnly"><NavigationItems isAuth={props.isAuth}/></nav>
        
    </header>
);

export default toolbar;