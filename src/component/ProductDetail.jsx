import React, {useEffect, useState} from 'react'
import { useCart } from '../CartCotext'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import pImg from '../assets/cart/image-xx59-headphones.jpg'

const ProductDetail = () => {
    const {addToCart, incCount, decCount, count, totalIPrice} = useCart();
    const [randonNumber,setRandonNumber] = useState(0)

    let location = useLocation();

    const handlerCartAdd = () => {
        const newCartItem = {};
        newCartItem.id = location.state.pid;
        newCartItem.pid = location.state.pid;
        newCartItem.name = location.state.name;
        newCartItem.desc = location.state.desc;
        newCartItem.img = location.state.img?location.state.img:pImg;
        newCartItem.count = count;
        newCartItem.price = randonNumber;
        addToCart(newCartItem, count)
    }

    useEffect(()=> {
        setRandonNumber(200);
        // setRandonNumber(Math.floor(Math.random() * 1000) + 1);
    },[])

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
                        {location.state.desc ? location.state.desc : 'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.'}
                    </p>
                    <p className='text_body w_100'>
                        $ {randonNumber}
                    </p>
                    <div className='boxRow gap_1 left w_100 fleWrap'>
                        <div className='boxRow'>
                            <button className='p_1 bgGray' onClick={decCount}>-</button>
                            <button className='p_1 bgGray'>{count}</button>
                            <button className='p_1 bgGray' onClick={incCount}>+</button>
                        </div>
                        <button onClick={handlerCartAdd} className='btn_orange selfLeft' >ADD TO CART</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDetail
