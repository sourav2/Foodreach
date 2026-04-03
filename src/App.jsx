import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import React, { useState } from 'react';
import Login from './pages/login';
import DetailsFill from './pages/DetailsFill';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SurplusFood from './pages/SurplusFoods';
import MembersList from './pages/Members';
import ProductPage from './pages/ProductDetail';
import MyBookings from './pages/MyBookings';  
import ThankyouPage from './pages/ThankyouPage';


function App() {
  return (
    
      <Routes>
        {/* The first page users see */}
        <Route path="/" element={<Login />} />
        {/* The page users go to when they click Signup */}
        <Route path="/signup" element={<DetailsFill />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/surplus-food" element={<SurplusFood />} />
        <Route path="/members" element={<MembersList />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/thankyou" element={<ThankyouPage />} />
        

      </Routes>
    
  );
}

export default App;