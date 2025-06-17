import React, { useEffect, useState } from "react";
import {
  Calendar,
  Clock,
  Trophy,
  ExternalLink,
  Filter,
  Search,
  Users,
  Star,
  ChevronRight,
  Zap,
  Award,
  Target,
} from "lucide-react";

export default function UpcomingContest() {
  const [contests, setContests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("all");
  const [sortBy, setSortBy] = useState("startTime");

  // Mock data for demonstration - replace with actual API call
  const mockContests = [
    {
      id: 1,
      name: "Weekly Contest 420",
      platform: "LeetCode",
      startTime: "2025-06-18T14:30:00Z",
      duration: "1h 30m",
      participants: 15420,
      difficulty: "Medium",
      prize: "$500",
      url: "https://leetcode.com/contest/weekly-contest-420",
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
      participants: 8543,
      difficulty: "Hard",
      prize: "$1000",
      url: "https://codeforces.com/contest/1912",
      tags: ["Graph Theory", "Mathematics"],
      color: "from-blue-400 to-purple-500",
      platformLogo: "🔵",
    },
    {
      id: 3,
      name: "AtCoder Beginner Contest 332",
      platform: "AtCoder",
      startTime: "2025-06-20T13:00:00Z",
      duration: "1h 40m",
      participants: 12156,
      difficulty: "Easy",
      prize: "$300",
      url: "https://atcoder.jp/contests/abc332",
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
      participants: 25000,
      difficulty: "Expert",
      prize: "$15000",
      url: "https://codingcompetitions.withgoogle.com/codejam",
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
      participants: 9876,
      difficulty: "Medium",
      prize: "$750",
      url: "https://hackerrank.com/contests/weekly",
      tags: ["Data Structures", "SQL"],
      color: "from-purple-400 to-pink-500",
      platformLogo: "🟣",
    },
  ];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setContests(mockContests);
      setLoading(false);
    }, 1500);
  }, []);

  const filteredContests = contests
    .filter(
      (contest) =>
        contest.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedPlatform === "all" || contest.platform === selectedPlatform)
    )
    .sort((a, b) => {
      if (sortBy === "startTime") {
        return new Date(a.startTime) - new Date(b.startTime);
      } else if (sortBy === "participants") {
        return b.participants - a.participants;
      }
      return 0;
    });

  const getTimeUntilStart = (startTime) => {
    const now = new Date();
    const start = new Date(startTime);
    const diff = start - now;

    if (diff < 0) return "Started";

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    if (days > 0) return `${days}d ${hours}h`;
    if (hours > 0) return `${hours}h ${minutes}m`;
    return `${minutes}m`;
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Easy":
        return "text-green-600 bg-green-100";
      case "Medium":
        return "text-yellow-600 bg-yellow-100";
      case "Hard":
        return "text-red-600 bg-red-100";
      case "Expert":
        return "text-purple-600 bg-purple-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin mx-auto mb-4"></div>
            <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-t-yellow-400 rounded-full animate-ping mx-auto"></div>
          </div>
          <p className="text-white text-xl font-semibold animate-pulse">
            Loading upcoming contests...
          </p>
          <p className="text-purple-300 mt-2">
            Discovering amazing competitions for you
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 py-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
            <Zap className="h-4 w-4 text-yellow-400 animate-pulse" />
            <span className="text-white text-sm font-medium">Live Updates</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Upcoming
            </span>
            <br />
            <span className="text-white">Contests</span>
          </h1>

          <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover and participate in the most exciting programming contests
            from top platforms worldwide
          </p>

          <div className="flex items-center justify-center space-x-8 text-white/80">
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">
                {contests.length}
              </div>
              <div className="text-sm">Active Contests</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">50K+</div>
              <div className="text-sm">Participants</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">$25K</div>
              <div className="text-sm">Total Prizes</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search contests..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-xl py-3 pl-10 pr-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
              />
            </div>

            {/* Filters */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-300" />
                <select
                  value={selectedPlatform}
                  onChange={(e) => setSelectedPlatform(e.target.value)}
                  className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                  <option value="all" className="bg-gray-800">
                    All Platforms
                  </option>
                  <option value="LeetCode" className="bg-gray-800">
                    LeetCode
                  </option>
                  <option value="Codeforces" className="bg-gray-800">
                    Codeforces
                  </option>
                  <option value="AtCoder" className="bg-gray-800">
                    AtCoder
                  </option>
                  <option value="Google" className="bg-gray-800">
                    Google
                  </option>
                  <option value="HackerRank" className="bg-gray-800">
                    HackerRank
                  </option>
                </select>
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                <option value="startTime" className="bg-gray-800">
                  Sort by Time
                </option>
                <option value="participants" className="bg-gray-800">
                  Sort by Popularity
                </option>
              </select>
            </div>
          </div>
        </div>

        {/* Contests Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredContests.map((contest, index) => (
            <div
              key={contest.id}
              className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Contest Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${contest.color} flex items-center justify-center text-2xl shadow-lg`}
                  >
                    {contest.platformLogo}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-yellow-300 transition-colors duration-300 line-clamp-1">
                      {contest.name}
                    </h3>
                    <p className="text-sm text-purple-300 font-medium">
                      {contest.platform}
                    </p>
                  </div>
                </div>

                <div
                  className={`px-2 py-1 rounded-lg text-xs font-semibold ${getDifficultyColor(
                    contest.difficulty
                  )}`}
                >
                  {contest.difficulty}
                </div>
              </div>

              {/* Contest Details */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-2 text-gray-300">
                  <Calendar className="h-4 w-4 text-blue-400" />
                  <span className="text-sm">
                    {new Date(contest.startTime).toLocaleDateString("en-US", {
                      weekday: "short",
                      month: "short",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Clock className="h-4 w-4 text-green-400" />
                    <span className="text-sm">{contest.duration}</span>
                  </div>

                  <div className="flex items-center space-x-2 text-gray-300">
                    <Users className="h-4 w-4 text-purple-400" />
                    <span className="text-sm">
                      {contest.participants.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Time Until Start */}
                <div className="bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-lg p-3 border border-yellow-400/30">
                  <div className="flex items-center justify-between">
                    <span className="text-yellow-300 font-semibold text-sm">
                      Starts in:
                    </span>
                    <span className="text-white font-bold">
                      {getTimeUntilStart(contest.startTime)}
                    </span>
                  </div>
                </div>

                {/* Prize */}
                <div className="flex items-center space-x-2">
                  <Award className="h-4 w-4 text-yellow-400" />
                  <span className="text-yellow-300 font-semibold">
                    {contest.prize}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {contest.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-white/10 text-xs text-purple-200 rounded-md border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <a
                href={contest.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105"
              >
                <Target className="h-4 w-4" />
                <span>Join Contest</span>
                <ChevronRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </a>

              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 rounded-2xl transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredContests.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="h-12 w-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              No contests found
            </h3>
            <p className="text-purple-300 mb-6 max-w-md mx-auto">
              Try adjusting your search terms or filters to find the perfect
              contest for you.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedPlatform("all");
              }}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
