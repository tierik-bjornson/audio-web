import React from 'react'
import {Link} from 'react-router-dom'
import arrow_right from  '../assets/shared/desktop/icon-arrow-right.svg'
import {catItem} from '../data/List'

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
                        <img src={arrow_right} alt="Arrow Right" className='img_contain'/>
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
