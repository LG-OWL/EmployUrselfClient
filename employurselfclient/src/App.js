import './App.css';
import LoginPage from './components/loginpage/login';
import cprofile from './components/companyProfile/cprofile';
import aprofile from './components/applicantProfile/aprofile';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import React, { useState } from 'react';


function App() {
  const [user, setUser] = useState({isApplicant: null});
  const [applicant, setApplicant] = useState({firstname: '', lastname: '', email: ''})
  const [company, setCompany] = useState({name: '', email: '', timeLimit: ''})
  const handleChange = (changes) => {
    setUser({...user, ...changes})
    if (changes.isApplicant){
      //TODO Schicke Anfrage um Daten zu laden
    }else{
      //TODO Schicke Anfrage um Daten zu laden
    }
  }

  return (
    <div className="App-header">
      <Router>
      <Route exact path="/"
        render={(props)=> (<LoginPage {...props}  handleChange={(changes) => handleChange(changes)}/>)}>
      </Route>
      <Route path="/companyProfile" component={cprofile} user={user.isApplicant ? applicant : company}></Route>
      <Route path="/applicantProfile" component = {aprofile} user={user.isApplicant ? applicant : company}></Route>
    
      </Router>
    </div>
  );
}

export default App;
