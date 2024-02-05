import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import ProductbyCategory from "./pages/ProductbyCategory";
import Order from "./pages/Order";
import Home from "./pages/Home";


import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    BrowserRouter
  } from "react-router-dom";
import GoToTop from "./components/GoToTop";

export default function App() {
    

    return(
        <>
    <Navbar/>
    <Routes>
          <Route path="/products" element={<Products/>} />
          <Route path="/:category" element={<ProductbyCategory/>} />
          <Route path="/products/:id" element={<SingleProduct/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/order"element={<Order/>} />
          </Routes>
          <GoToTop/>
   <Footer/>
    </>
    )
}