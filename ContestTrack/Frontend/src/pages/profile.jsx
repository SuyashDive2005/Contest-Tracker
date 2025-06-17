import React, { useState } from "react";
import {
  User,
  MapPin,
  Mail,
  Link2,
  Github,
  Linkedin,
  Twitter,
  Settings,
  Eye,
  EyeOff,
  Edit2,
  Check,
  X,
  Trophy,
  Code,
  Target,
  BookOpen,
} from "lucide-react";

export default function UserProfile() {
  const [showSettings, setShowSettings] = useState(false);
  const [isPublic, setIsPublic] = useState(true);
  const [isEditingBio, setIsEditingBio] = useState(false);
  const [bio, setBio] = useState(
    "Full Stack Developer | 4⭐ CodeChef | Specialist @ Codeforces"
  );
  const [tempBio, setTempBio] = useState(bio);

  const user = {
    name: "Suyash Dive",
    email: "alex.chen@gmail.com",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    location: "San Francisco, CA",
    college: "Stanford University",
    socialLinks: {
      github: "alexchen",
      linkedin: "alex-chen-dev",
      twitter: "alexchen_dev",
      codeforces: "alexchen99",
      codechef: "alex_chef",
      leetcode: "alexc123",
    },
    ratings: {
      codeforces: { current: 1547, max: 1623, rank: "Specialist" },
      leetcode: { rating: 1789, solved: 542 },
      codechef: { stars: 4, rank: 2847 },
    },
  };

  const platformIcons = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    codeforces: Code,
    codechef: Target,
    leetcode: BookOpen,
  };

  const handleBioEdit = () => {
    setIsEditingBio(true);
    setTempBio(bio);
  };

  const handleBioSave = () => {
    setBio(tempBio);
    setIsEditingBio(false);
  };

  const handleBioCancel = () => {
    setTempBio(bio);
    setIsEditingBio(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-blue-950 to-purple-950">
      {/* Header */}
      <div className="bg-gray-800/30 shadow-lg border-b border-white/10 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Profile</h1>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="p-2 rounded-lg bg-gray-700/50 text-yellow-400 hover:bg-gray-700 transition-all duration-300"
            >
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Settings Panel */}
        {showSettings && (
          <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 mb-8 shadow-lg border border-white/10">
            <h2 className="text-xl font-semibold mb-4 text-white">Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Profile Visibility</span>
                <button
                  onClick={() => setIsPublic(!isPublic)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    isPublic
                      ? "bg-green-900/50 text-green-400"
                      : "bg-red-900/50 text-red-400"
                  }`}
                >
                  {isPublic ? (
                    <Eye className="w-4 h-4" />
                  ) : (
                    <EyeOff className="w-4 h-4" />
                  )}
                  {isPublic ? "Public" : "Private"}
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Basic Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Card */}
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/10">
              <div className="text-center mb-6">
                <img
                  src={user.avatar}
                  alt="Profile"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-yellow-400"
                />
                <h2 className="text-2xl font-bold text-white">{user.name}</h2>

                {/* Bio Section with Edit Feature */}
                <div className="relative mt-2">
                  {isEditingBio ? (
                    <div className="space-y-2">
                      <textarea
                        value={tempBio}
                        onChange={(e) => setTempBio(e.target.value)}
                        className="w-full bg-gray-700/50 text-gray-100 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                        rows={3}
                        placeholder="Write your bio..."
                        maxLength={150}
                      />
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={handleBioSave}
                          className="p-1 rounded-md hover:bg-green-500/20 text-green-400 transition-colors"
                          title="Save"
                        >
                          <Check className="w-4 h-4" />
                        </button>
                        <button
                          onClick={handleBioCancel}
                          className="p-1 rounded-md hover:bg-red-500/20 text-red-400 transition-colors"
                          title="Cancel"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="text-xs text-gray-400 text-right">
                        {tempBio.length}/150 characters
                      </div>
                    </div>
                  ) : (
                    <div className="group relative">
                      <p className="text-gray-300 mt-2">{bio}</p>
                      <button
                        onClick={handleBioEdit}
                        className="absolute -right-2 -top-2 p-1 rounded-md opacity-0 group-hover:opacity-100 hover:bg-gray-700/50 text-yellow-400 transition-all duration-200"
                        title="Edit bio"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-300">{user.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-300">{user.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <User className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-300">{user.college}</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/10">
              <h3 className="text-lg font-semibold mb-4 text-white">
                Social Links
              </h3>
              <div className="space-y-2">
                {Object.entries(user.socialLinks).map(
                  ([platform, username]) => {
                    const Icon = platformIcons[platform] || Link2;
                    return (
                      <a
                        key={platform}
                        href={`#${platform}-${username}`}
                        className="flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-gray-800/60 text-gray-300 hover:text-yellow-400"
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{platform}</span>
                        <span className="text-sm text-gray-400">
                          @{username}
                        </span>
                      </a>
                    );
                  }
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Ratings */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                Competitive Programming Ratings
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(user.ratings).map(([platform, data]) => (
                  <div
                    key={platform}
                    className="bg-gray-800/60 rounded-xl p-6 shadow-lg border border-white/10 backdrop-blur-sm"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        {" "}
                        {platformIcons[platform] &&
                          React.createElement(platformIcons[platform], {
                            className: "w-6 h-6 text-yellow-400",
                          })}
                        <h4 className="font-semibold text-white capitalize">
                          {platform}
                        </h4>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {Object.entries(data).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="text-sm text-gray-300 capitalize">
                            {key.replace(/([A-Z])/g, " $1")}
                          </span>
                          <span className="font-medium text-yellow-400">
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
