import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Register from './Components/Register';
import Login from './Components/Login';
import Footer from './Components/Footer';
import Home from './Home/Home';
import ServicesPage from './Components/ServicesPage';
 

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path='/' element={<Home/>} />
        <Route path="/services/:shopId" element={<ServicesPage/>} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
