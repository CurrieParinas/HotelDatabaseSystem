import React, { useState } from 'react'
import './Dashboard.css'
import { useParams } from 'react-router-dom';

function Dashboard() {
  const {employee_id} = useParams();
  const [brn,setBRN] = useState({
    employee_id : '',
    booking_date : '',
    status: 'BOOKED'
  })
  // const [inputFirstName, setInputFirstName] = useState('');
  // const [inputMiddleName, setInputMiddleName] = useState('');
  // const [inputLastName, setInputLastName] = useState('');
  // const [inputBirthday, setInputBirthday] = useState('');
  // const [inputAddress, setInputAddress] = useState('');
  // const [inputContactNo, setInputContactNo] = useState('');
  // const [inputEmail, setInputEmail] = useState('');
  // const [inputAge, setInputAge] = useState('');

  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
  const day = String(currentDate.getDate()).padStart(2, '0');
  
  const formattedDate = `${year}-${month}-${day}`;
  
  brn.booking_date = formattedDate
  console.log(brn.booking_date)
  brn.employee_id = employee_id;

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

          //ADD NAVIGATE HERE
          
      }catch(error){
        //ADD FRONTEND ERROR DISPLAY HERE 
        console.log('Booking Error. Please Try again')
        console.log(error)
    }

  }
  
  


  return (
    <div><h1>Dashboard</h1>
      {/* <input name="inputFirstName" value={inputFirstName} onChange={handleChange} />
      <input name="inputMiddleName" value={inputMiddleName} onChange={handleChange} />
      <input name="inputLastName" value={inputLastName} onChange={handleChange} />
      <input type="date" name="inputBirthday" value={inputBirthday} onChange={handleChange} />
      <input name="inputAddress" value={inputAddress} onChange={handleChange} />
      <input name="inputContactNo" value={inputContactNo} onChange={handleChange} />
      <input name="inputEmail" value={inputEmail} onChange={handleChange} />
      <input name="inputAge" value={inputAge} onChange={handleChange} /> */}




      <button onClick={handleSubmitBook}>Book</button>s
    </div>
    
  )
}

export default Dashboard