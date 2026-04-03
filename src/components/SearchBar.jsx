import React, { useState, useEffect, useRef } from 'react';

const SearchBar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  // Auto-focus the input when the overlay opens
  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

  return (
    <>
      {/* --- 1. THE MAIN SEARCH TRIGGER (What the user sees first) --- */}
      <div 
        onClick={() => setIsSearchOpen(true)}
        className="w-full bg-white border border-gray-100 rounded-2xl p-4 flex items-center gap-3 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
      >
        <i className="fa-solid fa-magnifying-glass text-green-normal"></i>
        <span className="text-text-mild-gray text-sm">Search for "Healthy Meals" or "Dum Dum Kitchen"...</span>
      </div>

      {/* --- 2. THE SEARCH OVERLAY --- */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-white z-[100] animate-in fade-in slide-in-from-bottom-4 duration-300 flex flex-col">
          
          {/* Header with Input */}
          <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-4">
            <button onClick={() => setIsSearchOpen(false)} className="text-text-charcoal p-2">
              <i className="fa-solid fa-arrow-left text-lg"></i>
            </button>
            
            <div className="flex-1 relative">
              <input 
                ref={inputRef}
                type="text"
                placeholder="Search FoodReach..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-bg-offwhite rounded-xl py-3 px-4 outline-none focus:ring-1 focus:ring-green-normal"
              />
              {query && (
                <i 
                  onClick={() => setQuery("")}
                  className="fa-solid fa-circle-xmark absolute right-3 top-1/2 -translate-y-1/2 text-text-mild-gray cursor-pointer"
                ></i>
              )}
            </div>
          </div>

          {/* Search Content Body */}
          <div className="flex-1 overflow-y-auto px-6 py-6 w-90% ">
            {query.length === 0 ? (
              <div className="flex flex-col w-full px-6 py-6">
                <div className="flex flex-col gap-2 items-start">
                  <h4 className="text-md font-semibold text-text-charcoal opacity-70 tracking-normal mb-4 align-left ">Recent Searches</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Thali", "Barasat", "Annapurna", "Dinner"].map((item) => (
                      <span key={item} className="bg-bg-offwhite px-4 py-2 rounded-full text-sm text-text-charcoal font-medium border border-gray-50">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col gap-2 items-start mt-8">
                  <h4 className="text-md font-semibold text-text-charcoal opacity-70 tracking-normal my-4 align-left ">Trending Near You</h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-text-charcoal">
                      <i className="fa-solid fa-chart-line text-green-normal"></i>
                      <p className="text-sm font-semibold">Surplus Rice at Dum Dum Station</p>
                    </div>
                    <div className="flex items-center gap-3 text-text-charcoal">
                      <i className="fa-solid fa-chart-line text-green-normal"></i>
                      <p className="text-sm font-semibold">Community Kitchens in Kolkata</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-text-mild-gray">Searching for <span className="text-green-normal font-bold">"{query}"</span>...</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default SearchBar;