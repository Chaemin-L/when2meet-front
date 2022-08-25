import React from 'react';
import { menu } from 'testDB';
import { StyledNavLink } from './StyledNavLink';

export default function TabList() {
    return (
        <div>
            {menu.map((item, index) => <StyledNavLink key={index} to={item.url}>{item.text}</StyledNavLink>)}
        </div>
    )
};