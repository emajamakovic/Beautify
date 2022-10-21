import React from "react"

import {BrowserRouter,
  Link
} from "react-router-dom";

export default function Header() {

    return (
      <header>
        <nav className='nav'>
          <a className="company_name">Beautify</a>
          <ul className='nav_items'>
            <li> <Link to="/" className="nav_item">HOME</Link> </li>
            <li> <Link to="/products" className="nav_item">PRODUCTS</Link></li>
            <li> <Link to="/about" className="nav_item">ABOUT</Link></li>
          </ul>
        </nav>
      </header>
    )
  }