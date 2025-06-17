import React from "react";
import { Link } from "react-router-dom";
import { Flame, Calendar, BarChart3 } from "lucide-react";

export default function Home() {
  return (
    <div className="pt-24 px-4 bg-gradient-to-b from-indigo-950 via-blue-950 to-purple-950 text-white min-h-screen">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-4">
          Welcome to ContestHub
        </h1>
        <p className="text-gray-400 text-lg sm:text-xl mb-2">
          Track. Compete. Rank. Repeat.
        </p>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          The one-stop platform for every coding enthusiast to conquer
          challenges and climb the leaderboard.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 mt-20 max-w-6xl mx-auto px-2">
        <div className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:shadow-xl transition duration-300 hover:scale-105">
          <div className="text-yellow-400 mb-4">
            <Flame className="w-10 h-10 mx-auto animate-pulse" />
          </div>
          <h3 className="text-2xl font-semibold text-center mb-3">
            {/* Use Link from react-router-dom for client-side navigation */}
            <Link
              to="/pages/liveContest"
              className="text-white hover:text-yellow-300 transition-all duration-300"
            >
              Live Contests
            </Link>
          </h3>
          <p className="text-center text-gray-300">
            Join active contests happening right now and test your skills in
            real-time.
          </p>
        </div>

        <div className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:shadow-xl transition duration-300 hover:scale-105">
          <div className="text-yellow-400 mb-4">
            <Calendar className="w-10 h-10 mx-auto" />
          </div>
          <h3 className="text-2xl font-semibold text-center mb-3">
            Upcoming Events
          </h3>
          <p className="text-center text-gray-300">
            Never miss an important competition — stay updated with our curated
            schedule.
          </p>
        </div>

        <div className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:shadow-xl transition duration-300 hover:scale-105">
          <div className="text-yellow-400 mb-4">
            <BarChart3 className="w-10 h-10 mx-auto" />
          </div>
          <h3 className="text-2xl font-semibold text-center mb-3">
            Leaderboards
          </h3>
          <p className="text-center text-gray-300">
            Keep an eye on rankings, track your growth, and aim for the top
            spot.
          </p>
        </div>
      </div>

      <div className="mt-20 text-center">
        <button className="bg-yellow-400 hover:bg-orange-400 text-black font-semibold px-10 py-4 rounded-xl transition duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 text-lg">
          🚀 Explore Contests Now
        </button>
      </div>
    </div>
  );
}
