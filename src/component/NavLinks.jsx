import React from 'react'
import './index.css'
import {Link} from 'react-router-dom'
import {nav_list} from '../data/Nav_List'


const NavLinks = () => {
  return(
    nav_list.map((item)=>(
      <li key={item.id}>
        <Link to={item.navigate} state={{ pageName: item.navigate }} preventScrollReset={false} className='nav_a'>
          {item.name}
        </Link>
      </li>
    ))
  )
}

export default NavLinks