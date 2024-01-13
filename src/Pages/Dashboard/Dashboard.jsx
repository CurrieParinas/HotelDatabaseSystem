import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import { useNavigate, useParams } from 'react-router-dom';
import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TablePagination} from "@mui/material";
import Navbar from '../../Components/Navbar/Navbar';
import CancelIcon from '@mui/icons-material/Cancel';
function Dashboard() {
  const {employee_id,employee_type} = useParams();
  const navigate = useNavigate();
  const [rooms, setRooms] = useState([]);
  const [bookedBRNs, setBookedBRNs] = useState([]);
  const [currentDate, setCurrentDate] = useState([]);
  const [brn,setBRN] = useState({
    brn_id: '',
    employee_id : '',
    booking_date : '',
    status: 'BOOKED'
  })
  

  useEffect(()=>{
    getBookedRooms()
    brn.employee_id = employee_id;
    getCurrentDate()
    generateBRNID()
    console.log(employee_type)
  },[])
  const getBookedRooms = async () => {
    try {
        let response = await fetch('http://localhost:8080/miancurocho/room/bookedOrCheckedInRooms');
        let roomsData = await response.json();
        console.log(roomsData);
        setRooms(roomsData);

        //GET BRN DETAILS OF ALL
        const generatedRows = await Promise.all(roomsData.map(async (room) => {
            try {
                let brnResponse = await fetch(`http://localhost:8080/miancurocho/brn/${room.BRN_ID}`);
                let brnData = await brnResponse.json();
                console.log(brnData);

                let primaryGuestResponse = await fetch(`http://localhost:8080/miancurocho/guest/primaryGuestOfBRN/${room.BRN_ID}`)
                let primaryGuestData = await primaryGuestResponse.json();
                console.log(primaryGuestData)
                return {
                    brn_id: brnData.brn_id,
                    roomNumber: room.ROOM_NUMBER,
                    details: primaryGuestData[0].FIRST_NAME +" "+ primaryGuestData[0].MIDDLE_NAME + " "+ primaryGuestData[0].LAST_NAME, // You may need to fetch these details from the server
                    kitchen: 'kitchenServiceOrdered',
                    concierge: 'conciergeServiceOrdered',
                    housekeeping: 'housekeepingServiceOrdered',
                    status: brnData.status
                };
            } catch (brnError) {
                console.error(brnError);
                return null; // Handle the error or provide a default value
            }
        }));

        setRows(generatedRows);
        console.log(generatedRows)
    } catch (error) {
        console.error(error);
    }
};
  const getCurrentDate = () => {

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const day = String(currentDate.getDate()).padStart(2, '0');
    
    const formattedDate = `${year}-${month}-${day}`;
    
    brn.booking_date = formattedDate
    console.log(brn.booking_date)
    setCurrentDate(formattedDate)
    console.log(currentDate)
    
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
      navigate(`/roombooking/${employee_id}/${brn.brn_id}`)    
          
      }catch(error){
        //ADD FRONTEND ERROR DISPLAY HERE 
        console.log('Booking Error. Please Try again')
        console.log(error)
    }

  }

    const handleCheckIn = async (brnId) =>{
        const brnToUpdate = {
            brn_id: brnId,
            check_in_date: currentDate,
            status: "CHECKED-IN"
        }

        try{
            const response = await fetch('http://localhost:8080/miancurocho/brn/update', {
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    },
                    method: 'POST',
                    body: JSON.stringify(brnToUpdate)
            })
            console.log(brnToUpdate)
            window.location.reload();    
            }catch(error){
            //ADD FRONTEND ERROR DISPLAY HERE 
            console.log('Checkin Error. Please Try again')
            console.log(error)
        }
    }

    const handleCheckOut = async (brnId) =>{
        navigate(`/payment/${employee_id}/${brnId}`)
    }

  const columns = [
    {id:"roomNumber", name:"Room Number"},
    {id:"details", name:"Details"},
    {id:"kitchen", name:"Kitchen"},
    {id:"concierge", name:"Concierge"},
    {id:"housekeeping", name:"Housekeeping"},
    {id:"status", name:"Status"}
  ]

  const [rows,setRows] = useState([])

  const [page, pageChange] = useState(0)
  const [rowPerPage, rowPerPageChange] = useState(5)

  const handlechangepage =(event,newpage) => {
    pageChange(newpage)
  }
  
  const handleRowsPerPage = (event) => {
    rowPerPageChange(+event.target.value)
    pageChange(0)
  }
  const [selectedColumn, setSelectedColumn] = useState(null);

  const toggleModal = (columnId) => {
    setModal(!modal);
    setSelectedColumn(columnId);
  };
  const [modal, setModal] = useState(false);
  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  
  const [selectedService, setSelectedService] = useState('');
  const [quantity, setQuantity] = useState([])
  const [price, setPrice] = useState([])
  const handleSelectChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedService(selectedOption);
    console.log(`Selected Service: ${selectedOption}`);
  };

  const handleInputChange = (event) => {
    const target = event.target;
        const value = target.value;
        const name = target.name;

        if (name === 'quantity'){
            setQuantity(value);
            console.log(quantity)
        } else if (name === 'price'){
            setPrice(value)
        }
  }

  const handleAddService = (brnId,roomNumber) => {
    addCharge(brnId,roomNumber)
    // setBRNID(brnId)
  };

  const [BRN_ID, setBRNID] = useState([])
