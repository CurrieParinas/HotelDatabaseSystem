import React, {useEffect} from 'react'
import './Footer.css'

import Logo from '../../Assets/logo2nobg.png'

import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])


  return (
    <section className="footer">
        <div className="secContainer container grid">
            <div className="logoDiv">
                <div className="footerLogo">
                    <a href="#" className="logo flex">
                        <img src={Logo} className="Logo" alt="logo" /> 
                    </a>
                </div>
                <div className="socials flex">
                <ImFacebook className="icon"/>
                <BsTwitter  className="icon"/>
                <AiFillInstagram  className="icon"/>
                </div>
            </div>
            <div className="footerLinks">
                <span className="linkTitle">
                    Information
                </span>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Book</a>
                </li>
                <li>
                    <a href="">Amenities</a>
                </li>
                <li>
                    <a href="">Rates</a>
                </li>
            </div>
            <div className="footerLinks">
                <span className="linkTitle">
                    Helpful Links
                </span>
                <li>
                    <a href="">Rooms</a>
                </li>
                <li>
                    <a href="">Customer Service</a>
                </li>
                <li>
                    <a href="">General Rules and Expectations</a>
                </li>
                <li>
                    <a href="">Privacy and Privileges</a>
                </li>
            </div>
            <div className="footerLinks">
                    <span className="linkTitle">
                        Contact Us!
                    </span>
                    <span className="phone">+63 917 891 2345</span>
                    <span className="email">MianCurocho@grandemail.com</span>
                </div>
        </div>
    </section>
    )
}

export default Footer