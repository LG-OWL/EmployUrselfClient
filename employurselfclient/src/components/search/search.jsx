import React, { useState } from 'react';

export default function SearchPage(props){
  const [anz,setAnz] = useState([])
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
    <div>
      {anz.map((comp,index)=>(
        <div>
          <p>
            {comp.name}
            {comp.email}
          </p>
        </div>
      ))}
    </div>
  )
}