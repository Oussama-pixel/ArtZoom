import React from 'react'
import "./home.scss"
import Banner from '../../components/Banner/Banner'
import TopBar from '../../components/TopBar/TopBar'

export default function Home() {
    return (
        <>
            <div className='background'>
            </div>
            <TopBar/>
            <main>
                <Banner/>
            </main>
        </>
    )
}
