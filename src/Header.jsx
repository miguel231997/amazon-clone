import React from "react"
import './Header.css'
import { Link } from "react-router-dom"
import { useStateValue } from "./StateProvider.js";

function Header() {

  const [{basket}, dispatch] = useStateValue();
    return (
        <div className="header">
          <Link to = '/' style={{textDecoration: 'none'}}>
            <div className="header-logo">
              <div>STORE ICON GOES HERE</div>
              <h2 className="header-logoTitle">eshop</h2>
            </div>
          </Link>
        
      <div className="header-search">
      <input type="text" className='header-searchInput' />
      </div>
      <div className="header-nav">
        <Link to = '/login' style = {{ textDecoration: "none" }} >
            <div className="nav-item">
              <span className="nav-itemLineOne">Hello Guest</span>
              <span className="nav-itemLineTwo">Sign In</span>
            </div>
        </Link>   
          <div className="nav-item">
            <span className="nav-itemLineOne">Your</span>
            <span className="nav-itemLineTwo">Shop</span>
          </div>

          <Link to  = '/checkout' style={{textDecoration: 'none'}}>
            <div className="nav-itemBasket">
              <span className="nav-itemLineOne">Basket</span>
              <span className="nav-itemLineTwo">{basket.length}</span>
            </div>
          </Link>
          
      </div>
        </div>
    )
}

export default Header
