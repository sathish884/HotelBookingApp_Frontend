import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from '../Components/HomeComponents/Home';
import Hotel from '../Components/HomeComponents/Hotel';

function NavRouters() {
  return (
    <div>
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotel" element={<Hotel />} />
        </Routes>
      
    </div>
  )
}

export default NavRouters