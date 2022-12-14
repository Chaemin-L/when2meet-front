import 'normalize.css';
import GlobalStyle from "styles/GlobalStyle";
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Account from 'pages/Account';
import Main from 'pages/Main';
import Login from 'pages/Login/Login';
import SignUp from 'pages/Login/SignUp';
import MyPromises from 'pages/MyPromises/MyPromises';
import ForgetPassword from 'pages/Login/ForgetPassword';
import ResetPassword from 'pages/Login/ResetPassword';


export default function App() {
  return (
    <div>
      <GlobalStyle />
          <Routes> 
            <Route path="/" element={<Account />}>
              <Route path="" element={<Login />} />
              <Route path="signUp" element={<SignUp />} />
              <Route path="forget" element={<ForgetPassword />} />
              <Route path="reset" element={<ResetPassword />} />
            </Route>
            <Route path="/main" element={<Main />}>
              <Route path="" element={<MyPromises />} />
              <Route path="profile" element={<div>내 정보가 보입니다.</div>}/>
              <Route path="about" element={<div>서비스 정보가 보입니다.</div>}/>
            </Route>
        </Routes>
      </div>
    )
}