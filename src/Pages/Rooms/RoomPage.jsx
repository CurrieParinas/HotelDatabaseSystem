import React, { useEffect, useState } from "react";

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
    )
}

export default RoomPage;