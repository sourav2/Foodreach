import React from 'react';
import { useNavigate } from 'react-router-dom';
const DetailsFill = () => {
     const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white font-sans flex flex-col items-center justify-center px-6">
      
      {/* 1. Header Text */}
      <h2 className="text-paragraph font-medium text-text-charcoal mb-8">
        Enter you details to Signup
      </h2>

      {/* 2. FORM CONTAINER */}
      <div className="w-full max-w-[350px] space-y-4">
        
        {/* Name Input */}
        <input 
          type="text" 
          placeholder="Name" 
          className="w-full bg-bg-offwhite border-none rounded-lg p-4 text-paragraph placeholder:text-text-mild-gray focus:ring-1 focus:ring-green-normal outline-none transition-all"
        />

        {/* Phone Number Input */}
        <input 
          type="tel" 
          placeholder="Phone Number" 
          className="w-full bg-bg-offwhite border-none rounded-lg p-4 text-paragraph placeholder:text-text-mild-gray focus:ring-1 focus:ring-green-normal outline-none transition-all"
        />

        {/* Email Input */}
        <input 
          type="email" 
          placeholder="Email" 
          className="w-full bg-bg-offwhite border-none rounded-lg p-4 text-paragraph placeholder:text-text-mild-gray focus:ring-1 focus:ring-green-normal outline-none transition-all"
        />

        {/* Password Input */}
        <input 
          type="password" 
          placeholder="Password" 
          className="w-full bg-bg-offwhite border-none rounded-lg p-4 text-paragraph placeholder:text-text-mild-gray focus:ring-1 focus:ring-green-normal outline-none transition-all"
        />

        {/* 3. DROPDOWNS ROW */}
        <div className="flex gap-4">
          {/* Location Dropdown */}
          <div className="flex-1 relative">
            <select className="w-full bg-bg-offwhite border-none rounded-lg p-4 text-paragraph text-text-mild-gray appearance-none focus:ring-1 focus:ring-green-normal outline-none cursor-pointer">
              <option>Location</option>
              <option>Kolkata</option>
              <option>Delhi</option>
              <option>Mumbai</option>
            </select>
            <i className="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-green-normal text-xs pointer-events-none"></i>
          </div>

          {/* Language Dropdown */}
          <div className="flex-1 relative">
            <select className="w-full bg-bg-offwhite border-none rounded-lg p-4 text-paragraph text-text-mild-gray appearance-none focus:ring-1 focus:ring-green-normal outline-none cursor-pointer">
              <option>Select Language</option>
              <option>English</option>
              <option>Hindi</option>
              <option>Bengali</option>
            </select>
            <i className="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-green-normal text-xs pointer-events-none"></i>
          </div>
        </div>

        {/* 4. NEXT BUTTON */}
        <div className="pt-8 flex justify-center">
          <button onClick={() => navigate('/home')} className="bg-green-normal hover:bg-green-hover text-white px-10 py-3 rounded-2xl font-regular shadow-lg shadow-green-normal/10 transition-all active:scale-95">
            Next
          </button>
        </div>
      </div>

    </div>
  );
};

export default DetailsFill;