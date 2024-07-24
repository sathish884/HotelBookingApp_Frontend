import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hotel from '../Components/Hotel_Component/Hotel';
import Home from '../Components/Home_Components/Home';
import Booking from '../Components/Booking_Component/Booking';

function NavRouters() {
  return (
    <>
    
        <Routes>
          {/* <Route path='/' element={<Login />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
   
    </>
  )
}

export default NavRouters