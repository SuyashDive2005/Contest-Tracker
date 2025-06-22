import React, { useState, useEffect, useRef } from "react";
import {
  Bell,
  X,
  Trophy,
  Calendar,
  AlertCircle,
  CheckCircle,
  Clock,
  Zap,
} from "lucide-react";

const NotificationComponent = ({ className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "contest",
      title: "New Contest Starting Soon!",
      message: "CodeChef Long Challenge begins in 30 minutes",
      time: "2 min ago",
      read: false,
    },
    {
      id: 2,
      type: "reminder",
      title: "Contest Reminder",
      message: "LeetCode Weekly Contest starts tomorrow",
      time: "1 hour ago",
      read: true,
    },
  ]);
  const dropdownRef = useRef(null);

  const toggleNotifications = () => {
    if (isOpen) {
      // Closing animation
      setIsAnimating(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsAnimating(false);
      }, 200);
    } else {
      // Opening animation
      setIsOpen(true);
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
      }, 300);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsAnimating(true);
        setTimeout(() => {
          setIsOpen(false);
          setIsAnimating(false);
        }, 200);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getNotificationIcon = (type) => {
    switch (type) {
      case "contest":
        return <Trophy className="w-5 h-5 text-yellow-400" />;
      case "reminder":
        return <Calendar className="w-5 h-5 text-blue-400" />;
      case "alert":
        return <AlertCircle className="w-5 h-5 text-red-400" />;
      default:
        return <Bell className="w-5 h-5 text-gray-400" />;
    }
  };

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((notif) =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter((notif) => notif.id !== id));
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* Notification Bell Button */}
      <button
        onClick={toggleNotifications}
        className="relative p-2 text-white hover:text-yellow-300 transition-colors duration-200 hover:bg-white/10 rounded-lg"
      >
        <Bell className="w-6 h-6" />
        {unreadCount > 0 && (
          <span className="absolute top-1 right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-xs text-white items-center justify-center">
              {unreadCount}
            </span>
          </span>
        )}
      </button>

      {/* Enhanced Notification Dropdown */}
      <div
        className={`absolute right-0 mt-3 w-80 backdrop-blur-xl bg-white/95 rounded-2xl shadow-2xl border border-white/30 py-3 z-50 overflow-hidden
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
        style={{
          transformOrigin: "top right",
          transform: isOpen
            ? "scale(1) translateY(0) rotateX(0deg)"
            : isAnimating
            ? "scale(0.95) translateY(-10px) rotateX(-5deg)"
            : "scale(0.8) translateY(-20px) rotateX(-15deg)",
          transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
          filter: isOpen ? "blur(0px)" : "blur(2px)",
        }}
      >
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-pink-50/30 to-blue-50/50 opacity-70"></div>

        {/* Floating Particles Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className={`absolute top-2 right-4 w-1 h-1 bg-purple-400 rounded-full transition-all duration-1000 ${
              isOpen ? "opacity-100 animate-pulse" : "opacity-0"
            }`}
          ></div>
          <div
            className={`absolute top-6 left-6 w-1 h-1 bg-pink-400 rounded-full transition-all duration-1000 delay-200 ${
              isOpen ? "opacity-100 animate-pulse" : "opacity-0"
            }`}
          ></div>
          <div
            className={`absolute bottom-4 right-8 w-1 h-1 bg-blue-400 rounded-full transition-all duration-1000 delay-400 ${
              isOpen ? "opacity-100 animate-pulse" : "opacity-0"
            }`}
          ></div>
        </div>

        {/* Header */}
        <div className="relative px-4 pb-3 border-b border-purple-200/50">
          <h3 className="text-lg font-semibold text-gray-800">Notifications</h3>
        </div>

        {/* Notification List */}
        <div className="relative max-h-96 overflow-y-auto">
          {notifications.length === 0 ? (
            <div className="p-4 text-center text-gray-500">
              No notifications
            </div>
          ) : (
            notifications.map((notification) => (
              <div
                key={notification.id}
                className={`relative group p-4 border-b border-purple-200/30 hover:bg-purple-50/50 transition-all duration-300
                  ${!notification.read ? "bg-blue-50/30" : ""}
                  transform transition-transform hover:scale-[0.99]
                `}
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 transform transition-transform group-hover:scale-110 group-hover:rotate-3">
                    {getNotificationIcon(notification.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-800 group-hover:text-purple-600 transition-colors">
                      {notification.title}
                    </p>
                    <p className="text-sm text-gray-600 mt-1 group-hover:text-gray-700">
                      {notification.message}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {notification.time}
                    </p>
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {!notification.read && (
                      <button
                        onClick={() => markAsRead(notification.id)}
                        className="text-blue-400 hover:text-blue-600 transition-colors"
                        title="Mark as read"
                      >
                        <CheckCircle className="w-4 h-4" />
                      </button>
                    )}
                    <button
                      onClick={() => deleteNotification(notification.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                      title="Delete"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationComponent;
