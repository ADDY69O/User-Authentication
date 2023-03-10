import './App.css';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import { Routes, Route } from "react-router-dom";

import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    < >
<BrowserRouter>   
 

  <Routes>
      <Route path="/" element={<Login />}/>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/register" element={<Register />} />

      
    </Routes>

  
    </BrowserRouter>

  </>
  );
}

export default App;
