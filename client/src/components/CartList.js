import React from 'react'
import '../App.css'

const CartList = ({ cart, handleOrder, handlePayment, handleDeleteMenu }) => {

  return (
    <div id='item-list-container'>
      <div id='item-list-body'>
        <div id='item-list-title'>장바구니</div>
        <div id='shopping-cart-container'>
          {!cart.length ? (
            <div id='item-list-text'>
              선택된 메뉴가 없습니다
            </div>
          ) : (
            <div id='cart-item-list'>
              {cart.map((item, idx) => {
                return (
                  <ul className=''>
                    <li>{'메뉴명:'+item.name+' '}{'수량:'+item.count+' '}{'금액:'+item.total+' '}<button onClick={() => handleDeleteMenu(item.name)}>&times;</button></li>              
                  </ul>
                )
              })}
              <div>{'총 금액: '+cart.map(item => item.total).reduce((pre,cur) => pre+cur)}</div>
            </div>
          )}
        </div>
          <button className="order_button" onClick={() => handleOrder(cart)}>주문</button>
          <button className="payment_button" onClick={() => handlePayment()}>결제</button>
      </div>
    </div>
  )
}
export default CartList;