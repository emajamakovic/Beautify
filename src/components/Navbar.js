import React from "react"
import {BrowserRouter,
  Link
} from "react-router-dom";
import Cart from "./Cart";
import { BsHandbagFill } from "react-icons/bs";
import "../styles/Navbar.css";

export default function Header() {
  const [show, setShow]=React.useState(false);

  const showModal = () =>{
    setShow(true)
  }
  const closeModal = () =>{
    setShow(false)
  }

    return (
      <div className="nav">
        <nav  className='nav sticky'>
          <a className="company-name">Beautify</a>
          <ul className='nav-items'>
            <li> <Link to="/" className="nav-item">HOME</Link> </li>
            <li> <Link to="/products" className="nav-item">PRODUCTS</Link></li>
            <li><button className="nav-item cart-icon" onClick={showModal}><BsHandbagFill/></button></li>
          </ul>
        </nav>
        {show && <Cart closeModal={closeModal}/>}
        </div>
    )
  }