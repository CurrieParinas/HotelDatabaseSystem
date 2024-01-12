import React from 'react'
import { useState } from 'react'
import './Booking.css'

import { CiCircleRemove } from "react-icons/ci";
import { useParams } from 'react-router-dom';

function Booking() {
    const [guestList, setguestList] = useState([])
    const {employee_id} = useParams();
    const {brn_id} = useParams();
    const [inputFirstName, setInputFirstName] = useState('');
    const [inputMiddleName, setInputMiddleName] = useState('');
    const [inputLastName, setInputLastName] = useState('');
    const [inputBirthday, setInputBirthday] = useState('');
    const [inputAddress, setInputAddress] = useState('');
    const [inputContactNo, setInputContactNo] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputAge, setInputAge] = useState('');

    const handleChange = (e) => {
      const target = e.target;
      const value = target.value;
      const name = target.name;

      if (name === 'inputEmail'){
          setInputEmail(value);
      }else if(name === 'inputFirstName'){
          setInputFirstName(value);
      }else if(name === 'inputMiddleName'){
        setInputMiddleName(value);
      }else if(name === 'inputLastName'){
        setInputLastName(value);
      }else if(name === 'inputBirthday'){
        setInputBirthday(value);
      }else if(name === 'inputAddress'){
        setInputAddress(value);
      }else if(name === 'inputContactNo'){
        setInputContactNo(value);
      }else if(name === 'inputAge'){
        setInputAge(value);
      }
      
    }
    
    const addPrimaryGuest = async (e) => {
        const primaryGuest ={
            brn_id: brn_id,
            first_name: inputFirstName,
            middle_name: inputMiddleName,
            last_name: inputLastName,
            birthday: inputBirthday,
            address: inputAddress,
            contact_number: inputContactNo,
            email_address:inputEmail,
            age: inputAge,
            guest_type: 'P'
        };

        try{
            const response = await fetch('http://localhost:8080/miancurocho/guest/add', {
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    },
                    method: 'POST',
                    body: JSON.stringify(primaryGuest)
            })
            console.log(primaryGuest)
            // navigate(`/booking/${employee_id}/${brn.brn_id}`)    
                
            }catch(error){
              //ADD FRONTEND ERROR DISPLAY HERE 
              console.log('Add Guest Error. Please Try again')
              console.log(error)
          }
    }

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
                    <a href={`http://localhost:3000/fd/dashboard/${employee_id}`}>View My Guests</a>
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
                        <input name="inputFirstName" value={inputFirstName} type="text" placeholder='Juan' onChange={handleChange}/>
                    </div>
                    <div className="middleNameDiv">
                        <label htmlFor="middleName">Middle Name</label>
                        <input name="inputMiddleName" value={inputMiddleName} type="text" placeholder='Karlos' onChange={handleChange} />
                    </div>
                    <div className="surnameDiv">
                        <label htmlFor="surname">Surname</label>
                        <input name="inputLastName" value={inputLastName} type="text" placeholder='Dela Cruz' onChange={handleChange} />
                    </div>
                </div>

                <div className="birthdayAndAdress">
                    <div className="birthday">
                        <label htmlFor="birthday">Birthday</label>
                        <input name="inputBirthday" value={inputBirthday} type="text" placeholder='YYYY-MM-DD' onChange={handleChange}/>
                    </div>
                    <div className="address">
                        <label htmlFor="address">Address</label>
                        <input name="inputAddress" value={inputAddress} type="text" placeholder='St, City, Province, Country' onChange={handleChange}/>
                    </div>
                </div>

                <div className="emailNumTel">
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input name="inputEmail" value={inputEmail} type="text" placeholder='sample@email.com' onChange={handleChange}/>
                    </div>
                    <div className="number">
                        <label htmlFor="middleName">Number</label>
                        <input name="inputContactNo" value={inputContactNo} type="text" placeholder='09123456789' onChange={handleChange}/>
                    </div>
                    <div className="telephone">
                        <label htmlFor="telephone">Age</label>
                        <input name="inputAge" value={inputAge} type="text" placeholder='21' onChange={handleChange}/>
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
                    <button className="bookin btn" onClick={addPrimaryGuest}>
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
                            <input name={`firstName${index}`}type="text" placeholder='Juan' />
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