import logo from './logo.svg';
import 'bootstrap/dist/js/bootstrap.bundle';

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";



function App() {
  return (
    <div className="App">
 <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
   </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
