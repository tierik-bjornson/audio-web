import React from 'react'
import Nav from '../../component/Nav'
import ProductDetail from '../../component/ProductDetail'
import ProductFeatures from '../../component/ProductFeatures'

const Product = () => {
  return (
    <>
      <Nav />
      <div className='ml_25 mr_25'>
        <ProductDetail />
        <ProductFeatures />
      </div>
    </>
  )
}

export default Product
