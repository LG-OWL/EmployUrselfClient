import './App.css';
import LoginPage from './components/loginpage/login';
import cprofile from './components/companyProfile/cprofile';
import aprofile from './components/applicantProfile/aprofile';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import React, { useState } from 'react';


function App() {
  const [user, setUser] = useState({isApplicant: null});
  const handleChange = (changes) => {
    setUser({...user, ...changes})
  }

  return (
    <div className="App-header">
      <Router>
      <Route exact path="/" component={LoginPage} handleChange={handleChange}></Route>
      <Route path="/companyProfile" component={cprofile} user={user}></Route>
      <Route path="/applicantProfile" component = {aprofile} user={user}></Route>
    
      </Router>
    </div>
  );
}

export default App;
