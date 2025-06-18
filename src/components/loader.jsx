import React from "react";
import { Trophy } from "lucide-react";

export default function Loader() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative p-8 rounded-xl bg-gradient-to-b from-indigo-900/40 to-purple-900/40 backdrop-blur-sm border border-indigo-500/20">
        {/* Logo with Bouncing Animation */}
        <div className="mb-6">
          <Trophy className="h-12 w-12 text-yellow-400 animate-bounce mx-auto" />
        </div>

        {/* Brand Name */}
        <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-6">
          ContestHub
        </h2>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-2">
          <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full animate-bounce"></div>
          <div
            className="w-2.5 h-2.5 bg-orange-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className="w-2.5 h-2.5 bg-yellow-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.4s" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
