import React, { useState } from 'react'; // 1. Added useState
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  // 2. Setup State for inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 3. Validation Logic
  // Check if email has '@' and '.' and password is at least 6 chars
  const isEmailValid = email.includes("@") && email.includes(".");
  const isPasswordValid = password.length >= 6;
  const canSubmit = isEmailValid && isPasswordValid;

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col items-center justify-center px-6">
      
      {/* 1. BRAND LOGO */}
      <div className="font-logo text-5xl font-extrabold flex mb-4 tracking-normal">
        <span className="text-orange-normal">Food</span>
        <span className="text-green-normal">Reach</span>
      </div>

      <h2 className="text-paragraph font-medium text-text-charcoal mb-8">
        Enter your details to Signin
      </h2>

      {/* 2. FORM FIELDS */}
      <div className="w-full max-w-[350px] space-y-4">
        <div className="space-y-1">
          <input 
            type="email" 
            placeholder="Email" 
            value={email} // 4. Connect to state
            onChange={(e) => setEmail(e.target.value)} // 5. Update state
            className="w-full bg-bg-offwhite border-none rounded-xl p-4 text-paragraph placeholder:text-text-mild-gray focus:ring-2 focus:ring-green-normal outline-none transition-all"
          />
          {/* Optional: Show small hint if user starts typing but it's invalid */}
          {email.length > 0 && !isEmailValid && (
            <p className="text-[10px] text-red-500 pl-2">Please enter a valid email</p>
          )}
        </div>

        <div className="space-y-1">
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-bg-offwhite border-none rounded-xl p-4 text-paragraph placeholder:text-text-mild-gray focus:ring-2 focus:ring-green-normal outline-none transition-all"
          />
          {password.length > 0 && !isPasswordValid && (
            <p className="text-[10px] text-red-500 pl-2">Password must be 6+ characters</p>
          )}
        </div>
        
        <div className="pt-4 flex justify-center">
          {/* 6. Dynamic Button Styling */}
          <button 
            onClick={() => navigate('/home')}
            disabled={!canSubmit} // 7. Disable button
            className={`px-12 py-3 rounded-2xl font-regular transition-all active:scale-95 shadow-lg ${
              canSubmit 
                ? "bg-green-normal hover:bg-green-hover text-white shadow-green-normal/20 cursor-pointer" 
                : "bg-gray-200 text-gray-400 cursor-not-allowed shadow-none"
            }`}
          >
            Login
          </button>
        </div>
      </div>

      {/* 3. SOCIAL ICONS */}
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