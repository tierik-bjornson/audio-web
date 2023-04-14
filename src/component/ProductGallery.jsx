import React from 'react'
import EARPHONES1 from '../assets/cart/EARPHONES.jpg'
import HEADPHONES3 from '../assets/cart/image-xx99-mark-two-headphones.jpg'
import SPEAKER2 from '../assets/cart/SPEAKER2.jpg'

const ProductGallery = () => {
  return (
    <section id={'productGallery'}>
        <img src={EARPHONES1} alt='EARPHONES' className='pgImg pgItem1' />
        <img src={HEADPHONES3} alt='HEADPHONES' className='pgImg pgItem2' />
        <img src={SPEAKER2} alt='SPEAKER' className='pgImg pgItem3' />
    </section>
  )
}

export default ProductGallery
