import React, {useState} from 'react'
import {Link, useLocation} from 'react-router-dom'
import pImg from '../assets/cart/image-xx59-headphones.jpg'

const ProductDetail = () => {
    const [pCounter,setPCounter] = useState(1)
    let location = useLocation();

    const handlerAdd = () => {
        setPCounter(pCounter + 1)
    }

    const handlerSub = () => {
        setPCounter(pCounter > 1 ? pCounter - 1 : 1)
    }

    return (
        <section id='productDetail'>
            <div className='w_100 left pt_1 pb_1'>
                <Link className='btn_simle'>Go Back</Link>
            </div>
            <div className='w_100 boxRow pdCard'>
                <img className='pDImg pr_2' src={location.state.img?location.state.img:pImg} alt={'product'}/>
                <div className='pdDesc w_50 boxColumn gap_3 p_6 pt_0 pb_0 left'>
                    <h1 className='text_h1 w_50 selfLeft'>
                        {location.state.name}
                    </h1>
                    <p className='opacity_50 w_100'>
                        {location.state.desc}
                    </p>
                    <p className='text_body w_100'>
                        $ {Math.floor(Math.random() * 1000) + 1}
                    </p>
                    <div className='boxRow gap_1 left w_100 fleWrap'>
                        <div className='boxRow'>
                            <button className='p_1 bgGray' onClick={handlerSub}>-</button>
                            <button className='p_1 bgGray'>{pCounter}</button>
                            <button className='p_1 bgGray' onClick={handlerAdd}>+</button>
                        </div>
                        <Link to={'/Product'} className='btn_orange selfLeft' >ADD TO CART</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDetail
