import React from "react";
import { Trophy } from "lucide-react";

export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full gap-6">
      {/* Trophy icon with glow effect */}
      <div className="relative">
        <Trophy className="w-12 h-12 text-yellow-400 animate-bounce" />
        <div className="absolute inset-0 bg-yellow-400/20 blur-xl rounded-full animate-pulse" />
      </div>

      {/* Loading text */}
      <div className="text-center">
        <span className="inline-block bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 text-transparent bg-clip-text font-bold text-lg">
          Loading Contests
        </span>
        {/* Animated dots */}
        <div className="flex gap-2 justify-center mt-2">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="w-3 h-3 rounded-full bg-yellow-400"
              style={{
                animation: `bounce 0.5s ease-in-out ${index * 0.15}s infinite`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
