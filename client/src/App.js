import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Main from './pages/Main'
import axios from 'axios'

export default function App() {
  const [item, setItem] = useState([])
  const [isLogin, setIsLogin] = useState(Boolean(document.cookie.match('(^|;) ?' + 'userId' + '=([^;]*)(;|$)')));
  const [cart, setCart] = useState([])
  const history = useHistory();

  function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  const deleteCookie = (key) => {
    document.cookie = key + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;';
  }

  const handleLogout = () => {
    axios.get('http://localhost:4000/logout')
    deleteCookie('userId')
    setIsLogin(false)
    history.push('/');
  };
  
  const loadItem = async () => {
    await axios.get('http://localhost:4000/iteminfo')
    .then(data => setItem(data.data.iteminfo))
  }

  useEffect(() => {
    loadItem()
  }, [])

  return (
    <div>
      <Navbar 
        setIsLogin={setIsLogin}
        isLogin={isLogin}
        handleLogout={handleLogout}
      />
      <Switch>
        <Route exact path="/">
          <Main
            items={item}
            cart={cart}
            setCart={setCart}
            getCookie={getCookie}
          ></Main>
        </Route>
        <Route path="/login">
          <Login
            isLogin={isLogin}
            setIsLogin={setIsLogin}
          >
          </Login>
        </Route>
      </Switch>
      </div>
  );
}

