import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import HeaderImg from '../assets/home/tablet/image-header.jpg'

function MainPageHeader() {
  return(
    <div className='headerCard boxRow'>
      <div className='headerCard_text left boxColumn'>
        <p className='header_p'>NEW PRODUCT</p>
        <h1 className='header_title'>XX99 MARK II HEADPHONES</h1>
        <p className='header_body'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast</p>
        <Link to={'Product'} className='btn_orange selfLeft' >SEE PRODUCT</Link>
      </div>
      <div className='headerCard_img center'>
        <img src={HeaderImg} alt='HeadPhoneImage' />
      </div>
    </div>
  )
}

function ChildPageHeader({header}) {
  return(
    <div className='headerCardChild center'>
      <h1 className='header_title_child'>
        {header}
      </h1>
    </div>
  )
}

const HeaderBody = () => {
  let { state } = useLocation();
  return (
    state.pageName === '/'?
        <MainPageHeader/>
      :
        <ChildPageHeader header={state.pageName}/>
     
  )
}

export default HeaderBody
