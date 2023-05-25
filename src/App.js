import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'



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
