import React from 'react'
import Home from '../components/homepage/home'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import HomesecB from '../components/home-pages-secB/sec-B'
import HomesecC from '../components/home-page-secC-ourservices/SecC-ourservices'
import Homelastsec from '../components/home-page-last/last-sec'
import Carousal from '../components/Carousel/Carousel'

export default()=>{
    return(
        <div>
         <Header/>
        <Home/> 
        <HomesecB/>
        <HomesecC/>
         <Carousal/>
         <Footer/>
        </div>
    )
}