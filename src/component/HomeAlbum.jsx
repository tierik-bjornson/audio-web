import React from 'react'
import {Link} from 'react-router-dom'
import img_speaker from '../assets/home/desktop/image-speaker-zx9'
import img_pattern_circles_lg from '../assets/home/desktop/pattern-circles-lg'

const albumItem = [
    {id:1, name:'ZX9 SPEAKER', img:img_speaker, navigate:'HeadPhones', btn:'black', svg:img_pattern_circles_lg, desc:'Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.',},

]


const CategoryCard = () => {
  return (
    <section id='homeAlbum'>
      <div className='albumBoxFull'>

      </div>
    </section>
  )
}

export default CategoryCard
