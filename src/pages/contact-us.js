import React from 'react'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import Contactus from '../components/Contact-us/contact-us'
import Secb from '../components/contact-us-secB/Contact-us-secb'
import '../Style/main.scss'
export default ()=>{
    return(
        <div>
        <Header/>
       <Contactus/> 
        <Secb/>
        <Footer/>
        </div>
    )
}