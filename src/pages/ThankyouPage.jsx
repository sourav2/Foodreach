import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Notifications from '../components/Notifications';
import Sidebar from '../components/Sidebar';

const ThankYou = () => {
  const navigate = useNavigate();
const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown if user clicks anywhere outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div className="min-h-screen bg-white flex flex-col items-center ">
      
      {/* --- NAVBAR --- */}
      <nav className="bg-white px-6 md:px-12 py-4 flex items-center justify-between sticky top-0 z-50 shadow-sm w-full">
        <div className="font-logo text-3xl font-extrabold tracking-tighter">
          <Link to="/home" className="flex items-center gap-1">
            <span className="text-orange-normal">Food</span>
            <span className="text-green-normal">Reach</span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-semibold text-sm">
          <Link to="/home" className="text-green-normal border-b-2 border-green-normal pb-1">Home</Link>
          <Link to="/my-bookings" className="hover:text-green-normal transition-colors">Track Deliveries</Link>
          <Link to="" className="hover:text-green-normal transition-colors">Contact Us</Link>
        </div>

        <div className="flex items-center gap-5 text-xl text-text-mild-gray">
         <button 
          onClick={() => setShowNotifications(!showNotifications)}
          className="relative group outline-none"
        >
          <i className={`fa-regular fa-bell cursor-pointer transition-colors ${showNotifications ? 'text-green-normal' : 'hover:text-green-normal'}`}></i>
          
          {/* Badge */}
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-normal opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-normal border-2 border-white"></span>
          </span>
        </button>
        {/* --- THE SLIDE DOWN OVERLAY --- */}
        <div className={`absolute top-12 right-0 w-[320px] md:w-[400px] transition-all duration-300 origin-top transform ${
          showNotifications 
            ? "opacity-100 scale-y-100 visible" 
            : "opacity-0 scale-y-0 invisible"
        }`}>
          <div className="bg-white rounded-[24px] shadow-2xl border border-gray-100 overflow-hidden max-h-[500px] flex flex-col">
             {/* We call your existing component here */}
             <Notifications isDropdown={true} /> 
          </div>
        </div>
          
          <i className="fa-regular fa-comment-dots cursor-pointer hover:text-green-normal transition-colors"></i>
          
          <Link to="/profile">
            <i className="fa-regular fa-circle-user cursor-pointer hover:text-green-normal transition-colors"></i>
          </Link>
          
          {/* Burger Icon */}
          <i 
            className="fa-solid fa-bars cursor-pointer text-green-normal md:hidden" 
            onClick={() => setIsMenuOpen(true)}
          ></i>
        </div>

        {/* Sidebar Component */}
        <Sidebar isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      </nav>


      <main className="flex-1 flex flex-col items-center justify-center px-4 text-center max-w-2xl py-12">
        
        {/* SUCCESS HEADER */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="text-3xl animate-bounce">🍲</span>
          <h1 className="text-3xl md:text-4xl font-black text-text-charcoal tracking-tight">
            Booking Confirmed
          </h1>
        </div>

        <p className="text-sm md:text-base text-text-mild-gray font-medium mb-10">
          Your food request has been sent to <br />
          <span className="font-bold text-text-charcoal">Annapurna Community Kitchen</span>
        </p>

        {/* BIG SUCCESS ICON */}
        <div className="relative mb-12">
          <div className="w-24 h-24 bg-green-normal rounded-full flex items-center justify-center shadow-lg shadow-green-100 animate-in zoom-in duration-500">
            <i className="fa-solid fa-check text-4xl text-white"></i>
          </div>
          {/* Pulsing ring effect */}
          <div className="absolute inset-0 w-24 h-24 border-4 border-green-100 rounded-full animate-ping opacity-20"></div>
        </div>

        {/* SUMMARY CARD */}
        <div className="w-full max-w-sm bg-white border border-gray-100 rounded-[24px] p-4 shadow-xl shadow-gray-100/50 flex items-center gap-4 mb-10 mx-auto transform hover:scale-[1.02] transition-transform">
          <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=200&auto=format&fit=crop" 
              alt="Veg Thali" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-left space-y-0.5">
            <h4 className="font-bold text-text-charcoal text-base">Veg Thali</h4>
            <p className="text-[10px] text-text-mild-gray font-bold">5 Meals</p>
            <p className="text-[10px] text-text-charcoal">
              Timing: <span className="font-bold uppercase">10 AM</span>
            </p>
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex flex-col gap-4 w-full max-w-xs mx-auto">
          <button 
            onClick={() => navigate('/my-bookings')}
            className="bg-green-normal text-white rounded-2xl font-regular shadow-md hover:bg-green-hover transition-all active:scale-95 text-md px-5 py-2"
          >
            Track my pickup
          </button>
          
          <Link 
            to="/home" 
            className="bg-gray-50 text-text-mild-gray hover:text-green-normal font-medium py-3 rounded-2xl text-md  tracking-normal transition-all"
          >
            Go Back Home
          </Link>
        </div>
      </main>
    </div>
  );
};

export default ThankYou;