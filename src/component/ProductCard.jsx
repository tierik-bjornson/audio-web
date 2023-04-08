import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {useCard} from '../CardCotext';
import {product_headphone, product_speaker, product_earphone} from '../data/List'

function CardList({cat}) {
    const {cardItem} = useCard();
    const [catValue,setCatValue] = useState([])

    useEffect(()=>{
        switch (cat) {
            case "HEADPHONES":
                setCatValue(product_headphone)
                break;
            case "SPEAKERS":
                setCatValue(product_speaker)
                break;
            case "EARPHONES":
                setCatValue(product_earphone)
                break;
            case "CARD":
                setCatValue(cardItem)
                break;
            default:
                break;
        }
    },[cat])
    
    return(
        catValue.map((item,key)=>(
            key % 2 === 0?
                <div className='pcCard boxRow w_100' key={item.id}>
                    <img src={item.img} alt={item.name} className='pImg pr_2' />
                    <div className='w_50 boxColumn gap_2 p_3 pt_0 pb_0 left'>
                        {
                            item.isNew && <p className='text_orange_overLine w_100'>NEW PRODUCT</p>
                        }
                        <h1 className='text_h1 w_100'>{item.name}</h1>
                        <p className='opacity_50'>{item.desc}</p>
                        <Link to={'/Product'} state={{ name:item.name, desc:item.desc, img:item.img, pid: item.id }} className='btn_orange selfLeft' >SEE PRODUCT</Link>
                    </div>
                </div>
            :
                <div className='pcCard boxRow pcCardReverse' key={item.id}>
                    <div className='w_50 boxColumn gap_2 p_3 pt_0 pb_0 left'>
                        {
                            item.isNew && <p className='text_orange_overLine w_100'>NEW PRODUCT</p>
                        }
                        <h1 className='text_h1 w_100'>{item.name}</h1>
                        <p className='opacity_50'>{item.desc}</p>
                        <Link to={'/Product'} state={{ name:item.name, desc:item.desc, img:item.img, pid: item.id }} className='btn_orange selfLeft' >SEE PRODUCT</Link>
                    </div>
                    <img src={item.img} alt={item.name} className='pImg' />
                </div>
        ))
    )
} 

const ProductCard = ({category_value}) => {
  return (
    <section id="productCard" >
      <CardList cat={category_value}/>
    </section>
  )
}

export default ProductCard
