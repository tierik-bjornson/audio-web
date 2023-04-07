import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {useCard} from '../CardCotext'

function CardList({cat}) {
    const {cardItem} = useCard();

    console.log(cardItem)

    return(
        cardItem.length > 0?
            cardItem.map((item,key)=>(
                <div className='pcCard boxRow w_100' key={item.id}>
                    <img src={item.img} alt={item.name} className='pImg pr_2' />
                    <div className='w_50 boxColumn gap_2 p_3 pt_0 pb_0 left'>
                        {
                            item.isNew && <p className='text_orange_overLine w_100'>NEW PRODUCT</p>
                        }
                        <h1 className='text_h1 w_100'>{item.name}</h1>
                        <p className='opacity_50'>{item.desc}</p>
                        <Link to={'/Product'} state={{ name:item.name, desc:item.desc, img:item.img }} className='btn_orange selfLeft' >SEE PRODUCT</Link>
                    </div>
                </div>
            ))
        :
            <div className='pcCard boxRow pcCardReverse'>
                <h1 className='text_h1 w_100'>Card Empty</h1>
            </div>
    )
} 

const CardItem = ({category_value}) => {
  return (
    <section id="productCard" >
      <CardList />
    </section>
  )
}

export default CardItem
