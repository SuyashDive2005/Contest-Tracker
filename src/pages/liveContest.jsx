import React, { useState, useEffect } from "react";
import ContestCard from "../components/contestcard";
import allContests from "../data/contestData";

export default function LiveContests() {
  const [contests, setContests] = useState([]);

  useEffect(() => {
    setContests(allContests);
  }, []);

  return (
    <div className="pt-24 px-4 bg-gradient-to-b from-indigo-950 via-blue-950 to-purple-950 text-white min-h-screen">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-4">
          Live Contests
        </h1>
        <p className="text-gray-400 text-lg sm:text-xl mb-2">
          Join ongoing competitions and test your skills
        </p>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
          Participate in real-time coding challenges from various platforms
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contests.map((contest, index) => (
            <ContestCard key={index} {...contest} />
          ))}
        </div>
      </div>
    </div>
  );
}
