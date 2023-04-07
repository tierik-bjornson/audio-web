import img_headphone from '../assets/shared/desktop/image-category-thumbnail-headphones.png'
import img_speaker from '../assets/shared/desktop/image-category-thumbnail-speakers.png'
import img_earphone from '../assets/shared/desktop/image-category-thumbnail-earphones.png'

import img_speaker_album from '../assets/home/desktop/image-speaker-zx9.png'
import img_pattern_circles_lg from '../assets/home/desktop/pattern-circles-lg.svg'
import img_speaker2 from '../assets/home/desktop/image-speaker-zx7.png'
import img_earPhone from '../assets/home/desktop/image-earphones-yx1.jpg'





export const catItem = [
    {id:1, name:'HEADPHONE', img:img_headphone, navigate:'/HeadPhones'},
    {id:2, name:'SPEAKERS', img:img_speaker, navigate:'/Speakers'},
    {id:3, name:'EARPHONES', img:img_earphone, navigate:'/EarPhones'},
]

export const albumItem = [
    {id:1, name:'ZX9 SPEAKER', img:img_speaker_album, navigate:'/Product', svg:img_pattern_circles_lg, desc:'Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.'},
    {id:2, name:'ZX7 SPEAKER', img:img_speaker2, navigate:'/Product', svg:'', desc:''},
    {id:3, name:'YX1 EARPHONES', img:img_earPhone, navigate:'/Product', svg:'', desc:''},
]
