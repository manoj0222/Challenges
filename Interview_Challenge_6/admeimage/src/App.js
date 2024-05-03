import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Nav from './components/NavBar/Nav';
import HomePage from './components/HomePage/HomePage';


function App() {
  return (
    <div className="App">
      <Nav/>
      <HomePage/>
    </div>
  );
}

export default App;
