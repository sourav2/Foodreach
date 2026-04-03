import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import Notifications from '../components/Notifications';
import Sidebar from '../components/Sidebar';

const MembersList = () => {
  const sections = [
    {
      id: "seekers",
      title: "Seekers",
      count: 14,
      path: "/all-seekers",
      members: [
        { id: 1, name: "Anil Duha", info: "Last Online on 21 June", dist: "5KM", img: "https://randomuser.me/api/portraits/men/32.jpg" },
        { id: 2, name: "Sunita Devi", info: "Last Requested Today", dist: "1KM", img: "https://randomuser.me/api/portraits/women/65.jpg" },
        { id: 3, name: "Ajay Jana", info: "Last Requested Yesterday", dist: "2KM", img: "https://randomuser.me/api/portraits/men/44.jpg" }
      ]
    },
    {
      id: "providers",
      title: "Providers",
      count: 14,
      path: "/all-providers",
      members: [
        { id: 4, name: "Hitesh Tyagi", info: "Annapurna Community Kitchen", dist: "5KM", img: "https://randomuser.me/api/portraits/men/11.jpg" },
        { id: 5, name: "Amit Kumar", info: "Amit Bhoj", dist: "5KM", img: "https://randomuser.me/api/portraits/men/52.jpg" },
        { id: 6, name: "Paran", info: "Paran Community Kitchen", dist: "5KM", img: "https://randomuser.me/api/portraits/men/22.jpg" }
      ]
    },
    {
      id: "volunteers",
      title: "Volunteers",
      count: 4,
      path: "/all-volunteers",
      members: [
        { id: 7, name: "Sandeep Malhotra", info: "Barasat, Dum Dum (2pm-9pm)", dist: "1KM", img: "https://randomuser.me/api/portraits/men/86.jpg" },
        { id: 8, name: "Sandeep Dhali", info: "Barasat (10am-5pm)", dist: "5KM", img: "https://randomuser.me/api/portraits/men/48.jpg" },
        { id: 9, name: "Asim", info: "Madhyamgram, Dum Dum (9am-3pm)", dist: "5KM", img: "https://randomuser.me/api/portraits/men/90.jpg" }
      ]
    }
  ];

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
    <div className="min-h-screen bg-bg-offwhite pb-12">
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
        <div ref={dropdownRef} className={`absolute top-12 right-0 w-[320px] md:w-[400px] transition-all duration-300 origin-top transform ${
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

      {/* --- SEARCH SECTION --- */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-6">
        <SearchBar />
        
        {/* BREADCRUMBS */}
        <div className="flex items-center gap-2 text-xs font-bold mt-4">
          <div className="flex items-center gap-1.5 bg-green-50 text-green-normal px-3 py-1.5 rounded-lg border border-green-100">
             <i className="fa-solid fa-house text-[10px]"></i>
             <span>Home</span>
          </div>
          <span className="text-gray-300">/</span>
          <span className="text-text-mild-gray opacity-60">Members</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 mt-10 space-y-16">
        {sections.map((section) => (
          <section key={section.id} className="space-y-6">
            
            {/* SECTION HEADER */}
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-8 bg-green-normal rounded-full"></div>
              <h2 className="text-xxl md:text-2xl font-semibold text-text-charcoal">
                {section.title} <span className="text-text-mild-gray font-normal">({section.count} active)</span>
              </h2>
            </div>

            {/* RESPONSIVE GRID: 1 col on mobile, 3 cols on desktop */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {section.members.map((member) => (
                <div 
                  key={member.id} 
                  className="bg-white p-4 rounded-[24px] shadow-md border border-gray-100 flex items-center gap-4 hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border border-gray-100">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-md text-text-charcoal truncate">{member.name}</h4>
                    <p className="text-sm font-semibold text-text-mild-gray truncate">{member.info}</p>
                    <div className="inline-flex items-center gap-1 mt-1 px-2 py-0.5 bg-green-50 rounded-full">
                       <i className="fa-solid fa-location-dot text-sm text-green-normal px-2"></i>
                       <span className="text-sm font-semibold text-green-normal">{member.dist} away</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* VIEW ALL BUTTON */}
            <div className="flex justify-center mt-4">
              <Link to={section.path}>
                <button className="px-8 py-1 border-1 border-dark text-text-charcoal font-semibold rounded-2xl text-md hover:border-green-normal hover:text-green-normal transition-all active:scale-95">
                  View All {section.title}
                </button>
              </Link>
            </div>

          </section>
        ))}
      </div>
    </div>
  );
};

export default MembersList;