// src/components/NotificationBadge.jsx
import React, { useState, useEffect } from 'react';
import { Bell } from 'lucide-react';

const NotificationBadge = () => {
  const [count, setCount] = useState(3);
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    // Simuler des notifications en temps réel
    const interval = setInterval(() => {
      if (count > 0) {
        setCount(prev => Math.max(0, prev - 1));
      }
    }, 60000); // Diminue le compteur toutes les minutes
    
    return () => clearInterval(interval);
  }, [count]);

  const notifications = [
    { id: 1, text: "Nouvelle question de patient", time: "10 min", read: false },
    { id: 2, text: "Rappel: Consultation avec A. Sawadogo demain", time: "2h", read: true },
    { id: 3, text: "Mise à jour du système disponible", time: "1j", read: true },
  ];

  return (
    <div className="relative">
      <button 
        className="p-2 text-gray-700 hover:text-blue-700 relative"
        onClick={() => setShowNotifications(!showNotifications)}
      >
        <Bell size={20} />
        {count > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
            {count}
          </span>
        )}
      </button>
      
      {showNotifications && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl z-50 border border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <h3 className="font-bold text-gray-800">Notifications</h3>
          </div>
          
          <div className="max-h-96 overflow-y-auto">
            {notifications.map(notification => (
              <div 
                key={notification.id} 
                className={`p-4 border-b border-gray-200 hover:bg-gray-50 ${
                  notification.read ? 'bg-white' : 'bg-blue-50'
                }`}
                onClick={() => {
                  if (!notification.read) {
                    setCount(prev => prev - 1);
                    // Marquer comme lue dans une vraie app
                  }
                }}
              >
                <div className="text-sm font-medium">{notification.text}</div>
                <div className="text-xs text-gray-500 mt-1">{notification.time}</div>
              </div>
            ))}
          </div>
          
          <div className="p-2 text-center">
            <button className="text-blue-600 text-sm hover:text-blue-800">
              Voir toutes les notifications
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationBadge;