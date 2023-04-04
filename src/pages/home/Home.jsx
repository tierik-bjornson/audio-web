import React from 'react'

import Nav from '../../component/Nav'
import HeaderBody from '../../component/HeaderBody'
import CategoryCard from '../../component/CategoryCard'
import HomeAlbum from '../../component/HomeAlbum'
import ProductBringing from '../../component/ProductBringing'

const Home = () => {
  return (
    <section id={'home'}>
      <Nav />
      <div className='underLine' />
      <HeaderBody />
      <div className='pl_5 pr_5'>
        <CategoryCard />
        <HomeAlbum />
        <ProductBringing />
      </div>
    </section>
  )
}

export default Home
