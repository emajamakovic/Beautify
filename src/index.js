import React from 'react';
import ReactDOM from 'react-dom';
import styles from './style.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { CartProvider } from "react-use-cart";


ReactDOM.render(
  <BrowserRouter>
  <CartProvider>
  <App/>
  </CartProvider>
  </BrowserRouter>
, document.getElementById('root'))

