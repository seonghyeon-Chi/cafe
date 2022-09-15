import React from 'react';
import "../App.css"


const Navbar = ({ isLogin, handleLogout }) => {

 
return (
  <div className="navbar">
    <span className="home_button"><nav><a href="/">HOME</a></nav></span>
    <span>
    {isLogin === false 
    ? <nav>
    <a href="/login">Login</a>
    </nav> 
    : <nav>
    <a href="/search">CartList</a>
    <a onClick={handleLogout}>Logout</a>
    </nav>}
    </span>
  </div>
  )
};

export default Navbar;