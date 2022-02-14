import React, { useEffect, useState } from 'react'
import { Swiper,SwiperSlide } from 'swiper/react'
import SwiperCore, {Navigation, Pagination,Controller } from 'swiper';
import "./serviceDescription.scss"
export default function ServiceDescription({element}) {
    SwiperCore.use([Navigation, Pagination, Controller]);
    useEffect(()=>{
        window.scrollTo(0,0)
    })
    const [service, setService] = useState("");
    const handle_service_change =e=>{
        console.log(e.target.name);
        setService(service+e.target.name);
    }
    return (
        <div className='service-desc'>
            <div className="service-informations">
                <div className="info-wrapper">
                    <div className="information">
                        <span>Lettrage adhésif complexe – Fluo</span>
                        {element}
                    </div>
                    <div className="image">
                        <img src="/images/products/image68.jpeg" alt="" />
                    </div>
                </div>
                <div className="description">
                    <h1>Description</h1>
                    <div className="desc-text">
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
                </div>
                <div className="produits-similaires">
                    <div className="produits-similaires-titre">
                        <h1>
                            Vous pourriez aussi aimer:
                        </h1>
                    </div>
                    <div className="elements">
                            <Swiper 
                            slidesPerView={4}
                            direction={'horizontal'}
                            centeredSlidesBounds
                            spaceBetween={150}
                            navigation
                            className="swiper">
                                
                                <SwiperSlide>
                                    <div className="element">
                                        <div>
                                        <img src="/images/products/image68.jpeg" alt="" />
                                        <p className="desc">Lettrage adhésif complexe – Doré / Argenté</p>
                                        </div>
                                        <div className='lire-la-suite'>
                                        </div>
                                        <button name="adhesif" onClick={(e)=>handle_service_change(e)}>LIRE LA SUITE</button>
                                    </div>    
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="element">
                                        <div>
                                        <img src="/images/products/image68.jpeg" alt="" />
                                        <p className="desc">Lettrage adhésif complexe – Doré / Argenté</p>
                                        </div>
                                        <div className='lire-la-suite'>
                                        </div>
                                        <button name="adhesif" onClick={(e)=>handle_service_change(e)}>LIRE LA SUITE</button>
                                    </div>    
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="element">
                                        <div>
                                        <img src="/images/products/image68.jpeg" alt="" />
                                        <p className="desc">Lettrage adhésif complexe – Doré / Argenté</p>
                                        </div>
                                        <div className='lire-la-suite'>
                                        </div>
                                        <button name="adhesif"  onClick={(e)=>handle_service_change(e)}>LIRE LA SUITE</button>
                                    </div>    
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="element">
                                        <div>
                                            <img src="/images/products/image68.jpeg" alt="" />
                                            <p className="desc">Lettrage adhésif complexe – Doré / Argenté</p>
                                        </div>
                                        <div className='lire-la-suite'>
                                        </div>
                                        <button name="adhesif" onClick={(e)=>handle_service_change(e)}>LIRE LA SUITE</button>
                                    </div>    
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="element">
                                        <div>
                                        <img src="/images/products/image68.jpeg" alt="" />
                                        <p className="desc">Lettrage adhésif complexe – Doré / Argenté</p>
                                        </div>
                                        <div className='lire-la-suite'>
                                        </div>
                                        <button name="adhesif" onClick={(e)=>handle_service_change(e)}>LIRE LA SUITE</button>
                                    </div>    
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="element">
                                        <div>
                                        <img src="/images/products/image68.jpeg" alt="" />
                                        <p className="desc">Lettrage adhésif complexe – Doré / Argenté</p>
                                        </div>
                                        <div className='lire-la-suite'>
                                        </div>
                                        <button name="adhesif" onClick={(e)=>handle_service_change(e)}>LIRE LA SUITE</button>
                                    </div>    
                                </SwiperSlide>
                            </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}
