import './App.css';
import LoginPage from './components/loginpage/login';
import BasicProfile from './components/profile/basicProfile';
import TaskPage from './components/employee/tasks'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import React, { useState } from 'react';


function App() {
  const [user, setUser] = useState({isApplicant: null});
  const [applicant, setApplicant] = useState({firstname: '', lastname: '', email: ''})
  const [company, setCompany] = useState({name: '', email: '', timeLimit: '',joboffer: ''})
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
        <Route path="/profile" 
          render={(props)=> (<BasicProfile {...props}  handleChange={(changes) => handleChange(changes)} isApplicant = {user.isApplicant}
          user={user.isApplicant ? applicant : company} isVisiting = {false}/>)}>
        </Route>
        <Route path="/visit" 
          render={(props)=> (<BasicProfile {...props}  handleChange={(changes) => handleChange(changes)} isApplicant = {user.isApplicant} 
          user={user.isApplicant ? applicant : company} isVisiting = {true}/>)}>
        </Route>
        <Route path='/question' component = {TaskPage}>
        </Route>
      </Router>
    </div>
  );
}

export default App;
