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
        return "text-yellow-400 border-yellow-400";
      case "Running":
        return "text-green-400 border-green-400 animate-pulse";
      case "Ended":
        return "text-red-400 border-red-400";
      default:
        return "text-gray-400 border-gray-600";
    }
  };

  return (
    <div className="group transition-all duration-500 flex justify-center">
      <div className="bg-gray-900 border border-gray-800 rounded-xl shadow-md overflow-hidden transform transition-all duration-500 origin-top scale-100 group-hover:scale-105 group-hover:rounded-2xl hover:shadow-yellow-500/20 hover:border-yellow-400/40 h-40 group-hover:h-72 w-64 group-hover:w-80 p-4 flex flex-col justify-between">
        {/* Title and status (always shown) */}
        <div>
          <h3 className="text-lg font-bold text-white group-hover:text-yellow-400 transition">
            {name}
          </h3>
          <span
            className={`mt-2 inline-block text-xs border px-3 py-1 rounded-full font-medium ${getStatusStyle()}`}
          >
            {status}
          </span>
        </div>

        {/* Extra info shown on hover */}
        <div className="opacity-0 group-hover:opacity-100 mt-4 transition-opacity duration-500 space-y-2 text-sm text-gray-400">
          <p>
            <span className="text-white font-medium">Platform:</span> {platform}
          </p>
          <p className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-yellow-400" />
            {startTime}
          </p>
          <p className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-blue-400" />
            Duration: {duration}
          </p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium bg-yellow-400 text-gray-900 hover:bg-yellow-300 transition"
          >
            Join Contest
            <Link2 className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
