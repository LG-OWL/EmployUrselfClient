import './App.css';
import LoginPage from './components/loginpage/login';
import React, { useState } from 'react';
import Router from './components/router'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  main: {
    width: '100%',
    height: '100%',
  },
  innerMain: {
    width: '100%',
    height: '100%',
  }
}));

function App() {
  let [user, setUser] = useState({isLoggedIn: false, isApplicant: null, email: null});
  //let [applicant, setApplicant] = useState({firstname: '', lastname: '', email: ''})
  //let [company, setCompany] = useState({name: '', email: '', timeLimit: '',joboffer: ''})
  const classes = useStyles();

  const handleChange = (changes) => {
    if (changes.isApplicant){
      fetch("http://localhost:8080/applicant/getApplicant",{
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: changes.email})
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          data = JSON.parse(data)
          const rating = data.amountRatings === 0 ? 0 : data.rating/data.amountRatings;
          setUser({...changes, firstname: data.firstname, lastname: data.lastname, rating: rating})
        })
    }else{
      fetch("http://localhost:8080/company/getCompany",{
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: changes.email})
      })
        .then(res => res.json())
        .then(data => {
          data = JSON.parse(data)
          setUser({...changes, name: data.name, timeLimit: data.timeLimit})
        })
    }
  }

  return (
    <div className={classes.main}>
        {!user.isLoggedIn ? <LoginPage handleChange={(changes) => handleChange(changes)}/> : (
          <div className={classes.innerMain}>
            <Router handleChange={(changes) => handleChange(changes)} isApplicant = {user.isApplicant} user={user} />
          </div>
        )}
    </div>
  );
}

export default App;
