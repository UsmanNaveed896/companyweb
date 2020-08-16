import React from 'react'
import '../../components/our-services-secB/style.scss'
import '../../Style/main.scss'
import '../../Responsivecss/our-services-sec-B-responsive.scss'
import Dottedimg from '../../images/dotted3.png'
import Diamondimg from '../../images/diamond (2).png'
export default()=>{
    return(
        <>
        <div className="container-fluid our-services-secb-main">
        <img className="image-dotted absolute mt-64" src={Dottedimg} alt="dott"/>
            <div className="our-services-secb-start w-full flex justify-center mt-64" >
                <div className="brands w-1/2">
                    <div className="we-help-brands">
                        <h1 className="f-s-42 f-w-b f-fm">We help brands to create preference, loyalty and value</h1>
                        <p className="description-brands f-s-18 f-fm clr-rgba-90-9">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
                         vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                          consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
                           quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p> 

                        <p className="description-brands f-s-18 f-fm clr-rgba-90-9" >Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
                             commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
                              consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
                    </div>

                </div>
            </div>
        </div>
                                     {/* PRODUCT DESIGN SECTION START */}
                        <div className="container-fluid product-design-cards">
                        <div className="product-design-cards-start w-full flex justify-center">
                            <div className="cards-product-design flex w-1/2">
                                <div className="cards-A-B w-1/2" >
                                    <div className="card-product-design-A mt-16 flex ">
                                        <div className="diamond-small">
                                        <img className="diamond-pic mt-10" src={Diamondimg} alt="diamond"/>
                                        </div>
                                        <div className="product-description">
                                        <h1 className="f-s-24 f-fm f-w-600">Product Design</h1>
                                        <p className="product-paragraph f-s-18 f-fm clr-rgba-90-9">Every product must make a statement and we’re ready to create it with holistic approach to design.</p>
                                        <p className="product-paragraph f-s-18 f-fm clr-rgba-90-9">We translate your business goals and objectives into insightful UX, remarkable UI and distinctive </p>
                                        </div>
                                    </div>
                                        {/* CARD B */}
                                        <div className="card-product-design-A mt-16 flex ">
                                        <div className="diamond-small">
                                        <img className="diamond-pic  mt-10" src={Diamondimg} alt="diamond" />
                                        </div>
                                        <div className="product-description">
                                        <h1 className="f-s-24 f-fm f-w-600">Product Design</h1>
                                        <p className="product-paragraph f-s-18 f-fm clr-rgba-90-9">Every product must make a statement and we’re ready to create it with holistic approach to design.</p>
                                        <p className="product-paragraph f-s-18 f-fm clr-rgba-90-9">We translate your business goals and objectives into insightful UX, remarkable UI and distinctive </p>
                                        </div>
                                    </div>
                                </div>
                                        <div className="cards-C-D w-1/2">
                                        <div className="card-product-design-A mt-16 flex ">
                                        <div className="diamond-small">
                                        <img className="diamond-pic  mt-10" src={Diamondimg} alt="diamond"/>
                                        </div>
                                        <div className="product-description">
                                        <h1 className="f-s-24 f-fm f-w-600">Product Design</h1>
                                        <p className="product-paragraph f-s-18 f-fm clr-rgba-90-9">Every product must make a statement and we’re ready to create it with holistic approach to design.</p>
                                        <p className="product-paragraph f-s-18 f-fm clr-rgba-90-9">We translate your business goals and objectives into insightful UX, remarkable UI and distinctive </p>
                                        </div>
                                    </div>
                                        {/* CARD D */}
                                        <div className="card-product-design-A mt-16 flex ">
                                        <div className="diamond-small">
                                        <img className="diamond-pic  mt-10" src={Diamondimg} alt="diamond" />
                                        </div>
                                        <div className="product-description">
                                        <h1 className="f-s-24 f-fm f-w-600">Product Design</h1>
                                        <p className="product-paragraph f-s-18 f-fm clr-rgba-90-9">Every product must make a statement and we’re ready to create it with holistic approach to design.</p>
                                        <p className="product-paragraph f-s-18 f-fm clr-rgba-90-9">We translate your business goals and objectives into insightful UX, remarkable UI and distinctive </p>
                                        </div>
                                    </div>
                                        </div>
                            </div>
                        </div>
                        </div>
        </>
    )
}