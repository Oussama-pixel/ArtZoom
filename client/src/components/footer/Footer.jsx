import React from 'react'
import { Link } from 'react-router-dom'
import "./footer.scss"
import {MdPlace} from 'react-icons/md'
import {FaPhoneAlt} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import {IoIosArrowForward} from 'react-icons/io'

export default function Footer() {
    const jours = ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"];
    return (
        <>
        <div className="productFooter">
            <div className="ste-info"> 
                <div className="ste-info-titre">
                    <p>
                        Art Zoom Maroc
                    </p> 
                </div>
                <div className="ste-info-desc">
                Fabricant de panneaux publicitaire, d’enseignes lumineuses Leds ou néon et de signalétique à Marrakech, et sa région (Safi, Benguerir, Essaouira,  Youssofia, Chichaoua, Kelaa des sraghna, Ait ourir, et Ouarzazate), M&N Publicité installe vos enseignes dans toute le Maroc.
                </div>
                <div className="ste-info-contact-info">
                    <div className="address">
                        <MdPlace className='info-icon'/>
                        <p>Rue ibn sina, résidence le noyer D, 5eme étage Appartement 52, Gueliz, Marrakech, Maroc</p>
                    </div>
                    <div className="telephone">
                        <FaPhoneAlt className='info-icon'/>
                        <p>0640760574</p>
                    </div>
                    <div className="email">
                        <MdEmail className='info-icon'/>
                        <p>artzoom_pub@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="sitemap"> 
                <div className="ste-info-titre">
                    <p>
                        Sitemap
                    </p>
                </div>
                <div className="sitemap-links">
                    <div className="sitemap-link">
                        <Link to="/">
                            <span>
                                <IoIosArrowForward/>
                            </span>
                            <p>Accueil</p>
                        </Link>
                    </div>
                    <div className="sitemap-link">
                        <Link to="/aboutUs">
                            <span>
                                <IoIosArrowForward/>
                            </span>
                            <p>À propos de nous</p>
                        </Link>
                    </div>
                    <div className="sitemap-link">
                        <Link to="/contactUs">
                            <span>
                                <IoIosArrowForward/>
                            </span>
                            <p>Contactez Nous</p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="horaires">
                <div className="ste-info-titre">
                    <p>Horaires</p>
                </div>
                <div className="horaires-jours">
                    {jours.map((item,index)=>(
                        <div className="horaires-jour" key={index}>
                            <span className='horaires-jour-titre'>{item}</span>
                            <span className="horaires-jour-heurs">
                                {item==="Samedi"?"09h > 14h":item==="Dimanche"?"Fermé":"09h > 17h"}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div className="copyright">
            <p>
            © | ArtZoom | Tous droits réservés. 
            </p> 
            <h5>
                <Link to="/contactus">
                    Contactez Nous
                </Link>
            </h5>
        </div>
        </>
    )
}
