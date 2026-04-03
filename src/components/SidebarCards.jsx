import React, { useState } from 'react';

const PostRequestCard = () => {
  // 1. State for Form Inputs
  const [details, setDetails] = useState("");
  const [quantity, setQuantity] = useState("");
  const [time, setTime] = useState("");
  
  // 2. State for Success Message
  const [isSubmitted, setIsSubmitted] = useState(false);

  // 3. Handle Submission
  const handlePost = () => {
    // Show success overlay
    setIsSubmitted(true);

    // Reset the actual form fields so they are ready for the next post
    setDetails("");
    setQuantity("");
    setTime("");

    // Hide the success message after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  // 4. Validation Check
  const canPost = details.trim().length > 0 && quantity !== "Quantity" && quantity !== "" && time !== "Pickup time" && time !== "";

  return (
    <div className="bg-white p-6 rounded-[32px] shadow-lg relative border border-gray-100 overflow-hidden">
      
      {/* --- SUCCESS OVERLAY --- */}
      {isSubmitted && (
        <div className="absolute inset-0 bg-white/95 z-20 flex flex-col items-center justify-center animate-in fade-in zoom-in duration-300">
          <div className="w-14 h-14 bg-green-normal rounded-full flex items-center justify-center mb-3 shadow-lg shadow-green-100">
            <i className="fa-solid fa-check text-white text-2xl"></i>
          </div>
          <h4 className="text-green-normal font-bold text-lg">Request Posted!</h4>
          <p className="text-[11px] text-text-mild-gray mt-1">Check "Track Deliveries" for updates</p>
        </div>
      )}

      <h3 className="text-center text-md font-semibold text-text-charcoal mb-5">Post your Request</h3>
      
      <div className="space-y-3">
        {/* Details Input */}
        <input 
          type="text" 
          placeholder="Enter Details about the food"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          className="w-full bg-bg-offwhite rounded-lg p-4 text-md outline-none placeholder:text-text-mild-gray focus:ring-1 focus:ring-green-normal transition-all"
        />

        {/* Dropdown Row */}
        <div className="flex gap-3">
          <div className="flex-1 relative">
            <select 
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full bg-bg-offwhite rounded-lg p-3 text-md text-text-mild-gray appearance-none outline-none cursor-pointer"
            >
              <option value="">Quantity</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <i className="fa-solid fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-green-normal text-[10px] pointer-events-none"></i>
          </div>
          
          <div className="flex-1 relative">
            <select 
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full bg-bg-offwhite rounded-lg p-3 text-md text-text-mild-gray appearance-none outline-none cursor-pointer"
            >
              <option value="">Pickup time</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="1:00 PM">1:00 PM</option>
            </select>
            <i className="fa-solid fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-green-normal text-[10px] pointer-events-none"></i>
          </div>
        </div>
      </div>

      {/* Post Button */}
      <div className="mt-6 flex justify-center">
        <button 
          onClick={handlePost}
          disabled={!canPost}
          className={`rounded-2xl font-regular transition-all active:scale-95 text-md px-10 py-2 shadow-md ${
            canPost 
              ? "bg-green-normal text-white hover:bg-green-hover cursor-pointer" 
              : "bg-gray-100 text-gray-400 cursor-not-allowed shadow-none"
          }`}
        >
          Post Request
        </button>
      </div>
    </div>
  );
};

export default PostRequestCard;