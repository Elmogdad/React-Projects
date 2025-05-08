import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import ContactUs from './pages/ContactUs';

import Login from './auth/Login';
import Register from './auth/Register';
const App = () => {
  return (
    <Router>
  

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>

        
      
    </Router>
  );
};

export default App;