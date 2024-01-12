import React from 'react'
import { useState } from 'react'
import './Booking.css'

import { CiCircleRemove } from "react-icons/ci";

function Booking() {
    const [guestList, setguestList] = useState([])

    const handleguestAdd = () => {
        setguestList([...guestList, {guest:""}])
    }

    const handleguestRemove = (index) => {
        const list = [...guestList]
        list.splice(index,1)
        setguestList(list)
    }

    const [roomList, setRoomList] = useState([])

    const handleRoomAdd = () => {
        setRoomList([...roomList, {room:""}])
    }

    const handleRoomRemove = (index) => {
        const list = [...roomList]
        list.splice(index,1)
        setRoomList(list)
    }
  return (
    <section className="bookingSection">
        <div className="bookingContainer">
            <div className="welcome">
                <div className="bookTitle textDiv">
                    <h1>
                        Book a guest?
                    </h1>
                    <p>
                        Welcome back NAME !
                    </p>
                </div>
                <div className="viewGuest headerBtns flex">
                    <button className="viewGuestButton btn loginBtn">
                        <a href="http://localhost:3000/dashboard">View My Guest</a>
                    </button>
                </div>
            </div>
            <div className="guestInformation">
                <div className="primaryGuest">
                    <h1><i>Primary Guest</i></h1>
                </div>
                <div className="name">
                    <div className="firstNameDiv">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" placeholder='Juan' />
                    </div>
                    <div className="middleNameDiv">
                        <label htmlFor="middleName">Middle Name</label>
                        <input type="text" placeholder='Karlos' />
                    </div>
                    <div className="surnameDiv">
                        <label htmlFor="surname">Surname</label>
                        <input type="text" placeholder='Dela Cruz' />
                    </div>
                </div>

                <div className="birthdayAndAdress">
                    <div className="birthday">
                        <label htmlFor="birthday">Birthday</label>
                        <input type="text" placeholder='YYYY-MM-DD' />
                    </div>
                    <div className="address">
                        <label htmlFor="address">Address</label>
                        <input type="text" placeholder='St, City, Province, Country' />
                    </div>
                </div>

                <div className="emailNumTel">
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input type="text" placeholder='sample@email.com' />
                    </div>
                    <div className="number">
                        <label htmlFor="middleName">Number</label>
                        <input type="text" placeholder='09123456789' />
                    </div>
                    <div className="telephone">
                        <label htmlFor="telephone">Telephone</label>
                        <input type="text" placeholder='5051234' />
                    </div>
                </div>
                <div className="roomNumTypeCheckInandOut">
                    <div className="roomType">
                        <label htmlFor="roomType">Room Type</label>
                        <input type="text" placeholder='Deluxe' />
                    </div>
                    <div className="roomNum">
                        <label htmlFor="roomNum">Room Number</label>
                        <input type="text" placeholder='21' />
                    </div>
                    <div className="checkInDate">
                        <label htmlFor="checkInDate">Check-In Date</label>
                        <input type="text" placeholder='YYYY-MM-DD' />
                    </div>
                    <div className="checkOutDate">
                        <label htmlFor="checkOutDate">Check-Out Date</label>
                        <input type="text" placeholder='YYYY-MM-DD' />
                    </div>
                </div>
                
                {roomList.map((singleRoom, index) => (
                <div className="roomNumTypeCheckInandOut">
                    <div className="roomType">
                        <label htmlFor="roomType">Room Type</label>
                        <input type="text" placeholder='Deluxe' />
                    </div>
                    <div className="roomNum">
                        <label htmlFor="roomNum">Room Number</label>
                        <input type="text" placeholder='21' />
                    </div>
                    <div className="checkInDate">
                        <label htmlFor="checkInDate">Check-In Date</label>
                        <input type="text" placeholder='YYYY-MM-DD' />
                    </div>
                    <div className="checkOutDate">
                        <label htmlFor="checkOutDate">Check-Out Date</label>
                        <input type="text" placeholder='YYYY-MM-DD' />
                    </div>
                    <div className="iconsDivBooking" style={{ display: 'flex', alignItems: 'center', paddingTop: '1.7rem' }}>
                        <CiCircleRemove className='icon removeIcon' onClick={handleRoomRemove}/>
                    </div>
                </div>
                ))}
            </div>
            {guestList.length === 0 && (
                <div className="addAndBookButton">
                    <button className="addMoreGuest btn" onClick={handleRoomAdd}>
                        <p>Add another room</p>
                    </button>
                    <button className="addMoreGuest btn" onClick={handleguestAdd}>
                        <p>Add a guest</p>
                    </button>
                    <button className="bookin btn">
                        <p>Book In</p>
                    </button>
                </div>
            )}
            {guestList.length != 0 && (
            <div className="addAndBookButton">
                <button className="addMoreGuest btn" onClick={handleRoomAdd} style={{marginRight: "0"}}>
                    <p>Add another room</p>
                </button>
            </div>            
            )}
            {guestList.map((singleSerivice, index) => (
            <div className="secondaryGuestParentDiv">
                <div key={index} className="guestInformation">
                    <div className="bookTitle">
                        <div className="secGuestTitle">
                            <h1><i>Secondary Guest</i></h1>
                        </div>
                    </div>
                    <div className="name">
                        <div className="firstNameDiv">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" placeholder='Juan' />
                        </div>
                        <div className="middleNameDiv">
                            <label htmlFor="middleName">Middle Name</label>
                            <input type="text" placeholder='Karlos' />
                        </div>
                        <div className="surnameDiv">
                            <label htmlFor="surname">Surname</label>
                            <input type="text" placeholder='Dela Cruz' />
                        </div>
                    </div>

                    <div className="birthdayAndAdress">
                        <div className="birthday">
                            <label htmlFor="birthday">Birthday</label>
                            <input type="text" placeholder='YYYY-MM-DD' />
                        </div>
                        <div className="address">
                            <label htmlFor="address">Address</label>
                            <input type="text" placeholder='St, City, Province, Country' />
                        </div>
                    </div>

                    <div className="emailNumTel">
                        <div className="email">
                            <label htmlFor="email">Email</label>
                            <input type="text" placeholder='sample@email.com' />
                        </div>
                        <div className="number">
                            <label htmlFor="middleName">Number</label>
                            <input type="text" placeholder='09123456789' />
                        </div>
                        <div className="telephone">
                            <label htmlFor="telephone">Telephone</label>
                            <input type="text" placeholder='5051234' />
                        </div>
                    </div>
                </div>
                <div className="addAndBookButton">
                    <button className="addMoreGuest btn" onClick={handleguestRemove}>
                        <p> Remove Guest </p>
                    </button>
                    {guestList.length - 1 === index && (
                        <div className="moreButtons">
                            <button className="addMoreGuest btn" onClick={handleguestAdd}>
                                <p>Add a Guest</p>
                            </button>
                            <button className="bookin btn">
                                <p>Book In</p>
                            </button>
                        </div>
                    )}
                </div>
            </div>
            ))}
        </div>
    </section>
  )
}

export default Booking