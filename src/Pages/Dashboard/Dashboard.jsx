import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import { useNavigate, useParams } from 'react-router-dom';
import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TablePagination} from "@mui/material";

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
  const columns = [
    {id:"roomNumber", name:"Room Number"},
    {id:"details", name:"Details"},
    {id:"kitchen", name:"Kitchen"},
    {id:"concierge", name:"Concierge"},
    {id:"housekeeping", name:"Housekeeping"},
    {id:"status", name:"Status"}
  ]

  const rows = [
    {
        "roomNumber":1,
        "details":"details",
        "kitchen":"kitchenServiceOrdered",
        "concierge":"conciergeServiceOrdered",
        "housekeeping":"housekeepingServiceOrdered",
        "status":"booked-in",
    },
    {
        "roomNumber":2,
        "details":"details",
        "kitchen":"kitchenServiceOrdered",
        "concierge":"conciergeServiceOrdered",
        "housekeeping":"housekeepingServiceOrdered",
        "status":"booked-in",
    },
    {
        "roomNumber":3,
        "details":"details",
        "kitchen":"kitchenServiceOrdered",
        "concierge":"conciergeServiceOrdered",
        "housekeeping":"housekeepingServiceOrdered",
        "status":"booked-in",
    },
    {
        "roomNumber":4,
        "details":"details",
        "kitchen":"kitchenServiceOrdered",
        "concierge":"conciergeServiceOrdered",
        "housekeeping":"housekeepingServiceOrdered",
        "status":"booked-in",
    },
    // {
    //     "roomNumber":1,
    //     "details":"details",
    //     "kitchen":"kitchenServiceOrdered",
    //     "concierge":"conciergeServiceOrdered",
    //     "housekeeping":"housekeepingServiceOrdered",
    //     "status":"booked-in",
    // },
    // {
    //     "roomNumber":2,
    //     "details":"details",
    //     "kitchen":"kitchenServiceOrdered",
    //     "concierge":"conciergeServiceOrdered",
    //     "housekeeping":"housekeepingServiceOrdered",
    //     "status":"booked-in",
    // },
    // {
    //     "roomNumber":3,
    //     "details":"details",
    //     "kitchen":"kitchenServiceOrdered",
    //     "concierge":"conciergeServiceOrdered",
    //     "housekeeping":"housekeepingServiceOrdered",
    //     "status":"booked-in",
    // },
    // {
    //     "roomNumber":4,
    //     "details":"details",
    //     "kitchen":"kitchenServiceOrdered",
    //     "concierge":"conciergeServiceOrdered",
    //     "housekeeping":"housekeepingServiceOrdered",
    //     "status":"booked-in",
    // },
    // {
    //     "roomNumber":1,
    //     "details":"details",
    //     "kitchen":"kitchenServiceOrdered",
    //     "concierge":"conciergeServiceOrdered",
    //     "housekeeping":"housekeepingServiceOrdered",
    //     "status":"booked-in",
    // },
    // {
    //     "roomNumber":2,
    //     "details":"details",
    //     "kitchen":"kitchenServiceOrdered",
    //     "concierge":"conciergeServiceOrdered",
    //     "housekeeping":"housekeepingServiceOrdered",
    //     "status":"booked-in",
    // },
    // {
    //     "roomNumber":3,
    //     "details":"details",
    //     "kitchen":"kitchenServiceOrdered",
    //     "concierge":"conciergeServiceOrdered",
    //     "housekeeping":"housekeepingServiceOrdered",
    //     "status":"booked-in",
    // },
    // {
    //     "roomNumber":4,
    //     "details":"details",
    //     "kitchen":"kitchenServiceOrdered",
    //     "concierge":"conciergeServiceOrdered",
    //     "housekeeping":"housekeepingServiceOrdered",
    //     "status":"booked-in",
    // },
    // {
    //     "roomNumber":1,
    //     "details":"details",
    //     "kitchen":"kitchenServiceOrdered",
    //     "concierge":"conciergeServiceOrdered",
    //     "housekeeping":"housekeepingServiceOrdered",
    //     "status":"booked-in",
    // },
    // {
    //     "roomNumber":2,
    //     "details":"details",
    //     "kitchen":"kitchenServiceOrdered",
    //     "concierge":"conciergeServiceOrdered",
    //     "housekeeping":"housekeepingServiceOrdered",
    //     "status":"booked-in",
    // },
    // {
    //     "roomNumber":3,
    //     "details":"details",
    //     "kitchen":"kitchenServiceOrdered",
    //     "concierge":"conciergeServiceOrdered",
    //     "housekeeping":"housekeepingServiceOrdered",
    //     "status":"booked-in",
    // },
    // {
    //     "roomNumber":4,
    //     "details":"details",
    //     "kitchen":"kitchenServiceOrdered",
    //     "concierge":"conciergeServiceOrdered",
    //     "housekeeping":"housekeepingServiceOrdered",
    //     "status":"booked-in",
    // }
  ]

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
                    <button className="bookAnotherGuest btn">
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
                            .map((row, i) => {
                                return (
                                <TableRow key={i}>
                                    {columns.map((column, j) => {
                                    let value = row[column.id];

                                    // Render "Add" button only for specific columns
                                    if (["concierge", "kitchen", "housekeeping"].includes(column.id)) {
                                        return (
                                        <TableCell key={j} align="center" 
                                            >
                                            <div className="cellDiv" style={{ display: "flex", alignItems:"center",justifyContent:"center", flexDirection: "column" }}>
                                                {value}
                                                <button className='btn' style={{width:"100px", margin:".5rem"}}>
                                                Add
                                                </button>
                                            </div>
                                        </TableCell>
                                        );
                                    }
                                    if (["status"].includes(column.id)) {
                                        return (
                                        <TableCell key={j} align="center" 
                                            >
                                            <div className="cellDiv" style={{ display: "flex", alignItems:"center",justifyContent:"center", flexDirection: "column" }}>
                                                {value}
                                                <button className='btn' style={{width:"120px", margin:".5rem", fontSize:".8rem"}}>
                                                Check-In
                                                </button>
                                                <button className='btn' style={{width:"120px", margin:".5rem", fontSize:".8rem", backgroundColor:"#231F20", color:"#ad974f"}}>
                                                Check-Out
                                                </button>
                                            </div>
                                        </TableCell>
                                        );
                                    }

                                    return (
                                        <TableCell key={j} align="center">
                                        {value}
                                        </TableCell>
                                    );
                                    })}
                                </TableRow>
                                    );
                                })}
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