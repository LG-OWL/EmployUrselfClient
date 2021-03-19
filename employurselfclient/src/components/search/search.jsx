import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  
}));

export default function SearchPage(props){
  const [anz,setAnz] = useState([]);
  const classes = useStyles();
  const getData = () => {
    fetch("http://localhost:8080/company/getAllCompanies",{
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(res => res.json())
      .then(data => {
        data = JSON.parse(data)
        setAnz(data);
        })
  }
  getData();
  return(
    /*<table className = {classes.search} style =  >
      <tr> 
        <th>Name</th>
        <th>E-Mail</th>
      </tr>
      {anz.map((comp,index)=>(
          <tr>
            <td>{comp.name} </td>
            <td>{comp.email}</td>
          </tr>
      ))}
    </table>*/

    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Unternehmen</TableCell>
            <TableCell align="right">E-Mail</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {anz.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}