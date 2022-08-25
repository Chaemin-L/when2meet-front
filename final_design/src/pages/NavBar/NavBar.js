import React from 'react';
import Tablist from './Tablist';
import menuIcon from 'assets/img/hamburger2.png';
import { StyledNavBar } from './StyledNavBar';

export default function NavBar() {
    return (
        <StyledNavBar>
            <img src={menuIcon} alt="메뉴바 아이콘" width="90vw"/>
            <Tablist />
        </StyledNavBar>
    )
};