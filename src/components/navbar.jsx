import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  Trophy,
  Calendar,
  Users,
  Bell,
  Search,
  User,
  Info,
  Settings,
  LogIn,
} from "lucide-react";
import NotificationComponent from "./Notification";
import { useAuth } from "../context/AuthContext"; // Import auth context

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isProfileAnimating, setIsProfileAnimating] = useState(false);
  const profileDropdownRef = useRef(null);
  const profileButtonRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get auth state from context
  const { user, logout, isAuthenticated } = useAuth();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleProfile = () => {
    if (isProfileOpen) {
      // Closing animation
      setIsProfileAnimating(true);
      setTimeout(() => {
        setIsProfileOpen(false);
        setIsProfileAnimating(false);
      }, 200);
    } else {
      // Opening animation
      setIsProfileOpen(true);
      setIsProfileAnimating(true);
      setTimeout(() => {
        setIsProfileAnimating(false);
      }, 300);
    }
  };

  const handleLogout = () => {
    logout();
    setIsProfileOpen(false);
    navigate("/");
  };

  // Close profile dropdown when route changes
  useEffect(() => {
    if (isProfileOpen) {
      setIsProfileAnimating(true);
      setTimeout(() => {
        setIsProfileOpen(false);
        setIsProfileAnimating(false);
      }, 200);
    }
    // Also close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Click outside handler
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        isProfileOpen &&
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target) &&
        !profileButtonRef.current.contains(event.target)
      ) {
        setIsProfileAnimating(true);
        setTimeout(() => {
          setIsProfileOpen(false);
          setIsProfileAnimating(false);
        }, 200);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isProfileOpen]);

  // Close profile dropdown when pressing Escape
  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.key === "Escape" && isProfileOpen) {
        setIsProfileAnimating(true);
        setTimeout(() => {
          setIsProfileOpen(false);
          setIsProfileAnimating(false);
        }, 200);
      }
    }

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, [isProfileOpen]);

  return (
    <nav className="w-full bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 shadow-2xl sticky top-0 z-50 backdrop-blur-sm border-b border-white/10">
      <div className="w-full max-w-none px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-2 rounded-lg shadow-lg">
              <Trophy className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                ContestHub
              </span>
              <span className="text-xs text-blue-200 hidden sm:block">
                All contests in one place
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Show on screens 768px and above */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8 flex-1 justify-center">
            <div className="flex items-center space-x-4 lg:space-x-6">
              <Link
                to="/live"
                className="flex items-center space-x-2 text-white hover:text-yellow-300 transition-all duration-300 hover:scale-105 px-3 py-2 rounded-lg hover:bg-white/10"
              >
                <Calendar className="h-4 w-4" />
                <span className="font-medium">Live Contests</span>
              </Link>
              <Link
                to="/upcoming"
                className="flex items-center space-x-2 text-white hover:text-yellow-300 transition-all duration-300 hover:scale-105 px-3 py-2 rounded-lg hover:bg-white/10"
              >
                <Calendar className="h-4 w-4" />
                <span className="font-medium">Upcoming</span>
              </Link>
              <Link
                to="/leaderBoard"
                className="flex items-center space-x-2 text-white hover:text-yellow-300 transition-all duration-300 hover:scale-105 px-3 py-2 rounded-lg hover:bg-white/10"
              >
                <Users className="h-4 w-4" />
                <span className="font-medium">Leaderboard</span>
              </Link>
              <Link
                to="/about"
                className="flex items-center space-x-2 text-white hover:text-yellow-300 transition-all duration-300 hover:scale-105 px-3 py-2 rounded-lg hover:bg-white/10"
              >
                <Info className="h-4 w-4" />
                <span className="font-medium">About Us</span>
              </Link>
            </div>
          </div>

          {/* Desktop Right Side - Search, Notifications, Login/Profile */}
          <div className="hidden md:flex items-center space-x-4 flex-shrink-0">
            {/* Search Bar */}
            <div className="relative hidden lg:block">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search contests..."
                className="bg-white/10 border border-white/20 rounded-full py-2 pl-10 pr-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent backdrop-blur-sm transition-all duration-300 w-48 xl:w-64"
              />
            </div>
            
            {/* Search Icon for medium screens */}
            <button className="lg:hidden p-2 text-white hover:text-yellow-300 transition-all duration-300 hover:scale-110 hover:bg-white/10 rounded-full">
              <Search className="h-5 w-5" />
            </button>

            {/* Notifications - only show if authenticated */}
            {isAuthenticated() && <NotificationComponent className="z-50" />}

            {/* Conditional Rendering: Login Button OR Profile Dropdown */}
            {!isAuthenticated() ? (
              /* Login Button for Unauthenticated Users */
              <Link
                to="/login"
                className="flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold px-4 py-2 rounded-full hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 hover:scale-105 hover:shadow-lg transform"
              >
                <LogIn className="h-4 w-4" />
                <span>Login</span>
              </Link>
            ) : (
              /* Enhanced Profile Dropdown for Authenticated Users */
              <div className="relative">
                <button
                  ref={profileButtonRef}
                  onClick={toggleProfile}
                  className={`flex items-center space-x-2 text-white hover:text-yellow-300 transition-all duration-300 p-2 rounded-full hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 transform ${
                    isProfileOpen ? "scale-110 bg-white/20" : "scale-100"
                  }`}
                  aria-expanded={isProfileOpen}
                  aria-haspopup="true"
                >
                  <div
                    className={`bg-gradient-to-br from-pink-500 to-purple-600 p-1 rounded-full transform transition-all duration-300 ${
                      isProfileOpen
                        ? "rotate-12 scale-110 shadow-lg"
                        : "rotate-0 scale-100"
                    }`}
                  >
                    <User className="h-4 w-4 text-white" />
                  </div>
                  <span className="hidden lg:inline font-medium">{user?.username || user?.name}</span>
                </button>

                {/* Enhanced Dropdown with Premium Animations */}
                <div
                  ref={profileDropdownRef}
                  className={`absolute right-0 mt-3 w-56 backdrop-blur-xl bg-white/95 rounded-2xl shadow-2xl border border-white/30 py-3 z-50 overflow-hidden
                    ${
                      isProfileOpen
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                    }
                  `}
                  style={{
                    transformOrigin: "top right",
                    transform: isProfileOpen
                      ? "scale(1) translateY(0) rotateX(0deg)"
                      : isProfileAnimating
                      ? "scale(0.95) translateY(-10px) rotateX(-5deg)"
                      : "scale(0.8) translateY(-20px) rotateX(-15deg)",
                    transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    filter: isProfileOpen ? "blur(0px)" : "blur(2px)",
                  }}
                >
                  {/* Animated Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-pink-50/30 to-blue-50/50 opacity-70"></div>

                  {/* Floating Particles Effect */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div
                      className={`absolute top-2 right-4 w-1 h-1 bg-purple-400 rounded-full transition-all duration-1000 ${
                        isProfileOpen ? "opacity-100 animate-pulse" : "opacity-0"
                      }`}
                    ></div>
                    <div
                      className={`absolute top-6 left-6 w-1 h-1 bg-pink-400 rounded-full transition-all duration-1000 delay-200 ${
                        isProfileOpen ? "opacity-100 animate-pulse" : "opacity-0"
                      }`}
                    ></div>
                    <div
                      className={`absolute bottom-4 right-8 w-1 h-1 bg-blue-400 rounded-full transition-all duration-1000 delay-400 ${
                        isProfileOpen ? "opacity-100 animate-pulse" : "opacity-0"
                      }`}
                    ></div>
                  </div>

                  {/* Profile Header */}
                  <div
                    className={`relative px-4 pb-3 border-b border-purple-200/50 transform transition-all duration-500 ${
                      isProfileOpen
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-2 rounded-full shadow-lg">
                        <User className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">{user?.username || user?.name || "User"}</p>
                        <p className="text-xs text-gray-600">{user?.email || "Premium User"}</p>
                      </div>
                    </div>
                  </div>

                  {/* Menu Items with Staggered Animation */}
                  <div className="relative py-2">
                    {[
                      {
                        to: "/profile",
                        icon: User,
                        label: "Profile",
                        delay: 100,
                      },
                      {
                        to: "/settings",
                        icon: Settings,
                        label: "Settings",
                        delay: 150,
                      },
                      {
                        to: "/my-contests",
                        icon: Trophy,
                        label: "My Contests",
                        delay: 200,
                      },
                    ].map((item, index) => (
                      <Link
                        key={index}
                        to={item.to}
                        className={`relative block px-4 py-3 text-gray-800 hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 transition-all duration-300 group transform ${
                          isProfileOpen
                            ? "translate-x-0 opacity-100"
                            : "translate-x-4 opacity-0"
                        }`}
                        style={{
                          transitionDelay: isProfileOpen
                            ? `${item.delay}ms`
                            : "0ms",
                        }}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="bg-gradient-to-br from-gray-200 to-gray-300 p-1.5 rounded-lg group-hover:from-purple-200 group-hover:to-pink-200 transition-all duration-300 group-hover:scale-110">
                            <item.icon className="w-4 h-4 text-gray-600 group-hover:text-purple-600 transition-colors duration-300" />
                          </div>
                          <span className="font-medium group-hover:text-purple-700 transition-colors duration-300">
                            {item.label}
                          </span>
                        </div>
                        {/* Hover effect line */}
                        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center rounded-r"></div>
                      </Link>
                    ))}
                  </div>

                  {/* Divider with Animation */}
                  <div
                    className={`mx-4 border-t border-gradient-to-r from-purple-200 to-pink-200 transition-all duration-500 ${
                      isProfileOpen
                        ? "opacity-100 scale-x-100"
                        : "opacity-0 scale-x-0"
                    }`}
                    style={{ transitionDelay: isProfileOpen ? "300ms" : "0ms" }}
                  ></div>

                  {/* Sign Out Button */}
                  <button
                    onClick={handleLogout}
                    className={`relative block w-full px-4 py-3 text-red-600 hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 transition-all duration-300 group transform text-left ${
                      isProfileOpen
                        ? "translate-x-0 opacity-100"
                        : "translate-x-4 opacity-0"
                    }`}
                    style={{ transitionDelay: isProfileOpen ? "350ms" : "0ms" }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="bg-gradient-to-br from-red-100 to-red-200 p-1.5 rounded-lg group-hover:from-red-200 group-hover:to-red-300 transition-all duration-300 group-hover:scale-110">
                        <X className="w-4 h-4 text-red-600 group-hover:rotate-90 transition-all duration-300" />
                      </div>
                      <span className="font-medium group-hover:text-red-700 transition-colors duration-300">
                        Sign Out
                      </span>
                    </div>
                    {/* Hover effect line */}
                    <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-red-500 to-pink-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center rounded-r"></div>
                  </button>

                  {/* Bottom Glow Effect */}
                  <div
                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transition-all duration-700 ${
                      isProfileOpen
                        ? "opacity-100 scale-x-100"
                        : "opacity-0 scale-x-0"
                    }`}
                    style={{ transitionDelay: isProfileOpen ? "400ms" : "0ms" }}
                  ></div>
                </div>
              </div>
            )}
          </div>

          {/* Mobile menu button - Show only on screens below 768px */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Search Icon */}
            <button className="p-2 text-white hover:text-yellow-300 transition-all duration-300 hover:scale-110 rounded-lg hover:bg-white/10">
              <Search className="h-5 w-5" />
            </button>

            {/* Mobile Notifications - only show if authenticated */}
            {isAuthenticated() && <NotificationComponent className="z-50" />}

            {/* Mobile Menu Toggle with Enhanced Animation */}
            <button
              onClick={toggleMenu}
              className="text-white hover:text-yellow-300 transition-all duration-300 p-2 rounded-lg hover:bg-white/10 hover:scale-110 active:scale-95 relative overflow-hidden"
            >
              <div className="relative w-6 h-6">
                {/* Hamburger Menu Icon with Smooth Transform */}
                <div
                  className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                    isMenuOpen ? "rotate-180 opacity-0" : "rotate-0 opacity-100"
                  }`}
                >
                  <Menu className="h-6 w-6" />
                </div>

                {/* Close Icon with Smooth Transform */}
                <div
                  className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                    isMenuOpen
                      ? "rotate-0 opacity-100"
                      : "-rotate-180 opacity-0"
                  }`}
                >
                  <X className="h-6 w-6" />
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu with Enhanced Animations */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen
              ? "max-h-screen opacity-100 border-t border-white/10 mt-2"
              : "max-h-0 opacity-0 border-t border-transparent"
          }`}
        >
          <div
            className={`pt-4 pb-4 space-y-2 transform transition-all duration-500 ease-in-out ${
              isMenuOpen ? "translate-y-0 scale-100" : "-translate-y-4 scale-95"
            }`}
          >
            {/* Mobile Search Bar with Staggered Animation */}
            <div
              className={`relative mb-4 transform transition-all duration-700 ease-out ${
                isMenuOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-8 opacity-0"
              }`}
              style={{ transitionDelay: isMenuOpen ? "100ms" : "0ms" }}
            >
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search contests..."
                className="w-full bg-white/10 border border-white/20 rounded-full py-2 pl-10 pr-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent backdrop-blur-sm transition-all duration-300 focus:scale-105"
              />
            </div>

            {/* Menu Items with Staggered Animation */}
            <Link
              to="/live"
              className={`flex items-center space-x-3 text-white hover:text-yellow-300 transition-all duration-500 px-4 py-3 rounded-lg hover:bg-white/10 hover:scale-105 active:scale-95 transform ${
                isMenuOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-8 opacity-0"
              }`}
              style={{ transitionDelay: isMenuOpen ? "200ms" : "0ms" }}
            >
              <Calendar className="h-5 w-5" />
              <span className="font-medium">Live Contests</span>
            </Link>
            <Link
              to="/upcoming"
              className={`flex items-center space-x-3 text-white hover:text-yellow-300 transition-all duration-500 px-4 py-3 rounded-lg hover:bg-white/10 hover:scale-105 active:scale-95 transform ${
                isMenuOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-8 opacity-0"
              }`}
              style={{ transitionDelay: isMenuOpen ? "300ms" : "0ms" }}
            >
              <Calendar className="h-5 w-5" />
              <span className="font-medium">Upcoming</span>
            </Link>
            <Link
              to="/leaderboard"
              className={`flex items-center space-x-3 text-white hover:text-yellow-300 transition-all duration-500 px-4 py-3 rounded-lg hover:bg-white/10 hover:scale-105 active:scale-95 transform ${
                isMenuOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-8 opacity-0"
              }`}
              style={{ transitionDelay: isMenuOpen ? "400ms" : "0ms" }}
            >
              <Users className="h-5 w-5" />
              <span className="font-medium">Leaderboard</span>
            </Link>
            <Link
              to="/about"
              className={`flex items-center space-x-3 text-white hover:text-yellow-300 transition-all duration-500 px-4 py-3 rounded-lg hover:bg-white/10 hover:scale-105 active:scale-95 transform ${
                isMenuOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-8 opacity-0"
              }`}
              style={{ transitionDelay: isMenuOpen ? "500ms" : "0ms" }}
            >
              <Info className="h-5 w-5" />
              <span className="font-medium">About Us</span>
            </Link>

            {/* Conditional Mobile Menu Items */}
            {!isAuthenticated() ? (
              /* Mobile Login Button */
              <Link
                to="/login"
                className={`flex items-center space-x-3 text-white hover:text-yellow-300 transition-all duration-500 px-4 py-3 rounded-lg hover:bg-white/10 hover:scale-105 active:scale-95 transform ${
                  isMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: isMenuOpen ? "600ms" : "0ms" }}
              >
                <LogIn className="h-5 w-5" />
                <span className="font-medium">Login</span>
              </Link>
            ) : (
              /* Mobile Authenticated User Options */
              <>
                {/* Notifications Button with Animation */}
                <button
                  className={`flex items-center space-x-3 text-white hover:text-yellow-300 transition-all duration-500 px-4 py-3 rounded-lg hover:bg-white/10 w-full hover:scale-105 active:scale-95 transform ${
                    isMenuOpen
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-8 opacity-0"
                  }`}
                  style={{ transitionDelay: isMenuOpen ? "600ms" : "0ms" }}
                >
                  <Bell className="h-5 w-5" />
                  <span className="font-medium">Notifications</span>
                  <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1 ml-auto animate-pulse">
                    3
                  </span>
                </button>
                
                {/* Divider with Animation */}
                <hr
                  className={`border-white/20 my-4 transition-all duration-500 ${
                    isMenuOpen ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                  }`}
                  style={{ transitionDelay: isMenuOpen ? "700ms" : "0ms" }}
                />
                
                {/* Profile Button with Animation */}
                <Link
                  to="/profile"
                  className={`flex items-center space-x-3 text-white hover:text-yellow-300 transition-all duration-500 px-4 py-3 rounded-lg hover:bg-white/10 w-full hover:scale-105 active:scale-95 transform ${
                    isMenuOpen
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-8 opacity-0"
                  }`}
                  style={{ transitionDelay: isMenuOpen ? "800ms" : "0ms" }}
                >
                  <User className="h-5 w-5" />
                  <span className="font-medium">Profile</span>
                </Link>

                {/* Mobile Logout Button */}
                <button
                  onClick={handleLogout}
                  className={`flex items-center space-x-3 text-red-400 hover:text-red-300 transition-all duration-500 px-4 py-3 rounded-lg hover:bg-white/10 w-full hover:scale-105 active:scale-95 transform ${
                    isMenuOpen
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-8 opacity-0"
                  }`}
                  style={{ transitionDelay: isMenuOpen ? "900ms" : "0ms" }}
                >
                  <X className="h-5 w-5" />
                  <span className="font-medium">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}