import * as ReactDOM from "react-dom/client";
import * as React from "react";
//import App from "./App";
//import "./styles.css";
//import App from "./App_singleline";
//import "./styles_singleline.css";
import App from "./App_multipleline";
import "./styles_multipleline.css";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

