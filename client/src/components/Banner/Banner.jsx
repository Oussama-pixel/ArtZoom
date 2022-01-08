import React, { useEffect } from 'react'
import "./banner.scss"
import {AiOutlineQuestion, AiOutlineWhatsApp} from 'react-icons/ai'
import {IoConstructSharp} from 'react-icons/io5'
import { Swiper, SwiperSlide } from 'swiper/react';
import {FaPlus} from 'react-icons/fa'
import SwiperCore, { Autoplay,Navigation, Pagination, EffectFade ,Controller, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css';
import { Link } from 'react-router-dom';
import {RiServiceFill} from 'react-icons/ri'
import {BsPencil, BsTelephone} from 'react-icons/bs'
import {MdDone} from 'react-icons/md'
import { Map } from '../Map/Map';
SwiperCore.use([Autoplay,Navigation, Pagination,EffectFade, Controller, Thumbs]);


export default function Banner() {
    const inViewport = (entries, observer) => {
        entries.forEach(entry => {
            console.log(entry.target.classList);
          entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
        });
      };
      
      useEffect(()=>{
          const Obs = new IntersectionObserver(inViewport);
          const obsOptions = {}; 
          const ELs_inViewport = document.querySelectorAll('[data-inviewport]');
        ELs_inViewport.forEach(EL => {
          Obs.observe(EL, obsOptions);
        });
      },[])

    return (
        <div className='banner'>
            <div className="firstImage">
                <div className="slogan">
                    <div className="title">
                        Société Leader dans la publicité industriele à Méknes.
                    </div>
                    <div className='info'>
                        <p className='definition'>
                        </p>
                        <span>
                            Habillage des facades fabrication des enseigns, la publicité numérique et encore plus...
                        </span>
                    </div>
                    <p>
                    Nous créons une expérience publicitaire incroyable pour tous nos client n'import ou au Maroc 🤗😀
                    </p>
                </div>
            </div>
            <div className="banner-content">
                <div className="nos-services">
                    <div className="title" data-inviewport="show-title">
                        <h1>Nos Services</h1>
                        <RiServiceFill className='title-icon'/>
                    </div>
                    <div className="nos-services-content">
                        <div className="home-page-service marquage"  data-inviewport="show-service">
                            <div className="service-image">
                                <img src="images/products/image15.jpeg" alt="" />
                                <div className="service-icon">
                                    <FaPlus/>
                                </div>
                            </div>
                            <div className="service-content">
                                <div className="service-content-title">
                                    <h1>Les adhésifs publicitaires</h1>
                                    <p>Lettrage adhésif tous supports</p>

                                </div>
                                <div className="service-content-description">
                                    <p>
                                        Marquage véhicule, Utilitaire, Flotte de véhicules, Camion, Décoration de remorque, Food truck, Lettrage vitrine, Adhésif en kits, Décoration intérieure, Autocollants divers...
                                    </p>
                                </div>
                                <div className="services-content-savoire-plus">
                                    <Link to="/services/adhesif">
                                        <button>En Savoire +</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="home-page-service enseigne "  data-inviewport="show-service">
                            <div className="service-image">
                                <img src="images/products/image54.jpeg" alt="" />
                                <div className="service-icon">
                                    <FaPlus/>
                                </div>
                            </div>
                            <div className="service-content">
                                <div className="service-content-title">
                                    <h1>Enseigne</h1>
                                    <p>Fabrication et pose</p>

                                </div>
                                <div className="service-content-description">
                                    <p>
                                        Enseigne bandeau, Enseigne drapeau, Habillage de façade, Alu / Trespa<sup>®</sup>
                                        , Enseigne lumineuse, Corporative, Lettres découpées, Lettres boitiers, Caissons lumineux, Eclairage...                            
                                    </p>
                                </div>
                                <div className="services-content-savoire-plus">
                                    <button>En Savoire +</button>
                                </div>
                            </div>
                        </div>
                        <div className="home-page-service signaletique "  data-inviewport="show-service">
                                <div className="service-image">
                                    <img src="images/products/image61.jpeg" alt="" />
                                    <div className="service-icon">
                                        <FaPlus/>
                                    </div>
                                </div>
                                <div className="service-content">
                                    <div className="service-content-title">
                                        <h1>Signalétique</h1>
                                        <p>Panneaux et signalétique pour entreprise</p>

                                    </div>
                                    <div className="service-content-description">
                                        <p>
                                            Panneau Plexi / Alu / PVC, Structure 4x3, Pré-enseigne, Totem personnalisé int./ext., Signalétique adhésive, Caisson, Chevalet de trottoir, Plaques professionnelles...                         
                                        </p>
                                    </div>
                                    <div className="services-content-savoire-plus">
                                        <button>En Savoire +</button>
                                    </div>
                                </div>
                        </div>
                        <div className="home-page-service LED "  data-inviewport="show-service">
                                <div className="service-image">
                                    <img src="images/products/image62.jpeg" alt="" />
                                    <div className="service-icon">
                                        <FaPlus/>
                                    </div>
                                </div>
                                <div className="service-content">
                                    <div className="service-content-title">
                                        <h1>Les Écrans LED</h1>
                                        <p>Écrans et signalétique LED pour entreprises</p>

                                    </div>
                                    <div className="service-content-description">
                                        <p>
                                        Représentant un support de communication efficace adaptable pouvant être utilisés sur murs, sols, véhicules ,vitrines..
                                        </p>
                                    </div>
                                    <div className="services-content-savoire-plus">
                                        <button>En Savoire +</button>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="nos-avantages">
                    <div className="avantage qualite" data-inviewport = "show-advantages">
                        <MdDone/>
                        <h1>
                            Engagement qualité,
                            poseurs qualifiés
                        </h1>
                        <p>
                            Vous êtes entièrement
                            couverts pièces et
                            main d’oeuvre.
                        </p>
                    </div>
                    <div className="avantage disponibilite" data-inviewport = "show-advantages">
                        <BsTelephone/>
                        <h1>
                            Un service
                            téléphonique disponible
                        </h1>
                        <p>
                            Du lundi au vendredi
                            de 9h00 à 17h00. 
                            / Samedi de 9h00 à 14h00
                        </p>
                    </div>
                    <div className="avantage creativite" data-inviewport = "show-advantages">
                        <BsPencil/>
                        <h1>
                            Des créatifs dédiés
                            à votre projet
                        </h1>
                        <p>
                            Des créations originales
                            et sur-mesure.
                        </p>
                    </div>
                </div>
                <div className="qui-sommes-nous">
                    <div className="title">
                        <h1>
                            Qui Somme Nous
                            <AiOutlineQuestion/>
                        </h1>
                    </div>
                    <div className="desc">
                        <video controls >
                            <source src='/videos/IMG_2344.MOV' type='video/mp4' />
                        </video>
                        <p>
                            Fabricant de panneaux publicitaire, d’enseignes lumineuses LEDs ou néon et de signalétique à <b>Meknes</b>, ArtZoom est une socieété d'habillage des facades commercials Et enseigns publicitaire basée au  <b>26 BIS rue Ibn Khaldoun Ville nouvelle Meknes .</b> 
                        </p>
                        <p>
                       Il est doté d'un bureaude la conception et d'études technique.  ArtZoom Publicité installe vos enseignes dans toute le Maroc.
                        </p>
                    </div>
                </div>
                <div className="derniere-projects">
                    <div className="derniere-projects-titre" data-inviewport="show">
                        <p>
                            Nos Derniere Projects.

                            <IoConstructSharp/>
                        </p>
                    </div>
                    <div className="image" data-inviewport="show">
                        <Swiper 
                        slidesPerView={1} 
                        direction={'horizontal'}
                        spaceBetween={30}
                        effect={"fade"}
                        loop
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false
                        }}
                        slideToClickedSlide={true}
                        className="swiper">
                            <SwiperSlide><img src="/images/products/image51.jpeg" alt="" /></SwiperSlide>
                            <SwiperSlide><img src="/images/products/image50.jpeg" alt="" /></SwiperSlide>
                            <SwiperSlide><img src="/images/products/image47.jpeg" alt="" /></SwiperSlide>
                            <SwiperSlide><img src="/images/products/image41.jpeg" alt="" /></SwiperSlide>
                            <SwiperSlide><img src="/images/products/image54.jpeg" alt="" /></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className="nous-contacter">
                    <div className="title">
                        <h1>
                            Contactez Nous
                        </h1>
                    </div>
                    <div className="info">
                        <div className="info-title">
                                <h1>ArtZoom</h1>
                        </div>
                        <div className="info-content">
                            <div className="row">
                                <h4>
                                    Téléphone
                                </h4>
                                <h4>
                                    <h4>
                                        icon
                                    </h4>
                                    0640760574
                                </h4>
                            </div>
                            <div className="row">
                                <h4>
                                    Fix
                                </h4>
                                <h4>
                                    <h4>
                                        icon
                                    </h4>
                                    0640760574
                                </h4>
                            </div>
                            <div className="row">
                                <h4>
                                    Email
                                </h4>
                                <h4>
                                    <h4>
                                        icon
                                    </h4>
                                    oussamaboujnan5@gmail.com
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="form">
                        <div className="form-content">
                            <div className="row">
                                <input type="text" placeholder='Name' />
                                <input type="text" placeholder='Company' />
                            </div>
                            <div className="row">
                                <input type="email" name="" id="" placeholder='Email' />
                                <input type="text" placeholder='Phone' />
                            </div>
                            <div className="row">
                                <textarea name="" id="" cols="110" rows="25"></textarea>
                            </div>
                            <div className="row">
                                <div className="envoyer">
                                    <button>
                                        Envoyer
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="map">
                            <Map/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text">
                <div className="whatsapp">
                    <a
                    href="https://wa.me/+212640760574"
                    class="whatsapp_float"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        <AiOutlineWhatsApp/>
                    </a>
                </div>
            </div>

        </div>
    )
}
