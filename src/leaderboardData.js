const generateData = () => {
  return Array.from({ length: 100 }, (_, i) => ({
    name: `Player ${i + 1}`,
    avatar: `https://i.pravatar.cc/150?img=${i + 1}`,
    score: Math.floor(Math.random() * 10000),
  }))
    .sort((a, b) => b.score - a.score)
    .map((player, index) => ({
      ...player,
      rank: index + 1,
    }));
};

const leaderboardData = {
  daily: generateData(),
  monthly: generateData(),
};

export default leaderboardData;
