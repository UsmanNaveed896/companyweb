import React, { useState } from 'react';
import '../../node_modules/tailwindcss/dist/tailwind.min.css'
import '../../node_modules/aos/dist/aos.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from '../components/homepage/home'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import HomesecB from '../components/home-pages-secB/sec-B'
import HomesecC from '../components/home-page-secC-ourservices/SecC-ourservices'
import Homelastsec from '../components/home-page-last/last-sec'
import Modal from '../components/Modal/modal'
// import Carousal from '../components/Carousel/Carousel'

export default () => {
  const[show ,setShow]=useState(true);
  const[popup,setPopup]=useState(false);
  return(
    <div>
        <Header/>
        <Home/>  
          <HomesecB/> 
        <HomesecC/> 
         <Homelastsec show={show} setShow={setShow} popup={popup} setPopup={setPopup}/>
         <Modal  popup={popup} setPopup={setPopup} show={show} setShow={setShow}/>  
            <Footer/>  
    </div>
  )
}