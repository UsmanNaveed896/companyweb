import React from 'react'
import Dottimg from '../../images/dots.png'
import Rectphone from '../../images/reactangle-phone.png'
import '../../Responsivecss/contact-us-secb-responsive.scss'
import '../contact-us-secB/Style.scss'
import '../../Style/main.scss'

export default () => {
  return (
    <div className="container-fluid contact-us-secb pb-32">
      <div className="mobile-view-image">
        <img className="phone" src={Rectphone} alt="phone" />
        <div>
          <h1 className=" contact-us-mobile f-fm f-s-24 f-w-b clr-half-white absolute">Contact Us</h1>
        </div>
      </div>
      <div className="main-heading flex justify-center mt-20  ">
        <h1 className="f-fm f-s-35 f-w-b"> Get In Touch With Us</h1>
      </div>
      <div className="contact-us-main w-full flex justify-center">
        <div className="get-in-touch w-2/3 flex justify-center">
          <div className="dotts">
            <img className="dottss" src={Dottimg} alt="dott" />
          </div>
          <div className="w-3/4 contact-us-form-start flex justify-center mt-20">
            <form className=" contact-us-form bg-white  rounded w-3/4 px-8 pt-6 pb-8 mb-4">
              <div className="mb-12 mt-16">
                <input className=" full-name-input appearance-none  rounded w-1/2 py-4 px-3 f-s-16 f-fm leading-tight focus:outline-none " id="username" type="text" placeholder="Full Name" />
              </div>
              <div className=" Email-phonenumber mb-6  flex justify-around">
                <input className=" Email-input appearance-none w-1/2  rounded w-full py-4 px-3  mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
                <input className=" Phone-number appearance-none ml-2 w-1/2  rounded w-full py-4 px-3  mb-3 leading-tight focus:outline-none focus:shadow-outline" id="number" type="number" placeholder="Phone Number" />
              </div>
              <div classNameName="mb-4 text-area ">
                <input className="text-area-input appearance-none  rounded w-full h-40  py-4 px-3  leading-tight focus:outline-none focus:shadow-outline" id="text-area" type="text" placeholder="Your Message" />
              </div>
              <div className="flex items-center justify-center mt-20">
                <button className=" send-button btn-clr text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Send
      </button>
              </div>
            </form>
            <div className="Quick-find-us w-1/4 flex flex-col ml-8">
              <div className="text-center">
                <p className="f-fm f-s-20 f-w-b clr-ef mt-10">Quick Find Us </p>
              </div>
              <div className="mt-16">
                <p className="f-s-16 f-fm f-w-b">Email:</p>
              </div>
              <div>
                <p className="f-s-16 f-fm f-clr-gray">Email:info@yoursite.com </p>
              </div>
              <div className="find-us f-s-16 f-fm f-w-b">
                <p>+88 (0) 682648101</p>
              </div>
              <div className="time f-s-16 f-fm f-clr-gray">
                <p>Monday–Friday 9am-6pm</p>
              </div>
              <div className="address f-s-16 f-fm f-w-b">
                <p>Address</p>
              </div>
              <div className="address-des f-s-16 f-fm f-clr-gray">
                <p>Address 51 Somestreet Cambridge,CB4 3AA, United Kingdom</p>
              </div>
            </div>
          </div>
          <img className="quick-find-img" src={Dottimg} alt="img" />
        </div>
      </div>
    </div>
  )
}