import React, { useState } from 'react';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Picture1 from '../assets/gallery-assets/picture-center.jpg';
import Picture2 from '../assets/gallery-assets/picture-r.jpg';
import Picture3 from '../assets/gallery-assets/picture-l.jpg';
import ArrowGLeft from '../assets/gallery-assets/gallery-arrow-left.png';
import ArrowGRight from '../assets/gallery-assets/gallery-arrow-right.png';

function GalleryPictures() {

   const [value, setValue] = useState(1);

   const onClickBack = () => {
      if (value === 1 ) {
         setValue(10)
      } else {
         setValue(value -1)
      }
   }

   const onClickNext = () => {
      if (value === 10 ) {
         setValue(1)
      } else {
         setValue(value + 1)
      }
   }

   return (
      <CarouselProvider
         naturalSlideWidth={100}
         naturalSlideHeight={100}
         totalSlides={3}
         className='pictures__slider'
         visibleSlides={1}
         infinite='true'
      >
         <div className='pictures__slider--container'>
            <Slider className='slider'>
               <Slide index={0}>
                  <img src={Picture3} alt='third' className="slider__images" />
               </Slide>
               <Slide index={1}>
                  <img src={Picture1} alt='one' className="slider__images" />
               </Slide>
               <Slide index={2}>
                  <img src={Picture2} alt='two' className="slider__images" />
               </Slide>
            </Slider>
            <Slider className='slider medium'>
               <Slide index={0}>
                  <img src={Picture1} alt='one' className="slider__images" />
               </Slide>
               <Slide index={2}>
                  <img src={Picture2} alt='two' className="slider__images" />
               </Slide>
               <Slide index={3}>
                  <img src={Picture3} alt='third' className="slider__images" />
               </Slide>
            </Slider>
            <Slider className='slider'>
               <Slide index={0}>
                  <img src={Picture2} alt='two' className="slider__images" />
               </Slide>
               <Slide index={2}>
                  <img src={Picture3} alt='third' className="slider__images" />
               </Slide>
               <Slide index={3}>
                  <img src={Picture1} alt='one' className="slider__images" />
               </Slide>
            </Slider>
         </div>
         <div className="gallery__pictures--navigator">
            <ButtonBack className="gallery__pictures--button" onClick={onClickBack}>
               <img src={ArrowGLeft} alt="arrow left" href="" className="nav-icon"/>
            </ButtonBack>
            <p id="gallery__counter--text">{value} <span id="gallery__counter--middle"> из </span> 10</p>
            <ButtonNext className="gallery__pictures--button" onClick={onClickNext}>
               <img src={ArrowGRight} alt="arrow right" href="" className="nav-icon"/>
            </ButtonNext>
         </div>


      </CarouselProvider>
 )
}

export default GalleryPictures;
