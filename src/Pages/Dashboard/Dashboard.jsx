import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import { useNavigate, useParams } from 'react-router-dom';

function Dashboard() {
  const {employee_id} = useParams();
  const navigate = useNavigate();
  const [brn,setBRN] = useState({
    brn_id: '',
    employee_id : '',
    booking_date : '',
    status: 'BOOKED'
  })

  useEffect(()=>{
    brn.employee_id = employee_id;
    getCurrentDate()
    generateBRNID()
  },[])

  const getCurrentDate = () => {

    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const day = String(currentDate.getDate()).padStart(2, '0');
    
    const formattedDate = `${year}-${month}-${day}`;
    
    brn.booking_date = formattedDate
    console.log(brn.booking_date)
    
  }

  const generateBRNID = async () =>{
    const charlist = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let brnIdbuilder;
    let brnData;

    do {
        brnIdbuilder = new Array(6)
            .fill(0)
            .map(() => charlist.charAt(Math.floor(Math.random() * charlist.length)))
            .join("");
        console.log(brnIdbuilder);

        try {
            let response = await fetch(`http://localhost:8080/miancurocho/brn/${brnIdbuilder}`);
            brnData = await response.json();
            console.log(brnData);

            // Continue the loop if brnData is not null or undefined
        } catch (error) {
            console.log(error);
            brn.brn_id = brnIdbuilder;
            // Terminate the loop in case of an error
            break;
        }
    } while (brnData !== null && brnData !== undefined);

    console.log(brn)
  }

  const handleSubmitBook = async (e) =>{
    e.preventDefault();

    try{
      const response = await fetch('http://localhost:8080/miancurocho/brn/add', {
              headers:{
                  'Accept':'application/json',
                  'Content-Type':'application/json'
              },
              method: 'POST',
              body: JSON.stringify(brn)
      })
      console.log(brn)
      navigate(`/addGuest/${employee_id}/${brn.brn_id}`)    
          
      }catch(error){
        //ADD FRONTEND ERROR DISPLAY HERE 
        console.log('Booking Error. Please Try again')
        console.log(error)
    }

  }

  return (
    <div><h1>Dashboard</h1>

      <button onClick={handleSubmitBook}>Book</button>s
    </div>
    
  )
}

export default Dashboard