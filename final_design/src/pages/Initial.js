import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Initial() {
    return <div>
        우리 언제 만나?
        <div>
            <h2>우리 약속을 위해</h2>
            <Outlet />
        </div>
    </div>
}