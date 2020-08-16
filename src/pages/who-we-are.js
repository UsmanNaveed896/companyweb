import React from 'react'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import Whoweare from '../components/who-we-are/who-we-are'
import SectionB from '../components/who-we-are-sec-b/who-sec-B'
import SectionC from '../components/who-we-are-secC/SectionC'
import '../Style/main.scss'

export default ()=>{
    return(
        <div>
     <Header/>
        <Whoweare/>
        <SectionB/>
        <SectionC/>
     <Footer/>
        </div>
    )
}