import React from 'react';
import "../App.css"

const ItemModal = ({ open, close, itemdata, handleSubmit, quantityMinus, quantityPlus, count }) => {

  return (
    <div className={open ? 'openModal modal' : 'modal'}>
    {open ? (
      <section>
        <header className="title">
          {itemdata.name}
          <button className="close" onClick={close}>
            &times;
          </button>
        </header>
        <main>
        <span className="movie_content">
        <div className="movie_info2"> 
            <img className="poster" src={itemdata.image}></img>
            <div className="movie_info">{itemdata.name}</div>
            <div className="movie_info">{itemdata.price}</div>
            <div className="movie_info">
              <span>
              <button
                onClick={() => quantityMinus()}
                className="quantityMinusButton"
              >
                -
              </button>
              </span>
              <span className="calculator">{count}</span>
              <span>
              <button
                onClick={() => quantityPlus()}
                className="quantityPlusButton"
              >
                +
              </button>
              </span>
              </div>
        </div>
        </span>         
          <div>
            <div className="modal_input_container">
            </div>
            <span>{'total: '+ count * itemdata.price}</span>
            <div>
              <button className="" onClick={() => handleSubmit({name: itemdata.name, image: itemdata.image, count: count, total: count * itemdata.price})}>장바구니에 담기</button>
            </div>
          </div>
        </main>
      </section>
    ) : null}
  </div>
  
  )
}

export default ItemModal;
