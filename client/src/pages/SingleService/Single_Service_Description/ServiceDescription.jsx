import React from 'react'
import Swiper from 'swiper'
import { SwiperSlide } from 'swiper/swiper-react'
import SwiperCore, {Navigation, Pagination,Controller } from 'swiper';

import "./serviceDescription.scss"
export default function ServiceDescription({element}) {
    SwiperCore.use([Navigation, Pagination, Controller]);
    return (
        <div className='service-desc'>
            <div className="service-informations">
                <div className="info-wrapper">
                    <div className="image">
                        <img src="" alt="" />
                    </div>
                    <div className="information">
                        <span>Lettrage adhésif complexe – Fluo</span>
                        <div className="details">

                        </div>
                        {element}
                    </div>
                </div>
                <div className="description">
                    <h1>Description</h1>
                    <p>
                        Nous vous proposons de réaliser rapidement et simplement vos <b>lettrages autocollants personnalisés</b> pour la décoration de vos vitrines, commerces ou intérieurs privés.
                    </p>
                    <p>
                        Les lettrages en vinyle adhésif sont <b>découpés à la forme suivant tracé</b>, échenillés et sous film d’application. Ils peuvent être <b>appliqués de manière simple</b> par tous sur des surfaces planes telles que des mur, porte, fenêtre, mobilier, plafond ou sol. Etant auto-adhésifs, ils s’appliquent directement sans ajout de colle.
                    </p>
                    <p>
                        Tous nos stickers sont réalisés dans nos ateliers sur un <b>vinyle adhésif fluorescent de qualité supérieure de marque Mac Tac</b> disponibles en <b>quatre couleurs</b> ; Jaune, orange, rose et vert.
                    </p>
                </div>
                <div className="produit-similaires">
                <div className="elements">
                        <Swiper 
                        slidesPerView={1} 
                        direction={'horizontal'}
                        spaceBetween={30}
                        slideToClickedSlide={true}
                        className="swiper">
                            <SwiperSlide>
                                <div className="element">
                                    <div>
                                    <img src="/images/products/image68.jpeg" alt="" />
                                    <p className="desc">Lettrage adhésif complexe – Doré / Argenté</p>
                                    </div>
                                    <div className='lire-la-suite'>
                                    </div>
                                    <button>LIRE LA SUITE</button>
                                </div>    
                            </SwiperSlide>
                        </Swiper>
                </div>
                </div>
            </div>
        </div>
    )
}
