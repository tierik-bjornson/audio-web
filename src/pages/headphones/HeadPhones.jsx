import React from 'react'
import { useLocation } from 'react-router-dom';
import Nav from '../../component/Nav'
import HeaderBody from '../../component/HeaderBody';
import ProductCard from '../../component/ProductCard';
import CategoryCard from '../../component/CategoryCard'
import ProductBringing from '../../component/ProductBringing'
import Footer from '../../component/Footer'

const HeadPhone = () => {
  // let { state } = useLocation();
  return (
    <div>
      <Nav />
      <HeaderBody />
      <div className='pl_5 pr_5'>
        <ProductCard category_value='HeadPhone'/>
        <CategoryCard />
        <ProductBringing />
      </div>
      <Footer />
    </div>
  )
}

export default HeadPhone
