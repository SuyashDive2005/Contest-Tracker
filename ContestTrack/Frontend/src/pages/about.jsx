import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-b from-indigo-950 via-blue-950 to-purple-950 text-white min-h-screen">
      {/* Hero Section */}
      <div className="pt-20 px-4">
        <div className="max-w-7xl mx-auto text-center py-12">
          <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent mb-6">
            About ContestHub
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Empowering competitive programmers to track, analyze, and excel in
            programming contests worldwide.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="px-4 py-16">
        <div className="max-w-7xl mx-auto bg-white/5 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-white/10">
          <h2 className="text-4xl font-bold text-center mb-6">Our Mission</h2>
          <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto leading-relaxed mb-12">
            We believe every programmer deserves the tools to reach their full
            potential. Our platform bridges the gap between scattered contest
            information and actionable insights.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Track Progress",
                desc: "Monitor your performance across multiple platforms and contests.",
              },
              {
                icon: "📊",
                title: "Analyze Trends",
                desc: "Get detailed insights into your strengths and areas for improvement.",
              },
              {
                icon: "🚀",
                title: "Achieve Goals",
                desc: "Set targets and work systematically towards your goals.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="px-4 py-16">
        <div className="max-w-7xl mx-auto bg-white/5 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-white/10">
          <h2 className="text-4xl font-bold text-center mb-8">Our Story</h2>
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
            <p>
              ContestHub was born from the frustration of programmers who
              struggled to track their contest participation across platforms.
            </p>
            <p>
              What started as a personal tool evolved into a platform that
              offers insights into performance, growth, and preparation.
            </p>
            <p>
              Today, it helps thousands of programmers worldwide turn passion
              into measurable progress and career advancement.
            </p>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            What Makes Us Different
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: "🔄",
                title: "Multi-Platform Integration",
                desc: "Track contests from Codeforces, AtCoder, CodeChef, LeetCode, and more.",
              },
              {
                icon: "📈",
                title: "Smart Analytics",
                desc: "Personalized insights to identify patterns and grow strategically.",
              },
              {
                icon: "⏰",
                title: "Never Miss a Contest",
                desc: "Smart alerts and calendar integration so you never miss events.",
              },
              {
                icon: "🎨",
                title: "Beautiful & Intuitive",
                desc: "Modern interface for competitive coders who value design.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="px-4 py-16">
        <div className="max-w-7xl mx-auto bg-white/5 backdrop-blur-md p-8 sm:p-12 rounded-3xl border border-white/10">
          <h2 className="text-4xl font-bold text-center mb-12">
            Built by Competitive Programmers
          </h2>
          <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto leading-relaxed mb-10">
            Our team understands your journey. We've competed, struggled, and
            now built a platform we wish we had.
          </p>
          <div className="flex justify-center gap-10 flex-wrap text-center text-gray-300">
            <div>
              <div className="text-3xl mb-2">🏆</div>
              <p className="text-sm">10,000+ Contests Tracked</p>
            </div>
            <div>
              <div className="text-3xl mb-2">👥</div>
              <p className="text-sm">5,000+ Active Users</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🌟</div>
              <p className="text-sm">4.9/5 User Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-pink-600 to-purple-600 p-10 sm:p-14 rounded-3xl shadow-xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Level Up?
            </h2>
            <p className="text-lg text-white/90 mb-6">
              Join thousands using ContestHub to track progress and achieve
              goals.
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-xl font-semibold text-lg hover:bg-gray-200 transition-all duration-300">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
