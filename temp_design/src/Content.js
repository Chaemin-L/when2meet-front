import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Introduction from './pages/Introduction';
import Create from './pages/Create';
import Schedule from './pages/Schedule';

export default function Content() {
    return (
        <Routes>
            <Route path="/" element={<Create />} />
            <Route path="/about" element={<Introduction />} />
            <Route path="/schedule" element={<Schedule />}></Route>
        </Routes>
    );
};