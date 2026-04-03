import React, { useState, useEffect } from 'react';
import riceImg from '../assets/Rice.jpg';
import { Link } from 'react-router-dom';

const PreviousDeliveries = () => {
  const deliveryData = [
    {
      id: 1,
      user: {
        name: "Sandeep Malhotra",
        location: "Barasat, Kolkata, West Bengal",
        eta: "Coming to pick the order in 2 hours",
        age: 19,
        occupation: "Software Engineer (Part-time Volunteer)",
        languages: "Bengali, Hindi, English",
        img: "https://randomuser.me/api/portraits/men/32.jpg"
      },
      food: {
        name: "Cooked Rice",
        quantity: "2 Plate",
        kitchen: "Annapurna Community Kitchen",
        location: "Dum Dum, Kolkata, West Bengal",
        img: riceImg
      }
    },
    {
      id: 2,
      user: {
        name: "Priya Sharma",
        location: "Salt Lake, Kolkata",
        eta: "Arriving in 45 mins",
        age: 24,
        occupation: "NGO Volunteer",
        languages: "English, Hindi",
        img: "https://randomuser.me/api/portraits/women/44.jpg"
      },
      food: {
        name: "Fresh Bread",
        quantity: "5 Packets",
        kitchen: "Robin Hood Army",
        location: "Sector V, Kolkata",
        img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=200&h=200&auto=format&fit=crop"
      }
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === deliveryData.length - 1 ? 0 : prev + 1));
    }, 5000); // 5 seconds

    return () => clearInterval(timer);
  }, [isPaused, deliveryData.length]);

  const item = deliveryData[currentIndex];

  return (
    <div className="w-full space-y-4 mt-8">
      <div className='flex flex-col items-center gap-2'>
            <h3 className="font-semibold text-text-charcoal text-md tracking-normal">Previous Deliveries</h3>
            <div className="w-10 h-1 bg-green-normal rounded-full"></div>
          </div>

      {/* MAIN SLIDER CARD */}
      <div 
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="bg-white p-6 rounded-[32px] shadow-lg border border-gray-100 flex flex-col md:flex-row gap-6 items-center relative overflow-hidden transition-all duration-500"
      >
        <div key={item.id} className="flex flex-col md:flex-row w-full gap-6 animate-slide-custom">
          
          {/* LEFT: USER PROFILE SECTION */}
          <div className="flex-1 flex gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md flex-shrink-0">
              <img src={item.user.img} alt={item.user.name} className="w-full h-full object-cover" />
            </div>
            <div className="text-left space-y-1">
              <h4 className="font-semibold text-2xl text-text-charcoal leading-none">{item.user.name}</h4>
              <p className="text-xs font-semibold text-text-mild-gray leading-relaxed">
                Location: {item.user.location}<br/>
                <span className="font-semibold text-sm text-text-charcoal leading-none">{item.user.eta}</span>
              </p>
              <div className="text-xs text-text-mild-gray leading-relaxed pt-1">
                <p><strong>Age:</strong> {item.user.age}</p>
                <p><strong>Occupation:</strong> {item.user.occupation}</p>
                <p><strong>Languages:</strong> {item.user.languages}</p>
              </div>
              <div className="flex gap-3 pt-2 text-green-normal text-lg">
                <i className="fa-solid fa-phone cursor-pointer hover:scale-110 transition-transform"></i>
                <i className="fa-brands fa-whatsapp cursor-pointer hover:scale-110 transition-transform"></i>
              </div>
            </div>
          </div>

          {/* VERTICAL DIVIDER (Visible only on desktop) */}
          <div className="hidden md:block w-[1px] bg-gray-200 h-32 self-center"></div>

          {/* RIGHT: FOOD ITEM SECTION */}
          <div className="flex-1 flex gap-4 items-start">
            <div className="w-24 h-24 rounded-[24px] overflow-hidden shadow-sm flex-shrink-0">
              <img src={item.food.img} alt={item.food.name} className="w-full h-full object-cover" />
            </div>
            <div className="text-left space-y-1 flex-1">
              <h4 className="font-semibold text-2xl text-text-charcoal leading-none">{item.food.name}</h4>
              <p className="text-sm font-semibold text-text-mild-gray">Quantity: {item.food.quantity}</p>
              <p className="text-[10px] text-text-mild-gray leading-tight opacity-70">
                {item.food.kitchen}<br/>{item.food.location}
              </p>
              <div className="flex items-center justify-between mt-3">
                <div className="flex gap-3 text-text-mild-gray">
                  <i className="fa-regular fa-heart cursor-pointer"></i>
                  <i className="fa-regular fa-comment cursor-pointer"></i>
                </div>
                <Link to="/my-bookings" className="bg-green-normal text-white rounded-2xl font-regular shadow-md hover:bg-green-hover transition-all active:scale-95 text-md px-5 py-2">
                  Track Deliveries
                </Link>
              </div>
            </div>
          </div>

        </div>
        
        {/* --- DOT INDICATORS (Bottom Center) --- */}
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
  {deliveryData.map((_, index) => (
    <button
      key={index}
      // 1. CLICK TO JUMP: This changes the slide immediately
      onClick={() => setCurrentIndex(index)}
      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer hover:bg-green-hover ${
        index === currentIndex 
          ? "bg-green-normal w-6 shadow-sm shadow-green-normal/20" 
          : "bg-gray-200 w-2 hover:w-3"
      }`}
      aria-label={`Go to slide ${index + 1}`}
    />
  ))}
  
</div>

      </div>
      <div className="flex justify-center">
         <Link to="/my-bookings ">
        <button className="bg-none text-green-normal rounded-2xl font-semibold transition-all active:scale-95 text-md px-6 py-2.5">
          View All Items
        </button>
        </Link>
      </div>
    </div>
    
  );
};

export default PreviousDeliveries;