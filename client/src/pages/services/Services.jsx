import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./services.scss"
import {AiOutlineCheckSquare} from 'react-icons/ai'
import Footer from '../../components/footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { get_file_action } from '../../state/actions/FilesAction'
export default function Services() {
    const dispatch = useDispatch();
    const files = useSelector(state=>state.files);
    
    useEffect(()=>{
        window.scrollTo(0,0)
        dispatch(get_file_action("products","services"))
    },[dispatch])

    return (
        <div className='services'>
            <div className="backgroundImg">
                <div className="backgroundShadow"></div>
                <img src={files?.files?.at(0)?.image} alt="" />
                <div className="banner">
                    <h1>NOS SERVICES</h1>
                </div>
            </div>
            <div className="content">
                <div className="Servicestext">
                    <h1>NOS SERVICES</h1>
                    <h4>DES PROJETS BIEN MENÉS, DES CLIENTS SATISFAITS !</h4>
                </div>

                <div className="types">
                    <div className="type">
                        <div className="typeImg">
                            <img src={files?.files?.at(1)?.image} alt="" />
                        </div>
                        <div className="legende">
                            <div className="title">
                                <AiOutlineCheckSquare className="checkIcon"/>
                                <h1>Enseignes publicitaires</h1>
                            </div>
                            <div className="description">
                                <p>L’enseigne publicitaire est le meilleur moyen d’attirer l’attention à votre entreprise.</p>
                            </div>
                            <div className="learnMore">
                                <Link to="/service" state={{type:"enseigne"}}>EN SAVOIRE PLUS</Link>
                            </div>
                        </div>
                    </div>
                    <div className="type">
                        <div className="typeImg">
                            <img src={files?.files?.at(2)?.image} alt="" />
                        </div>
                        <div className="legende">
                            <div className="title">
                                <AiOutlineCheckSquare className="checkIcon"/>
                                <h1>Les totems</h1>
                            </div>
                            <div className="description">
                                <p>une forme très prisée des enseignes publicitaires, il est utilisé pour attirer l’attention du client , l’orienter et faire reconnaître votre marque ou un produit.</p>
                            </div>
                            <div className="learnMore">
                                <Link to="/service"state={{type:"totem"}}>EN SAVOIRE PLUS</Link>
                            </div>
                        </div>
                    </div>
                    <div className="type">
                        <div className="typeImg">
                            <img src={files?.files?.at(3)?.image} alt="" />
                        </div>
                        <div className="legende">
                            <div className="title">
                                <AiOutlineCheckSquare className="checkIcon"/>
                                <h1>La signalétique</h1>
                            </div>
                            <div className="description">
                                <p>la signalétique est un élément majeur de la communication publicitaire. Les clients ont besoins d’être orientés guidés afin d’arriver à l’emplacement exacte de l’entreprise</p>
                            </div>
                            <div className="learnMore">
                                <Link to="/service" state={{type:"signelatique"}}>EN SAVOIRE PLUS</Link>
                            </div>
                        </div>
                    </div>
                    <div className="type">
                        <div className="typeImg">
                            <img src={files?.files?.at(4)?.image} alt="" />
                        </div>
                        <div className="legende">
                            <div className="title">
                                <AiOutlineCheckSquare className="checkIcon"/>
                                <h1>Les adhésifs publicitaires</h1>
                            </div>
                            <div className="description">
                                <p>Représentant un support de communication efficace adaptable pouvant être utilisés sur murs, sols, véhicules ,vitrines..</p>
                            </div>
                            <div className="learnMore">
                                <Link to="/service" state={{type:"adhesif"}}>EN SAVOIRE PLUS</Link>
                            </div>
                        </div>
                    </div>
                    <div className="type">
                        <div className="typeImg">
                            <img src={files?.files?.at(5)?.image} alt="" />
                        </div>
                        <div className="legende">
                            <div className="title">
                                <AiOutlineCheckSquare className="checkIcon"/>
                                <h1>Les Écrans LED</h1>
                            </div>
                            <div className="description">
                                <p>Représentant un support de communication efficace adaptable pouvant être utilisés sur murs, sols, véhicules ,vitrines..</p>
                            </div>
                            <div className="learnMore">
                                <Link to="/service" state={{type:"ecrans"}}>EN SAVOIRE PLUS</Link>
                            </div>
                        </div>
                    </div>
                    <div className="type">
                        <div className="typeImg">
                            <img src={files?.files?.at(6)?.image} alt="" />
                        </div>
                        <div className="legende">
                            <div className="title">
                                <AiOutlineCheckSquare className="checkIcon"/>
                                <h1>Les Matricules des Voitures.</h1>
                            </div>
                            <div className="description">
                                <p>Représentant un support de communication efficace adaptable pouvant être utilisés sur murs, sols, véhicules ,vitrines..</p>
                            </div>
{/* {                            <div className="learnMore">
                                <Link to="">EN SAVOIRE PLUS</Link>
                            </div>} */}
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
