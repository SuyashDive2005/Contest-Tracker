import React, { useState } from "react";
import { Filter, Search } from "lucide-react";
import ContestCard from "../components/contestcard";

export default function UpcomingContest() {
  const [contests, setContests] = useState([
    {
      id: 1,
      name: "Weekly Contest 420",
      platform: "LeetCode",
      startTime: "2025-06-18T14:30:00Z",
      duration: "1h 30m",
      status: "Upcoming",
      participants: 15420,
      difficulty: "Medium",
      prize: "$500",
      link: "https://leetcode.com/contest/weekly-contest-420",
      tags: ["Algorithm", "Dynamic Programming"],
      color: "from-orange-400 to-red-500",
      platformLogo: "🟠",
    },
    {
      id: 2,
      name: "Codeforces Round #912",
      platform: "Codeforces",
      startTime: "2025-06-19T15:35:00Z",
      duration: "2h",
      status: "Upcoming",
      participants: 8543,
      difficulty: "Hard",
      prize: "$1000",
      link: "https://codeforces.com/contest/1912",
      tags: ["Graph Theory", "Mathematics"],
      color: "from-blue-400 to-purple-500",
      platformLogo: "⚪",
    },
    {
      id: 3,
      name: "AtCoder Beginner Contest 332",
      platform: "AtCoder",
      startTime: "2025-06-20T13:00:00Z",
      duration: "1h 40m",
      status: "Upcoming",
      participants: 12156,
      difficulty: "Easy",
      prize: "$300",
      link: "https://atcoder.jp/contests/abc332",
      tags: ["Implementation", "Greedy"],
      color: "from-green-400 to-teal-500",
      platformLogo: "🟢",
    },
    {
      id: 4,
      name: "Google Code Jam 2025",
      platform: "Google",
      startTime: "2025-06-22T16:00:00Z",
      duration: "3h",
      status: "Upcoming",
      participants: 25000,
      difficulty: "Expert",
      prize: "$15000",
      link: "https://codingcompetitions.withgoogle.com/codejam",
      tags: ["Algorithm", "Problem Solving"],
      color: "from-yellow-400 to-orange-500",
      platformLogo: "🟡",
    },
    {
      id: 5,
      name: "HackerRank Weekly",
      platform: "HackerRank",
      startTime: "2025-06-21T12:00:00Z",
      duration: "2h 30m",
      status: "Upcoming",
      participants: 9876,
      difficulty: "Medium",
      prize: "$750",
      link: "https://hackerrank.com/contests/weekly",
      tags: ["Data Structures", "SQL"],
      color: "from-purple-400 to-pink-500",
      platformLogo: "🟣",
    },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("all");

  const filteredContests = contests.filter((contest) => {
    const matchesSearch = contest.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesPlatform =
      selectedPlatform === "all" || contest.platform === selectedPlatform;
    return matchesSearch && matchesPlatform;
  });

  return (
    <div className="pt-24 px-4 bg-gradient-to-b from-indigo-950 via-blue-950 to-purple-950 text-white min-h-screen">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-4">
          Upcoming Contests
        </h1>
        <p className="text-gray-400 text-lg sm:text-xl mb-2">
          Stay ahead of the game - prepare for upcoming coding challenges
        </p>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
          Plan your schedule and never miss an opportunity to showcase your
          skills
        </p>

        {/* Search and Filter Section */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-xl p-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search contests..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-lg py-2 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-transparent"
                />
              </div>

              {/* Platform Filter */}
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-gray-400" />
                <select
                  value={selectedPlatform}
                  onChange={(e) => setSelectedPlatform(e.target.value)}
                  className="bg-white/10 border border-white/20 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-transparent"
                >
                  <option value="all">All Platforms</option>
                  <option value="LeetCode">LeetCode</option>
                  <option value="Codeforces">Codeforces</option>
                  <option value="HackerRank">HackerRank</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Contest Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContests.map((contest) => (
            <ContestCard key={contest.id} {...contest} />
          ))}
        </div>
      </div>
    </div>
  );
}
