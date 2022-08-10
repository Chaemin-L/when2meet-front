import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

export default function NavItem(props) {
    return <NavLink to={props.to} className="nav-item">{ props.children }</NavLink>
};