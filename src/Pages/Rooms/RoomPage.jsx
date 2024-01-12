import React, {useEffect , useState} from 'react'
import './RoomPage.css'

import { MdKingBed } from "react-icons/md";
import { MdBathtub } from "react-icons/md";
import { MdWifi } from "react-icons/md";
import { MdBalcony } from "react-icons/md";
import { MdDoorFront } from "react-icons/md";
import { MdOutlineKey } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";


//static images
import image1 from '../../Assets/bedroom1.jpg'
import image2 from '../../Assets/bedroom2.jpg'
import image3 from '../../Assets/bedroom3.jpg'
import image4 from '../../Assets/bedroom4.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

function RoomPage() {
    const [rooms, setRooms] = useState([]);

    useEffect(()=>{
        getAvailableRooms()
    },[])

    const getAvailableRooms = async () => {
        try{
            let response = await fetch('http://localhost:8080/miancurocho/room/allAvailableRooms')
            let roomsData = await response.json()
            console.log(roomsData)
            setRooms(roomsData)

        }catch(error){
            console.error(error)
        }
        
    }
 return(
        <div>
            <h1>Rooms</h1>
            {rooms.map((room) => (
                <div key={room.ROOM_NUMBER}>
                    <p>Room Number: {room.ROOM_NUMBER}</p>
                    <p>Room Type: {room.ROOM_NAME}</p>
                    {/* Add more properties as needed */}
                </div>
            ))}
            {/* <button onClick={handleSubmitLogin}>Login</button> */}

        </div>
    )}


const RoomPages = () => {
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

    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])

  return (
    <section className="roomPage section container">
        <div className="roomsecContainer">
            <div className="roomsecHeader">
            <h2 className=  "roomsecTitle">Rooms</h2>
            <p>
                        Discover comfort and style in every room, where luxury meets thoughtful design.
                    </p>
                {/* <div className="roomtextDiv">
                       <h2 className="roomsecTitle">Rooms</h2>
                    
                </div> */}
               
            </div>

            <div className="roommainContent roomContent">
                {
                    
                    Data.map(({id,imgSrc,bedType,roomType,price})=>{
                        
                        return (
                            
                            <div className="roomsingleRoom">
                                 <div className="roomsingleRoomContent">
                                 <div className="roomroomImage">
                                        <img src={imgSrc} alt="" />
                                 </div>
                                <div classname="roomroomInfo">
                                    
                                    <h1 className="roomroomText">{roomType} </h1>
                                    <p className="roomroomPrice">${price} </p>
                                    <p className="roomroomDesc">
                                    Welcome to our {roomType} room – a haven of comfort and relaxation that embodies the essence of modern hospitality. 
                                    Designed with your utmost comfort in mind, our {roomType} Room offers a perfect blend of style, functionality, and tranquility.
                                    
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
                                       
                                    </div>
                                    </p>
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
  
 


export default RoomPages;
