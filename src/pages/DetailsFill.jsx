import React, { useState } from 'react'; // 1. Import useState
import { useNavigate } from 'react-router-dom';

const DetailsFill = () => {
  const navigate = useNavigate();

  // 2. Setup State for all fields
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    location: "",
    language: ""
  });

  // Helper to update state dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // 3. Validation Logic
  const isFormComplete = 
    formData.name.trim().length > 2 &&
    formData.phone.length >= 10 &&
    formData.email.includes("@") &&
    formData.password.length >= 6 &&
    formData.location !== "" && formData.location !== "Location" &&
    formData.language !== "" && formData.language !== "Select Language";

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col items-center justify-center px-6">
      
      {/* 1. Header Text */}
      <h2 className="text-paragraph font-medium text-text-charcoal mb-8">
        Enter your details to Signup
      </h2>

      {/* 2. FORM CONTAINER */}
      <div className="w-full max-w-[350px] space-y-4">
        
        <input 
          name="name"
          type="text" 
          placeholder="Name" 
          value={formData.name}
          onChange={handleChange}
          className="w-full bg-bg-offwhite border-none rounded-lg p-4 text-paragraph placeholder:text-text-mild-gray focus:ring-1 focus:ring-green-normal outline-none transition-all"
        />

        <input 
          name="phone"
          type="tel" 
          placeholder="Phone Number" 
          value={formData.phone}
          onChange={handleChange}
          className="w-full bg-bg-offwhite border-none rounded-lg p-4 text-paragraph placeholder:text-text-mild-gray focus:ring-1 focus:ring-green-normal outline-none transition-all"
        />

        <input 
          name="email"
          type="email" 
          placeholder="Email" 
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-bg-offwhite border-none rounded-lg p-4 text-paragraph placeholder:text-text-mild-gray focus:ring-1 focus:ring-green-normal outline-none transition-all"
        />

        <input 
          name="password"
          type="password" 
          placeholder="Password" 
          value={formData.password}
          onChange={handleChange}
          className="w-full bg-bg-offwhite border-none rounded-lg p-4 text-paragraph placeholder:text-text-mild-gray focus:ring-1 focus:ring-green-normal outline-none transition-all"
        />

        {/* 3. DROPDOWNS ROW */}
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <select 
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full bg-bg-offwhite border-none rounded-lg p-4 text-paragraph text-text-mild-gray appearance-none focus:ring-1 focus:ring-green-normal outline-none cursor-pointer"
            >
              <option value="">Location</option>
              <option value="Kolkata">Kolkata</option>
              <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
            </select>
            <i className="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-green-normal text-xs pointer-events-none"></i>
          </div>

          <div className="flex-1 relative">
            <select 
              name="language"
              value={formData.language}
              onChange={handleChange}
              className="w-full bg-bg-offwhite border-none rounded-lg p-4 text-paragraph text-text-mild-gray appearance-none focus:ring-1 focus:ring-green-normal outline-none cursor-pointer"
            >
              <option value="">Select Language</option>
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
              <option value="Bengali">Bengali</option>
            </select>
            <i className="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-green-normal text-xs pointer-events-none"></i>
          </div>
        </div>

        {/* 4. NEXT BUTTON */}
        <div className="pt-8 flex justify-center">
          <button 
            onClick={() => navigate('/home')} 
            disabled={!isFormComplete}
            className={`px-10 py-3 rounded-2xl font-regular transition-all active:scale-95 shadow-lg ${
              isFormComplete 
                ? "bg-green-normal hover:bg-green-hover text-white shadow-green-normal/10 cursor-pointer" 
                : "bg-gray-200 text-gray-400 cursor-not-allowed shadow-none"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsFill;