import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
//import Home from './Components/Layout_Components/Home';
import Navbar from './Components/Layout_Components/Navbar';
import { Layout } from 'antd';
import Hotel from './Components/Hotel_Components/Hotel';
import Booking from './Components/Booking_Components/Booking';
import Login from './Components/Auth_Components/Login';
import Register from './Components/Auth_Components/Register';
import Footers from './Components/Layout_Components/Footers';
import AccountActivated from './Utilits/AccountActivated';
import ForgetPassword from './Components/Auth_Components/ForgetPassword';
import ResetPassword from './Components/Auth_Components/ResetPassword';
import TokenVerify from './Components/Auth_Components/TokenVerify';
import Profile from './Components/Prifile_Components/Profile';
import Contact from './Components/About_Components/Contact';

function App() {
  return (
    <Router>
      <Layout>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/hotel" replace />} />
          <Route path='/hotel' exact element={<Hotel />} />
          <Route path='/booking-room/:roomid' exact element={<Booking />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path='/profile' exact element={<MyBookings />} /> */}

          {/* User authentication */}
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path="/activate/:token" element={<AccountActivated />} />
          <Route path="/forgot-password" element={<ForgetPassword />} />
          <Route path='/verify-token' element={<TokenVerify />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
        <Footers />
      </Layout>
    </Router>
  );
}

export default App
