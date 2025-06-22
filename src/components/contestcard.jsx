import React from "react";
import { Clock, Link2, Zap } from "lucide-react";

export default function ContestCard({
  name,
  platform,
  startTime,
  duration,
  status,
  link,
}) {
  const getStatusStyle = () => {
    switch (status) {
      case "Upcoming":
        return "text-yellow-400 border-yellow-400/50 bg-yellow-400/10";
      case "Running":
        return "text-green-400 border-green-400/50 bg-green-400/10 animate-pulse";
      case "Ended":
        return "text-red-400 border-red-400/50 bg-red-400/10";
      default:
        return "text-gray-400 border-gray-400/50 bg-gray-400/10";
    }
  };
  return (
    <div className="group transition-all duration-500 flex justify-center">
      <div className="relative bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden transform transition-all duration-500 origin-top scale-100 group-hover:scale-105 group-hover:shadow-xl hover:shadow-yellow-400/10 h-40 group-hover:h-72 w-64 group-hover:w-80 p-6 flex flex-col justify-between">
        {/* Glowing background effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-indigo-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Title and status (always shown) */}
        <div className="relative">
          <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent group-hover:from-yellow-400 group-hover:to-orange-500 transition-all duration-300">
            {name}
          </h3>
          <span
            className={`mt-3 inline-flex items-center text-xs px-3 py-1 rounded-full font-medium border-2 transition-all duration-300 ${getStatusStyle()}`}
          >
            <span className="w-1.5 h-1.5 rounded-full mr-2 bg-current"></span>
            {status}
          </span>
        </div>

        {/* Extra info shown on hover */}
        <div className="relative opacity-0 group-hover:opacity-100 mt-4 transition-all duration-500 space-y-4 text-sm text-gray-300">
          <p className="flex items-center space-x-2 group/platform">
            <span className="text-white/80 font-medium bg-white/10 px-2 py-1 rounded transition-all duration-300 group-hover/platform:bg-white/20">
              {platform}
            </span>
          </p>
          <p className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-yellow-400" />
            <span className="text-white/90">{startTime}</span>
          </p>
          <p className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-blue-400 group-hover:animate-pulse" />{" "}
            <span className="text-white/90">{duration}</span>
          </p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <span>Join Contest</span>
            <Link2 className="w-4 h-4" />
          </a>
        </div>

        {/* Bottom decoration line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500/50 via-blue-500/50 to-indigo-500/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
      </div>
    </div>
  );
}
