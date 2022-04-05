import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { get_file_action } from '../../state/actions/FilesAction';
import Element from '../element/Element'
import "./adminPage.scss"

export default function AdminPage() {
    const dispatch = useDispatch();
    const files = useSelector(state=>state.files);
    const admin = useSelector(state=>state.admin)
    const listRef = useRef([]);
    useEffect(()=>{
        !admin.data&&window.location.replace("/login");
        dispatch(get_file_action("products","home"))
    },[admin.data, dispatch])
    useEffect(()=>{
        listRef.current.map(item=>{
            if(files.files){
                if(item.className.includes(files.files[0].page)||files.files[0].page.includes(item.className)){
                    item.classList.add("selected")
                }else{
                    item.classList.remove("selected")
                }
            }
            return item;
        })
    },[dispatch, files])

    const get_files = (table,type)=>{
        dispatch(get_file_action(table,type))
    }
  return (
    <div className='dashboard'>
        <div className="left-list">
            <ul>
                <li className="home-list" onClick={()=>get_files("products","home")} ref={ref=>ref!==null&&listRef.current.push(ref)}>
                    Acceuil
                </li>
                <li className="about-us-list" onClick={()=>get_files("products","about-us")} ref={ref=>ref!==null&&listRef.current.push(ref)}>
                    A propos de nous
                </li>
                <li className="services-list" onClick={()=>get_files("products","services")} ref={ref=>ref!==null&&listRef.current.push(ref)}>
                    Services
                </li>
                <li className="adhesif" onClick={()=>get_files("services","service-adhesif")} ref={ref=>ref!==null&&listRef.current.push(ref)}>
                    Service Adhésif
                </li>
                <li className="signelatique" onClick={()=>get_files("services","service-signelatique")} ref={ref=>ref!==null&&listRef.current.push(ref)}>
                    Service Signelatique
                </li>
                <li className="totem" onClick={()=>get_files("services","service-totem")} ref={ref=>ref!==null&&listRef.current.push(ref)}>
                    Service Totem
                </li>
                <li className="led" onClick={()=>get_files("services","service-ecrans")} ref={ref=>ref!==null&&listRef.current.push(ref)}>
                    Service Écrans LED
                </li>
                <li className="enseigne" onClick={()=>get_files("services","service-enseigne")} ref={ref=>ref!==null&&listRef.current.push(ref)}>
                    Service Enseigne
                </li>
                <li className="contactez-nous-list" onClick={()=>get_files("products","contactez-nous")} ref={ref=>ref!==null&&listRef.current.push(ref)}>
                    Contactez nous
                </li>
            </ul>
        </div>
        <div className="content">
            {files.files&&files.files.map((item,index)=>(
                <Element type={item.page} key={index} item={item}/>
            ))}
        </div>
    </div>
  )
}
