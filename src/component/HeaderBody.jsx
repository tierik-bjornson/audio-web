import React from 'react'
import HeaderImg from '../assets/home/tablet/image-header.jpg'

const HeaderBody = () => {
  return (
    <div className='headerCard boxRow'>
      <div className='headerCard-text left boxColumn'>
        <p className='header-p'>NEW PRODUCT</p>
        <h1 className='header-title'>XX99 MARK II HEADPHONES</h1>
        <p className='header-body'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast</p>
        <button className='selfLeft'>SEE PRODUCT</button>
      </div>
      <div className='headerCard-img center'>
        <img src={HeaderImg} alt='HeadPhoneImage' />
      </div>
    </div>
  )
}

export default HeaderBody
