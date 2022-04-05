import React, { useEffect, useRef, useState } from 'react'
import "./service.scss"
import Footer from '../../components/footer/Footer'
import {BsChevronRight} from 'react-icons/bs'
import ServiceDescription from './Single_Service_Description/ServiceDescription'
import { useDispatch, useSelector } from 'react-redux'
import { get_file_action } from '../../state/actions/FilesAction'
import { useLocation } from 'react-router-dom'
export default function Service() {
    const [showDesc, setShowDesc] = useState(false)
    const selectRef = useRef([]);
    const dispatch = useDispatch();
    const files = useSelector(state=>state.files)
    const location = useLocation();
    console.log(files);
    useEffect(()=>{
        location&&location.state&&
        dispatch(get_file_action("services","service-"+location.state.type));
        console.log(selectRef.current)
    },[dispatch, location])
    
    const handleTypeChange = name=>{
        selectRef.current.map(item=>{
            if(item.name===name){
                item.classList.add("selected")
            }else{
                item.classList.remove("selected");
            }
            return item;
        })

        location.state.type = name;
        selectRef.current.length>0&&selectRef.current.map(item=>{
            console.log(name,item.innerText);
            if(item.innerText.toLowerCase().replace("é","e").includes(name)){
                item.classList.add("selected"); 
            }
            return item;
        })
        
        dispatch(get_file_action("services","service-"+name))
        console.log(selectRef.current);
    }
    return (
        <div className={`single-service ${showDesc?'serv-desc':''}`}>
            <div className="single-service-content">
                <div className="single-service-banner">
                    <img src={files.files&&files.files[0].image} alt="" />
                    <h1>{files.files&&files.files[0]&&files.files[0].service&&files.files[0].service.toString()[0].toUpperCase()+files.files[0].service.slice(1) +" Publicitaire"}</h1>
                </div>
                {showDesc?<ServiceDescription element={<span>Catégorie : <span  className='categ' onClick={()=>setShowDesc(false)}>Lettrage</span></span>}/>:(
                <div className="content">
                    <div className="products">
                        <h1>
                            Produits
                        </h1>
                        <div className="product-element" name="signelatique" ref={ref=>ref!==null&&(selectRef.current.push(ref))} onClick={e=>handleTypeChange("signelatique")}>
                            <img src="/images/products/image64.jpeg" alt="" className="logo" />
                            <h3 className="name">
                                Signelatique
                            </h3>
                            <BsChevronRight/>
                        </div>
                        <div className="product-element" name="ecrans-led" ref={ref=>ref!==null&&(selectRef.current.push(ref))} onClick={e=>handleTypeChange("ecrans")}>
                            <img src="/images/products/image65.jpeg"  alt="" className="logo" />
                            <h3 className="name">
                                Les Écrans LED
                            </h3>
                            <BsChevronRight/>
                        </div>
                        <div className="product-element" name="adhesif-publicitaire" ref={ref=>ref!==null&&(selectRef.current.push(ref))} onClick={e=>handleTypeChange("adhesif")}>
                            <img src="/images/products/image66.jpeg" alt="" className="logo" />
                            <h3 className="name">
                                Les adhesifs publicitaires
                            </h3>
                            <BsChevronRight/>
                        </div>
                        <div className="product-element" name="les-totems" ref={ref=>ref!==null&&(selectRef.current.push(ref))} onClick={e=>handleTypeChange("totem")}>
                            <img src="/images/products/image67.jpeg" alt="" className="logo" />
                            <h3 className="name">
                                Les totems
                            </h3>
                            <BsChevronRight/>
                        </div>
                        <div className="product-element" name="les-enseignes" ref={ref=>ref!==null&&(selectRef.current.push(ref))} onClick={e=>handleTypeChange("enseigne")}>
                            <img src="/images/products/image48.jpeg" alt="" className="logo" />
                            <h3 className="name">
                                Les enseignes
                            </h3>
                            <BsChevronRight/>
                        </div>
                    </div>
                    <div className="service">
                        <p className='description-service'>{files.files&&files.files[0].description}</p>
                        <div className="resultat-trouve">
                            <span>{files.files&&files.files.filter(item=>!item.name.includes("banner")).length} resultat trouvé</span>
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
                            {files.files&&files.files.filter(item=>!item.name.includes("banner")).map((item,index)=>(
                                <div className="element" key={index}>
                                    <div>
                                        <img src={item.image} alt="" />
                                        <p className="desc">{item.name}</p>
                                    </div>
                                    <div className='lire-la-suite'>
                                    </div>
                                    <button onClick={()=>setShowDesc(true)}>LIRE LA SUITE</button>
                                </div>

                            )) }
                        </div>
                    </div>
                </div>
                )}
            </div>
            <Footer/>
        </div>
    )
}
