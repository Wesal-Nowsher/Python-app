import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter,Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from './store/configureStore';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Assets/main-styles.css';
ReactDOM.render(
    <Provider store={store}>
       <BrowserRouter>
        <App/>  
        </BrowserRouter>
    </Provider>
    , document.getElementById("root")
);
