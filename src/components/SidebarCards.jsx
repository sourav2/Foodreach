import React, { useState, useEffect } from 'react';
import riceImg from '../assets/Rice.jpg';
const SidebarCards = () => {

   
  

  return (
    <div className="w-full  space-y-6 bg-gray-50 p-0">
      
      {/* --- POST YOUR REQUEST CARD --- */}
      <div className="bg-white p-6 rounded-[32px] shadow-lg relative border border-gray-100">
        {/* Close Icon */}
        <button className="absolute right-5 top-5 text-green-normal hover:scale-110 transition-transform">
          <i className="fa-solid fa-xmark text-lg"></i>
        </button>

        <h3 className="text-center text-md font-semibold text-text-charcoal mb-5">Post your Request</h3>
        
        <div className="space-y-3">
          {/* Details Input */}
          <input 
            type="text" 
            placeholder="Enter Details about the food"
            className="w-full bg-bg-offwhite rounded-lg p-4 text-md outline-none placeholder:text-text-mild-gray focus:ring-1 focus:ring-green-normal"
          />

          {/* Dropdown Row */}
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <select className="w-full bg-bg-offwhite rounded-lg p-3 text-md text-text-mild-gray appearance-none outline-none cursor-pointer">
                <option>Quantity</option>
                <option>1</option><option>2</option><option>3</option>
              </select>
              <i className="fa-solid fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-green-normal text-[10px]"></i>
            </div>
            
            <div className="flex-1 relative">
              <select className="w-full bg-bg-offwhite rounded-lg p-3 text-md text-text-mild-gray appearance-none outline-none cursor-pointer">
                <option>Pickup time</option>
                <option>11:00 AM</option>
                <option>12:00 PM</option>
                <option>1:00 PM</option>
                <option>2:00 PM</option>
                
              </select>
              <i className="fa-solid fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-green-normal text-[10px]"></i>
            </div>
          </div>
        </div>

        {/* Post Button */}
        <div className="mt-6 flex justify-center">
          <button className="bg-green-normal text-white rounded-2xl font-regular shadow-md hover:bg-green-hover transition-all active:scale-95 text-md px-5 py-2">
            Post Request
          </button>
        </div>
      </div>

    
      </div>
      
      

    
  );
};

export default SidebarCards;