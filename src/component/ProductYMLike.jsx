import React from 'react'
import { Link } from 'react-router-dom'
import EARPHONES1 from '../assets/cart/EARPHONES.jpg'
import HEADPHONES3 from '../assets/cart/image-xx99-mark-two-headphones.jpg'
import SPEAKER2 from '../assets/cart/SPEAKER2.jpg'

const pYMLArray = [
    {id:1, name:'XX99 Mark II', img:EARPHONES1, navigate:'/'},
    {id:2, name:'XX99 Mark I', img:HEADPHONES3, navigate:'/'},
    {id:3, name:'ZX9 Speaker', img:SPEAKER2, navigate:'/'},
]

function PCardList(params) {
    return(
        pYMLArray.map(item=>(
            <box className='pYMLCard boxColumn gap_2' key={item.id}>
                <img src={item.img} alt={item.name} />
                <h2>{item.name}</h2>
                <Link to={'/Product'} state={{ name:item.name, desc:item.desc }} className='btn_orange' >ADD TO CART</Link>
            </box>
        ))
    )
}

const ProductYMLike = () => {
  return (
    <section id={'ProductYMLike'} className='gap_2 center boxColumn'>
      <h1 className=''>YOU MAY ALSO LIKE</h1>
      <div className='boxRow w_100 gap_1'>
        <PCardList />
      </div>
    </section>
  )
}

export default ProductYMLike
