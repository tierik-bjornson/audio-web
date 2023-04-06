import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import HeaderImg from '../assets/home/tablet/image-header.jpg'

const itemList = {
  name: 'XX99 MARK II HEADPHONES',
  desc: 'Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast',
  img: HeaderImg
}

function MainPageHeader() {
  return(
    <div className='headerCard boxRow'>
      <div className='headerCard_text left boxColumn'>
        <p className='header_p'>NEW PRODUCT</p>
        <h1 className='header_title'>{itemList.name}</h1>
        <p className='header_body'>{itemList.desc}</p>
        <Link to={'/Product'} state={{ name:itemList.name, desc:itemList.desc }} className='btn_orange selfLeft' >SEE PRODUCT</Link>
      </div>
      <div className='headerCard_img center'>
        <img src={itemList.img} alt='HeadPhoneImage' />
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
    window.location.hash? 
      state.pageName === 'HOME'?
          <MainPageHeader/>
        :
          <ChildPageHeader header={state.pageName}/>
      :
        <MainPageHeader/>
  )
}

export default HeaderBody
