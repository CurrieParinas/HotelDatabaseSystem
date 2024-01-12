import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import { useNavigate, useParams } from 'react-router-dom';
import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TablePagination} from "@mui/material";

function Dashboard() {
  const {employee_id,employee_type} = useParams();
  const navigate = useNavigate();
  const [rooms, setRooms] = useState([]);
  const [bookedBRNs, setBookedBRNs] = useState([]);
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
      navigate(`/booking/${employee_id}/${brn.brn_id}`)    
          
      }catch(error){
        //ADD FRONTEND ERROR DISPLAY HERE 
        console.log('Booking Error. Please Try again')
        console.log(error)
    }

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

  return (
    // <div className='dashboard'><h1>Dashboard</h1>

    //   <button onClick={handleSubmitBook}>Book</button>
    // </div>
    <section className="dashboardSec">
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
                        <Table stickyHeader>
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
            <TableRow key={i}>
                {columns.map((column, j) => {
                    let value = row[column.id];

                    // Render "Add" button only for specific columns
                    return (
                        <TableCell key={j} align="center">
                            {(() => {
                                if ((employee_type === 'k' && column.id === 'kitchen') ) {
                                    return (
                                        <div className="cellDiv" style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                                            {value}
                                            <button className='btn' style={{ width: "100px", margin: ".5rem" }}>
                                                Add K
                                            </button>
                                        </div>
                                    );
                                } else if( (employee_type === 'c' && column.id === 'concierge')){
                                    return (
                                        <div className="cellDiv" style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                                            {value}
                                            <button className='btn' style={{ width: "100px", margin: ".5rem" }}>
                                                Add C
                                            </button>
                                        </div>
                                    );
                                }
                                else if( (employee_type === 'h' && column.id === 'housekeeping')){
                                    return (
                                        <div className="cellDiv" style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                                            {value}
                                            <button className='btn' style={{ width: "100px", margin: ".5rem" }}>
                                                Add H
                                            </button>
                                        </div>
                                    );
                                }
                                else {
                                    if (employee_type === "fd" && ["status"].includes(column.id)) {
                                        return (
                                            <div className="cellDiv" style={{ display: "flex", alignItems:"center",justifyContent:"center", flexDirection: "column" }}>
                                                {value}
                                                <button className='btn' style={{width:"120px", margin:".5rem", fontSize:".8rem"}}>
                                                    Check-In
                                                </button>
                                                <button className='btn' style={{width:"120px", margin:".5rem", fontSize:".8rem", backgroundColor:"#231F20", color:"#ad974f"}}>
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
    </section>
    
  )
}

export default Dashboard