import React from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white font-sans flex flex-col items-center justify-center px-6">
      
      {/* 1. BRAND LOGO (Matches Figma Split Color) */}
      <div className="font-logo text-5xl font-extrabold flex mb-4 tracking-normal">
        <span className="text-orange-normal">Food</span>
        <span className="text-green-normal">Reach</span>
      </div>

      <h2 className="text-paragraph font-medium text-text-charcoal mb-8">
        Enter your details to Signin
      </h2>

      {/* 2. FORM FIELDS */}
      <div className="w-full max-w-[350px] space-y-4">
        <input 
          type="email" 
          placeholder="Email" 
          className="w-full bg-bg-offwhite border-none rounded-xl p-4 text-paragraph placeholder:text-text-mild-gray focus:ring-2 focus:ring-green-normal outline-none transition-all"
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="w-full bg-bg-offwhite border-none rounded-xl p-4 text-paragraph placeholder:text-text-mild-gray focus:ring-2 focus:ring-green-normal outline-none transition-all"
        />
        
        <div className="pt-4 flex justify-center">
          <button className="bg-green-normal hover:bg-green-hover text-white px-12 py-3 rounded-2xl font-regular shadow-lg shadow-green-normal/20 transition-all active:scale-95">
            Login
          </button>
        </div>
      </div>

      {/* 3. SOCIAL ICONS (Using Lucide) */}
      <div className="mt-10 flex items-center gap-8">
  <i className="fa-brands fa-google text-color-text-mild-gray text-md cursor-pointer opacity-60 hover:opacity-80"></i>
  <i className="fa-regular fa-envelope text-color-text-mild-gray text-md cursor-pointer opacity-60 hover:opacity-80"></i>
  <i className="fa-brands fa-facebook-f text-color-text-mild-gray text-md cursor-pointer opacity-60 hover:opacity-80"></i>
</div>

      <button onClick={() => navigate('/signup')} className="mt-8 text-text-mild-gray hover:text-green-normal font-semibold text-sm transition-colors">
        Signup
      </button>
    </div>
  );
};

export default Login;