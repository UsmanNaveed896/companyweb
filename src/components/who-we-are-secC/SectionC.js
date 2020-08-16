import React, { useEffect } from 'react'
import '../../components/who-we-are-secC/Style.scss'
import '../../Responsivecss/who-we-are-secC-responsive.scss'
import Heartpic from '../../images/b2.png'
import Dottimg from '../../images/dots2.png'
import TeamMember1 from '../../images/p1.png'
import TeamMember2 from '../../images/p2.png'
import TeamMember3 from '../../images/p3.png'
import TeamMember4 from '../../images/p4.png'
import $ from 'jquery'

export default () => {
    useEffect(() => {
        var a = 0;
        $(window).scroll(function () {

            var oTop = $('#counter').offset().top - window.innerHeight;
            if (a == 0 && $(window).scrollTop() > oTop) {
                $('.counter-value').each(function () {
                    var $this = $(this),
                        countTo = $this.attr('data-count');
                    $({
                        countNum: $this.text()
                    }).animate({
                        countNum: countTo
                    },

                        {
                            duration: 2000,
                            easing: 'swing',
                            step: function () {
                                $this.text(Math.floor(this.countNum));
                            },
                            complete: function () {
                                $this.text(this.countNum);
                                //alert('finished');
                            }

                        });
                });
                a = 1;
            }

        });
    });
    return (
        <>
            <div className="container-fluid progress-rounds-main mt-64">
                <div className="progress-circles-start w-full mt-64 flex">
                    <div className="first-two-circles w-1/2 flex justify-center mt-64">
                        <div className="background-heart-image">
                            <img className="heart-pic" src={Heartpic} alt="heart" />
                        </div>
                        <div className="c1 absolute ">
                            <div className="circle-text">
                                <div style={{ marginTop: '5rem' }}>
                                    <h className=" f-fm f-s-21 f-w-600 f-str-n f-sty-n l-h-1-71 l-spc-n f-clr-black text-center">
                                        Happy Clients</h>
                                </div>
                                <div className="flex" style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}>
                                    <p id="counter" data-count="150" className=" counter-value f-fm f-s-48 f-w-600 f-str-n f-sty-n l-h-1-71 l-spc-n clr-ef">0</p>
                                    <span className="plusicon">+</span>
                                </div>
                            </div>
                        </div>
                        <div className="c2">
                            <div className="circle-text">
                                <div style={{ marginTop: '5rem' }}>
                                    <h className=" f-fm f-s-21 f-w-600 f-str-n f-sty-n l-h-1-71 l-spc-n f-clr-black text-center">
                                        Project Done </h>
                                </div>
                                <div className="flex" style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}>
                                    <p id="counter" data-count="200" className=" counter-value f-fm f-s-48 f-w-600 f-str-n f-sty-n l-h-1-71 l-spc-n clr-ef">0</p>
                                    <span className="plusicon">+</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Last-two-circles w-1/2 flex justify-center mt-64">
                        <div className="c3 absolute ">
                            <div className="circle-text">
                                <div style={{ marginTop: '5rem' }}>
                                    <h className=" f-fm f-s-21 f-w-600 f-str-n f-sty-n l-h-1-71 l-spc-n f-clr-black text-center">
                                        Referral Rate </h>
                                </div>
                                <div className="flex" style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}>
                                    <p id="counter" data-count="91" className=" counter-value f-fm f-s-48 f-w-600 f-str-n f-sty-n l-h-1-71 l-spc-n clr-ef">0</p>
                                    <span className="percent-icon">%</span>
                                </div>
                            </div>
                        </div>
                        <div className="c4">
                            <div className="circle-text">
                                <div style={{ marginTop: '5rem' }}>
                                    <h className=" f-fm f-s-21 f-w-600 f-str-n f-sty-n l-h-1-71 l-spc-n f-clr-black text-center">
                                        Client Retention </h>
                                </div>
                                <div className="flex" style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}>
                                    <p id="counter" data-count="86" className=" counter-value f-fm f-s-48 f-w-600 f-str-n f-sty-n l-h-1-71 l-spc-n clr-ef">0</p>
                                    <span className="percent-icon">%</span>
                                </div>
                            </div>
                        </div>
                        <div className="background-heart-image">
                            <img className="dotts-pic" src={Dottimg} alt="dot" />
                        </div>
                    </div>
                </div>
            </div>
            {/* LAST SECTION OF WHO WE ARE */}
            <div className="our-team w-full pb-64 mt-32">
                <div className="our-team-heading flex justify-center mt-16">
                    <div><h2 className="f-s-42 f-clr-black f-w-b f-fm ">Our Team</h2></div>
                </div>
                <div className="our-team-images  flex justify-center">
                    <div className="our-team-sec-start flex w-4/5 justify-between">
                        <div className="first-team-member">
                            <img className="" src={TeamMember1} alt="first" />
                            <h1 className="f-s-24 f-w-b f-clr-black text-center">Afzal Tanoli</h1>
                            <p className="f-s-16 f-fm clr-rgba-239-8 text-center">CEO</p>
                        </div>
                        <div className="second-team-member">
                            <img className="" src={TeamMember2} alt="first" />
                            <h1 className="f-s-24 f-w-b f-clr-black text-center">Akash Qureshi</h1>
                            <p className="f-s-16 f-fm clr-rgba-239-8 text-center">CEO & Full Stack Developer</p>
                        </div>
                        <div className="third-team-member">
                            <img className="" src={TeamMember3} alt="first" />
                            <h1 className="f-s-24 f-w-b f-clr-black text-center">Muqarrab Khan</h1>
                            <p className="f-s-16 f-fm clr-rgba-239-8 text-center">CEO & UI/UX Designer</p>
                        </div>
                        <div className="fourth-team-member">
                            <img className="" src={TeamMember4} alt="first" />
                            <h1 className="f-s-24 f-w-b f-clr-black text-center">Sher Hassan</h1>
                            <p className="f-s-16 f-fm clr-rgba-239-8 text-center">Brand Identity</p>
                        </div>
                    </div>
                </div>
                {/* MOBILE CAROUSEL */}
                <div class="container-fluid carusal">
                    <div id="myCarousel" class="carousel slide" data-ride="carousel">
                        {/* <!-- Indicators --> */}
                        <ol class="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                        </ol>
                        {/* <!-- Wrapper for slides --> */}
                        <div class="carousel-inner">
                            <div class="item active">
                                <img src={TeamMember1} alt="Los Angeles" style={{ width: '100%' }} />
                                <h1 className="f-s-24 f-w-b f-clr-black text-center">Afzal Tanoli</h1>
                                <p className="f-s-16 f-fm clr-rgba-239-8 text-center">CEO</p>
                            </div>
                            <div class="item">
                                <img src={TeamMember2} alt="Chicago" style={{ width: '100%' }} />
                                <h1 className="f-s-24 f-w-b f-clr-black text-center">Akash Qureshi</h1>
                                <p className="f-s-16 f-fm clr-rgba-239-8 text-center">CEO & Full Stack Developer</p>
                            </div>
                            <div class="item">
                                <img src={TeamMember3} alt="New york" style={{ width: '100%' }} />
                                <h1 className="f-s-24 f-w-b f-clr-black text-center">Muqarrab Khan</h1>
                                <p className="f-s-16 f-fm clr-rgba-239-8 text-center">CEO & UI/UX Designer</p>
                            </div>
                            <div class="item">
                                <img src={TeamMember4} alt="New york" style={{ width: '100%' }} />
                                <h1 className="f-s-24 f-w-b f-clr-black text-center">Sher Hassan</h1>
                                <p className="f-s-16 f-fm clr-rgba-239-8 text-center">Brand Identity</p>
                            </div>
                        </div>
                        {/* <!-- Left and right controls --> */}
                        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                            <span class="glyphicon glyphicon-chevron-left"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="right carousel-control" href="#myCarousel" data-slide="next">
                            <span class="glyphicon glyphicon-chevron-right"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}