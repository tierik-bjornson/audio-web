import React from 'react'
import {Link} from 'react-router-dom'
import img_speaker from '../assets/home/desktop/image-speaker-zx9.png'
import img_pattern_circles_lg from '../assets/home/desktop/pattern-circles-lg.svg'
import img_speaker2 from '../assets/home/desktop/image-speaker-zx7.png'
import img_earPhone from '../assets/home/desktop/image-earphones-yx1.jpg'

const albumItem = [
    {id:1, name:'ZX9 SPEAKER', img:img_speaker, navigate:'/Product', svg:img_pattern_circles_lg, desc:'Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.'},
    {id:2, name:'ZX7 SPEAKER', img:img_speaker2, navigate:'/Product', svg:'', desc:''},
    {id:3, name:'YX1 EARPHONES', img:img_earPhone, navigate:'/Product', svg:'', desc:''},
]


const HomeAlbum = () => {
  return (
    <section id='homeAlbum'>
      <div className='albumBoxFullOrange boxRow'>
        <div className='albumBoxFullOrangeLeft left'>
            <img src={albumItem[0].img} alt={albumItem[0].name} className='albumBoxFullOrangeLeftImg'/>
            <img src={albumItem[0].svg} alt={albumItem[0].name} className='albumBoxFullOrangeLeftSvg'/>
        </div>
        <div className='albumBoxFullOrangeRight boxColumn gap_2 left'>
            <h1 className='header_title'>{albumItem[0].name}</h1>
            <p className='header_body'>{albumItem[0].desc}</p>
            <Link to={albumItem[0].navigate} className='btn_black selfLeft' >SEE PRODUCT</Link>
        </div>
      </div>

      <div className='albumBoxFullGray boxRow'>
        <div className='albumBoxFullGrayLeft gap_2'>
            <h1 className='text_title'>{albumItem[1].name}</h1>
            <Link to={albumItem[1].navigate} className='btn_transparent selfLeft' >SEE PRODUCT</Link>
        </div>
        <div className='albumBoxFullOrangeRight boxColumn gap_2'>
            <img src={albumItem[1].img} alt={albumItem[1].name} className='albumBoxFullOrangeRightImg'/>
        </div>
      </div>

      <div className='albumBoxHulf boxRow'>
        <div className='albumBoxHulfLeft albumBoxHulfWidth'>
            <img src={albumItem[2].img} alt={albumItem[2].name} className='full'/>
        </div>
        <div className='albumBoxHulfRight albumBoxHulfWidth boxColumn gap_2'>
            <h1 className='text_title'>{albumItem[2].name}</h1>
            <Link to={albumItem[2].navigate} className='btn_transparent selfLeft' >SEE PRODUCT</Link>
        </div>
    </div>
    </section>
  )
}

export default HomeAlbum
