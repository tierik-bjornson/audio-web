import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import HEADPHONES1 from '../assets/cart/image-xx59-headphones.jpg'
import HEADPHONES2 from '../assets/cart/image-xx99-mark-one-headphones.jpg'
import HEADPHONES3 from '../assets/cart/image-xx99-mark-two-headphones.jpg'

import SPEAKER1 from '../assets/cart/SPEAKER1.jpg'
import SPEAKER2 from '../assets/cart/SPEAKER2.jpg'

import EARPHONES1 from '../assets/cart/EARPHONES.jpg'

const product_headphone = [
    {id:1, name:'XX59 HEADPHONES', img:HEADPHONES1,isNew:false, desc:'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.'},
    {id:2, name:'XX99 MARK I HEADPHONES', img:HEADPHONES2,isNew:false, desc:'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.'},
    {id:3, name:'XX99 MARK II HEADPHONES', img:HEADPHONES3, isNew:true, desc:'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.'},
]

const product_speaker = [
    {id:1, name:'ZX7 SPEAKER', img:SPEAKER1, isNew:false, desc:'Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.'},
    {id:2, name:'ZX9 SPEAKER', img:SPEAKER2, isNew:true, desc:'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.'},
]

const product_earphone = [
    {id:1, name:'YX1 WIRELESS EARPHONES', img:EARPHONES1, isNew:true, desc:'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.'},
]

function CardList({cat}) {
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
        
            default:
                break;
        }
    },[cat])

    return(
        catValue.map((item,key)=>(
            key % 2 === 0?
                <div className='pcCard boxRow' key={item.id}>
                    <img src={item.img} alt={item.name} className='w_50 p_2' />
                    <div className='w_50 boxColumn gap_2 p_2 left'>
                        {
                            item.isNew && <p className='text_orange_overLine w_100'>NEW PRODUCT</p>
                        }
                        <h1 className='text_h1 w_100'>{item.name}</h1>
                        <p className='opacity_50'>{item.desc}</p>
                        <Link to={'Product'} className='btn_orange selfLeft' >SEE PRODUCT</Link>
                    </div>
                </div>
            :
                <div className='pcCard boxRow' key={item.id}>
                    <div className='w_50 boxColumn gap_2 p_2 left'>
                        {
                            item.isNew && <p className='text_orange_overLine w_100'>NEW PRODUCT</p>
                        }
                        <h1 className='text_h1 w_100'>{item.name}</h1>
                        <p className='opacity_50'>{item.desc}</p>
                        <Link to={'Product'} className='btn_orange selfLeft' >SEE PRODUCT</Link>
                    </div>
                    <img src={item.img} alt={item.name} className='w_50 p_2' />
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
