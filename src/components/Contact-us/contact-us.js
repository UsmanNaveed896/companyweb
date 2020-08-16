import React from 'react'
import '../Contact-us/Style.scss'
import '../../Style/main.scss'
import '../../Responsivecss/contact-us-secb-responsive.scss'
import Sliderimg from '../../images/slider-image2.png'
import Vectorimg from '../../images/vector-smart.png'
export default () => {
    return (
        <div className="container-fluid Contact-us-page-main ">
            <div className="contact-us-first-sec flex">
                <div className="contact-us-text  w-1/2 flex justify-center flex-col items-center">
                    <div className="contact-vector-styles flex">
                        <img className="v1" src={Vectorimg} alt="vector" />
                        <div>
                            <img className="v2" src={Vectorimg} alt="vector" />
                        </div>
                        <img className="v3" src={Vectorimg} alt="vector" />
                    </div>
                    <div className="contact-us-ambitions">
                        <h1 className="f-s-62 clr-3a f-fm l-h-1-1 f-w-b contact-us-heading-main " data-aos="fade-right" data-aos-duration="2000">Contact Us</h1>
                        <p className="f-s-21 f-w-b f-fm clr-3a mt-4">Lorem ipsum dolor sit amet, con sectetu adipiscing elit. <br />In sagittis egestas ante, sed viverra nunc.</p></div>
                </div>
                <div className="contactus-page-image w-1/2 flex justify-end ">
                    <div className="resp">
                        <div className="imgDiv ml-2" >
                            <img className="" src={Sliderimg} alt="side-img" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}