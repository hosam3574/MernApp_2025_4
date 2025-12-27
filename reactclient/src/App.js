import logo from './logo.svg';
import './App.css';
import Login from './componants/login';
import Home from './componants/user/home';
import {BrowserRouter  ,Route, Routes } from 'react-router-dom';


 
function App() {
  return (
    <div className="App">
     
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/home' element={<Home/>}/>
          </Routes>
        </BrowserRouter>
     
    </div>
  );
}

export default App;
