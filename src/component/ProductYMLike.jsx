import React from 'react'
import { Link } from 'react-router-dom'
import {product_headphone} from '../data/List'

function PCardList() {
    return(
      product_headphone.map(item=>(
        <div className='pYMLCard boxColumn gap_1' key={item.id}>
            <img src={item.img} alt={item.name} />
            <h2 className='w_100'>{item.name}</h2>
            <Link to={'/Product/'+item.name} state={{ name:item.name, desc:item.desc, img:item.img, pid:item.id }} className='btn_orange' >ADD TO CART</Link>
        </div>
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
