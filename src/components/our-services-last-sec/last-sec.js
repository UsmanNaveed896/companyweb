import React from 'react'
import Backimg from '../../images/b2.png'
import Dotimg from '../../images/dots2.png'
import '../../components/our-services-last-sec/Style.scss'
import '../../Responsivecss/our-services-last-sec-responsive.scss'

export default () => {
    return (
        <>
            <div className="container-fluid Technologies">
                <div className="our-services-last-sec w-full">
                    <div className="our-technology-heading flex justify-center mt-48">
                        <div>
                            <h1>Our Technologies </h1>
                        </div>
                    </div>
                </div>
                {/* ROUND CARDS */}
                <div className="round-cards w-full flex">
                    <div className="first-three-cards w-1/2 flex">
                        <div className="heart-back-image w-2/3">
                            <img className="heart-img " src={Backimg} alt="background" />
                        </div>
                        <div className="round-circles flex">
                            <div className="react-js-round absolute">
                                <h1 className="f-s-21 f-fm ">React Js</h1>
                            </div>
                            <div className="Node-js-round ">
                                <h1 className="f-s-21 f-fm ">Node Js</h1>
                            </div>
                            <div className="MySql-round">
                                <h1 className="f-s-21 f-fm ">My Sql</h1>
                            </div>
                            <div className="Next-round ">
                                <h1 className="f-s-21 f-fm ">Next</h1>
                            </div>
                        </div>
                    </div>

                    <div className="last-three-cards w-1/2 flex">

                        <div className="round-circles-B flex">
                            <div className="mongo-bd-round ">
                                <h1 className="f-s-21 f-fm ">Mongo Bd</h1>
                            </div>
                            <div className="Gatsby-round ">
                                <h1 className="f-s-21 f-fm ">Gats By</h1>
                            </div>
                            <div className="RestApi-round">
                                <h1 className="f-s-21 f-fm ">RestApi</h1>
                            </div>
                            <div className="Graphql-round absolute">
                                <h1 className="f-s-21 f-fm ">GraphQL</h1>
                            </div>
                        </div>
                        <div className="heart-back-image w-2/3">
                            <img className="dotty-img " src={Dotimg} alt="dot" />
                        </div>
                    </div>
                </div>
            </div>
            {/* // MOBILE VIEW */}
            <div className="round-cards-mob w-full ">
                <div className="first-three-cards-mob w-1/2 ">
                    <div className="heart-back-image w-2/3">
                        <img className="heart-img " src={Backimg} alt="background" />
                    </div>
                    <div className="round-circles-mob ">
                        <div className="first-two-round flex absolute">
                            <div className="react-js-round ">
                                <h1 className="f-s-21 f-fm ">React Js</h1>
                            </div>
                            <div className="Node-js-round ">
                                <h1 className="f-s-21 f-fm ">Node Js</h1>
                            </div>
                        </div>
                        <div className="last-two-rounds flex absolute">
                            <div className="MySql-round">
                                <h1 className="f-s-21 f-fm ">My Sql</h1>
                            </div>
                            <div className="Next-round ">
                                <h1 className="f-s-21 f-fm ">Next</h1>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="round-circles-B ">
                    <div className="secnd-section-frst-two-rounds flex">
                        <div className="mongo-bd-round ">
                            <h1 className="f-s-21 f-fm ">Mongo Bd</h1>
                        </div>
                        <div className="Gatsby-round ">
                            <h1 className="f-s-21 f-fm ">Gats By</h1>
                        </div>
                    </div>
                    <div className="secnd-section-last-two-rounds flex">
                        <div className="RestApi-round">
                            <h1 className="f-s-21 f-fm ">RestApi</h1>
                        </div>
                        <div className="Graphql-round">
                            <h1 className="f-s-21 f-fm ">GraphQL</h1>
                        </div>
                    </div>
                </div>
                <div className="heart-back-image-mob w-2/3 absolute">
                    <img className="dotty-img " src={Dotimg} alt="dott" />
                </div>

            </div>

        </>
    )
}
