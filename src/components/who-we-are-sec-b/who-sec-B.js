import React from 'react'
import '../who-we-are-sec-b/Style.scss'
import Dott3img from '../../images/dotted3.png'
import Diamondimg from '../../images/diamond.png'
import Oval from '../../images/oval.png'
import Rectangleimg from '../../images/rectangle.png'
import Square from '../../images/square.png'
import Mobileview from '../../images/layer-6.png'
import '../../Responsivecss/who-we-are-secB-responsive.scss'
export default () => {
    return (
        <>
            <div className=" who-we-are-second-part-main mt-40">
                <div className="who-we-are w-full flex">
                    <img className="threedott" src={Dott3img} alt="dott" />
                    <div className="partB-start w-1/2 flex flex-col justify-center ml-24 mt-10" data-aos="fade-right" data-aos-duration="2000">
                        <div className="diamond-image flex justify-center ml-8">
                            <img className="diamond" src={Diamondimg} alt="diamond" />
                        </div>
                        <div className="who-we-are-heading flex justify-center  w-2/3 ml-64 "><h1 className="f-s-18 f-fm clr-5a f-w-b ml-8 our-services-head">About Us</h1></div>
                        <div className="who-we-are-headingB  flex justify-center" >
                            <h1 className="f-s-42 f-fm f-clr-black f-w-b">Insights and resources to help drive your business forward faster.</h1>
                        </div>
                        <div className="second-part-text flex justify-center ">
                            <p className="f-s-18 f-fm clr-rgba-90-9  ">We build results-oriented brand strategies and continually refine your campaigns for the greatest
                            outcome. From full-scale design interface to development,
                                               right through to our precise execution and reporting...that's right, we've got you covered</p>

                        </div>
                        <div className="second-part-text flex justify-center">
                            <p className="f-s-18 f-fm clr-rgba-90-9">Always aiming high and striving to achieve more; we apply strategy and creativity to everything we do.
                            Approaching challenges with positivity, we are inclusive - sharing our skills and experience with
                                  colleagues and clients alike. The Designer is razor sharp, always on it. Commercial, focused and agile.</p>
                        </div>
                    </div>
                    <div className="partB-image w-1/2 mt-48" data-aos="fade-left" data-aos-duration="2000">
                        <div className="layer-img">
                            <img src={Oval} alt="oval" />
                        </div>
                    </div>
                </div>


                {/* PartB of SectionB */}
                <div className=" why-we-exist mt-64">
                    <div className="image-mobile"><div><img className="mobile-image" src={Mobileview} alt="mobile-screen" /></div></div>
                    <div className="why-we-exist w-full flex">
                        <div className="animated-images w-1/2">
                            <div className="first-image flex justify-end" data-aos="fade-right" data-aos-duration="2000">
                                <div>
                                    <img className="rectangle" src={Rectangleimg} alt="rectangle" />
                                </div>
                            </div>
                            <div className="second-image flex justify-end w-3/4" data-aos="fade-up" data-aos-duration="2500">
                                <div className="fade-up">
                                    <img className="square" src={Square} alt="square" />
                                </div>
                            </div>
                        </div>
                        <div className="why-do-we-exist-heading w-1/2 " data-aos="fade-left" data-aos-duration="2000">
                            <div className="heading-first flex justify-center">
                                <div>
                                    <h1 className="f-s-42 f-fm f-w-b f-clr-black">Why Do We Exist?</h1>
                                    <p className="f-s-18 f-fm clr-rgba-90-9">We believe every business owner should have an online presence that clearly expresses their unique
                                    offering to the world. We have a unique passion for under represented,
                                 minority owned businesses who don’t always have the resources to invest in modern marketing.</p>
                                </div>
                            </div>
                            <div className="heading-second flex justify-center">
                                <div>
                                    <h1 className="f-s-42 f-fm f-w-b f-clr-black">How Do We Do It?</h1>
                                    <p className="f-s-18 f-fm clr-rgba-90-9">We pinpoint the objective of each business we work with, build a
                                    comprehensive strategy (with specific timelines and budgets in mind) and get to work on making growth goals
                                    come true! We mobilize our team to execute on winning you new customers
                             through a measurable and intentional plan of action. Technology and marketing should be fun and easy!</p>
                                </div>
                            </div>
                            <div className="heading-third flex justify-center">
                                <div>
                                    <h1 className="f-s-42 f-fm f-w-b f-clr-black">What Do We Do Best?</h1>
                                    <p className="f-s-18 f-fm clr-rgba-90-9">We craft world-class marketing strategies, custom designed web applications, mobile applications, for multicultural business owners</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>



        </>
    )
}