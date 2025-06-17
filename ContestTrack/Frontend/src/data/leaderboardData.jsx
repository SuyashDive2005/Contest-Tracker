export default const LeaderboardData = () => {
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
