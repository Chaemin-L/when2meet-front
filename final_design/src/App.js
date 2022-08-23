import 'normalize.css';
import GlobalStyle from "styles/GlobalStyle";
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Initial from 'pages/Initial';
import Main from 'pages/Main';
import Login from 'pages/Login/Login';
import SignUp from 'pages/SignUp/SignUp';
import MyPromises from 'pages/MyPromises/MyPromises';


export default function App() {
  return (
    <div>
      <GlobalStyle />
          <Routes> 
            <Route path="/" element={<Initial />}>
              <Route path="" element={<Login />} />
              <Route path="signUp" element={<SignUp />} />
            </Route>
            <Route path="/main" element={<Main />}>
              <Route path="" element={<MyPromises />} />
              <Route path="profile" element={<div>내 정보가 보입니다.</div>}/>
              <Route path="intro" element={<div>서비스 정보가 보입니다.</div>}/>
            </Route>
        </Routes>
      </div>
    )
}