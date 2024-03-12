import React from 'react'
import './Carousel.css';
import { images } from './helpers/CarouselData';
import { useState } from 'react';
import { FaArrowLeft,FaArrowRight } from 'react-icons/fa';


function Carousel() {
  const [currImg,setCurrImg] = useState(0);
  return (
    <>
    <hr></hr>
    <div className='carousel'>
    
      <h1>Reference</h1>
      <div className='carouselInner' style={{backgroundImage: `url(${images[currImg]?.img})`}}>
      <div className='left' onClick={()=>{
        currImg > 0 && setCurrImg(currImg-1);
      }}>
        <FaArrowLeft/>
      </div>
      <div className='center'>
        <h1>{images[currImg].title}</h1>
        <h2>{images[currImg].subtitle}</h2>
      </div>
      <div className='right' onClick={()=>{
       currImg < images.length - 1 &&  setCurrImg(currImg+1);
      }}>
      <FaArrowRight/>
      </div>
  
      </div>
    </div>
    </>
  )
}

export default Carousel;
