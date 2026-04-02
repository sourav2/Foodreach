import React from 'react';

const DeliveryList = () => {
  // Sample data to match your screenshot
  const deliveries = [
    { id: 1, name: "Sunita Devi", img: "https://randomuser.me/api/portraits/women/65.jpg" },
    { id: 2, name: "Mr. Anil Duha", img: "https://randomuser.me/api/portraits/men/32.jpg" },
    { id: 3, name: "Ajay Jana", img: "https://randomuser.me/api/portraits/men/45.jpg" },
  ];

  return (<div className='flex flex-col gap-6'>

  
      <div className="bg-white p-5 rounded-[32px] shadow-lg border border-gray-100 flex flex-col items-center">
    <div className="w-full space-y-4 mt-2 flex flex-col items-center">
      <h3 className="text-center font-bold text-text-charcoal text-sm">Out for Delivery</h3>
      
      {/* Main Container Card */}
        
        {/* Inner Beige Area */}
        <div className="w-full bg-[#F9F6F2] rounded-[24px] p-4 space-y-3">
          {deliveries.map((person) => (
            <div 
              key={person.id} 
              className="bg-white rounded-2xl p-3 flex items-center gap-4 shadow-sm border border-gray-50 transition-transform hover:scale-[1.02] cursor-pointer"
            >
              {/* Avatar */}
              <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border-2 border-white shadow-sm">
                <img src={person.img} alt={person.name} className="w-full h-full object-cover" />
              </div>
              
              {/* Text */}
              <p className="text-[11px] font-semibold text-text-charcoal">
                Food request by <span className="text-black">{person.name}</span>
              </p>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <button className="bg-green-normal text-white rounded-2xl font-regular shadow-md hover:bg-green-hover transition-all active:scale-95 text-md px-5 py-2">
          View All
        </button>
      </div>
    </div>
<div className="bg-white p-5 rounded-[32px] shadow-lg border border-gray-100 flex flex-col items-center">
    <div className="w-full space-y-4 mt-2 flex flex-col items-center">
      <h3 className="text-center font-bold text-text-charcoal text-sm">Pending Delivery</h3>
      
      {/* Main Container Card */}
        
        {/* Inner Beige Area */}
        <div className="w-full bg-[#F9F6F2] rounded-[24px] p-4 space-y-3">
          {deliveries.map((person) => (
            <div 
              key={person.id} 
              className="bg-white rounded-2xl p-3 flex items-center gap-4 shadow-sm border border-gray-50 transition-transform hover:scale-[1.02] cursor-pointer"
            >
              {/* Avatar */}
              <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border-2 border-white shadow-sm">
                <img src={person.img} alt={person.name} className="w-full h-full object-cover" />
              </div>
              
              {/* Text */}
              <p className="text-[11px] font-semibold text-text-charcoal">
                Food request by <span className="text-black">{person.name}</span>
              </p>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <button className="bg-green-normal text-white rounded-2xl font-regular shadow-md hover:bg-green-hover transition-all active:scale-95 text-md px-5 py-2">
          View All
        </button>
      </div>
    </div>

</div>
  );
};

export default DeliveryList;