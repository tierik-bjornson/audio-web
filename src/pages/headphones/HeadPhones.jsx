import React from 'react'
import Nav from '../../component/Nav'
import HeaderBody from '../../component/HeaderBody';
import ProductCard from '../../component/ProductCard';
import CategoryCard from '../../component/CategoryCard'
import ProductBringing from '../../component/ProductBringing'
import Footer from '../../component/Footer'

const HeadPhone = () => {
  return (
    <div>
      <Nav />
      <HeaderBody />
      <div className='pl_5 pr_5'>
        <ProductCard category_value='HEADPHONES'/>
        <CategoryCard />
        <ProductBringing />
      </div>
      <Footer />
    </div>
  )
}

export default HeadPhone
