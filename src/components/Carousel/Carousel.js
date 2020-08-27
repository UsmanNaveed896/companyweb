import React from'react'
import '../Carousel/Style.scss'
import Cards from '../home-page-last/home-last-sec'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';

export default()=>{
    return(
        
        <div className="container-fluid">
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner" role="listbox">
                <div className="item active">
                    <Cards/>
                </div>

                <div className="item">
                
                    {/* <Cards/> */}
                </div>
            </div>
         {/* <h1>usman naveed</h1> */}
            <div className="d-flex arrows">
                <ol className="">
                    <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                        <span className=" left-arrow glyphicon glyphicon-chevron-left" aria-hidden="true"/>
                        <span className="sr-only">Next</span>
                    </a>
                    <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                        <span className=" right-arrow glyphicon glyphicon-chevron-right" aria-hidden="true"/>
                        <span className="sr-only">Next</span>
                    </a>
                </ol>
            </div>
        </div>
    </div>
    )
}