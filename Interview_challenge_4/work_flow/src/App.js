import logo from './logo.svg';
import './App.css';
import NavBar from './frontEnd/components/navBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import WrokFlowBuilder from './frontEnd/components/Home/WrokFlowBuilder';
import UploadData from './frontEnd/components/Home/UploadData';
import ProgessRequest from './frontEnd/components/Home/ProgessRequest';
import 'reactflow/dist/style.css';

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<WrokFlowBuilder/>}/>
          <Route path="/upload" element={<UploadData/>}/>
          <Route path="/progress" element ={<ProgessRequest/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
