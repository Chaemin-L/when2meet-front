import React from 'react';
import './Nav.scss';

export default function NavBar(props) {
    return <div className="nav-bar">{ props.children }</div>
};