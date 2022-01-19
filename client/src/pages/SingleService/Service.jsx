import React, { useState } from 'react'
import "./service.scss"
import Footer from '../../components/footer/Footer'
import {BsChevronRight} from 'react-icons/bs'
import ServiceDescription from './Single_Service_Description/ServiceDescription'
export default function Service({type}) {
    const [showDesc, setShowDesc] = useState(false)
    return (
        <div className='single-service'>
            <div className="single-service-content">
                <div className="single-service-banner">
                    <img src="/images/products/image63.jpeg" alt="" />
                    <h1>Adhesif publicitaire</h1>
                </div>
                <div className="content">
                    {showDesc?<ServiceDescription element={<span>Catégorie : <span  className='categ' onClick={()=>setShowDesc(false)}>Lettrage</span></span>}/>:(
                    <>
                    <div className="products">
                        <h1>
                            Produits
                        </h1>
                        <div className="product-element">
                            <img src="/images/products/image64.jpeg" alt="" className="logo" />
                            <h3 className="name">
                                Signelatique
                            </h3>
                            <BsChevronRight/>
                        </div>
                        <div className="product-element">
                            <img src="/images/products/image65.jpeg" alt="" className="logo" />
                            <h3 className="name">
                                Les Écrans LED
                            </h3>
                            <BsChevronRight/>
                        </div>
                        <div className="product-element">
                            <img src="/images/products/image66.jpeg" alt="" className="logo" />
                            <h3 className="name">
                                Les adhesifs publicitaires
                            </h3>
                            <BsChevronRight/>
                        </div>
                        <div className="product-element">
                            <img src="/images/products/image67.jpeg" alt="" className="logo" />
                            <h3 className="name">
                                Les totems
                            </h3>
                            <BsChevronRight/>
                        </div>
                    </div>
                    <div className="service">
                        <p>panneaux publicitaires, vous propose le lettrage adhésif complexe ou le lettrage adhésif simple sur mesure avec un large choix de couleurs et de rendu. Disponibles partout au Maroc ainsi qu’a l’étranger.</p>
                        <div className="resultat-trouve">
                            <span>9 resultat trouvé</span>
                            <select defaultValue={"tri-popularite"} name="tri" id="">
                                    <option value="tri-recent">
                                        Tri du plus récent du plus ancien
                                    </option>
                                    <option value="tri-popularite">
                                        Tri par popularité
                                    </option>
                                    <option value="tri-tarrif-croissant">
                                        Tri par tarif croissant
                                    </option>
                                    <option value="tri-tarif-decroissant">
                                        Tri par tarif decroissant
                                    </option>
                            </select>
                        </div>
                        <div className="elements">
                            <div className="element">
                                <div>
                                    <img src="/images/products/image68.jpeg" alt="" />
                                    <p className="desc">Lettrage adhésif complexe – Doré / Argenté</p>
                                </div>
                                <div className='lire-la-suite'>
                                </div>
                                <button onClick={()=>setShowDesc(true)}>LIRE LA SUITE</button>
                            </div>
                            <div className="element">
                                <div>
                                    <img src="/images/products/image68.jpeg" alt="" />
                                    <p className="desc">Lettrage adhésif complexe – Doré / Argenté</p>
                                </div>
                                <div className='lire-la-suite'>
                                </div>
                                <button onClick={()=>setShowDesc(true)}>LIRE LA SUITE</button>
                            </div>
                            <div className="element">
                                <div>
                                    <img src="/images/products/image68.jpeg" alt="" />
                                    <p className="desc">Lettrage adhésif complexe – Doré / Argenté</p>
                                </div>
                                <div className='lire-la-suite'>
                                </div>
                                <button onClick={()=>setShowDesc(true)}>LIRE LA SUITE</button>
                            </div>
                            <div className="element">
                                <div>
                                    <img src="/images/products/image68.jpeg" alt="" />
                                    <p className="desc">Lettrage adhésif complexe – Doré / Argenté</p>
                                </div>
                                <div className='lire-la-suite'>
                                </div>
                                <button onClick={()=>setShowDesc(true)}>LIRE LA SUITE</button>
                            </div>
                            <div className="element">
                                <div>
                                    <img src="/images/products/image68.jpeg" alt="" />
                                    <p className="desc">Lettrage adhésif complexe – Doré / Argenté</p>
                                </div>
                                <div className='lire-la-suite'>
                                </div>
                                <button onClick={()=>setShowDesc(true)}>LIRE LA SUITE</button>
                            </div>
                            <div className="element">
                                <div>
                                    <img src="/images/products/image68.jpeg" alt="" />
                                    <p className="desc">Lettrage adhésif complexe – Doré / Argenté</p>
                                </div>
                                <div className='lire-la-suite'>
                                </div>
                                <button onClick={()=>setShowDesc(true)}>LIRE LA SUITE</button>
                            </div>
                            <div className="element">
                                <div>
                                    <img src="/images/products/image68.jpeg" alt="" />
                                    <p className="desc">Lettrage adhésif complexe – Doré / Argenté</p>
                                </div>
                                <div className='lire-la-suite'>
                                </div>
                                <button onClick={()=>setShowDesc(true)}>LIRE LA SUITE</button>
                            </div>
                            
                        </div>
                    </div>
                    </>)}
                </div>
            </div>
            <Footer/>
        </div>
    )
}
