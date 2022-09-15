import React, { useState } from 'react'
import ItemModal from '../components/ItemModal'
import CartList from '../components/CartList'

import '../App.css'
import axios from 'axios'

const Main = ({ items, cart, setCart, getCookie, isOrder }) => {
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
    setCart([...cart, data])
  }

  const handleOrder = (data) => {
    let totalPrice = data.map(item => item.total).reduce((pre, cur) => pre + cur)
    let userId = getCookie('userId')
    axios.post('http://localhost:4000/order', {
      data: data,
      totalPrice: totalPrice,
      userId: userId
    })
    setCart([]);
  }

  const handlePayment = (data) => {
    // let totalPrice = data.map(item => item.total).reduce((pre, cur) => pre + cur)
    // console.log(totalPrice)
    let userId = getCookie('userId')
    axios.post('http://localhost:4000/payment', {
      data: data,
      // totalPrice: totalPrice,
      userId: userId
    })
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
        <img onClick={openModal} className="poster" src={item.image}></img>
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
        isOrder={isOrder}
        handleOrder={handleOrder}
        handlePayment={handlePayment}
      />
      </div>
    </div>
    )
  }
export default Main;