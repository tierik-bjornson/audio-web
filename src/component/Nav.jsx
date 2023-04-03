import React from 'react'
import './index.css'
import logo from '../assets/logo/logo.svg'
import cardLogo from '../assets/logo/card.svg'

const nav_list = [
  {id:1, name:"HOME", navigate:"/"},
  {id:2, name:"HEADPHONES", navigate:"HeadPhones"},
  {id:3, name:"SPEAKERS", navigate:"Speakers"},
  {id:4, name:"EARPHONES", navigate:"EarPhones"},
]

function NavList() {
  return(
    nav_list.map((item)=>(
      <li>
        <a href={item.navigate} className='nav-a'>
          {item.name}
        </a>
      </li>
    ))
  )
}

const Nav = () => {
  return (
    <nav className='boxRow space-between'>
      <div className='nav-logo'>
        <img src={logo} alt={logo} />
      </div>
      <ul className='boxRow space-3 nav-cardLink'>
        <NavList />
      </ul>
      <div className='nav-cardIcon'>
      <img src={cardLogo} alt={logo} />
      </div>
    </nav>
  )
}

export default Nav
