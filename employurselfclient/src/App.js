import './App.css';
import LoginPage from './components/loginpage/login';
import Example from './components/ExamplePage/Example'
import { BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route exact path="/" component={LoginPage}></Route>
      <Route path="/otherPage" component={Example}></Route>
    </Router>
  );
}

export default App;
