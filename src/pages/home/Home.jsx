import React from 'react'

import Nav from '../../component/Nav'
import HeaderBody from '../../component/HeaderBody'
import CategoryCard from '../../component/CategoryCard'

const Home = () => {
  return (
    <section id={'home'}>
      <Nav />
      <div className='underLine' />
      <HeaderBody />
      <CategoryCard />
    </section>
  )
}

export default Home
