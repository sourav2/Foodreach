import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Notifications = ({ isDropdown, closeDropdown }) => {
  const navigate = useNavigate();
  
  const [notifications, setNotifications] = useState([
    { id: 1, title: "Food delivered to you by Ajay Jana", time: "Delivered at 5pm", unread: true, img: "https://randomuser.me/api/portraits/men/44.jpg", isDeleting: false },
    { id: 2, title: "Food surplus updated by Anil Duha", time: "Updated at 5pm", unread: true, img: "https://randomuser.me/api/portraits/men/32.jpg", isDeleting: false },
    { id: 3, title: "Food delivered to you by Paran", time: "Updated at 5pm", unread: false, img: "https://randomuser.me/api/portraits/men/22.jpg", isDeleting: false },
    { id: 4, title: "Food Order Cancellation", time: "Cancelled at 5pm", unread: false, img: "https://randomuser.me/api/portraits/men/86.jpg", isDeleting: false },
    { id: 5, title: "New donation near you", time: "Just now", unread: true, img: "https://randomuser.me/api/portraits/women/44.jpg", isDeleting: false }
  ]);

  const handleDelete = (id) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, isDeleting: true } : n));
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 300);
  };

  const markAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, unread: false })));
  };

  // --- Change 1: Handle Back Button properly ---
  const handleBack = () => {
    if (isDropdown) {
      closeDropdown(); // Closes the overlay
    } else {
      navigate(-1); // Navigates back if it's a full page
    }
  };

  return (
    <div className={`flex flex-col ${isDropdown ? 'w-full' : 'min-h-screen bg-bg-offwhite pb-12'} overflow-hidden`}>
      
      {/* HEADER SECTION */}
      <div className={`px-4 pt-6 pb-4 bg-white border-b border-gray-50 sticky top-0 z-10`}>
        
        
        <div className="flex justify-between items-center">
          <div className="text-left">
            <h1 className={`${isDropdown ? 'text-xl' : 'text-3xl'} font-black text-text-charcoal tracking-tight`}>Notifications</h1>
            <p className="text-[10px] text-text-mild-gray font-medium">
              {notifications.filter(n => n.unread).length} unread messages
            </p>
          </div>
          <button 
            onClick={markAllRead}
            className="text-[9px] font-bold text-green-normal bg-green-50 px-3 py-1.5 rounded-full hover:bg-green-normal hover:text-white transition-all shadow-sm"
          >
            Mark all read
          </button>
        </div>
      </div>

      {/* --- Change 2: Scrollable List Area --- */}
      <div className={`px-4 py-4 space-y-3 overflow-y-auto custom-scrollbar`} 
           style={{ maxHeight: isDropdown ? '400px' : 'calc(100vh - 150px)' }}>
        
        {notifications.length > 0 ? (
          notifications.map((note) => (
            <div 
              key={note.id} 
              className={`relative transition-all duration-300 transform ${
                note.isDeleting ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"
              }`}
            >
              <div className="p-3 rounded-[20px] border flex items-center justify-between group bg-white shadow-sm hover:shadow-md transition-all border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 flex-shrink-0">
                    {note.unread && <div className="w-1.5 h-1.5 bg-green-normal rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>}
                  </div>
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-50 flex-shrink-0">
                    <img src={note.img} alt="user" className="w-full h-full object-cover" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className={`text-sm leading-tight ${note.unread ? 'font-semibold text-text-charcoal' : 'font-medium text-text-mild-gray'}`}>
                      {note.title}
                    </h4>
                    <p className="text-xs text-text-mild-gray">{note.time}</p>
                  </div>
                </div>

                <button 
                  onClick={() => handleDelete(note.id)}
                  className="p-1.5 text-gray-200 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                >
                  <i className="fa-solid fa-trash-can text-[10px]"></i>
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-10 space-y-3">
            <i className="fa-regular fa-bell-slash text-xl text-gray-200"></i>
            <p className="text-[11px] font-bold text-text-mild-gray">All caught up!</p>
          </div>
        )}
      </div>

      {isDropdown && (
        <div className="p-3 text-center border-t border-gray-50 bg-white">
          <button className="text-[10px] font-bold text-text-mild-gray hover:text-green-normal">
            Clear all notifications
          </button>
        </div>
      )}
    </div>
  );
};

export default Notifications;