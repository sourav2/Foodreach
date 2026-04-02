import React, { useState, useEffect } from 'react';
import riceImg from '../assets/Rice.jpg';
import { Link, useNavigate } from 'react-router-dom';

const AllItems = () => {
  const navigate = useNavigate();
  const foodItems = [
    { id: 1, name: "Cooked Rice", serves: "20 People", kitchen: "Annapurna Kitchen", location: "Dum Dum", img: riceImg },
    { id: 3, name: "Veg Thali", serves: "200 People", kitchen: "Dali Cafe", location: "Dum Dum, Kolkata, West Bengal", img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&h=800&auto=format&fit=crop" },
    { id: 2, name: "Mixed Veg", serves: "10 People", kitchen: "Feed The Needy", location: "Gariahat", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=200&h=200&auto=format&fit=crop" },
    { id: 4, name: "Fruit Basket", serves: "5 People", kitchen: "Green Earth", location: "New Town", img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=200&h=200&auto=format&fit=crop" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      // Loop back to start if we reach the end of pairs
      setCurrentIndex((prev) => (prev >= foodItems.length - 2 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [foodItems.length]);

  // Select two items based on the current index
  const visibleItems = foodItems.slice(currentIndex, currentIndex + 2);

  return (
    <div className="w-full space-y-6">
      <h3 className="text-center font-bold text-text-charcoal text-sm">Available items</h3>
      
      {/* 2-COLUMN GRID - Keyed to currentIndex to slide the whole row */}
      <div 
        key={currentIndex} 
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto animate-slide-custom"
      >
        {visibleItems.map((item) => (
          <div 
            key={item.id} 
            className="bg-white p-6 rounded-[32px] shadow-lg border border-gray-100"
          >
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
            <div className="flex items-center justify-between mt-5 pt-3 border-t border-gray-50">
              <div className="flex gap-4 text-text-mild-gray text-lg">
                <i className="fa-regular fa-heart cursor-pointer hover:text-red-500"></i>
                <i className="fa-regular fa-comment cursor-pointer hover:text-green-normal"></i>
              </div>
              <button onClick={() => navigate(`/product/${item.id}`)} className="bg-green-normal text-white rounded-2xl font-regular shadow-md hover:bg-green-hover transition-all active:scale-95 text-md px-5 py-2">
                Reserve
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-2">
        {Array.from({ length: foodItems.length - 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-green-normal w-6" : "bg-gray-200 w-2"
            }`}
          />
        ))}
      </div>
      <div className="flex justify-center">
         <Link to="/surplus-food">
        <button className="bg-none text-green-normal rounded-2xl font-semibold transition-all active:scale-95 text-md px-6 py-2.5">
          View All Items
        </button>
        </Link>
      </div>
    
    </div>
  );
};

export default AllItems;