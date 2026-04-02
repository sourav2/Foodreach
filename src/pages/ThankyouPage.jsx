import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      
      {/* --- NAVBAR --- */}
      <nav className="w-full bg-white px-6 md:px-12 py-4 flex items-center justify-between shadow-sm">
        <div className="font-logo text-3xl font-extrabold tracking-tighter">
          <span className="text-orange-normal">Food</span>
          <span className="text-green-normal">Reach</span>
        </div>
        <div className="hidden md:flex items-center gap-8 font-semibold text-sm text-text-mild-gray">
          <Link to="/" className="hover:text-green-normal transition-colors">Home</Link>
          <Link to="/bookings" className="hover:text-green-normal transition-colors">Track Deliveries</Link>
          <Link to="/contact" className="hover:text-green-normal transition-colors">Contact Us</Link>
        </div>
        <div className="flex items-center gap-5 text-xl text-text-mild-gray">
          <i className="fa-regular fa-bell cursor-pointer hover:text-green-normal"></i>
          <i className="fa-regular fa-comment-dots cursor-pointer hover:text-green-normal"></i>
          <i className="fa-regular fa-circle-user cursor-pointer hover:text-green-normal"></i>
        </div>
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
            onClick={() => navigate('/bookings')}
            className="bg-green-normal hover:bg-green-hover text-white font-bold py-4 rounded-2xl shadow-lg shadow-green-100 transition-all active:scale-95 text-xs uppercase tracking-widest"
          >
            Track my Pickup
          </button>
          
          <Link 
            to="/" 
            className="bg-gray-50 text-text-mild-gray hover:text-text-charcoal font-bold py-3 rounded-2xl text-[10px] uppercase tracking-widest transition-all"
          >
            Go Back Home
          </Link>
        </div>
      </main>
    </div>
  );
};

export default ThankYou;