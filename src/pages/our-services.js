import React from 'react'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import Ourservicessec1 from '../components/our-services/our-services-sec1'
import Ourservicessec2 from '../components/our-services-secB/section-B'
import Ourserviceslast from '../components/our-services-last-sec/last-sec'
import '../Style/main.scss'

export default ()=>{
    return(
        <div>
            <Header/>
            <Ourservicessec1/>
            <Ourservicessec2/>
            <Ourserviceslast/>
            <Footer/>
        </div>
    )
}