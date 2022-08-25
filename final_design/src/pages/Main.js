import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from 'pages/NavBar/NavBar';
import { StyledMain } from './StyledMain';

export default function Main() {
    return <StyledMain>
        <NavBar />
        <Outlet />
    </StyledMain>
}