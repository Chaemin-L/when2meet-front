import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from 'pages/NavBar/NavBar';

export default function Main() {
    return <div>
        <NavBar />
        <Outlet />
    </div>
}