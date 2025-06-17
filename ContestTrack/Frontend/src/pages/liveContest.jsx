import React, { useState, useEffect } from "react";
import ContestCard from "../components/contestcard";
import allContests from "../data/contestData";
import Loader from "../components/loader";

export default function LiveContests() {
  const [loading, setLoading] = useState(true);
  const [contests, setContests] = useState([]);

  useEffect(() => {
    // Simulate data loading
    const fetchContests = async () => {
      try {
        setLoading(true);
        // Simulating API call delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setContests(allContests);
      } catch (error) {
        console.error("Error fetching contests:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContests();
  }, []);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-yellow-400 mb-10 text-center">
        All Live Contests
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contests.map((contest, index) => (
          <ContestCard key={index} {...contest} />
        ))}
      </div>
    </div>
  );
}
