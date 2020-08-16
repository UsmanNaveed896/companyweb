import React from 'react'
import '../../Style/main.scss'
import '../home-page-secC-ourservices/style.scss'
import Whiterectangle from '../../images/whiterect.png'
import Cardbackimg from '../../images/vector-smart-12.jpg'
import Sideimg from '../../images/side-image.jpg'
import AOS from 'aos'
import Whiteribbonimg from '../../images/ribbon.png'
import '../../Responsivecss/home-page-secC-responsive.scss'
typeof document !== "undefined" && AOS.init();
export default () => {
    return (
        <>
            <div className="container-fluid sec-C-main flex mt-40">
                <div className="Our-Services w-full flex">
                    <div className="sec-C-start w-1/2 flex flex-col justify-center  " data-aos="fade-right" data-aos-duration="2000">
                        <div className="our-services-heading flex justify-center w-2/3 mr-2 "><h1 className="f-s-18 f-fm clr-5a f-w-b mr-12 our-services-head">Our Services</h1></div>
                        <div className="flex justify-center ml-8 w-5/6 our-services-p"> <h1 className="Sec-C-main-heading f-s-52 f-fm f-w-b clr-black">We transform your product into the business tool it's meant to be</h1></div>
                        <div className="read-succes-story-button-C mt-10 flex w-2/3 ml-12 justify-center">
                            <button className="read-success-button-C f-fm btn-clr clr-half-white ml-4 mt-16">Read Success Story</button>
                        </div>
                    </div>

                    <div className="deadA flex flex-wrap w-2/5" data-aos="fade-left" data-aos-duration="2000">
                        <div className="SecB-credentials flex  mt-10">
                            <div className="product-design">
                                <div className="card-background-img float-right">
                                    <img className="back-img absolute" src={Cardbackimg} alt="card4" />
                                </div>
                                <div className="rectangle-image">
                                    <img src={Whiterectangle} alt="rectangle" />
                                </div>
                                <div className="product-design-text absolute">
                                    <h1 className="mt-5 ml-5 f-s-25 f-fm f-clr-black f-w-600">Creative Design</h1>
                                    <p className="design-text f-s-18 f-fm clr-5a">Designing UI and UX is our area of expertise, and
                                    remains the lifeblood of our business to this today. </p>
                                </div>

                            </div>
                        </div>
                        <div className="mobile-div">
                            <div className="SecB-credentials flex ml-10 mt-10">
                                <div className="product-design">
                                    <div className="card-background-img float-right">
                                        <img className="back-img absolute" src={Cardbackimg} alt="card3" />
                                    </div>
                                    <div className="rectangle-image">
                                        <img src={Whiteribbonimg} alt="rectangle" />
                                    </div>
                                    <div className="product-design-text absolute">
                                        <h1 className="mt-5 ml-5 f-s-25 f-fm f-clr-black f-w-600">Web App Development</h1>
                                        <p className="design-text f-s-18 f-fm clr-5a">Bring your vision to life with next-generation web solutions </p>
                                    </div>

                                </div>
                            </div>
                        </div>


                        <div className="SecB-credentials flex  mt-10">
                            <div className="product-design">
                                <div className="card-background-img float-right">
                                    <img className="back-img absolute" src={Cardbackimg} alt="card2" />
                                </div>
                                <div className="rectangle-image">
                                    <img src={Whiterectangle} alt="rectangle" />
                                </div>
                                <div className="product-design-text absolute">
                                    <h1 className="mt-5 ml-5 f-s-25 f-fm f-clr-black f-w-600">Creative Design</h1>
                                    <p className="design-text f-s-18 f-fm clr-5a">Designing UI and UX is our area of expertise, and
                                    remains the lifeblood of our business to this today. </p>
                                </div>

                            </div>
                        </div>

                        <div className="SecB-credentials flex ml-10 mt-10">
                            <div className="product-design">
                                <div className="card-background-img float-right">
                                    <img className="back-img absolute" src={Cardbackimg} alt="card" />
                                </div>
                                <div className="rectangle-image">
                                    <img src={Whiteribbonimg} alt="rectangle" />
                                </div>
                                <div className="product-design-text absolute">
                                    <h1 className="mt-5 ml-5 f-s-25 f-fm f-clr-black f-w-600">Web App Development</h1>
                                    <p className="design-text f-s-18 f-fm clr-5a">Bring your vision to life with next-generation web solutions </p>
                                </div>

                            </div>

                        </div>

                    </div>
                    <div className="read-succes-story-button-C-mobile mt-10  ">
                        <button className="read-success-button-C-mobileview f-fm btn-clr clr-half-white mt-16">Read Success Story</button>
                    </div>
                    <div className="background-style-img -mt-10">
                        <img src={Sideimg} alt="side-style" />
                    </div>
                </div>
            </div>
        </>
    )
}