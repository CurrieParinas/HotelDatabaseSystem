import React from 'react'
import { useState, useEffect } from 'react'
import './Booking.css'

import { CiCircleRemove } from "react-icons/ci";
import { useNavigate, useParams } from 'react-router-dom';

function Booking() {
    const [guestList, setGuestList] = useState([])
    const {brn_id, room_number,employee_id} = useParams();
    const navigate = useNavigate();
    const [charge,setCharge] = useState({
        brn_id: brn_id,
        room_number : '',
    })

    const initialInputState = {
        inputFirstName: '',
        inputMiddleName: '',
        inputLastName: '',
        inputBirthday: '',
        inputAddress: '',
        inputContactNo: '',
        inputEmail: '',
        inputAge: '',
        inputRoomNumber: ''
    };
    
    const [inputFields, setInputFields] = useState(initialInputState);
    
    const handleChange = (e, index) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
    
        setInputFields({
            ...inputFields,
            [name]: value
        });
    
        if (index !== null && index !== undefined) {
            // Handle secondary guest
            const updatedGuestList = [...guestList];
            const secondaryGuest = { ...updatedGuestList[index] };
            secondaryGuest[name] = value;
            updatedGuestList[index] = secondaryGuest;
            setGuestList(updatedGuestList);
        }
    };

    
    useEffect(()=>{
        console.log(guestList)
        console.log(inputFields)
      },[guestList, inputFields])

    const addPrimaryGuest = async (e) => {
        const primaryGuest ={
            brn_id: brn_id,
            first_name: inputFields.inputFirstName,
            middle_name: inputFields.inputMiddleName,
            last_name: inputFields.inputLastName,
            birthday: inputFields.inputBirthday,
            address: inputFields.inputAddress,
            contact_number: inputFields.inputContactNo,
            email_address:inputFields.inputEmail,
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
    const addSecondaryGuests = async (e) => {
        try {
            for (const secondaryGuest of guestList) {
                const response = await fetch('http://localhost:8080/miancurocho/guest/add', {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: 'POST',
                    body: JSON.stringify(secondaryGuest)
                });
                console.log(secondaryGuest);
            }
            // navigate(`/booking/${employee_id}/${brn.brn_id}`);
        } catch (error) {
            // ADD FRONTEND ERROR DISPLAY HERE 
            console.log('Add Guest Error. Please Try again');
            console.log(error);
        }
    };

    const addCharge = async (e) => {
        const updatedCharge ={
            brn_id: charge.brn_id,
            room_number: room_number
        }
        try{
            const response = await fetch('http://localhost:8080/miancurocho/charge/add', {
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    },
                    method: 'POST',
                    body: JSON.stringify(updatedCharge)
            })
            console.log(updatedCharge)
            // navigate(`/booking/${employee_id}/${brn.brn_id}`)    
                
            }catch(error){
              //ADD FRONTEND ERROR DISPLAY HERE 
              console.log('Add Charge Error. Please Try again')
              console.log(error)
          }
    }

    const handleBookin = () => {
        addCharge()
        addPrimaryGuest()
        addSecondaryGuests()
        navigate(`/fd/dashboard/${employee_id}`)
    }

    const handleguestAdd = () => {
        setGuestList([...guestList, {
            brn_id: brn_id,
            first_name: inputFields.inputFirstName,
            middle_name: inputFields.inputMiddleName,
            last_name: inputFields.inputLastName,
            birthday: inputFields.inputBirthday,
            address: inputFields.inputAddress,
            contact_number: inputFields.inputContactNo,
            email_address:inputFields.inputEmail,
            age: inputFields.inputAge,
            guest_type: 'S'
        }])
    }

    const handleguestRemove = (index) => {
        const list = [...guestList]
        list.splice(index,1)
        setGuestList(list)
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
                        <input name="inputFirstName" value={inputFields.inputFirstName} type="text" placeholder='Juan' onChange={handleChange}/>
                    </div>
                    <div className="middleNameDiv">
                        <label htmlFor="middleName">Middle Name</label>
                        <input name="inputMiddleName" value={inputFields.inputMiddleName} type="text" placeholder='Karlos' onChange={handleChange} />
                    </div>
                    <div className="surnameDiv">
                        <label htmlFor="surname">Surname</label>
                        <input name="inputLastName" value={inputFields.inputLastName} type="text" placeholder='Dela Cruz' onChange={handleChange} />
                    </div>
                </div>

                <div className="birthdayAndAdress">
                    <div className="birthday">
                        <label htmlFor="birthday">Birthday</label>
                        <input name="inputBirthday" value={inputFields.inputBirthday} type="text" placeholder='YYYY-MM-DD' onChange={handleChange}/>
                    </div>
                    <div className="address">
                        <label htmlFor="address">Address</label>
                        <input name="inputAddress" value={inputFields.inputAddress} type="text" placeholder='St, City, Province, Country' onChange={handleChange}/>
                    </div>
                </div>

                <div className="emailNumTel">
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input name="inputEmail" value={inputFields.inputEmail} type="text" placeholder='sample@email.com' onChange={handleChange}/>
                    </div>
                    <div className="number">
                        <label htmlFor="middleName">Number</label>
                        <input name="inputContactNo" value={inputFields.inputContactNo} type="text" placeholder='09123456789' onChange={handleChange}/>
                    </div>
                    {/* <div className="telephone">
                        <label htmlFor="telephone">Age</label>
                        <input name="inputAge" value={inputFields.inputAge} type="text" placeholder='21' onChange={handleChange}/>
                    </div> */}
                </div>
                {/* <div className="roomNumTypeCheckInandOut">
                    <div className="roomType">
                        <label htmlFor="roomType">Room Type</label>
                        <input type="text" placeholder='Deluxe' />
                    </div>
                    <div className="roomNum">
                        <label htmlFor="roomNum">Room Number</label>
                        <input name="inputRoomNumber" value={inputFields.inputRoomNumber}type="text" placeholder='21'onChange={handleChange} />
                    </div>
                    <div className="checkInDate">
                        <label htmlFor="checkInDate">Check-In Date</label>
                        <input type="text" placeholder='YYYY-MM-DD' />
                    </div>
                    <div className="checkOutDate">
                        <label htmlFor="checkOutDate">Check-Out Date</label>
                        <input type="text" placeholder='YYYY-MM-DD' />
                    </div>
                </div> */}
                
                {/* {roomList.map((singleRoom, index) => (
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
                ))} */}
            </div>
            {guestList.length === 0 && (
                <div className="addAndBookButton">
                    {/* <button className="addMoreGuest btn" onClick={handleRoomAdd}>
                        <p>Add another room</p>
                    </button> */}
                    <button className="addMoreGuest btn" onClick={handleguestAdd}>
                        <p>Add a guest</p>
                    </button>
                    <button className="bookin btn" onClick={handleBookin}>
                        <p>Book In</p>
                    </button>
                </div>
            )}
            {/* {guestList.length !== 0 && (
            <div className="addAndBookButton">
                <button className="addMoreGuest btn" onClick={handleRoomAdd} style={{marginRight: "0"}}>
                    <p>Add another room</p>
                </button>
            </div>            
            )} */}
            {guestList.map((singleService, index) => (
    <div className="secondaryGuestParentDiv" key={index}>
        <div className="guestInformation">
            <div className="primaryGuest">
                <h1><i>Additional Guest</i></h1>
            </div>
            {/* ... (other elements) ... */}
            <div className="name">
                <div className="firstNameDiv">
                    <label htmlFor={`firstName`}>First Name</label>
                    <input
                        name={`first_name`}
                        type="text"
                        placeholder='Juan'
                        value={singleService.first_name}
                        onChange={(e) => handleChange(e, index)}
                    />
                </div>
                <div className="middleNameDiv">
                    <label htmlFor={`middleName`}>Middle Name</label>
                    <input
                        name={`middle_name`}
                        type="text"
                        placeholder='Karlos'
                        value={singleService.middle_name}
                        onChange={(e) => handleChange(e, index)}
                    />
                </div>
                <div className="surnameDiv">
                    <label htmlFor={`surname`}>Surname</label>
                    <input
                        name={`last_name`}
                        type="text"
                        placeholder='Dela Cruz'
                        value={singleService.last_name}
                        onChange={(e) => handleChange(e, index)}
                    />
                </div>
            </div>
            <div className="birthdayAndAdress">
              <div className="birthday">
                  <label htmlFor="birthday">Birthday</label>
                  <input 
                  name='birthday'
                  type="text" 
                  placeholder='YYYY-MM-DD' value={singleService.birthday}
                  onChange={(e) => handleChange(e, index)}/>
              </div>
              <div className="address">
                  <label htmlFor="address">Address</label>
                  <input name='address' type="text" placeholder='St, City, Province, Country'value={singleService.address}
                        onChange={(e) => handleChange(e, index)} />
              </div>
          </div>

          <div className="emailNumTel">
              <div className="email">
                  <label htmlFor="email">Email</label>
                  <input name= 'email_address'type="text" placeholder='sample@email.com'value={singleService.email_address}
                        onChange={(e) => handleChange(e, index)} />
              </div>
              <div className="number">
                  <label htmlFor="middleName">Number</label>
                  <input name='contact_number' type="text" placeholder='09123456789' value={singleService.contact_number}
                        onChange={(e) => handleChange(e, index)}/>
              </div>
              {/* <div className="telephone">
                  <label htmlFor="telephone">Age</label>
                  <input name='age' type="text" placeholder='21' value={singleService.age}
                        onChange={(e) => handleChange(e, index)}/>
              </div> */}
          </div>
        </div>
        <div className="addAndBookButton">
            <button className="addMoreGuest btn" onClick={() => handleguestRemove(index)}>
                <p> Remove Guest </p>
            </button>
            {guestList.length - 1 === index && (
                <div className="moreButtons">
                    <button className="addMoreGuest btn" onClick={handleguestAdd}>
                        <p>Add a Guest</p>
                    </button>
                    <button className="bookin btn" onClick={handleBookin}>
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