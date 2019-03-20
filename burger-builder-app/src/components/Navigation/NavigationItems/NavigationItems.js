import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from "./NavigationItem/NavigationItem";
const navigationItems = () => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" exact>Burger Bulider</NavigationItem>
            <NavigationItem link="/orders" >Orders</NavigationItem>
            {/* <NavigationItem></NavigationItem> */}
        </ul>
    );
};

export default navigationItems;