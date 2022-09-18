import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import '../App.css'
import axios from 'axios';

axios.defaults.withCredentials = true;

export default function Login ({ setIsLogin }) {

  const history = useHistory();
  const [userinfo, setUserinfo] = useState({
    phone_number: ''
  });
  const [errormessage, setErrormessage] = useState('')
  const handleInputValue = (key) => (e) => {
    setUserinfo({ ...userinfo, [key]: e.target.value });
  }
  const handleClickEvent = () => {
    setErrormessage('')
    if (!userinfo.phone_number) {
      setErrormessage('번호를 입력해야 합니다')
    } else {
      axios.post('https://localhost:4000/login',{
        phone_number: userinfo.phone_number
      })
      .then(res => {
        sessionStorage.setItem('ide', res.data.accessToken);
        setIsLogin(true)
        history.push("/")
      })
    }
  }

  return (

    <div className='login'>
      <body>
        <h1 className="title">Login</h1>
        <div>
          <input type="phone_number" onChange={handleInputValue('phone_number')} placeholder="휴대폰번호"></input>
        </div>
        <div>
          <button onClick={handleClickEvent}>login</button>
        </div>
        <div className="errormessage">{errormessage}</div>
      </body>
    </div>
  )
}