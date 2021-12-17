import React from 'react'
import TopBar from '../../components/TopBar/TopBar'
import "./aboutUs.scss"

export default function AboutUs() {
    return (
        <div className='aboutus'>
            <TopBar/>
            <div className="aboutUsImg">
                <img src="/images/products/yyho.jpg" alt="" />
            </div>
            <div className="textForImg">
                <p>
                    Art Zoom    
                </p> 
            </div>
        </div>
    )
}
