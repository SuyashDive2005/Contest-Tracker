import React, { useState, useEffect } from "react";
import Loader from "../components/loader";
import {
  Trophy,
  Medal,
  Award,
  TrendingUp,
  TrendingDown,
  Minus,
  User,
  Crown,
  Star,
  Zap,
  Calendar,
  Users,
  Filter,
  Search,
  ChevronDown,
} from "lucide-react";

// Sample leaderboard data
const generateLeaderboardData = () => {
  const names = [
    "CodeMaster2024",
    "AlgoWizard",
    "DataNinja",
    "ByteHunter",
    "LogicLord",
    "StackOverflow",
    "RecursionKing",
    "HashHero",
    "BinaryBeast",
    "LoopLegend",
    "ArrayAce",
    "TreeTraverser",
    "GraphGuru",
    "SortSage",
    "SearchSensei",
    "DynamicDuke",
    "GreedyGiant",
    "BacktrackBoss",
    "HeapHacker",
    "QueueQueen",
  ];

  const countries = [
    "🇺🇸",
    "🇮🇳",
    "🇨🇳",
    "🇷🇺",
    "🇧🇷",
    "🇯🇵",
    "🇰🇷",
    "🇩🇪",
    "🇫🇷",
    "🇬🇧",
  ];

  return names.map((name, index) => ({
    id: index + 1,
    rank: index + 1,
    prevRank: index + Math.floor(Math.random() * 5) - 2,
    username: name,
    country: countries[Math.floor(Math.random() * countries.length)],
    score: Math.floor(Math.random() * 2000) + 1000 - index * 50,
    solved: Math.floor(Math.random() * 8) + 2,
    totalTime: `${Math.floor(Math.random() * 180) + 60}m`,
    penalty: Math.floor(Math.random() * 20),
    rating: Math.floor(Math.random() * 500) + 1500 - index * 10,
    streak: Math.floor(Math.random() * 15) + 1,
    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`,
  }));
};

function LeaderboardRow({ participant, index, isCurrentUser = false }) {
  const getRankIcon = (rank) => {
    switch (rank) {
      case 1:
        return <Crown className="w-6 h-6 text-yellow-400" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-300" />;
      case 3:
        return <Award className="w-6 h-6 text-amber-600" />;
      default:
        return (
          <span className="text-lg font-bold text-slate-400">#{rank}</span>
        );
    }
  };

  const getRankChange = () => {
    const change = participant.prevRank - participant.rank;
    if (change > 0) {
      return (
        <div className="flex items-center gap-1 text-emerald-400">
          <TrendingUp className="w-4 h-4" />
          <span className="text-xs">+{change}</span>
        </div>
      );
    } else if (change < 0) {
      return (
        <div className="flex items-center gap-1 text-rose-400">
          <TrendingDown className="w-4 h-4" />
          <span className="text-xs">{change}</span>
        </div>
      );
    }
    return (
      <div className="flex items-center gap-1 text-slate-500">
        <Minus className="w-4 h-4" />
        <span className="text-xs">0</span>
      </div>
    );
  };

  const getRankBadge = (rank) => {
    if (rank <= 3) {
      const colors = {
        1: "from-yellow-400 to-yellow-600",
        2: "from-gray-300 to-gray-500",
        3: "from-amber-500 to-amber-700",
      };
      return `bg-gradient-to-r ${colors[rank]} text-white`;
    }
    return "bg-slate-700 text-slate-300";
  };

  return (
    <div
      className={`group relative overflow-hidden transition-all duration-500 hover:scale-[1.02] ${
        isCurrentUser
          ? "bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-400/30"
          : "bg-slate-800/50 border-slate-700/30"
      } border rounded-xl p-4 hover:shadow-xl hover:shadow-slate-900/20 backdrop-blur-sm`}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-700/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

      <div className="relative z-10 flex items-center gap-4">
        {/* Rank Section */}
        <div className="flex items-center gap-3 min-w-[100px]">
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center ${getRankBadge(
              participant.rank
            )} shadow-lg`}
          >
            {getRankIcon(participant.rank)}
          </div>
          {getRankChange()}
        </div>

        {/* User Info */}
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div className="relative">
            <img
              src={participant.avatar}
              alt={participant.username}
              className="w-10 h-10 rounded-full border-2 border-slate-600 group-hover:border-blue-400 transition-colors duration-300"
            />
            {participant.rank <= 3 && (
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                <Star className="w-3 h-3 text-white" />
              </div>
            )}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-white truncate group-hover:text-blue-400 transition-colors duration-300">
                {participant.username}
              </span>
              <span className="text-lg">{participant.country}</span>
              {isCurrentUser && (
                <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full">
                  You
                </span>
              )}
            </div>
            <div className="flex items-center gap-4 text-sm text-slate-400">
              <span>Rating: {participant.rating}</span>
              <span className="flex items-center gap-1">
                <Zap className="w-3 h-3 text-yellow-400" />
                {participant.streak} streak
              </span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <div className="text-center">
            <div className="font-bold text-emerald-400 text-lg">
              {participant.score}
            </div>
            <div className="text-slate-400 text-xs">Score</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-blue-400 text-lg">
              {participant.solved}
            </div>
            <div className="text-slate-400 text-xs">Solved</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-purple-400">
              {participant.totalTime}
            </div>
            <div className="text-slate-400 text-xs">Time</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-rose-400">{participant.penalty}</div>
            <div className="text-slate-400 text-xs">Penalty</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContestHeader() {
  return (
    <div className="bg-gradient-to-r from-indigo-900 via-blue-900 to-purple-800 rounded-2xl p-8 mb-8 border border-indigo-600/30 backdrop-blur-sm">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Weekly Coding Contest
          </h1>
          <p className="text-slate-300 mb-4">
            June 15, 2025 • 2 hours • 6 problems
          </p>
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-emerald-400">
              <Users className="w-4 h-4" />
              <span>2,847 participants</span>
            </div>
            <div className="flex items-center gap-2 text-blue-400">
              <Calendar className="w-4 h-4" />
              <span>Ended 2 hours ago</span>
            </div>
            <div className="flex items-center gap-2 text-yellow-400">
              <Trophy className="w-4 h-4" />
              <span>$5,000 prize pool</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mb-2">
            ENDED
          </div>
          <div className="text-slate-400">Contest Status</div>
        </div>
      </div>
    </div>
  );
}

function FilterControls({ searchTerm, setSearchTerm, filter, setFilter }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input
          type="text"
          placeholder="Search participants..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
        />
      </div>

      <div className="relative">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="appearance-none bg-slate-800/50 border border-slate-600/30 rounded-xl px-4 py-3 pr-10 text-white focus:outline-none focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
        >
          <option value="all">All Participants</option>
          <option value="top10">Top 10</option>
          <option value="top50">Top 50</option>
          <option value="friends">Friends</option>
        </select>
        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
      </div>
    </div>
  );
}

export default function LeaderboardPage() {
  const [participants, setParticipants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Simulating API call delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setParticipants(generateLeaderboardData());
      } catch (error) {
        console.error("Error fetching leaderboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredParticipants = participants.filter((participant) => {
    const matchesSearch = participant.username
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    switch (filter) {
      case "top10":
        return matchesSearch && participant.rank <= 10;
      case "top50":
        return matchesSearch && participant.rank <= 50;
      case "friends":
        return matchesSearch && [2, 5, 8, 12, 15].includes(participant.rank);
      default:
        return matchesSearch;
    }
  });

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="pt-24 px-4 bg-gradient-to-b from-indigo-950 via-blue-950 to-purple-950 text-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        <ContestHeader />

        <FilterControls
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filter={filter}
          setFilter={setFilter}
        />

        {/* Top 3 Podium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {filteredParticipants.slice(0, 3).map((participant, index) => (
            <div
              key={participant.id}
              className={`relative ${
                index === 0
                  ? "md:order-2"
                  : index === 1
                  ? "md:order-1"
                  : "md:order-3"
              }`}
            >
              <div
                className={`bg-gradient-to-br ${
                  index === 0
                    ? "from-yellow-400/20 to-orange-500/20 border-yellow-400/30"
                    : index === 1
                    ? "from-gray-300/20 to-gray-500/20 border-gray-300/30"
                    : "from-amber-500/20 to-amber-700/20 border-amber-500/30"
                } border rounded-2xl p-6 text-center backdrop-blur-sm hover:scale-105 transition-transform duration-300`}
              >
                <div
                  className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    index === 0
                      ? "bg-gradient-to-r from-yellow-400 to-orange-500"
                      : index === 1
                      ? "bg-gradient-to-r from-gray-300 to-gray-500"
                      : "bg-gradient-to-r from-amber-500 to-amber-700"
                  } shadow-lg`}
                >
                  {getRankIcon(participant.rank)}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {participant.username}
                </h3>
                <p className="text-3xl font-bold text-emerald-400 mb-1">
                  {participant.score}
                </p>
                <p className="text-slate-400 text-sm">points</p>
                <div className="flex justify-center items-center gap-2 mt-2 text-sm text-slate-300">
                  <span>{participant.solved} solved</span>
                  <span>•</span>
                  <span>{participant.totalTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Leaderboard Table */}
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/30 overflow-hidden">
          <div className="p-6 border-b border-slate-700/30">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Trophy className="w-6 h-6 text-yellow-400" />
              Leaderboard
            </h2>
          </div>

          <div className="p-6 space-y-3">
            {filteredParticipants.slice(3).map((participant, index) => (
              <LeaderboardRow
                key={participant.id}
                participant={participant}
                index={index}
                isCurrentUser={participant.username === "CodeMaster2024"}
              />
            ))}
          </div>
        </div>

        {filteredParticipants.length === 0 && (
          <div className="text-center py-12">
            <User className="w-16 h-16 text-slate-600 mx-auto mb-4" />
            <p className="text-slate-400 text-lg">No participants found</p>
          </div>
        )}
      </div>
    </div>
  );
}

function getRankIcon(rank) {
  switch (rank) {
    case 1:
      return <Crown className="w-8 h-8 text-white" />;
    case 2:
      return <Medal className="w-8 h-8 text-white" />;
    case 3:
      return <Award className="w-8 h-8 text-white" />;
    default:
      return <span className="text-2xl font-bold text-white">#{rank}</span>;
  }
}
