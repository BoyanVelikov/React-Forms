import logo from './logo.svg';
import './App.css';
import CustomForm from './CustomForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <CustomForm/>
    </div>
  );
}

export default App;
