import React, { useEffect, useState } from 'react';
import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TablePagination } from "@mui/material";

import './Payroll.css';

function Payroll() {
  const columns = [
    { id: "employeeId", name: "Employee ID" },
    { id: "details", name: "Details" },
    { id: "employeeType", name: "Employee Type" },
    { id: "supervisor", name: "Supervisor" },
    { id: "salary", name: "Salary" },
  ];


  const [rows, setRows] = useState([
    {
      employeeId: "",
      details: "",
      employeeType: "",
      supervisor: "",
      salary: "",
    }
  ]);


  const [page, pageChange] = useState(10);
  const [rowPerPage, rowPerPageChange] = useState(10);
  const [editedRows, setEditedRows] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const getAllEmployees = async () => {
      try {
        let response = await fetch('http://localhost:8080/miancurocho/employee/all');
        let employeeData = await response.json();
  
        const transformedData = employeeData.map(employee => ({
          employeeId: employee.employee_id,
          details: `${employee.first_name} ${employee.middle_name} ${employee.last_name}`,
          employeeType: employee.employee_type,
          supervisor: employee.supervisor,
          salary: employee.salary
        }));
        
        setRows(transformedData);
        console.log(transformedData);
      } catch (error) {
        console.error(error);
      }
    };
  
    // Call the getAllEmployees function when the component mounts
    getAllEmployees();
  }, []);
  

  const handlechangepage = (event, newpage) => {
    pageChange(newpage);
  }

  const handleRowsPerPage = (event) => {
    rowPerPageChange(+event.target.value);
    pageChange(0);
  }

  const handleEditSalary = (employeeId) => {
    setIsEditing(true);
    setEditedRows({ ...editedRows, [employeeId]: true });
  }

  const handleSaveSalary = async (employeeId, salary) => {
    try {
        const response = await fetch(`http://localhost:8080/miancurocho/employee/updateSalary/${employeeId}?salary=${salary}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const updatedEmployeeSalary = await response.json();
        console.log('Updated Employee Salary:', updatedEmployeeSalary);

        setIsEditing(false);
        setEditedRows({ ...editedRows, [employeeId]: false });

    } catch (error) {
        console.error('Failed to update salary:', error);
    }
};


  return (
    <section className="payrollSection">
      <div className="payrollContainer">
        <div className="welcomePR flex">
          <div className="leftWelcome">
            <h1 className='dashboardTitle'>Payroll Dashboard</h1>
            <p className='dashboardTitle'>Welcome back, NAME HERE!</p>
          </div>
        </div>
        <div className="guestList">
          <h3><i>Employee List:</i></h3>
        </div>
        <div className="tableDiv">
          <Paper>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        style={{ backgroundColor: "#231F20", color: "#ad974f", minWidth: column.id === "salary" ? "100px" : "auto" }}
                        key={column.id}
                        align="center"
                      >
                        {column.name}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                    // .slice(page * rowPerPage, page * rowPerPage + rowPerPage)
                    .map((row, i) => {
                      return (
                        <TableRow key={i}>
                          {columns.map((column, j) => {
                            let value = row[column.id];
                            return (
                              <TableCell
                                key={j}
                                align="center"
                                style={{ minWidth: column.id === "salary" ? "100px" : "auto" }}
                              >
                                {column.id === "salary" ? (
                                  <div className="salaryColumn">
                                    {editedRows[row.employeeId] ? (
                                      <div className="editSalaryColumn">
                                        <div className="salaryInput">
                                          <input
                                            type="text"
                                            placeholder={value}
                                            value={value}
                                            onChange={(e) => setRows(rows.map(r => r.employeeId === row.employeeId ? { ...r, salary: e.target.value } : r))}
                                          />
                                        </div>
                                        <div className="saveSalaryButton">
                                          <button
                                            className="btn"
                                            style={{ marginLeft: "5px" }}
                                            onClick={() => handleSaveSalary(row.employeeId, row.salary)}
                                          >
                                            Save
                                          </button>
                                        </div>
                                      </div>
                                    ) : (
                                      <div className="editSalaryColumn">
                                        <div className="salaryDiv">
                                          {value}
                                        </div>
                                        <div className="editSalaryButton">
                                          <button
                                            className="btn"
                                            style={{ marginLeft: "5px" }}
                                            onClick={() => handleEditSalary(row.employeeId, row.salary)}
                                          >
                                            Edit Salary
                                          </button>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                ) : (
                                  value
                                )}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            {/* <TablePagination
              rowPerPageOption={[5, 10, 25,51]}
              page={page}
              count={rows.length}
              rowsPerPage={rowPerPage}
              component="div"
              onPageChange={handlechangepage}
              onRowsPerPageChange={handleRowsPerPage}
            ></TablePagination> */}
          </Paper>
        </div>
      </div>
    </section>
  );
}

export default Payroll;