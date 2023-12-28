import React, {useEffect} from 'react'
import './Populars.css'
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { BsDot } from "react-icons/bs";

//static images
import image1 from '../../Assets/bedroom1.jpg'
import image2 from '../../Assets/bedroom2.jpg'
import image3 from '../../Assets/bedroom3.jpg'
import image4 from '../../Assets/bedroom4.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
    {
        id:1,
        imgSrc: image1,
        bedType: 'Double',
        roomType: 'Standard',
        price: '1000',
    },
    {
        id:2,
        imgSrc: image2,
        bedType: 'Full XL',
        roomType: 'Deluxe',
        price: '2000'
    },
    {
        id:3,
        imgSrc: image3,
        bedType: 'Queen',
        roomType: 'Executive Suite',
        price: '3000'
    },
    {
        id:4,
        imgSrc: image4,
        bedType: 'King',
        roomType: 'Presidential Suite',
        price: '4000',
    },
]

const Populars = () => {
    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])

  return (
    <section className="popular section container">
        <div className="secContainer">

            <div className="secHeader flex">
                <div className="textDiv">
                    <h2 className="secTitle">
                        Popular Rooms
                    </h2>
                    <p>
                        Discover comfort and style in every room, where luxury meets thoughtful design.
                    </p>
                </div>
                <div className="iconsDiv flex">
                    <BsArrowLeftShort className='icon leftIcon'/>
                    <BsArrowRightShort className='icon rightIcon' />
                </div>
            </div>

            <div className="mainContent popularContent grid">
                {
                    Data.map(({id,imgSrc,bedType,roomType,price})=>{
                        return (
                            <div className="singleRoom">
                                <div className="roomImage">
                                    <img src={imgSrc} alt="" />
                                    <div className="overlayInfo">
                                        <h3>{roomType}</h3>
                                        <p>{bedType} size bed</p>
                                        <div className="circleButton">
                                            <BsArrowRightShort className='icon rightIcon' />
                                        </div>
                                    </div>
                                </div>
                                <div className="roomFooter">
                                    <div className="number">
                                        0{id}
                                    </div>
                                    <div className="roomText flex">
                                        <h6>{roomType}</h6>
                                        <span className="flex">
                                            <span className="dot">
                                                <BsDot className='icon'/>
                                                ${price}
                                            </span>
                                            
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Populars