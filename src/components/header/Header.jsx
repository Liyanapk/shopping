import React, { useState } from "react";
import "./Header.css"
import { LoginModal } from "../login/Login";
import { SighnUpModal } from "../sighnup/SighnUp";
import { BsPerson } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";
import { PiChartBarHorizontalLight } from "react-icons/pi";
import { useNavigate, Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';



const Header = () => {

  const navigate = useNavigate()
  const [isLogin, setLogin] = useState(false)
  const [isSighnUp, setSihnup] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header>

      <div className="header">

        <div className="logo">
          <img
            src="https://optimal-demos.myshopify.com/cdn/shop/files/dm2-logo_140x@2x.png?v=1632039937"
            alt="logo"
          ></img>
        </div>

        <div className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <FaBars />
        </div>

        <nav className={`navitems ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <ul className="navlist">
            <li className="list">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>HOME</Link>
            </li>
            {/* <li className="list">
              <Link to="/product" onClick={() => setIsMobileMenuOpen(false)}>SHOP</Link>
            </li> */}
            <li className="list">
              <Link to="/product" onClick={() => setIsMobileMenuOpen(false)}>PRODUCT</Link>
            </li>
            <li className="list mobile-cart" onClick={() => { navigate('/cart'); setIsMobileMenuOpen(false); }}>
              <BsCart3 className="icon" /> Cart
            </li>
            <li className="list mobile-auth">
              <button className="login-btn" onClick={() => { setLogin(true); setIsMobileMenuOpen(false); }}>
                Login
              </button>
            </li>
            <li className="list mobile-auth">
              <button className="signup-btn" onClick={() => { setSihnup(true); setIsMobileMenuOpen(false); }}>Sign Up</button>
            </li>
          </ul>
        </nav>






        <div className="auth-buttons">
                  <div className="icons">
          {/* <div>
            <BsPerson className="icon" />
          </div> */}
          <div onClick={() => navigate('/cart')}>
            <BsCart3 className="icon" />
          </div>
          {/* <div>
            <PiChartBarHorizontalLight className="icon" />
          </div> */}
        </div>
          <button className="login-btn" onClick={() => setLogin(true)}>
            Login
          </button>
          <button className="signup-btn" onClick={() => setSihnup(true)}>Sign Up</button>
        </div>
      </div>
      {isLogin && <LoginModal onClose={() => setLogin(false)} />}
      {isSighnUp && <SighnUpModal onClose={() => setSihnup(false)} />}
    </header>
  );


}


export default Header