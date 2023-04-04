import React from 'react'
import './index.css'
import NavLinks from './NavLinks'
import logo from '../assets/logo/logo.svg'
import cardLogo from '../assets/logo/card.svg'


const Nav = () => {
  return (
    <nav className='boxRow space_between'>
      <div className='nav_logo'>
        <img src={logo} alt={logo} />
      </div>
      <ul className='boxRow gap_3 nav_cardLink'>
        <NavLinks />
      </ul>
      <div className='nav_cardIcon'>
      <img src={cardLogo} alt={logo} />
      </div>
    </nav>
  )
}

export default Nav
