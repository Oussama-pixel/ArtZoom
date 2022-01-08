import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { FaChevronDown } from 'react-icons/fa'
import Footer from '../../components/footer/Footer'
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
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
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
        <>

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
                                <h2>Qui Sommes nous?</h2>
                                <div>
                                    <p>
                                        <b> ArtZoom est une socieété d'habillage des facades commercials </b>
                                        Est enseigns publicitaire basée au <b> <u> 26 BIS rue  Ibn Khaldoun Ville nouvelle Meknes </u> </b>.
                                        Il est doté d'un bureaude la conception et d'études technique. Il est equipé des <b>derniéres</b> technologies indispensables, pour
                                    </p>
                                    <p>
                                        La fabrication et l'innovation dans le domain de la <b>publicité</b> et sinalétique en général.
                                        Notre société propose une panoplie d'enseign publicitaiers pour les clients de <b>meknes et du maroc</b>  afin de garantire la <u> durabilité</u> . <u>l'esthétique</u>  et le coté <u>synoptique</u> de vos pannaux, nous fabriquons des enseignes en tôle ou en PVC.                                
                                    </p>
                                </div>     
                            </div>
                        </div>
                    </>
                    <Footer/>
            </div>
        </>
    )
}
