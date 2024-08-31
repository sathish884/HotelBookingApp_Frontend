import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import Home from './Components/Layout_Components/Home';
import Navbar from './Components/Layout_Components/Navbar';
import { Layout } from 'antd';
import Hotel from './Components/Hotel_Components/Hotel';
import Booking from './Components/Booking_Components/Booking';
import Login from './Components/Auth_Components/Login';
import Register from './Components/Auth_Components/Register';
import Footers from './Components/Layout_Components/Footers';

function App() {
  return (
    <Router>
      <Layout>
        <Navbar />
        <Routes>
          <Route path='/hotel' exact element={<Hotel />} />
          <Route path='/booking-room/:roomid' exact element={<Booking />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footers />
      </Layout>
    </Router>
  );
}

export default App
