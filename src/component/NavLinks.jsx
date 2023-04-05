import React from 'react'
import './index.css'
import {Link} from 'react-router-dom'

const nav_list = [
  {id:1, name:"HOME", navigate:"/"},
  {id:2, name:"HEADPHONES", navigate:"/HeadPhones"},
  {id:3, name:"SPEAKERS", navigate:"/Speakers"},
  {id:4, name:"EARPHONES", navigate:"/EarPhones"},
]

const NavLinks = () => {
  return(
    nav_list.map((item)=>(
      <li key={item.id}>
        <Link to={item.navigate} state={{ pageName: item.name }} preventScrollReset={false} className='nav_a'>
          {item.name}
        </Link>
      </li>
    ))
  )
}

export default NavLinks