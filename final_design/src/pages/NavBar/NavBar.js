import React from 'react';
import Tablist from './Tablist';
import menuIcon from 'assets/img/hamburger.png';

export default function SignUp() {
    return (
        <div>
            <img src={menuIcon} alt="메뉴바 아이콘" width="104px"/>
            <Tablist />
        </div>
    )
};