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

  const initialRows = [
    {
      "employeeId": 1,
      "details": "details",
      "employeeType": "Concierge",
      "supervisor": "Roey Presas",
      "salary": 200,
    },
    {
      "employeeId": 2,
      "details": "details",
      "employeeType": "Kitchen",
      "supervisor": "Roey Presas",
      "salary": 300,
    },
    {
      "employeeId": 3,
      "details": "details",
      "employeeType": "Housekeeping",
      "supervisor": "Roey Presas",
      "salary": 400,
    },
    {
      "employeeId": 4,
      "details": "details",
      "employeeType": "Concierge",
      "supervisor": "Roey Presas",
      "salary": 500,
    },
  ];

  const [rows, setRows] = useState(initialRows);
  const [page, pageChange] = useState(0);
  const [rowPerPage, rowPerPageChange] = useState(5);
  const [editedRows, setEditedRows] = useState({});
  const [isEditing, setIsEditing] = useState(false);

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

  const handleSaveSalary = (employeeId) => {
    // You should update the corresponding employee's salary in the state or make an API call to update it
    console.log(`Save salary for employee ${employeeId}: ${editedRows[employeeId]}`);
    setIsEditing(false);
    setEditedRows({ ...editedRows, [employeeId]: false });
  }

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
                    .slice(page * rowPerPage, page * rowPerPage + rowPerPage)
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
                                            onClick={() => handleSaveSalary(row.employeeId)}
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
                                            onClick={() => handleEditSalary(row.employeeId)}
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
            <TablePagination
              rowPerPageOption={[5, 10, 25]}
              page={page}
              count={rows.length}
              rowsPerPage={rowPerPage}
              component="div"
              onPageChange={handlechangepage}
              onRowsPerPageChange={handleRowsPerPage}
            ></TablePagination>
          </Paper>
        </div>
      </div>
    </section>
  );
}

export default Payroll;