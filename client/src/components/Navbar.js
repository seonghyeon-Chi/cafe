import React from 'react';
import "../App.css"


const Navbar = ({ isLogin, handleLogout }) => {

 
return (
  <div className="navbar">
    <span className="home_button"><nav><a href="/">MENU</a></nav></span>
    <span>
    {isLogin === false 
    ? <nav>
    <a href="/login">Login</a>
    </nav> 
    : <nav>
    <a onClick={handleLogout}>Logout</a>
    </nav>}
    </span>
  </div>
  )
};

export default Navbar;