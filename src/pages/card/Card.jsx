import React from 'react'
import Nav from '../../component/Nav'
import HeaderBody from '../../component/HeaderBody';
import CardItem from '../../component/CardItem';
import Footer from '../../component/Footer'

const Card = () => {
  return (
    <div>
      <Nav />
      <HeaderBody />
      <div className='pl_5 pr_5'>
        <CardItem />
      </div>
      <Footer />
    </div>
  )
}

export default Card;