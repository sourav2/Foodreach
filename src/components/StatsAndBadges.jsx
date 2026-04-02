import React from 'react';

const StatsAndBadges = () => {
  return (
    <div className="w-full space-y-6">
      
    
      {/* 2. GRID FOR DONORS AND REMINDERS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* BEST DONORS CARD */}
        <div className="bg-white p-6 rounded-[32px] shadow-lg border border-gray-100 flex flex-col items-center">
          <h3 className="font-bold text-text-charcoal mb-6">Best Donors this week</h3>
          <div className="flex justify-between w-full gap-4 px-2">
            
            {/* Donor 1 */}
            <div className="flex flex-col items-center text-center max-w-[80px]">
              <div className="w-14 h-14 rounded-full border border-green-light flex items-center justify-center mb-2 overflow-hidden bg-white shadow-sm">
                 <img src="https://img.icons8.com/color/96/vegetarian-food.png" alt="Donor" className="w-10 h-10 object-contain" />
              </div>
              <p className="text-xs font-semibold text-text-gra">Annapurna Community Kitchen</p>
            </div>

            {/* Donor 2 */}
            <div className="flex flex-col items-center text-center max-w-[80px]">
              <div className="w-14 h-14 rounded-full border border-green-light flex items-center justify-center mb-2 overflow-hidden bg-white shadow-sm">
                 <img src="https://i.pinimg.com/736x/08/3b/2f/083b2fe2646cd064e3a294bb716810f9.jpg" alt="Donor" className="w-10 h-10 object-contain" />
              </div>
              <p className="text-xs font-semibold text-text-gra">Amit Bhoj</p>
            </div>

            {/* Donor 3 */}
            <div className="flex flex-col items-center text-center max-w-[80px]">
              <div className="w-14 h-14 rounded-full border-none flex items-center justify-center mb-2 overflow-hidden">
                 <img src="https://img.icons8.com/color/96/guarantee--v1.png" alt="Trust Badge" className="w-14 h-14 object-contain" />
              </div>
              <p className="text-xs font-semibold text-text-gra">Dali Cafe</p>
            </div>

          </div>
        </div>

        {/* REMINDERS CARD */}
        <div className="bg-white p-6 rounded-[32px] shadow-lg border border-gray-100 flex flex-col items-center">
          <h3 className="font-bold text-text-charcoal mb-6">Reminders</h3>
          <div className="flex justify-between w-full gap-4 px-2">
            
            {/* Reminder 1 */}
            <div className="flex flex-col items-center text-center max-w-[80px]">
              <div className="w-14 h-14 flex items-center justify-center mb-2">
                 <img src="https://cdn-icons-png.flaticon.com/512/9565/9565477.png" alt="Donate" className="w-14 h-14" />
              </div>
              <p className="text-xs font-semibold text-text-gray">Donate Food by Friday</p>
            </div>

            {/* Reminder 2 */}
            <div className="flex flex-col items-center text-center max-w-[80px]">
              <div className="w-14 h-14 flex items-center justify-center mb-2">
                 <img src="https://img.icons8.com/clouds/100/hand-with-pen.png" alt="Status" className="w-14 h-14" />
              </div>
              <p className="text-xs font-semibold text-text-gray">Check Pickup Status</p>
            </div>

            {/* Reminder 3 */}
            <div className="flex flex-col items-center text-center max-w-[80px]">
              <div className="w-14 h-14 flex items-center justify-center mb-2">
                 <img src="https://img.icons8.com/color/96/guarantee--v1.png" alt="Event" className="w-14 h-14" />
              </div>
              <p className="text-xs font-semibold text-text-gray">Upcoming Event on 1st December</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default StatsAndBadges;