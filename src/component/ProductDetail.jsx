import React, {useEffect, useState} from 'react'
import { useCart } from '../CartCotext'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import pImg from '../assets/cart/image-xx59-headphones.jpg'

const ProductDetail = () => {
    const {cartAdd, insertCartData, cartItem} = useCart();
    const [pCounter,setPCounter] = useState(1)
    const [randonNumber,setRandonNumber] = useState(0)

    let location = useLocation();

    const handlerAdd = () => {
        setPCounter(pCounter + 1)
    }

    const handlerSub = () => {
        setPCounter(pCounter > 1 ? pCounter - 1 : 1)
    }

    const handlerCartAdd = () => {
        cartAdd(pCounter)

        const newCartItem = {};
        newCartItem.id = randonNumber;
        newCartItem.pid = location.state.pid;
        newCartItem.name = location.state.name;
        newCartItem.desc = location.state.desc;
        newCartItem.img = location.state.img?location.state.img:pImg;
        newCartItem.count = pCounter;
        newCartItem.price = randonNumber;
        
        insertCartData((cartItem) => [...cartItem, newCartItem])
    }

    useEffect(()=> {
        setRandonNumber(Math.floor(Math.random() * 1000) + 1);
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
                            <button className='p_1 bgGray' onClick={handlerSub}>-</button>
                            <button className='p_1 bgGray'>{pCounter}</button>
                            <button className='p_1 bgGray' onClick={handlerAdd}>+</button>
                        </div>
                        <button onClick={handlerCartAdd} className='btn_orange selfLeft' >ADD TO CART</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDetail
