
import React,{useEffect, useState} from 'react';
import './index.css'
import { useCard } from '../CardCotext'
import {Link} from 'react-router-dom'
import NavLinks from './NavLinks'

import logo from '../assets/logo/logo.svg'
import drawerLogo from '../assets/drawer.svg'
import cardLogo from '../assets/logo/card.svg'

const w = window.innerWidth;;

const Nav = (props) => {
  const { cardCount } = useCard();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
  };

  useEffect(()=>{
    w > 900 && setMobileOpen(false)
  },[mobileOpen])

  const drawer = (
    <div className='navDrawer boxRow'>
      <div className='navDrawerLeft boxColumn top gap_1'>
        <div className='borderB_2 center p_1'>
          <img src={logo} alt={'Logo'} />
        </div>
        <NavLinks />
      </div>
      <div className='navDrawerRight' onClick={handleDrawerToggle}/>
    </div>
  );
  
  return (
    <nav className='boxRow space_between'>
      <div className='nav_logo'>
        <img src={logo} alt={'Logo'} />
      </div>
      <ul className='boxRow gap_3 nav_cardLink'>
        <NavLinks />
      </ul>
      <div className='nav_cardDrawer left p_1' onClick={handleDrawerToggle}>
        <img src={drawerLogo} alt={'Drawer'} />
      </div>
      <Link key={cardCount} to={'/Card'} state={{ pageName: 'CARD' }} className='nav_cardIcon right' style={window.location.hash==='#/Product' ? {animation: 'rotate_Animation .2s linear 2 alternate'}:{animation: 'none'}}>
        <img src={cardLogo} alt={'Card'} />
        {
          cardCount > 0 &&
            <div className='center'>
              <p className='text_small'>{cardCount}</p>
            </div>
        }
      </Link>
      
      {/* ---- Show Drawer */}
      {
        mobileOpen && drawer
      }
    </nav>
  )
}

export default Nav
