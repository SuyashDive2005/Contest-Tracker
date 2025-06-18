import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/about";
import LeaderBoard from "./pages/leaderBoard";
import LiveContest from "./pages/liveContest";
import Profile from "./pages/profile";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen ">
        {/* Navbar in its own  */}

        <Navbar />

        <div className="flex-grow">
          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/leaderboard" element={<LeaderBoard />} />

            {/* Contest Routes */}
            <Route path="/live" element={<LiveContest />} />
            <Route path="/browsecontests" element={<LiveContest />} />

            {/* User Routes */}
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>

        {/* Footer in its own  */}

        <Footer />
      </div>
    </Router>
  );
}
