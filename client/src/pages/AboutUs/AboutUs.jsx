import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { FaChevronDown } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import "./aboutUs.scss"

export default function AboutUs() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [index, setIndex] = useState(-6);
    const [showImg, setShowImg] = useState(false);
    const [imgToShow, setImgToShow] = useState("");
    window.addEventListener("scroll",()=>{
        setIsScrolled(window.scrollY===0?false:true);
        reveal();
    })
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 150;
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }
    const handleShowImg = (link)=>{
        if(link){
            setShowImg(true);
            setImgToShow(link);
            document.getElementsByTagName("body")[0].style.overflow = "hidden";
        }else{
            setShowImg(false);
            document.getElementsByTagName("body")[0].style.overflow = "auto";
        }
    }
    const handleImages = ()=>{
        if(index>46){
            setIndex(-6)
        }else{
            setIndex(index+1)
        }
    }
    const handleImageReverse = ()=>{
        if(index<-6){
            setIndex(46)
        }else {
            setIndex(index-1)
        }
    }
    return (
        <div className='aboutus'>
  
                {showImg&&
                    <div className='showImg'>
                        <div className="backgroundShowImg" onClick={()=>handleShowImg()}></div>
                        <div className="img">
                            <img src={imgToShow} alt=""/>
                            <span onClick={()=>handleShowImg()}><AiOutlineClose/></span>
                        </div>
                    </div>
                }
                    <>
                    <div className="aboutUsImg">
                        <img src={`/images/products/image44.jpeg `} alt="" />
                    </div>
                    <div className="textForImg">
                        <p onClick={handleImages}>
                            Art Zoom    
                        </p>    
                        <div className={`arrowDown ${isScrolled&&"scrolled"}`} onClick={handleImageReverse}>
                            <FaChevronDown/>
                        </div>
                    </div>
                    <div className="products reveal">
                        <div className="productsText">
                            <h4>Art Zoom est une entreprise d'industrie publicitaire.</h4>
                            <p>
                                Nous travaillons ensemble pour concevoir, créer et produire des publicités dont nous sommes fiers pour des personnes en qui nous croyons.
                                Icône de validation par la communauté
                            </p> 
                        </div>
                        <div className="productImgs">
                            <img src="/images/products/image41.jpeg" alt="" onClick={()=>handleShowImg("/images/products/image41.jpeg" )}/>
                            <img src="/images/products/image47.jpeg" alt="" onClick={()=>handleShowImg("/images/products/image47.jpeg" )}/>
                            <img src="/images/products/image48.jpeg" alt="" onClick={()=>handleShowImg("/images/products/image48.jpeg" )}/>
                            <img src="/images/products/image49.jpeg" alt="" onClick={()=>handleShowImg("/images/products/image49.jpeg" )}/>
                            <img src="/images/products/image50.jpeg" alt="" onClick={()=>handleShowImg("/images/products/image50.jpeg" )}/>
                            <img src="/images/products/image51.jpeg" alt="" onClick={()=>handleShowImg("/images/products/image51.jpeg" )}/>
                            <img src="/images/products/image52.jpeg" alt="" onClick={()=>handleShowImg("/images/products/image52.jpeg" )}/>
                            <img src="/images/products/image53.jpeg" alt="" onClick={()=>handleShowImg("/images/products/image53.jpeg" )}/>
                        </div>
                        <div className="productHistory reveal">
                            <h2>HISTOIRE</h2>
                            <div>
                                <p>
                                    <b> ArtZoom est une socieété d'habillage des facades commercials </b>
                                    Est enseigns publicitaire basée a Meknes Au 26 BIS rue  Ibn Khaldoun Ville nouvelle Meknes.
                                    Il est doté d'un bureaude la conception et d'études technique. Il est equipé des derniéres technologies indispensables pour la fabrication et l'innovation dans le domain de le domain de la publicité et sinalétique en général.
                                    Notre société propose une panoplie d'enseign publicitaiers pour les clients de meknes et du maroc afin de garantire la durabilité . l'esthétique  et le coté synoptique de vos pannaux, nous fabriquons des enseignes en tôle ou en PVC</p>
                                <p>
                                    Au cours des années qui ont suivi,<b> Art Zoom</b> a travaillé sur un large éventail de projets uniques avec certaines des meilleures personnes du pays et d'ailleurs. Nous nous efforçons de garder notre travail <b>unique</b> et <b>intelligent</b>, avec de la place pour un peu de <b>magie</b>. Vous pouvez trouver notre travail n'importe où, et si le projet vous convient, nous serions ravis de travailler avec vous.
                                </p>
                            </div>     
                        </div>
                        <div className="productFooter">
                            <p>
                            © | ArtZoom | All rights reserved. 
                            </p> 
                            <h5>
                                <Link to="/contactus">
                                    Contact Us
                                </Link>
                            </h5>
                        </div>
                    </div>
                    </>
        </div>
    )
}
