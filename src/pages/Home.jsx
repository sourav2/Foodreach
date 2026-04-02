import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar'; // Fixed: Missing Sidebar import
import SidebarCards from '../components/SidebarCards';
import DeliveryList from '../components/DeliveryList';
import StatsAndBadges from '../components/StatsAndBadges';
import PreviousDeliveries from '../components/PreviousDeliveries';
import Items from '../components/Items';
import AllItems from '../components/AllItems';
import SearchBar from '../components/SearchBar';
import Notifications from '../components/Notifications';

const Home = () => {
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
    <div className="min-h-screen bg-bg-offwhite font-sans text-text-charcoal">
      
      {/* --- NAVBAR --- */}
      <nav className="bg-white px-6 md:px-12 py-4 flex items-center justify-between sticky top-0 z-50 shadow-sm">
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

      {/* --- SEARCH BAR SECTION --- */}
      <div className='flex text-center flex-col items-center w-full max-w-7xl mx-auto gap-2 px-8 mt-6'>
        <SearchBar />
      </div>  

      <main className="max-w-7xl mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* --- LEFT COLUMN (MAP & MAIN CONTENT) --- */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Map Area */}
          <div className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-gray-100 h-[300px] md:h-[450px] relative">
            <iframe
              title="FoodReach Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58857.94056254881!2d88.38402511409893!3d22.78129765324103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8997a618d3637%3A0xc3676839e6a0044b!2sNorth%20Dumdum%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1711843200000!5m2!1sen!2sin"
              className="w-full h-full border-none grayscale-[20%]"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* Banner Quote */}
          <div className="bg-green-50 border-l-4 border-green-normal p-5 rounded-r-2xl italic text-green-900 text-sm md:text-base shadow-sm">
            "A meal you share today could be the hope someone needs tomorrow."
          </div>

          {/* Delivery Stats Bar */}
          <div className="bg-green-normal text-white p-6 rounded-[24px] flex justify-between items-center shadow-lg">
            <div>
              <p className="text-xl md:text-2xl font-black">Food Delivered Today : 120 units</p>
              <p className="text-xs md:text-sm font-bold opacity-80 mt-1">Food Delivered This Week : 528 units</p>
            </div>
          </div>

          <StatsAndBadges />
          <AllItems />
          <PreviousDeliveries />

          <p className='text-sm md:text-base text-text-mild-gray leading-relaxed mt-8 opacity-80'>
            At FoodReach, we believe that no surplus meal should ever go to waste while someone in our community goes hungry. By connecting local kitchens with dedicated volunteers, we are building a bridge between abundance and need.
          </p>
        </div>

        {/* --- RIGHT COLUMN (SIDEBAR) --- */}
        <div className="space-y-8">
          <SidebarCards />
          
          <div className='flex flex-col items-center gap-2'>
            <h3 className="font-bold text-text-charcoal text-sm uppercase tracking-widest">Most booked items</h3>
            <div className="w-10 h-1 bg-green-normal rounded-full"></div>
          </div>
          
          <Items />
          
          <div className="w-full">
            <DeliveryList /> 
          </div>
        </div>

      </main>
    </div>
  );
};

export default Home;