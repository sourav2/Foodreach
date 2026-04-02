import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const menuItems = [
    { name: "Profile", icon: "fa-regular fa-user", path: "/profile" },
    { name: "Available Surplus Food", icon: "fa-solid fa-leaf", path: "/surplus-food" },
    { name: "Track Deliveries", icon: "fa-solid fa-bicycle", path: "/my-bookings" },
    { name: "Previous Chats", icon: "fa-regular fa-comment-dots", path: "/chats" },
    { name: "Community", icon: "fa-solid fa-users", path: "/members" },
    { name: "Settings", icon: "fa-solid fa-sliders", path: "/settings" },
    { name: "Volunteers / Providers", icon: "fa-solid fa-map-signs", path: "/members" },
  ];

  return (
    <>
      {/* --- DARK OVERLAY (BACKDROP) --- */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* --- SLIDING MENU PANEL --- */}
      <div className={`fixed top-0 right-0 h-full w-[280px] md:w-[350px] bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        
        {/* Header inside Menu */}
        <div className="flex items-center justify-between p-8">
          <div className="font-logo text-2xl font-extrabold tracking-tighter">
            <span className="text-orange-normal">Food</span>
            <span className="text-green-normal">Reach</span>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-text-mild-gray hover:text-green-normal transition-colors"
          >
            <i className="fa-solid fa-xmark text-2xl"></i>
          </button>
        </div>

        {/* Menu Items */}
        <nav className="mt-4 px-4 space-y-2">
          {menuItems.map((item, index) => (
            <Link 
              key={index} 
              to={item.path}
              onClick={() => setIsOpen(false)} // Close menu on click
              className="flex items-center gap-4 px-6 py-4 rounded-2xl hover:bg-green-50 text-text-charcoal group transition-all"
            >
              <div className="w-8 flex justify-center text-green-normal group-hover:scale-110 transition-transform">
                <i className={`${item.icon} text-xl`}></i>
              </div>
              <span className="font-semibold text-sm">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;