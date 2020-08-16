import React from 'react'
import '../../components/our-services/Style.scss'
import '../../Style/main.scss'
import '../../Responsivecss/our-services-responsive.scss'
import Sliderimg from '../../images/slider-image2.png'
import Vectorimg from '../../images/vector-smart.png'
import Imgmobile from '../../images/resrecimg.jpg'

export default () => {
    return (
        <>
            <div className="container-fluid our-services-page-main ">
                <div className="ourservices-first-sec flex">
                    <div className="our-services-text  w-1/2 flex justify-center flex-col items-center">
                        <div className="services-vector-styles flex">
                            <img className="v1" src={Vectorimg} alt="vector" />
                            <div>
                                <img className="v2" src={Vectorimg} alt="vector" />
                            </div>
                            <img className="v3" src={Vectorimg} alt="vector" />
                        </div>
                        <div className="our-services-ambitions">
                            <h1 className="f-s-62 clr-3a f-fm l-h-1-1 f-w-b our-services-heading-main " data-aos="fade-right" data-aos-duration="2000">Our Agency Services</h1>
                            <p className="f-s-21 f-w-b f-fm clr-3a mt-4">Lorem ipsum dolor sit amet, con sectetu adipiscing elit. <br />In sagittis egestas ante, sed viverra nunc.</p></div>
                    </div>
                    <div className="our-services-image w-1/2 flex justify-end ">
                        <div className="resp">
                            <div className="imgDiv ml-2" >
                                <img className="" src={Sliderimg} alt="slider" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* MOBILE-VIEW */}
            <div className="container-fluid our-services-page-main-mobile-view">
                <div className="image-text">
                    <div className="our-services-mobile-image">
                        <img className="mobile-services-image" src={Imgmobile} alt="mobile-view" />
                    </div>
                    <div className="our-services-mobile-heading absolute ml-4">
                        <h1 className="f-fm f-s-24 f-w-b clr-half-white">Our Agency Services</h1>
                        <p className="clr-half-white f-s-18 f-fm-mob f-w-n l-h-1-32">Sed ut perspiciatis unde omnis istenatus error sit voluptatem accusantium doloremque laudantium</p>
                    </div>
                </div>
            </div>
        </>
    )
}