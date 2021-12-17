import React from 'react'
import "./services.scss"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'


// import Swiper core and required modules
import SwiperCore, {
  Pagination,Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination,Navigation]);
export default function Services() {
    return (
        <div className='services'>
            <div className="LED">
                <h3>
                    LED 
                </h3>
                <Swiper
                spaceBetween={30}
                slidesPerView={1}
                navigation={true}
                centeredSlides
                onSlideChange={() => console.log("slide change")}
                onSwiper={swiper => console.log(swiper)}
                >
                    <SwiperSlide><img src="/images/products/image1.jpeg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="/images/products/image2.jpeg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="/images/products/image3.jpeg" alt="" /></SwiperSlide>
                </Swiper>
            </div>
            <div className="pannaux">
                <h3>
                    Pannaux
                </h3>
            </div>
            <div className="plaques">
                <h3>vini</h3>
            </div>
            
        </div>
    )
}
