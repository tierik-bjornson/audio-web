import React from 'react'
import { useLocation } from 'react-router-dom';
import Nav from '../../component/Nav'
import HeaderBody from '../../component/HeaderBody';

const HeadPhone = () => {
  // let { state } = useLocation();
  return (
    <div>
      <Nav />
      <HeaderBody />
    </div>
  )
}

export default HeadPhone
