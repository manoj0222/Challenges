import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/HomePage/HomePage';
import EventMenu from "./Components/Chips/EventMenu"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <div className="App">
     <Navbar/>
     <EventMenu/>
     <HomePage/>
    </div>
  );
}

export default App;
