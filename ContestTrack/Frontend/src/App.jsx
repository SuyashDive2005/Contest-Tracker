import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import AboutUs from "./pages/about";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/home";
import Footer from "./components/footer";
import LiveContests from "./pages/liveContest";
import LeaderboardPage from "./pages/leaderBoard";
import UserProfile from "./pages/profile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ErrorBoundary>
      <div className="bg-gradient-to-b from-indigo-950 via-blue-950 to-purple-950 min-h-screen overflow-x-hidden text-white">
        <ErrorBoundary>
          <Navbar />
        </ErrorBoundary>

        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/pages/about" element={<AboutUs />} />
            <Route path="/pages/liveContest" element={<LiveContests />} />
            <Route path="/live-contests" element={<LiveContests />} />
            <Route path="/browsecontests" element={<LiveContests />} />
            <Route path="/pages/leaderBoard" element={<LeaderboardPage />} />
            <Route path="/pages/profile" element={<UserProfile />} />
            <Route path="/myprofile" element={<UserProfile />} />
            <Route
              path="*"
              element={
                <div className="pt-20 px-4 max-w-5xl mx-auto text-center">
                  <h1 className="text-4xl font-bold mb-4">
                    404 - Page Not Found
                  </h1>
                  <p className="text-gray-300">
                    The page you're looking for doesn't exist.
                  </p>
                  <a
                    href="/"
                    className="text-yellow-400 hover:text-yellow-300 underline mt-4 inline-block"
                  >
                    Go back to Home
                  </a>
                </div>
              }
            />{" "}
          </Routes>
        </ErrorBoundary>
        <ErrorBoundary>
          <Footer />
        </ErrorBoundary>
      </div>
    </ErrorBoundary>
  );
}

export default App;
