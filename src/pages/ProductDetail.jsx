import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Notifications from '../components/Notifications'; // Ensure these paths are correct
import Sidebar from '../components/Sidebar';

const ProductPage = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get the ID from the URL
  const [activeImg, setActiveImg] = useState(0);

  // YOUR DATA ARRAY (Ideally imported from a shared data.js file)
  const foodItems = [
    { id: 1, name: "Cooked Rice", serves: "100 People", kitchen: "Annapurna Kitchen", location: "Dum Dum , Kolkata, West Bengal", img: "https://images.unsplash.com/photo-1516684732162-798a0062be99?q=80&w=800&h=800&auto=format&fit=crop" },
    { id: 2, name: "Mixed Veg", serves: "100 People", kitchen: "Amit Bhoj", location: "Salt Lake , Kolkata, West Bengal", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&h=800&auto=format&fit=crop" },
    { id: 3, name: "Veg Thali", serves: "200 People", kitchen: "Dali Cafe", location: "Dum Dum, Kolkata, West Bengal", img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&h=800&auto=format&fit=crop" },
    { id: 4, name: "Fresh Fruit Cut", serves: "100 Packets", kitchen: "Fresh Food", location: "Dum Dum, Kolkata, West Bengal", img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=800&h=800&auto=format&fit=crop" },
  ];

  // Logic to find the clicked item
  const item = foodItems.find((f) => f.id === parseInt(id));

  // Safety check if the ID doesn't exist
  if (!item) return (
    <div className="h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-xl font-bold">Item not found!</h1>
      <Link to="/" className="text-green-normal underline">Go back home</Link>
    </div>
  );

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
    <div className="min-h-screen bg-white pb-20">
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
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 space-y-6">
        
        {/* BREADCRUMBS */}
        <div className="flex items-center gap-2 text-xs font-semibold  tracking-normal text-text-mild-gray">
          <Link to="/" className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg shadow-sm border border-gray-100 text-text-mild-gray">
            <i className="fa-solid fa-house text-[8px]"></i> Home
          </Link>
          <span className="text-gray-300">/</span>
          <div className="flex items-center gap-1 bg-green-50 text-green-normal px-2 py-1 rounded-md border border-green-100">
            Product Details
          </div>
        </div>

        {/* MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          
          {/* LEFT: IMAGE SECTION */}
          <div className="space-y-4">
            <div className="rounded-[32px] overflow-hidden shadow-md border border-gray-100 aspect-square">
              <img 
                src={item.img} 
                alt={item.name}
                className="w-full h-full object-cover animate-in fade-in duration-500"
              />
            </div>
            <div className="flex justify-center gap-2">
              {[0, 1, 2].map((dot) => (
                <div key={dot} className={`h-1.5 rounded-full transition-all ${activeImg === dot ? 'w-6 bg-green-normal' : 'w-2 bg-gray-200'}`}></div>
              ))}
            </div>
          </div>

          {/* RIGHT: DETAILS */}
          <div className="space-y-4">
            <header className="space-y-1">
              <h1 className="text-3xl md:text-4xl font-bold text-text-charcoal tracking-tight">
                {item.name}
              </h1>
              <p className="text-md font-semibold text-text-mild-gray">Serves: {item.serves}</p>
            </header>

            <div className="space-y-0.5">
              <p className="font-bold text-text-charcoal text-md">{item.kitchen}</p>
              <p className="text-sm text-text-mild-gray leading-relaxed">
                Location: <span className="font-bold text-text-charcoal">{item.location}</span>
              </p>
            </div>

            <p className="text-md md:text-sm text-text-mild-gray leading-relaxed opacity-80">
              This {item.name.toLowerCase()} is freshly available from {item.kitchen}. 
              Our community kitchens ensure that surplus food reaches those who need it most 
              while maintaining the highest hygiene standards.
            </p>

            {/* CALLOUT */}
            <div className="bg-orange-50 border-l-4 border-orange-normal p-3 rounded-r-xl">
              <p className="text-[11px] md:text-xs font-bold text-orange-900 leading-tight">
                Safety Note: Best consumed within 3 hours of pickup.
              </p>
            </div>

            {/* FORM FIELDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-md font-semibold text-text-charcoal tracking-normal">Quantity</label>
                <div className="block relative">
                  <select className="w-full appearance-none bg-[#FDF8F3] border border-gray-100 rounded-2xl px-4 py-3 text-md font-medium text-text-charcoal/50 outline-none focus:border-green-normal transition-colors">
                    <option>Select Quantity</option>
                    <option>10 Units</option>
                    <option>20 Units</option>
                  </select>
                  <i className="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-green-normal text-[10px]"></i>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-md font-semibold text-text-charcoal tracking-normal">Timing</label>
                <div className=" block relative">
                  <select className="w-full appearance-none bg-[#FDF8F3] border border-gray-100 rounded-2xl px-4 py-3 text-md font-medium text-text-charcoal/50 outline-none focus:border-green-normal transition-colors">
                    <option>Pickup time</option>
                    <option>1:00 PM</option>
                    <option>2:00 PM</option>
                  </select>
                  <i className="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-green-normal text-[10px]"></i>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-md font-semibold text-text-charcoal tracking-normal">Additional Information</label>
              <input 
                type="text" 
                placeholder="Enter Details about the food" 
                className=" block w-full bg-[#FDF8F3] border border-gray-100 rounded-xl px-4 py-3 text-md font-medium outline-none focus:border-green-normal"
              />
            </div>


            {/* ACTION BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {/* PRIMARY BUTTON: RESERVE PICKUP */}
  <button 
    onClick={() => navigate('/thankyou')}
    className="flex-[1.2] rounded-xl bg-green-normal hover:bg-green-hover text-white font-regular py-2 px-6 rounded-full shadow-md transition-all active:scale-95 text-md flex items-center justify-center gap-2 whitespace-nowrap"
  >
    Reserve pickup 
    <i className="fa-solid fa-angles-right text-xs opacity-90"></i>
  </button>

  {/* SECONDARY BUTTON: PICK MYSELF */}
  <button 
    onClick={() => navigate('/thankyou')}
    className="flex-1 rounded-xl border border-green-normal text-green-normal font-regular py-2 px-6 rounded-full hover:bg-green-50 transition-all active:scale-95 text-md whitespace-nowrap"
  >
    Pick myself
  </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;