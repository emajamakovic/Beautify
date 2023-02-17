import React from "react"
import {BrowserRouter,
  Link
} from "react-router-dom";
import Cart from "./Cart";
import { BsHandbagFill } from "react-icons/bs";

export default function Header() {
  const [show, setShow]=React.useState(false);

  const showModal = () =>{
    setShow(true)
  }
  const closeModal = () =>{
    setShow(false)
  }

    return (
      <div>
        <nav  className='nav sticky'>
          <a className="company_name">Beautify</a>
          <ul className='nav_items'>
            <li> <Link to="/" className="nav_item">HOME</Link> </li>
            <li> <Link to="/products" className="nav_item">PRODUCTS</Link></li>
            <li> <Link to="/about" className="nav_item">ABOUT</Link></li>
            <li><button className="nav_item cart-icon" onClick={showModal}><BsHandbagFill/></button></li>
          </ul>
        </nav>
        {show && <Cart closeModal={closeModal}/>}
        </div>
    )
  }