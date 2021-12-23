import React from 'react'
import "./banner.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay,Navigation, Pagination, Controller, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css';
SwiperCore.use([Autoplay,Navigation, Pagination, Controller, Thumbs]);


export default function Banner() {
    return (
        <div className='banner'>
            <div className="text">
                <div className="title">
                    Société Leader dans la publicité industriele à Méknes.
                </div>
                <div className='info'>
                    <p className='definition'>
                    </p>
                    <span>
                        Habillage des facades fabrication des enseigns, la publicité numérique  ✨
                    </span>
                    <p>
                    Nous créons une expérience publicitaire incroyable pour les startups, les petites et moyennes entreprises 🤗😀
                    </p>
                </div>
            </div>
           <div className="image">
            <Swiper 
            slidesPerView={1} 
            direction={'horizontal'}
            spaceBetween={950}
            loop
            navigation
            autoplay={{
                delay: 3000,
                disableOnInteraction: false
            }}
            slideToClickedSlide={true}
            className="swiper">
                    <SwiperSlide><img src="/images/products/image51.jpeg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="/images/products/image50.jpeg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="/images/products/image47.jpeg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="/images/products/image41.jpeg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="/images/products/image41.jpeg" alt="" /></SwiperSlide>
                </Swiper>
                <div className="savoirePlus">
                    <button>Savoire Plus</button>
                </div>
            </div>
        </div>
    )
}
