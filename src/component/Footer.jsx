import React from 'react'
import logo from '../assets/logo/logo.svg'

const nav_list = [
    {id:1, name:"HOME", navigate:"/"},
    {id:2, name:"HEADPHONES", navigate:"HeadPhones"},
    {id:3, name:"SPEAKERS", navigate:"Speakers"},
    {id:4, name:"EARPHONES", navigate:"EarPhones"},
]

function NavList() {
    return(
      nav_list.map((item)=>(
        <li key={item.id}>
          <a href={item.navigate} className='nav_a'>
            {item.name}
          </a>
        </li>
      ))
    )
}

const Footer = () => {
  return (
    <Footer id='footer'>
      <div className='boxRow'>
        <img src={logo} alt='audiophile' />
        <ul className='boxRow gap_3 nav_cardLink'>
            <NavList />
        </ul>
      </div>
    </Footer>
  )
}

export default Footer
