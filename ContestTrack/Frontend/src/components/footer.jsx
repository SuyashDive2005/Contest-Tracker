import React, { useState } from "react";
import {
  Github,
  Mail,
  Twitter,
  Linkedin,
  Globe,
  Trophy,
  Target,
  BookOpen,
  Heart,
  ExternalLink,
  ChevronUp,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = () => {
    if (email && email.includes("@")) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-24 px-4 bg-gradient-to-b from-indigo-950 via-blue-950 to-purple-950 text-white min-h-screen">
      {/* Decorative Top Gradient */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500"></div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Branding and Summary */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Trophy className="text-yellow-400 w-8 h-8" />
            <h2 className="text-4xl font-bold text-white">ContestHub</h2>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Your ultimate companion for coding contests. Compete, track
            progress, and rise to the top of the leaderboards.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
            {[
              { value: "12.5K+", label: "Active Users", color: "yellow-400" },
              { value: "847", label: "Live Contests", color: "green-400" },
              { value: "95K+", label: "Problems Solved", color: "blue-400" },
              { value: "1.2M+", label: "Submissions", color: "purple-400" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-800 hover:border-yellow-400/30 transition-all duration-300 group text-center"
              >
                <div
                  className={`text-2xl font-bold text-${item.color} group-hover:scale-110 transition-transform`}
                >
                  {item.value}
                </div>
                <div className="text-sm text-gray-400">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Grid of Links */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Navigate */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white flex items-center gap-2">
              <Target className="w-5 h-5 text-yellow-400" />
              Navigate
            </h3>
            <ul className="space-y-3">
              {["Home", "Browse Contests", "Leaderboard", "My Profile"].map(
                (label, i) => (
                  <li key={i}>
                    <a
                      href={`/${label.toLowerCase().replace(/\s/g, "")}`}
                      className="hover:text-yellow-400 transition flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition" />
                      <span className="group-hover:translate-x-2 transition">
                        {label}
                      </span>
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-yellow-400" />
              Resources
            </h3>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Help Center", href: "/help" },
                { label: "Developer API", href: "/api", external: true },
                { label: "Contest Blog", href: "/blog" },
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    {...(link.external && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                    className="hover:text-yellow-400 transition flex items-center gap-2 group"
                  >
                    <span className="group-hover:translate-x-1 transition">
                      {link.label}
                    </span>
                    {link.external && (
                      <ExternalLink className="w-3 h-3 group-hover:scale-110 transition" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white flex items-center gap-2">
              <Mail className="w-5 h-5 text-yellow-400" />
              Stay Connected
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Get contest updates and never miss a competition!
            </p>

            <div className="flex gap-2 mb-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button
                onClick={handleNewsletterSubmit}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  subscribed
                    ? "bg-green-600 text-white"
                    : "bg-yellow-400 text-gray-900 hover:bg-yellow-300"
                }`}
              >
                {subscribed ? "✓ Done" : "Subscribe"}
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              {[Github, Mail, Twitter, Linkedin, Globe].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 hover:text-yellow-400 transition hover:scale-110"
                  aria-label={Icon.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div className="flex items-center gap-1 mb-4 md:mb-0">
            © {currentYear} ContestHub. Made with
            <Heart className="w-4 h-4 text-red-400 mx-1 animate-pulse" />
            for coders.
          </div>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookies"].map(
              (label, i) => (
                <a
                  key={i}
                  href={`/${label.toLowerCase().replace(/\s/g, "")}`}
                  className="hover:text-yellow-400 transition"
                >
                  {label}
                </a>
              )
            )}
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 bg-yellow-400 text-gray-900 rounded-full shadow-lg hover:bg-yellow-300 hover:scale-110 z-20"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
