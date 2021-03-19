import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  search: {
    display: 'inline-grid',
    position: 'relative',
    left: '50%',
    top: '50%',
    width: '100%',
    transform: 'translate(-50%,-50%)',
    '& > *': {
      alignItems: 'center',
      display: 'inline-block'
    }
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
    <div className = {classes.search} >
      {anz.map((comp,index)=>(
          <p>
              {comp.name} {comp.email}
          </p>
      ))}
    </div>
  )
}