import React from 'react'
import './index.css'
import {Link} from 'react-router-dom'
import logo from '../assets/logo/logo.svg'
import cardLogo from '../assets/logo/card.svg'
import {nav_list} from '../data/Nav_List'

function NavList() {
  return(
    nav_list.map((item)=>(
      <li key={item.id}>
        <Link to={item.navigate} className='nav_a'>
          {item.name}
        </Link>
      </li>
    ))
  )
}

const Nav = () => {
  return (
    <nav className='boxRow space_between'>
      <div className='nav_logo'>
        <img src={logo} alt={logo} />
      </div>
      <ul className='boxRow gap_3 nav_cardLink'>
        <NavList />
      </ul>
      <div className='nav_cardIcon'>
      <img src={cardLogo} alt={logo} />
      </div>
    </nav>
  )
}

export default Nav
