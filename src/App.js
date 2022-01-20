import './App.css';
import React from 'react';
import Header from './Header.jsx';
import Home from './Home.jsx';
import Checkout from './Checkout';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import Login from './Login';

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path = "/login" element = {<Login />}></Route>
            <Route path = '/checkout' element = {<><Header/><Checkout/></>}></Route>
            <Route path = '/' element = {<><Header/><Home/></>}></Route>
            
          </Routes>
      </Router>

    </div>
  );
}

export default App;
