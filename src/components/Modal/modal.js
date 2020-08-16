import React from 'react'
import '../Modal/modal.scss'
import '../../Style/main.scss'
import Popupimg from '../../images/c3.png'
import Close from '../../images/close1.png'
export default (props) => {
    let { popup, setPopup } = props;
    return (
        <>
            {
                popup ?
                    <div className="container-fluid cards-popup absolute" centered={true}>
                        <div className="w-full pop-up-section flex justify-center ">
                            <div className="pop-up w-1/2 flex justify-around mt-64">
                                <div>
                                    <img className="pop-img" src={Popupimg} alt="img" />
                                </div>
                                <div className="pop-up-text">
                                    <p className="f-fm f-s-25 f-w-b f-clr-black">Website-Title</p>
                                    <p className="f-fm f-s-16  clr-ef">Website-Title</p>
                                    <p className="f-fm f-s-18   clr-rgba-90-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    <p className="f-fm f-s-18   clr-rgba-90-9"> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                               Excepteur sint occaecat cupidatat non proident</p>
                                </div>
                                <div>
                                    <img src={Close} onClick={() => { setPopup(false) }} alt="close" />
                                </div>
                            </div>
                        </div>

                    </div>
                    : ""}
        </>
    )
}