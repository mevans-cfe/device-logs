import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  id: number,
  firstName: string,
  lastName: string,
  laptopSerial: string,
  phoneNumber: string,
  iPadNumber: string,
  issueDate: string,
  issuedBy: string
) {
  return {
    id,
    firstName,
    lastName,
    laptopSerial,
    phoneNumber,
    iPadNumber,
    issueDate,
    issuedBy,
  };
}

const rows = [
  createData(
    1,
    "Matt",
    "Evans",
    "jhg243534bjh",
    "803-878-9961",
    "808-878-9961",
    "10/10/22",
    "ME"
  ),
  createData(
    2,
    "Test",
    "This",
    "jhg243534bjh",
    "803-123-4567",
    "808-878-9961",
    "10/10/22",
    "ME"
  ),
  createData(
    3,
    "Still",
    "Testing",
    "jhg243534bjh",
    "803-321-3216",
    "803-456-4561",
    "10/10/22",
    "ME"
  ),
];

export const EmployeeTable = () => {
  return (
    <div className="table-wrapper">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">First Name</TableCell>
              <TableCell align="center">Last Name</TableCell>
              <TableCell align="center">Laptop (Serial)</TableCell>
              <TableCell align="center">Phone Number</TableCell>
              <TableCell align="center">iPad Number</TableCell>
              <TableCell align="center">Date Issued</TableCell>
              <TableCell align="center">Issued By</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{row.id}</TableCell>
                <TableCell align="center">{row.firstName}</TableCell>
                <TableCell align="center">{row.lastName}</TableCell>
                <TableCell align="center">{row.laptopSerial}</TableCell>
                <TableCell align="center">{row.phoneNumber}</TableCell>
                <TableCell align="center">{row.iPadNumber}</TableCell>
                <TableCell align="center">{row.issueDate}</TableCell>
                <TableCell align="center">{row.issuedBy}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
