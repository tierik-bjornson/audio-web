import React from 'react'
import { Link } from 'react-router-dom';
import HeaderImg from '../assets/home/tablet/image-header.jpg'

const HeaderBody = () => {
  return (
    <div className='headerCard boxRow'>
      <div className='headerCard_text left boxColumn'>
        <p className='header_p'>NEW PRODUCT</p>
        <h1 className='header_title'>XX99 MARK II HEADPHONES</h1>
        <p className='header_body'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast</p>
        <Link to={'Product'} className='btn selfLeft' >SEE PRODUCT</Link>
      </div>
      <div className='headerCard_img center'>
        <img src={HeaderImg} alt='HeadPhoneImage' />
      </div>
    </div>
  )
}

export default HeaderBody
