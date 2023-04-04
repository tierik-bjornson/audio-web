import React from 'react'
import bestGearImg from '../assets/shared/desktop/image-best-gear.jpg'

const ProductBringing = () => {
  return (
    <section id='productBringing' className='boxRow boxWrap'>
      <div className='pBLeft pr_5 gap_2'>
        <p className='text_h1'>
            BRINGING YOU THE <span className='text_orange'>BEST</span> AUDIO GEAR
        </p>
        <p className='opacity_50'>
            Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
        </p>
      </div>
      <div className='pBRight'>
        <img className='pBRightImg' src={bestGearImg}/>
      </div>
    </section>
  )
}

export default ProductBringing
