import React, { useState, useEffect } from 'react';


const SearchBar = () => {
  const fullPlaceholder = 'Search for "Healthy Meals" or "Dum Dum Kitchen"...';
  const [placeholder, setPlaceholder] = useState('');

  useEffect(() => {
    let index = 0;
    const typingSpeed = 50; // Speed in milliseconds per letter

    const timer = setInterval(() => {
      setPlaceholder(fullPlaceholder.slice(0, index + 1));
      index++;
      
      if (index >= fullPlaceholder.length) {
        clearInterval(timer);
      }
    }, typingSpeed);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full mb-0 mt-4">
      <div className="relative group w-full">
        
        {/* MAGNIFYING GLASS ICON */}
        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
          <i className="fa-solid fa-magnifying-glass text-green-normal group-focus-within:text-green-hover transition-colors text-lg"></i>
        </div>

        {/* THE INPUT FIELD */}
        <input
          type="text"
          placeholder={placeholder} // Using the animated state here
          className="w-full bg-white py-4 pl-14 pr-12 rounded-full shadow-md border border-gray-100 
                     outline-none transition-all duration-300
                     placeholder:text-text-mild-gray/60 text-md font-medium
                     focus:ring-2 focus:ring-green-normal/10 focus:border-green-normal focus:shadow-lg"
        />

        {/* FILTER ICON */}
        <div className="absolute inset-y-0 right-0 pr-5 flex items-center">
          <button className="p-2 text-text-mild-gray hover:text-green-normal transition-colors">
            <i className="fa-solid fa-sliders"></i>
          </button>
        </div>

      </div>
    </div>
  );
};

export default SearchBar;