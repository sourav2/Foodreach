import React, { useState, useEffect, useRef } from 'react';
import { Link , useLocation} from 'react-router-dom';
import Rice from '../assets/Rice.jpg';
import Notifications from '../components/Notifications';
import Sidebar from '../components/Sidebar';

const MyBookings = () => {
  const location = useLocation()
const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const dropdownRef = useRef(null);
const getLinkClass = (path) => {
    const baseClass = "transition-all duration-300 font-semibold text-sm pb-1 ";
    const activeClass = "text-green-normal border-b-2 border-green-normal";
    const inactiveClass = "text-text-mild-gray hover:text-green-normal";
    
    return baseClass + (location.pathname === path ? activeClass : inactiveClass);
  };
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

  const previousOrders = [
    { id: 1, date: "May 10", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=100" },
    { id: 2, date: "May 1", img: "https://images.unsplash.com/photo-1516684732162-798a0062be99?q=80&w=100" },
    { id: 3, date: "Mar 10", img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=100" },
    { id: 4, date: "Mar 5", img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=100" },
    { id: 5, date: "Mar 2", img: Rice },
  ];

  return (
    <div className="min-h-screen bg-bg-offwhite pb-24 md:pb-12">
      
      {/* --- NAVBAR --- */}
      <nav className="bg-white px-6 md:px-12 py-4 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <div className="font-logo text-3xl font-extrabold tracking-tighter">
          <Link to="/home" className="flex items-center gap-1">
            <span className="text-orange-normal">Food</span>
            <span className="text-green-normal">Reach</span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-semibold text-sm">
          <Link to="/home" className={getLinkClass('/home')}>Home</Link>
          <Link to="/my-bookings" className={getLinkClass('/my-bookings')}>Track Deliveries</Link>
          <Link to="" className={getLinkClass('/contact')}>Contact Us</Link>
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

      {/* --- MOBILE HEADER (Hidden on Desktop) --- */}
      <div className="md:hidden bg-white px-6 py-4 flex items-center justify-between border-b border-gray-100">
        <div className="flex items-center gap-3">
          <i className="fa-solid fa-chevron-left text-text-charcoal text-lg"></i>
          <h1 className="font-bold text-lg text-text-charcoal">Product</h1>
        </div>
        <i className="fa-solid fa-xmark text-text-mild-gray text-xl"></i>
      </div>

      <div className="max-w-6xl mx-auto p-4 md:p-8 space-y-6">
        
        {/* BREADCRUMBS (Desktop Only) */}
        <div className="hidden md:flex items-center gap-2 text-xs font-semibold  tracking-normal text-text-mild-gray">
          <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg shadow-sm border border-gray-50">
            <i className="fa-solid fa-house"></i> Home
          </div>
          <span className="text-gray-300">/</span>
          <div className="flex items-center gap-1.5 bg-green-50 text-green-normal px-3 py-1.5 rounded-lg border border-green-100">
             Bookings
          </div>
        </div>

        {/* STATUS BANNER */}
        <div className="bg-white rounded-2xl md:rounded-full border border-gray-100 px-6 py-4 flex items-center gap-4 shadow-sm">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-normal opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-normal"></span>
          </span>
          <p className="text-sm font-bold text-text-charcoal opacity-80">You have 1 pickup scheduled for today.</p>
        </div>

        {/* MAIN ACTIVE CARD */}
        <div className="bg-white rounded-[32px] p-6 md:p-10 shadow-xl shadow-gray-200/40 border border-gray-50 flex flex-col lg:flex-row gap-10">
          
          {/* Left Side: Timeline & Token */}
          <div className="lg:w-1/3 space-y-8">
            <div className="flex gap-4">
              <div className="flex flex-col items-center gap-1 mt-1">
                <div className="w-2 h-2 rounded-full bg-green-normal"></div>
                <div className="w-0.5 h-10 bg-green-light"></div>
                <div className="w-2 h-2 rounded-full bg-green-normal"></div>
                <div className="w-0.5 h-10 border-l-2 border-dashed border-gray-200"></div>
                <div className="w-2 h-2 rounded-full border-2 border-gray-200"></div>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-md font-semibold text-text-charcoal ">Request Sent</p>
                  <p className="text-xs text-text-mild-gray font-bold">12:05 PM</p>
                </div>
                <div>
                  <p className="text-md font-semibold text-text-charcoal ">Confirmed</p>
                  <p className="text-xs text-text-mild-gray font-bold">12:10 PM</p>
                </div>
                <div>
                  <p className="text-md font-semibold text-text-charcoal ">Ready for pickup</p>
                  <p className="text-md text-green-normal font-bold">Active</p>
                </div>
              </div>
            </div>

            <button className="border border-gray-200 text-text-charcoal px-5 py-2 rounded-2xl font-regular text-md flex items-center gap-2 hover:bg-gray-50 active:scale-95 transition-all">
              <i className="fa-solid fa-motorcycle"></i> Contact Rider
            </button>
          </div>

          {/* Right Side: Order Info & Actions */}
          <div className="lg:w-2/3 flex flex-col justify-between gap-8 lg:border-l lg:pl-10 lg:border-gray-100">
            <div className="flex flex-col md:flex-row gap-8 justify-between">
              <div>
                <p className="text-md font-semibold text-text-charcoalmb-2">Token ID</p>
                <h3 className="text-3xl font-black text-text-charcoal">#FR_RE98</h3>
                <div className="mt-2 text-green-normal font-black text-3xl tracking-tighter">01:45:54</div>
                <p className="text-md font-semibold text-text-mild-gray opacity-100">Timing 3:00 PM - 5:00 PM</p>
              </div>
              
              <div className="space-y-4">
                <p className="text-md font-semibold text-text-charcoal">Order</p>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border border-gray-50 flex-shrink-0">
                    <img src={Rice} alt="rice" className="w-full h-full object-cover" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="font-bold text-lg text-text-charcoal leading-tight">Cooked Rice</h4>
                    <p className="text-[10px] text-text-mild-gray font-bold">Quantity: 2 Plate</p>
                    <p className="text-[9px] text-text-mild-gray opacity-60">Annapurna Community Kitchen</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-md font-text-md font-bold text-text-charcoal text-text-dark">Actions</p>
              <div className="flex flex-wrap gap-3">
                <button className="bg-green-normal text-white rounded-2xl font-regular shadow-md hover:bg-green-hover transition-all active:scale-95 text-md px-5 py-2">
                  <i className="fa-solid fa-location-dot"></i> Get Directions
                </button>
                <button className="border border-gray-200 text-text-charcoal px-5 py-2 rounded-2xl font-regular text-md flex items-center gap-2 hover:bg-gray-50 active:scale-95 transition-all">
                  <i className="fa-solid fa-phone"></i> Contact Kitchen
                </button>
                <button className="border border-red-100 text-red-500 px-5 py-2 rounded-2xl font-regular text-md flex items-center gap-2 hover:bg-red-50 active:scale-95 transition-all ">
                  Cancel Order <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* PREVIOUS ORDERS SECTION */}
        <section className="space-y-4">
          <h3 className="text-xs font-black text-text-charcoal uppercase tracking-widest px-2">Previous Orders</h3>
          <div className="flex gap-4 overflow-x-auto pb-6 custom-scrollbar px-2">
            {previousOrders.map(order => (
              <div key={order.id} className="flex-shrink-0 w-24 md:w-28 space-y-2 text-center group">
                <div className="w-full aspect-square rounded-[24px] overflow-hidden bg-white border border-gray-100 p-2 shadow-sm group-hover:shadow-md transition-all">
                   <img src={order.img} className="w-full h-full object-cover rounded-xl" alt="prev" />
                </div>
                <p className="text-[10px] font-bold text-text-mild-gray group-hover:text-text-charcoal transition-colors">{order.date}</p>
              </div>
            ))}
            <button className="flex-shrink-0 w-24 md:w-28 aspect-square border-2 border-dashed border-gray-200 rounded-[24px] flex items-center justify-center text-[10px] font-black text-text-mild-gray hover:border-green-normal hover:text-green-normal transition-all">
              View All
            </button>
          </div>
        </section>
      </div>

      {/* --- MOBILE BOTTOM NAV (Sticky) --- */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-white/80 backdrop-blur-md rounded-full shadow-2xl border border-gray-100 px-8 py-4 flex items-center justify-between z-50">
        <i className="fa-solid fa-magnifying-glass text-xl text-text-charcoal"></i>
        <div className="w-1 h-1 bg-pink-400 rounded-full mt-5"></div>
        <i className="fa-solid fa-bars text-xl text-text-charcoal"></i>
      </div>
    </div>
  );
};

export default MyBookings;