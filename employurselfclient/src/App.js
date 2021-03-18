import './App.css';
import LoginPage from './components/loginpage/login';
import cprofile from './components/companyProfile/cprofile';
import aprofile from './components/applicantProfile/aprofile';
import { BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router className = "App">
      <Route exact path="/" component={LoginPage}></Route>
      <Route path="/companyProfile" component={cprofile}></Route>
      <Route path="/applicantProfile" component = {aprofile} ></Route>
    </Router>
  );
}

export default App;
