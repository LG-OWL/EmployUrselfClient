import './App.css';
import TaskPage from './components/employee/tasks'
import LoginPage from './components/loginpage/login'
import SearchPage from './components/search/search';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoginPage />
        <TaskPage />
        
      </header>
    </div>
  );
}

export default App;
