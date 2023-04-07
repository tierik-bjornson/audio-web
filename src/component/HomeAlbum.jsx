import React from 'react'
import {Link} from 'react-router-dom'
import {albumItem} from '../data/List'

const HomeAlbum = () => {
  return (
    <section id='homeAlbum'>
      <div className='albumBoxFullOrange boxRow center'>
        <div className='albumBoxFullOrangeLeft left'>
            <img src={albumItem[0].img} alt={albumItem[0].name} className='albumBoxFullOrangeLeftImg'/>
            <img src={albumItem[0].svg} alt={albumItem[0].name} className='albumBoxFullOrangeLeftSvg'/>
        </div>
        <div className='albumBoxFullOrangeRight boxColumn gap_2 left'>
            <h1 className='header_title'>{albumItem[0].name}</h1>
            <p className='header_body'>{albumItem[0].desc}</p>
            <Link to={albumItem[0].navigate} state={{ name:albumItem[0].name, desc:albumItem[0].desc, img:albumItem[0].img }} className='btn_black selfLeft' >SEE PRODUCT</Link>
        </div>
      </div>

      <div className='albumBoxFullGray boxRow'>
        <div className='albumBoxFullGrayLeft gap_2'>
            <h1 className='text_title'>{albumItem[1].name}</h1>
            <Link to={albumItem[1].navigate} state={{ name:albumItem[1].name, desc:albumItem[1].desc, img:albumItem[1].img }}  className='btn_transparent selfLeft' >SEE PRODUCT</Link>
        </div>
        <div className='albumBoxFullGeayRightImg boxColumn gap_2'>
            <img src={albumItem[1].img} alt={albumItem[1].name} className='albumBoxFullOrangeRightImg'/>
        </div>
      </div>

      <div className='albumBoxHulf boxRow'>
        <div className='albumBoxHulfLeft albumBoxHulfWidth'>
            <img src={albumItem[2].img} alt={albumItem[2].name} className='full'/>
        </div>
        <div className='albumBoxHulfRight albumBoxHulfWidth boxColumn gap_2'>
            <h1 className='text_title'>{albumItem[2].name}</h1>
            <Link to={albumItem[2].navigate} state={{ name:albumItem[2].name, desc:albumItem[2].desc, img:albumItem[2].img }} className='btn_transparent selfLeft' >SEE PRODUCT</Link>
        </div>
    </div>
    </section>
  )
}

export default HomeAlbum
