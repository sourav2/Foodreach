import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Ensure this is imported
import riceImg from '../assets/Rice.jpg';

const Items = () => {
  const navigate = useNavigate(); // Hook initialized correctly

  const foodItems = [
    {
      id: 1,
      name: "Cooked Rice",
      serves: "20 People",
      kitchen: "Annapurna Community Kitchen",
      location: "Dum Dum, Kolkata",
      img: riceImg
    },
    {
      id: 2,
      name: "Fresh Bread",
      serves: "15 People",
      kitchen: "Robin Hood Army",
      location: "Salt Lake, Kolkata",
      img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=200&h=200&auto=format&fit=crop" 
    },
    {
      id: 3,
      name: "Mixed Veg",
      serves: "10 People",
      kitchen: "Feed The Needy",
      location: "Gariahat, Kolkata",
      img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=200&h=200&auto=format&fit=crop"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === foodItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); 

    return () => clearInterval(timer); 
  }, [foodItems.length]);

  const item = foodItems[currentIndex];

  return (
    <div className="w-full bg-transparent py-0">
      <div className="max-w-2xl mx-auto px-0">
        <div className="bg-white p-6 rounded-[32px] shadow-lg border border-gray-100 overflow-hidden">
          
          <div key={item.id} className="animate-slide-custom">
            
            {/* 1. TOP SECTION: Image + Text */}
            <div className="flex items-center gap-6 text-left">
              <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 shadow-sm">
                <img src={item.img} className="w-full h-full object-cover" alt={item.name} />
              </div>

              <div className="flex-1 space-y-1">
                <h4 className="font-semibold text-2xl text-text-charcoal leading-tight">
                  {item.name}
                </h4>
                <p className="text-sm font-semibold text-text-mild-gray">
                  Serves {item.serves}
                </p>
                <div className="text-xs text-text-mild-gray leading-tight opacity-70">
                  <p>{item.kitchen}</p>
                  <p>Location: {item.location}</p>
                </div>
              </div>
            </div>

            {/* 2. BOTTOM SECTION: Action Bar */}
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-50">
              <div className="flex gap-4 text-text-mild-gray text-xl">
                <i className="fa-regular fa-heart cursor-pointer hover:text-red-500 transition-colors"></i>
                <i className="fa-regular fa-comment cursor-pointer hover:text-green-normal transition-colors"></i>
              </div>
              
              <div className="flex gap-2">
                {foodItems.map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer outline-none ${
                      index === currentIndex 
                        ? "bg-green-normal w-5 shadow-sm" 
                        : "bg-gray-200 w-1.5 hover:bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* FIXED BUTTON NAVIGATION */}
              <button 
                onClick={() => navigate(`/product/${item.id}`)} 
                className="bg-green-normal text-white rounded-2xl font-regular shadow-md hover:bg-green-hover transition-all active:scale-95 text-md px-5 py-2"
              >
                Reserve
              </button>
            
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;