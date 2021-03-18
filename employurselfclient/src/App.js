import './App.css';

import LoginPage from './components/loginpage/login';
import cprofile from './components/companyProfile/cprofile';
import aprofile from './components/applicantProfile/aprofile';
import { BrowserRouter as Router, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App-header">
      <Router>
      <Route exact path="/" component={LoginPage}></Route>
      <Route path="/companyProfile" component={cprofile}></Route>
      <Route path="/applicantProfile" component = {aprofile} ></Route>
    
      </Router>
    </div>
  );
}

export default App;
