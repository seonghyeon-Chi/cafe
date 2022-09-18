import React, { useState } from 'react'
import ItemModal from '../components/ItemModal'
import CartList from '../components/CartList'

import '../App.css'
import axios from 'axios'

const Main = ({ items, cart, setCart, getCookie }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [itemdata, setItemdata] = useState({
    id: '',
    name: '',
    price: '',
    image: ''
  });
  const [count, setCount] = useState(1)

  const handleItemData = (data) => {
    setItemdata({
      id: data.id,
      name: data.name,
      price: data.price,
      image: data.image
    })
  }

  const handleSubmit = (data) => {
    let userId = getCookie('userId')
    if (userId) {
      setCart([...cart, data])
    } else {
      alert('로그인이 필요합니다')
    }
  }

  const handleDeleteMenu = (data) => {
    setCart(cart.filter(el => {
      if (el.name !== data) {
        return el
      }
    }))
  }

  const handleOrder = (data) => {
    let totalPrice = data.map(item => item.total).reduce((pre, cur) => pre + cur)
    let userId = getCookie('userId')
    let token = getCookie('token')
    if (userId && data.length !== 0) {
      axios.post('https://localhost:4000/order', {
        data: data,
        totalPrice: totalPrice,
        userId: userId,
      }, {
        headers: {authorization: token}
      })
      setCart([]);
      alert('주문이 완료되었습니다')
    } else if (!userId) {
      alert('로그인이 필요합니다')
    } 
  }

  const handlePayment = () => {
    let userId = getCookie('userId')
    let token = getCookie('token')
    if (userId) {
      axios.post('https://localhost:4000/payment', {
        userId: userId,
      },{
        headers: {authorization: token}
      }).then(res => {
        alert('결제가 완료되었습니다')
      })
    } else {
      alert('로그인이 필요합니다')
    }
  }

  const quantityMinus = () => {
    if ( count > 1 ) {
      setCount(count-1)
    }
  };

  const quantityPlus = () => {
      setCount(count+1)
  };

  const openModal = () => {
    setCount(1)
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <div className="main_side">
      <span>
      <div className="poster_wrapper">
        {items.map((item) =>
        <span onClick = {() => handleItemData(item)}>
        <span><img onClick={openModal} className="poster" src={`/img/${item.image}`}></img></span>
        </span>)}  
      </div>
      <ItemModal
        itemdata={itemdata} 
        open={modalOpen}
        close={closeModal}
        itemdata={itemdata}
        handleSubmit={handleSubmit}
        quantityMinus={quantityMinus}
        quantityPlus={quantityPlus}
        count={count}
        setCount={setCount}
      />
      <div>
      </div>
      </span>
      <CartList 
        width={200}
        cart={cart}
        handleOrder={handleOrder}
        handlePayment={handlePayment}
        handleDeleteMenu={handleDeleteMenu}
      />
      </div>
    </div>
    )
  }
export default Main;