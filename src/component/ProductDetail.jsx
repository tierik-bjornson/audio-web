import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import pImg from '../assets/cart/image-xx59-headphones.jpg'

const ProductDetail = () => {
    const [pCounter,setPCounter] = useState(1)
    const navigate = useNavigate();

    const handlerAdd = () => {
        setPCounter(pCounter + 1)
    }

    const handlerSub = () => {
        setPCounter(pCounter > 1 ? pCounter - 1 : 1)
    }

    return (
        <section id='productDetail'>
            <div className='w_100 left pt_1 pb_1'>
                <Link to={navigate(-1)} className='btn_simle'>Go Back</Link>
            </div>
            <div className='w_100 boxRow'>
                <img className='pImg pr_2' src={pImg} alt='img'/>
                <div className='w_50 boxColumn gap_3 p_6 pt_0 pb_0 left'>
                    <h1 className='text_h1 w_50 selfLeft'>
                        XX59 HEADPHONES
                    </h1>
                    <p className='opacity_50 w_100'>
                        Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.
                    </p>
                    <p className='text_body w_100'>
                        $ 899
                    </p>
                    <div className='boxRow gap_1 left w_100'>
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
