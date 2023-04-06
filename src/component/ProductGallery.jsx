import React from 'react'
import EARPHONES1 from '../assets/cart/EARPHONES.jpg'
import HEADPHONES3 from '../assets/cart/image-xx99-mark-two-headphones.jpg'
import SPEAKER2 from '../assets/cart/SPEAKER2.jpg'

const ProductGallery = () => {
  return (
    <section id={'productGallery'}>
        <img src={EARPHONES1} ali='img' className='pgImg pgItem1' />
        <img src={SPEAKER2} ali='img' className='pgImg pgItem2' />
        <img src={HEADPHONES3} ali='img' className='pgImg pgItem3' />
    </section>
  )
}

export default ProductGallery
