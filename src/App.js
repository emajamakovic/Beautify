import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Home";
import Products from "./Products";
import SingleContact from "./components/SingleContact";
import ContactbyCategory from "./components/ContactbyCategory";
import About from "./components/About";


import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    BrowserRouter
  } from "react-router-dom";
import GoToTop from "./components/GoToTop";
import { Container } from "@mui/system";

export default function App() {
    

    return(
        <>
    <Header/>
    <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/products" element={<Products/>} />
          <Route path="/:category" element={<ContactbyCategory/>} />
          <Route path="/products/:id" element={<SingleContact/>} />
          <Route path="/" element={<Home/>} />
          </Routes>
          <GoToTop/>
   <Footer/>
    </>
    )
}