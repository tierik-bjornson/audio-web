import React from 'react'
import {Link} from 'react-router-dom'
import img_headphone from '../assets/shared/desktop/image-category-thumbnail-headphones.png'
import img_speaker from '../assets/shared/desktop/image-category-thumbnail-speakers.png'
import img_earphone from '../assets/shared/desktop/image-category-thumbnail-earphones.png'
import arrow_right from  '../assets/shared/desktop/icon-arrow-right.svg'

const catItem = [
    {id:1, name:'HEADPHONE', img:img_headphone, navigate:'/HEADPHONE'},
    {id:2, name:'SPEAKERS', img:img_speaker, navigate:'/SPEAKERS'},
    {id:3, name:'EARPHONES', img:img_earphone, navigate:'/EARPHONES'},
]

function CatList() {
    return(
        catItem.map(item=>(
            <Link to={item.navigate} state={{ pageName: item.name }} className='categoryCard_box center boxColumn' key={item.id}>
                <img src={item.img} alt={item.name}/>
                <div className='gap_1 boxColumn center'>
                    <p className='text_body'>
                        {item.name}
                    </p>
                    <p className='text_gray'>
                        SHOP
                        <img src={arrow_right} alt="Arrow Right"/>
                    </p>
                </div>
            </Link>
        ))
    )
}

const CategoryCard = () => {
  return (
    <section id='categoryCard'>
      <CatList />
    </section>
  )
}

export default CategoryCard
