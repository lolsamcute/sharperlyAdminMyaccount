import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { X, ChevronRight } from "lucide-react";
import { notificationsData } from "@/modules/notifications/utils/constants";
import type { Notification } from "@/modules/notifications/utils/types";

interface NotificationDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const NotificationDropdown = ({ isOpen, onClose }: NotificationDropdownProps) => {
  const navigate = useNavigate();
  const [selectedNotification, setSelectedNotification] = useState<Notification | null>(null);

  if (!isOpen) return null;

  const handleNotificationClick = (notification: Notification) => {
    setSelectedNotification(notification);
  };

  const handleBackToList = () => {
    setSelectedNotification(null);
  };

  const handleShowAll = () => {
    navigate("/notifications");
    onClose();
  };

  const handleClose = () => {
    setSelectedNotification(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/20" onClick={handleClose} />
      
      {/* Dropdown */}
      <div className="absolute top-20 right-4 w-96 bg-white rounded-lg shadow-xl border border-gray-200 max-h-[80vh] overflow-hidden">
        {selectedNotification ? (
          // Individual notification detail view
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                  <Icon 
                    icon={selectedNotification.icon || "lucide:alert-triangle"} 
                    color={selectedNotification.color || "#F04438"} 
                    width={20} 
                    height={20} 
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-base leading-6">
                    {selectedNotification.title}
                  </h3>
                </div>
              </div>
              <button 
                onClick={handleBackToList}
                className="p-1 hover:bg-gray-100 rounded-md"
              >
                <X size={20} color="#6B7280" />
              </button>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-700 text-sm leading-6">
                {selectedNotification.description}
              </p>
              
              <div className="text-sm text-gray-500">
                {selectedNotification.dateTime}
              </div>
            </div>
          </div>
        ) : (
          // Notification list view
          <div>
            {/* Header */}
            <div className="p-4 border-b border-gray-200">
              <button 
                onClick={handleShowAll}
                className="w-full flex items-center justify-between text-left hover:bg-gray-50 p-2 rounded-md"
              >
                <span className="font-semibold text-gray-900 text-lg">
                  SHOW ALL NOTIFICATIONS
                </span>
                <ChevronRight size={20} color="#6B7280" />
              </button>
            </div>

            {/* Notifications List */}
            <div className="max-h-96 overflow-y-auto">
              {notificationsData.slice(0, 5).map((notification, index) => (
                <div key={notification.id}>
                  <button
                    onClick={() => handleNotificationClick(notification)}
                    className="w-full p-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div 
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          notification.highlight ? 'bg-red-50' : 'bg-purple-50'
                        }`}
                      >
                        <Icon 
                          icon={notification.icon || "lucide:bell"} 
                          color={notification.color || "#6941C6"} 
                          width={20} 
                          height={20} 
                        />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-gray-900 text-sm leading-5 mb-1">
                          {notification.title}
                        </h4>
                        <p className="text-gray-600 text-sm leading-5 line-clamp-2">
                          {notification.description}
                        </p>
                        <div className="text-xs text-gray-500 mt-2">
                          {notification.dateTime}
                        </div>
                      </div>
                    </div>
                  </button>
                  
                  {index < notificationsData.slice(0, 5).length - 1 && (
                    <div className="border-b border-gray-100" />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationDropdown;