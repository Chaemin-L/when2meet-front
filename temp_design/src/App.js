import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavBar, NavItem } from './components/index';
import {Introduction, Create, Schedule} from './pages/index';


function App() {
  return (
    <>
      <NavBar>
            <NavItem to="/about" >About when2meet</NavItem>
            <NavItem to="/">Plan a new Event</NavItem>
      </NavBar>
      <Routes>
            <Route path="/" element={<Create />} />
            <Route path="/about" element={<Introduction />} />
            <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </>
  );
};

export default App;
