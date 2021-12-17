import React, { useState } from 'react'
import "./topbar.scss";
import { AiOutlineAlignRight } from "react-icons/ai";
import { Link } from 'react-router-dom';
export default function TopBar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [clickedMenuBtn, setClickedMenuBtn] = useState(false)
    window.onscroll = ()=>{
        setIsScrolled(window.pageYOffset===0?false:true);
    }
    return (
        <div className={`topbar ${isScrolled&&"scrolled"} ${clickedMenuBtn&&"clickedMenuBtn"}`}>
            <div className='logo'>
                <Link to="/">
                    <img src="/images/logo.png" alt="" />
                </Link>
            </div>

            <div className="navButtons">
                <ul>
                    <li>
                        <Link to="/aboutUs">
                            À propos de nous
                        </Link>
                    </li>
                    <li>
                        <Link to="/Services">
                            Services 
                        </Link>
                    </li>
                    <li>
                        <Link to="contactUs">
                            Contactez Nous
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="menuBtn" onClick={()=>setClickedMenuBtn(!clickedMenuBtn)}>
                <AiOutlineAlignRight className='theMenuBtn'/>
            </div>
        </div>
    )
}
