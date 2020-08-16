import React from 'react'
import '../who-we-are/Style.scss'
import '../../Style/main.scss'
import '../../Responsivecss/who-we-are-responsive.scss'
import Sliderimg from '../../images/slider-image2.png'
import Vectorimg from '../../images/vector-smart.png'
import Mobimg from '../../images/resrecimg.jpg'
export default () => {
    return (
        <>
            <div className="container-fluid who-we-are-main ">
                <div className="who-we-are-first-sec flex">
                    <div className="who-we-are-text  w-1/2 flex justify-center flex-col items-center">
                        <div className="who-we-are-vector-styles flex">
                            <img className="v1" src={Vectorimg} alt="vector" />
                            <div>
                                <img className="v2" src={Vectorimg} alt="vector" />
                            </div>
                            <img className="v3" src={Vectorimg} alt="vector" />
                        </div>
                        <div className="who-we-are-ambitions">
                            <h1 className="f-s-62 clr-3a f-fm l-h-1-1 f-w-b who-we-are-heading-main " data-aos="fade-right" data-aos-duration="2000">Who We Are</h1>
                            <p className="f-s-21 f-w-b f-fm clr-3a mt-4">It’s important for us to adhere our values, as they<br /> embody our agency and define the way that we work.</p></div>
                    </div>
                    <div className="who-we-are-page-image w-1/2 flex justify-end ">
                        <div className="resp">
                            <div className="imgDiv ml-2" >
                                <img className="" src={Sliderimg} alt="side" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* Mobile-view */}

            <div className="who-we-are-mob-first-sec">
                <div className="display-image">
                    <img className="main-image" src={Mobimg} alt="main" />
                </div>
                <div className="heading-main-who-we-are">
                    <h1 className="f-s-24 f-w-b clr-half-white f-fm">Who We Are</h1>
                    <p className="f-s-18 f-fm clr-half-white">It’s important for us to adhere our values, as they embody our agency and define the way that we work.</p>
                </div>
            </div>



        </>
    )
}