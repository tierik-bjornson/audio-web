import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {useCart} from '../CartCotext'

function CartList({cat}) {
    const {cartItem, insertCartData} = useCart();
    const [newCartItem, setNewCartItem] = useState([])

    const handlerAdd = (id) => {
        // insertCardData(cardItem[id],{count:3})
        // console.log(cardItem[id].count)
    }

    const handlerSub = (id) => {
        // setPCounter(pCounter > 1 ? pCounter - 1 : 1)
    }


//     useEffect(()=>{
//         for (let i = 0; i < cardItem.length; i++) {
//             for (let j = i+1; j <= cardItem.length; j++) {
//                 if(cardItem[i].pid ===2){
//                     setNewCardItem(newCardItem => [...newCardItem,{
//                         name:cardItem[i].name,
//                         desc:cardItem[i].desc,
//                         count:cardItem[i].count,
//                         pid:cardItem[i].pid,
//                         img:cardItem[i].img,
//                     }])
//                 }
//                 else{
//                     setNewCardItem(newCardItem => [...newCardItem,{
//                         name:cardItem[i].name,
//                         desc:cardItem[i].desc,
//                         count:cardItem[i].count,
//                         pid:cardItem[i].pid,
//                         img:cardItem[i].img,
//                     }])
//                 }
//             }
//         }
//     },[cardItem])
// console.log(newCardItem)
    
    return(
        cartItem.length > 0?
            cartItem.map((item,key)=>(
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
                                <button className='p_1 bgGray' onClick={()=>handlerSub(item.id)}>-</button>
                                <button className='p_1 bgGray'>{item.count}</button>
                                <button className='p_1 bgGray' onClick={()=>handlerAdd(item.id)}>+</button>
                            </div>
                            <h4 className=''>${item.price}</h4>
                        </div>
                    </div>
                </div>
            ))
        :
            <div className='center p_5'>
                <h1 className='text_h1 w_100'>Cart Empty</h1>
            </div>
    )
} 

const CartItem = ({category_value}) => {
  return (
    <section id="cartItem" >
      <CartList />
    </section>
  )
}

export default CartItem
