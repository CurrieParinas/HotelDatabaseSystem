import React, {useEffect , useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function RoomBooking() {
    const [rooms, setRooms] = useState([]);
    const {employee_id,brn_id} = useParams();
    const navigate = useNavigate();
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

    const handleSubmitBook = (roomNumber, roomName) => {
        console.log(`Booked Room Number: ${roomNumber}, Room Type: ${roomName}`);
        navigate(`/booking/${employee_id}/${brn_id}/${roomNumber}`)
        // Add the logic to handle booking with roomNumber and roomName
    };
    
    
    return (
        <div>
            <h1>Rooms</h1>
            <br></br>
            {rooms.map((room) => (
                <div key={room.ROOM_NUMBER}>
                    <p>Room Number: {room.ROOM_NUMBER}</p>
                    <p>Room Type: {room.ROOM_NAME}</p>
                    <p>Max Guests: {room.MAX_GUESTS}</p>
                    <p>Beds: {room.BEDS}</p>
                    <p>Area: {room.AREA}</p>
                    <p>Price: {room.PRICE}</p>
                    <p>Description: {room.DESCRIPTION}</p>

                    
                    <button onClick={() => handleSubmitBook(room.ROOM_NUMBER, room.ROOM_NAME)}>Book</button>
                    {/* Add more properties as needed */}
                </div>
            ))}
        </div>
    );
    
}

export default RoomBooking