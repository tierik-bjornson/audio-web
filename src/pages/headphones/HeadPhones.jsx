import React from 'react'
import { useLocation } from 'react-router-dom';
import Nav from '../../component/Nav'
import HeaderBody from '../../component/HeaderBody';
import ProductCard from '../../component/ProductCard';

const HeadPhone = () => {
  // let { state } = useLocation();
  return (
    <div>
      <Nav />
      <HeaderBody />
      <ProductCard category_value='HeadPhone'/>
    </div>
  )
}

export default HeadPhone
