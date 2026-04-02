import React from 'react';
import SearchBar from '../components/SearchBar';
import { Link } from 'react-router-dom';
const SurplusFood = () => {
  const foodItems = [
    { id: 1, name: "Cooked Rice", serves: "100 People", kitchen: "Annapurna Kitchen", location: "Dum Dum", img: "https://images.unsplash.com/photo-1516684732162-798a0062be99?q=80&w=200&h=200&auto=format&fit=crop" },
    { id: 2, name: "Mix Veg", serves: "100 People", kitchen: "Amit Bhoj", location: "Salt Lake", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=200&h=200&auto=format&fit=crop" },
    { id: 3, name: "Veg Thali", serves: "200 People", kitchen: "Dali Cafe", location: "Kolkata", img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=200&h=200&auto=format&fit=crop" },
    { id: 4, name: "Fresh Fruit Cut", serves: "100 Packets", kitchen: "Fresh Food", location: "Kolkata", img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=200&h=200&auto=format&fit=crop" },
  ];

  return (


    <div className="min-h-screen bg-bg-offwhite pb-6 px-0 md:px-0">
        
{/* --- NAVBAR --- */}
      <nav className="bg-white px-6 md:px-12 py-4 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <div className="font-logo text-3xl font-extrabold tracking-tighter">
          <span className="text-orange-normal">Food</span>
          <span className="text-green-normal">Reach</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-semibold text-sm">
          <a href="#" className="text-green-normal border-b-2 border-green-normal">Home</a>
          <a href="#" className="hover:text-green-normal">Track Deliveries</a>
          <a href="#" className="hover:text-green-normal">Contact Us</a>
        </div>

        <div className="flex items-center gap-5 text-xl text-text-mild-gray">
          <i className="fa-regular fa-bell cursor-pointer hover:text-green-normal"></i>
          <i className="fa-regular fa-comment-dots cursor-pointer hover:text-green-normal"></i>
          <Link to="/profile">
          <i className="fa-regular fa-circle-user cursor-pointer hover:text-green-normal"></i>
          </Link>
          <i className="fa-solid fa-bars md:hidden text-green-normal"></i>
        </div>
      </nav>

        {/* --- INFO BOX (Responsive Padding) --- */}
        <div className="bg-[#FDF8F3] rounded-[24px] p-6 md:p-8 border border-orange-100 text-center space-y-3 w-full  ">
          <div className='flex text-center flex-col items-center w-full max-w-7xl mx-auto gap-2 px-8 '>
      <SearchBar />
            </div>  
          <h4 className="text-orange-normal font-bold text-xs md:text-sm uppercase tracking-wider">Important Information</h4>
          <ul className="text-md md:text-md text-text-charcoal space-y-1 font-medium opacity-80 text-left md:text-left inline-block">
            <li>• All items available today are listed.</li>
            <li>• Each item includes quantity and provider info.</li>
            <li>• Providers are verified by FoodReach.</li>
          </ul>
        </div>
      <div className="max-w-7xl mx-auto space-y-6 md:space-y-8">
        
        

        {/* --- BREADCRUMBS (Hidden on very small screens to save space) --- */}
        <div className="hidden sm:flex items-center gap-2 text-xs font-bold">
          <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg shadow-sm border border-gray-100 text-text-mild-gray">
            <i className="fa-solid fa-house"></i>
            <span>Home</span>
          </div>
          <span className="text-gray-300">/</span>
          <div className="flex items-center gap-1.5 bg-green-50 text-green-normal px-3 py-1.5 rounded-lg border border-green-100">
            <i className="fa-solid fa-leaf"></i>
            <span>Surplus Food</span>
          </div>
        </div>

        {/* --- GRID SECTION --- */}
        <div className="space-y-6">
          <h2 className="text-center font-semibold text-text-charcoal text-xl md:text-xl">Available Options</h2>
          
          {/* MOBILE OPTIMIZED GRID: Starts at 1 column, shifts to 2 at md, 3 at lg */}
          {/* --- GRID SECTION --- */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
  {foodItems.map((item) => (
    <div key={item.id} className="bg-white p-4 md:p-5 rounded-[28px] md:rounded-[32px] shadow-md border border-gray-100 flex flex-col justify-between">
      
      {/* 1. WRAP THE TOP SECTION IN A LINK */}
      <Link to={`/product/${item.id}`} className="group">
        <div className="flex items-start gap-3 md:gap-4 text-left">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl overflow-hidden flex-shrink-0 shadow-sm border border-gray-50">
            {/* Added group-hover effect for better UX */}
            <img src={item.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt={item.name} />
          </div>
          <div className="flex-1 space-y-0.5">
            <h4 className="font-semibold text-base md:text-lg text-text-charcoal leading-tight group-hover:text-green-normal transition-colors">
              {item.name}
            </h4>
            <p className="text-md md:text-sm font-semibold text-text-mild-gray">Serves: {item.serves}</p>
            <div className="text-sm md:text-sm text-text-mild-gray leading-tight opacity-70 mt-1">
              <p className="font-bold">{item.kitchen}</p>
              <p>{item.location}</p>
            </div>
          </div>
        </div>
      </Link>

      <div className="flex items-center justify-between mt-4 md:mt-5 pt-3 border-t border-gray-50">
        <div className="flex gap-4 text-text-mild-gray text-base md:text-lg">
          <i className="fa-regular fa-heart cursor-pointer hover:text-red-500 transition-colors"></i>
          <i className="fa-regular fa-comment cursor-pointer hover:text-green-normal transition-colors"></i>
        </div>
        
        {/* 2. LINK THE BUTTON TOO */}
        <Link to={`/product/${item.id}`}>
          <button className="bg-green-normal text-white rounded-2xl font-regular shadow-md hover:bg-green-hover transition-all active:scale-95 text-md px-5 py-2">
            Reserve pickup
          </button>
        </Link>
      </div>

    </div>
  ))}
</div>
        </div>

      </div>
    </div>
  );
};

export default SurplusFood;