//   const [availCharge, setAvailCharge] = useState([]);
  const addCharge = async (brnId,roomNumber) => {
    try {
        let response = await fetch(`http://localhost:8080/miancurocho/room-type/getPriceOfRoomNumber/${roomNumber}`);
        let roomCost = await response.json();
        console.log(roomCost);
        // updatedCharge.cost = roomCost
    // navigate(`/booking/${employee_id}/${brn.brn_id}`)
    const updatedCharge ={
        brn_id: brnId,
        room_number: "",
        cost: roomCost
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
            setBRNID(updatedCharge.brn_id)

               
                
            }catch(error){
              //ADD FRONTEND ERROR DISPLAY HERE 
              console.log('Add Charge Error. Please Try again')
              console.log(error)
          }
    
        }catch(error){
            console.error(error)
        }
    }
  const handleAddToAccount = async () => {
    console.log(BRN_ID)
    try {
        let response = await fetch(`http://localhost:8080/miancurocho/charge/chargesOfBRN/${BRN_ID}`);
        let chargesData = await response.json();
        console.log(chargesData);

        let availCharge = null;

        for (let index = 0; index < chargesData.length; index++) {
        if (chargesData[index].charge_id !== null) {
            availCharge = chargesData[index].charge_id;
            break;
        }
        }

        console.log(availCharge);
        let serviceLineEntry ={
            charge_id: availCharge,
            service_id: selectedService,
            employee_id: employee_id,
            service_date: currentDate
        }

        console.log(serviceLineEntry)

        try{
            const response = await fetch('http://localhost:8080/miancurocho/service-line/add', {
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    },
                    method: 'POST',
                    body: JSON.stringify(serviceLineEntry)
            })
            
        }catch (error){
            console.error(error)
        }
        
        const chargeUpdateCost ={
            charge_id: availCharge,
            cost: price * quantity
        }
        try{
            const response = await fetch('http://localhost:8080/miancurocho/charge/update', {
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    },
                    method: 'POST',
                    body: JSON.stringify(chargeUpdateCost)
            })
            console.log(chargeUpdateCost)
            window.location.reload();    

        }catch (error){
            console.error(error)
        }
        // setRooms(roomsData);
    }catch (error){
        console.error(error)
    }

  }
  return (
    // <div className='dashboard'><h1>Dashboard</h1>

    //   <button onClick={handleSubmitBook}>Book</button>
    // </div>
    <div>
    <Navbar employeeId={employee_id}/>
<section className="dashboardSec">
        {/* <Navbar employeeId={employee_id} /> */}
        <div className="dashboardContainer">
            <div className="welcomeDB flex">
                <div className="leftWelcome">
                    <h1 className='dashboardTitle'>Dashboard</h1>
                    <p className='dashboardTitle'>Welcome back, NAME HERE!</p>
                </div>
                <div className="rightWelcome">
                    <button className="bookAnotherGuest btn" onClick={handleSubmitBook}>
                        <p>Book another guest?</p>
                    </button>
                </div>
            </div>
            <div className="guestList">
                <h3><i>Guest List:</i></h3>
            </div>
            <div className="tableDiv">
                <Paper>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    {columns.map((column)=>(
                                        <TableCell style={{backgroundColor:"#231F20", color:"#ad974f"}} key={column.id} align="center">{column.name}</TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
    {rows
        .slice(page * rowPerPage, page * rowPerPage + rowPerPage)
        .map((row, i) => (
            <TableRow key={row.brn_id+"-"+i}>
                {columns.map((column, j) => {
                    let value = row[column.id];

                    // Render "Add" button only for specific columns
                    return (
                        <TableCell key={j} align="center">
                            {(() => {
                                if ((employee_type === 'k' && column.id === 'kitchen') || (employee_type === 'S' && column.id === 'kitchen')) {
                                    return (
                                        <div className="cellDiv" style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                                            {value}
                                            <button
                                                className='btn'
                                                style={{ width: "100px", margin: ".5rem" }}
                                                onClick={() => {
                                                    toggleModal(column.id);
                                                    handleAddService(row.brn_id, row.roomNumber);
                                                }}>
                                                Add 
                                            </button>
                                        </div>
                                    );
                                } else if( (employee_type === 'c' && column.id === 'concierge')|| (employee_type === 'S' && column.id === 'concierge')){
                                    return (
                                        <div className="cellDiv" style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                                            {value}
                                            <button className='btn' style={{ width: "100px", margin: ".5rem" }} onClick={() => {
                                                    toggleModal(column.id);
                                                    handleAddService(row.brn_id, row.roomNumber);
                                                }}>
                                                Add 
                                            </button>
                                        </div>
                                    );
                                }
                                else if( (employee_type === 'h' && column.id === 'housekeeping')|| (employee_type === 'S' && column.id === 'housekeeping')){
                                    return (
                                        <div className="cellDiv" style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                                            {value}
                                            <button className='btn' style={{ width: "100px", margin: ".5rem" }} onClick={() => {
                                                    toggleModal(column.id);
                                                    handleAddService(row.brn_id, row.roomNumber);
                                                }}>
                                                Add 
                                            </button>
                                        </div>
                                    );
                                }
                                else {
                                    if ((employee_type === "fd" && ["status"].includes(column.id))|| (employee_type === "S" && ["status"].includes(column.id))) {
                                        return (
                                            <div className="cellDiv" style={{ display: "flex", alignItems:"center",justifyContent:"center", flexDirection: "column" }}>
                                                {value}
                                                <button className='btn' style={{width:"120px", margin:".5rem", fontSize:".8rem"}} onClick={() => handleCheckIn(row.brn_id)}>
                                                    Check-In
                                                </button>
                                                <button className='btn' style={{width:"120px", margin:".5rem", fontSize:".8rem", backgroundColor:"#231F20", color:"#ad974f"}}onClick={() => handleCheckOut(row.brn_id)}>
                                                    Check-Out
                                                </button>
                                            </div>
                                        );
                                    } else {
                                        return value;
                                    }
                                }
                            })()}
                        </TableCell>
                    );
                })}
            </TableRow>
        ))
    }
</TableBody>

                        </Table>
                    </TableContainer>
                    <TablePagination
                            rowPerPageOption={[5,10,25]}
                            page={page}
                            count = {rows.length}
                            rowsPerPage={rowPerPage}
                            component="div"
                            onPageChange={handlechangepage}
                            onRowsPerPageChange={handleRowsPerPage}
                    >
                    </TablePagination>
                </Paper>
            </div>
        </div>

        {modal && (
        <div className="modal">
            <div onClick={toggleModal} className="overlay">

            </div>
            <div className="modal-content">
                <CancelIcon 
                className="close-modal" 
                onClick={toggleModal}
                style={{fontSize:"2.5rem"}}
                />
                {selectedColumn === "kitchen" && (
                    <div className="cardNumberInput">
                        <div className="paymentType" >
                            <label htmlFor="kitchenOrders">Available services:  </label>
                            <select id="paymentType"
                                name="payment"
                                value={selectedService}
                                onChange={handleSelectChange}>
                                <option value="10">Breakfast Buffet</option>
                                <option value="11">Lunch Buffet</option>
                                <option value="12">Dinner Buffet</option>
                                <option value="13">In-room Dining</option>
                                <option value="17">Bar and Lounge</option>
                                <option value="18">Garden Tea Party</option>
                            </select>
                        </div>
                        <div className="cvvAndEd">
                            <label htmlFor="quantity">Quantity: </label>
                            <input
                            name = "quantity"
                            type="number"
                            placeholder='123'
                            value={quantity}

                            onChange={handleInputChange}
                            />
                        </div>
                        <div className="cardNumber">
                            <label htmlFor="price">Price: </label>
                            <input
                            name = "price"
                            type="number"
                            placeholder='$$$'
                            value={price}
                            onChange={handleInputChange}
                            />
                        </div>
                    </div>
                )}
                {selectedColumn === "concierge" && (
                    <div className="cardNumberInput">
                    <div className="paymentType" >
                        <label htmlFor="conciergeOrders">Available services:  </label>
                        <select id="paymentType" name="payment"value={selectedService}
                                onChange={handleSelectChange}>
                            <option value="1">Massage Therapy</option>
                            <option value="2">Facial Therapy</option>
                            <option value="3">Water Therapy</option>
                            <option value="4">Event Planning</option>
                            <option value="5">Island Hopping</option>
                            <option value="6">Day Tour (Land)</option>
                            <option value="7">Airport Transfers</option>
                            <option value="8">Car Rentals</option>
                            <option value="9">Chauffer Services</option>
                        </select>
                    </div>
                    <div className="cvvAndEd">
                        <label htmlFor="quantity">Quantity: </label>
                        <input
                        name = "quantity"
                        type="number"
                        placeholder='123'
                        value={quantity}

                        onChange={handleInputChange}
                        />
                    </div>
                    <div className="cardNumber">
                        <label htmlFor="price">Price: </label>
                        <input
                        name = "price"
                        type="number"
                        placeholder='$$$'
                        value={price}
                        onChange={handleInputChange}
                        />
                    </div>
                </div>
                )}
                {selectedColumn === "housekeeping" && (
                    <div className="cardNumberInput">
                    <div className="paymentType" >
                        <label htmlFor="housekeepingOrders">Available services:  </label>
                        <select id="paymentType" name="payment"value={selectedService}
                                onChange={handleSelectChange}>
                            <option value="19">Room Cleaning</option>
                            <option value="20">Laundry Services</option>
                            <option value="21">Maintenance</option>
                            <option value="22">Restocking Amenities</option>
                            <option value="23">In Room Chips</option>
                            <option value="24">In Room Soda</option>
                            <option value="25">In Room Sparkling Water</option>
                            <option value="26">In Room Chocolates</option>
                        </select>
                    </div>
                    <div className="cvvAndEd">
                        <label htmlFor="quantity">Quantity: </label>
                        <input
                        name = "quantity"
                        type="number"
                        placeholder='123'
                        value={quantity}
                        onChange={handleInputChange}
                        />
                    </div>
                    <div className="cardNumber">
                        <label htmlFor="price">Price: </label>
                        <input
                        name = "price"
                        type="number"
                        placeholder='$$$'
                        value={price}
                        onChange={handleInputChange}
                        />
                    </div>
                </div>
                )}
                <div className="proceedToPayment">
                    <button className="proctopay btn " onClick={handleAddToAccount}>Add to account</button>
                </div>
            </div>
        </div>
        )}
    </section>
    </div>
    
    
  )
}

export default Dashboard