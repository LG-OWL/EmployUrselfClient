import './App.css';
import TaskPage from './components/tasks'
import LoginPage from './components/loginpage/login'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoginPage />
      </header>
    </div>
  );
}

export default App;
