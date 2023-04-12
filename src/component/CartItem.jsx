import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {useCart} from '../CartCotext'
import pImg from '../assets/cart/image-xx59-headphones.jpg'

function CartList() {
    const {cartItems, totalPrice, onRemove, toggleCartItemQuanitity} = useCart();
    return(
        cartItems.length > 0?
            <>
                {
                    cartItems.map((item,key)=>(
                        <div className='CICart boxRow w_100 gap_3' key={key}>
                            <img src={item.img} alt={item.name} className='CICImg' />
                            <div className='boxColumn gap_1'>
                                {
                                    item.isNew && <p className='text_orange_overLine w_100'>NEW PRODUCT</p>
                                }
                                <h3 className='w_100'>{item.name}</h3>
                                <p className='opacity_50'>{item.desc}</p>
                                <div className='boxRow gap_2 left w_100 fleWrap'>
                                    <div className='boxRow'>
                                        <button className='p_1 bgGray' onClick={() => toggleCartItemQuanitity(item.pid, "dec")}>-</button>
                                        <button className='p_1 bgGray'>{item.count}</button>
                                        <button className='p_1 bgGray' onClick={() => toggleCartItemQuanitity(item.pid, "inc")}>+</button>
                                    </div>
                                    <h4 className=''>${item.price * item.count}</h4>
                                    <button className='btn_red center' onClick={() => onRemove(item)}>x</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
                <h2 className='center pt_2 pb_2 w_100'>
                    total price: ${totalPrice}
                </h2>
            </>
        :
            <div className='center p_5'>
                <h1 className='text_h1 w_100'>Cart Empty</h1>
            </div>
    )
} 

const CartItem = () => {
  return (
    <section id="cartItem" >
      <CartList />
    </section>
  )
}

export default CartItem
