import React,{useEffect} from 'react'
import './Offers.css'

import { MdKingBed } from "react-icons/md";
import { MdBathtub } from "react-icons/md";
import { MdWifi } from "react-icons/md";
import { MdBalcony } from "react-icons/md";
import { MdDoorFront } from "react-icons/md";
import { MdOutlineKey } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";

import image1 from '../../Assets/offer1.jpg'
import image2 from '../../Assets/offer2.jpg'
import image3 from '../../Assets/offer3.jpg'
import image4 from '../../Assets/offer4.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const OfferedRooms = [
    {
        id:1,
        imgSrc: image1,
        bedType: 'Double',
        roomType: 'Deluxe',
        price: '500',
        discountPercentage: '30'
    },
    {
        id:2,
        imgSrc: image2,
        bedType: 'Full XL',
        roomType: 'Executive Suite',
        price: '1000',
        discountPercentage: '10'
    },
    {
        id:3,
        imgSrc: image3,
        bedType: 'Queen',
        roomType: 'Executive Suite',
        price: '1200',
        discountPercentage: '15'
    },
    {
        id:4,
        imgSrc: image4,
        bedType: 'Queen',
        roomType: 'Presidential Suite',
        price: '2100',
        discountPercentage: '19'
    },
]

const Offers = () => {
    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])

  return (
    <section className="offer container section">
        <div className="secContainer">
            <div data-aos="fade-up" data-aos-duration="2000" className="secIntro">
                <h2 className="secTitle">
                    Special Offers
                </h2>
                <p>
                    Book with our limited time offers, special discounts and exclusive deals!
                </p>
            </div>

            <div className="mainContent offerContent grid">
                {
                    OfferedRooms.map(({id, imgSrc,bedType,roomType,price,discountPercentage})=>{
                        return (
                            <div data-aos="fade-up" data-aos-duration="3000" className="singleOffer">    
                                <div className="roomImage">
                                    <img src={imgSrc} alt="" />
                                    <span className="discount">
                                        {discountPercentage}% Off
                                    </span>
                                </div>
                                <div className="offerBody">
                                    
                                    <div className="price flex">
                                        <h4>
                                            ${price}
                                        </h4>
                                        <span className="status">
                                            For Rent
                                        </span>
                                    </div>

                                    <div className="amenities flex">
                                        <div className="singleAmenity flex">
                                            <MdDoorFront  className='icon'/>
                                            <small>{roomType}</small>
                                        </div>
                                        <div className="singleAmenity flex">
                                            <MdKingBed className='icon'/>
                                            <small>2 {bedType} Beds</small>
                                        </div>
                                        <div className="singleAmenity flex">
                                            <MdBathtub className='icon'/>
                                            <small>1 Bath</small>
                                        </div>
                                        <div className="singleAmenity flex">
                                            <MdWifi className='icon'/>
                                            <small>Wi-Fi</small>
                                        </div>
                                        <div className="singleAmenity flex">
                                            <MdBalcony className='icon'/>
                                            <small>Skyline View</small>
                                        </div>
                                
                                        <div className="roomType flex">
                                            <MdOutlineKey className='icon'/>
                                            <small>Access to Pool, Gym, Sky Garden, Study Hall</small>
                                        </div>
                                        <button className="btn flex">
                                            View Details
                                            <BsArrowRightShort className='icon'/>
                                        </button>
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

export default Offers