import React from 'react';
import { NavBar, NavItem } from './components/index';

export default function NavigationBar() {
    return (
        <NavBar>
            <NavItem to="/about" >About when2meet</NavItem>
            <NavItem to="/">Plan a new Event</NavItem>
        </NavBar>
    )
}