import React, { useEffect } from 'react'
import "./home.scss"
import Banner from '../../components/Banner/Banner'

export default function Home() {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <>
            <div class="bg">
                <img src="/images/products/image60.jpeg" alt="" />
            </div>
            {
            /* <div class="bg bg2"></div>
                <div class="bg bg3"></div>
            */}
            <main>
                <Banner/>
            </main>
        </>
    )
}
