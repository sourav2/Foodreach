import React, { useState, useEffect, useRef } from 'react';
import { Link , useLocation} from 'react-router-dom';
import Notifications from '../components/Notifications';
import Sidebar from '../components/Sidebar';

const SeekerProfile = () => {
   const location = useLocation()
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
const getLinkClass = (path) => {
    const baseClass = "transition-all duration-300 font-semibold text-sm pb-1 ";
    const activeClass = "text-green-normal border-b-2 border-green-normal";
    const inactiveClass = "text-text-mild-gray hover:text-green-normal";
    
    // Check if current path matches the link path
    return baseClass + (location.pathname === path ? activeClass : inactiveClass);
  };
  return (
    <div className="min-h-screen bg-bg-offwhite py-0 px-0">
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

      <div className="max-w-4xl mx-auto space-y-8 my-8">
        
        {/* --- HEADER SECTION --- */}
        <div className="bg-white rounded-[32px] p-8 shadow-lg border border-gray-100 flex flex-col md:flex-row gap-8 items-center">
          {/* Avatar Card */}
          <div className="bg-green-50 rounded-[24px] p-6 text-center w-full md:w-64">
            <div className="w-24 h-24 rounded-full overflow-hidden mx-auto border-4 border-white shadow-md mb-4">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-xl font-extrabold text-text-charcoal">Sandeep Malhotra</h2>
            <p className="text-sm font-semibold text-text-mild-gray">Community Volunteer</p>
            <p className="text-xs text-text-mild-gray mt-1">Focused in North Kolkata</p>
          </div>

          {/* Contact Details & Bio */}
          <div className="flex-1 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2 text-text-charcoal">
                <i className="fa-solid fa-user-tag text-green-normal"></i>
                <span>Seeker</span>
              </div>
              <div className="flex items-center gap-2 text-text-charcoal">
                <i className="fa-solid fa-location-dot text-green-normal"></i>
                <span>Dum Dum, Kolkata</span>
              </div>
              <div className="flex items-center gap-2 text-text-charcoal">
                <i className="fa-solid fa-envelope text-green-normal"></i>
                <span>user@email.com</span>
              </div>
              <div className="flex items-center gap-2 text-text-charcoal">
                <i className="fa-solid fa-calendar-days text-green-normal"></i>
                <span>Joined August 2021</span>
              </div>
            </div>
            
            <div className="bg-orange-50/50 p-4 rounded-2xl border border-orange-100">
              <p className="text-sm leading-relaxed text-text-charcoal italic">
                "Committed to ensuring food security in the Dum Dum area. I actively coordinate with local kitchens to manage logistics for elderly residents."
              </p>
            </div>
          </div>
        </div>

        {/* --- ACTIVITY STATS --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-green-50 p-6 rounded-[24px] text-center border border-green-100">
            <h3 className="text-3xl font-extrabold text-text-charcoal">20</h3>
            <p className="text-sm font-bold text-text-mild-gray">Request Fulfilled</p>
          </div>
          <div className="bg-orange-50 p-6 rounded-[24px] text-center border border-orange-100">
            <h3 className="text-3xl font-extrabold text-text-charcoal">19</h3>
            <p className="text-sm font-bold text-text-mild-gray">Food Donated</p>
          </div>
          <div className="bg-green-50 p-6 rounded-[24px] text-center border border-green-100">
            <h3 className="text-3xl font-extrabold text-text-charcoal">1</h3>
            <p className="text-sm font-bold text-text-mild-gray">Events Attended</p>
          </div>
        </div>

        {/* --- TRUST & REQUESTS ROW --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Trust Badge */}
          <div className="flex flex-col items-center justify-center p-8 text-center space-y-4">
             <img src="https://img.icons8.com/color/144/guarantee--v1.png" alt="Trust" className="w-32 h-32" />
             <p className="text-lg font-bold text-text-charcoal italic underline decoration-green-normal decoration-2 underline-offset-4">
               Verified by FoodReach
             </p>
          </div>

          {/* Recent Requests */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-text-charcoal">Recent Food Requests</h3>
            <div className="space-y-2">
              {['2 July 2025', '12 July 2025', '3 June 2025'].map((date, i) => (
                <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-gray-50 flex justify-between items-center hover:bg-gray-50 transition-colors">
                  <p className="text-xs font-bold">Requested cooked meal for family of 3</p>
                  <p className="text-[10px] text-text-mild-gray">{date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

         {/* Map Area */}
          <div className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-green-light h-[300px] md:h-[450px] relative">
             <div className="absolute inset-0 bg-[#e5e7eb] flex items-center justify-center">
                {/* Placeholder for actual Google Map component */}
                <iframe
                title="FoodReach Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14728.857647242278!2d88.40632555!3d22.64579175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027663e007548b%3A0xc61093121d516d26!2sNorth%20Dumdum%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1711660000000!5m2!1sen!2sin"
                className="w-full h-full border-none grayscale-[20%] contrast-[1.1]"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
             </div>
          </div>

        {/* --- CONTACT PREFERENCES --- */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-white p-8 rounded-[32px] shadow-lg border border-gray-100 gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-bold text-text-charcoal">Contact Preferences</h4>
            <p className="text-sm">Phone: <span className="font-bold text-green-normal">+91-9XXXXXXXXX</span></p>
            <p className="text-xs text-text-mild-gray">Preferred: SMS / In-App Notifications</p>
          </div>
          
          <div className="flex gap-4">
            <button className="px-8 py-2.5 border-2 border-green-normal text-green-normal font-medium rounded-xl text-sm hover:bg-green-50 transition-all">
              Edit Profile
            </button>
            <button className="px-8 py-2.5 bg-green-normal text-white font-regular rounded-xl text-sm shadow-md hover:bg-green-hover transition-all active:scale-95">
              Share Profile
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SeekerProfile;