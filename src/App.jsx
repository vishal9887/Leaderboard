import React, { useState } from "react";
import { Container, Typography, Box, Tabs, Tab } from "@mui/material";

import TopThree from "./components/TopThree";
import LeaderboardList from "./components/LeaderboardList";
import leaderboardData from "./leaderboardData";

const App = () => {
  const [tab, setTab] = useState("monthly");

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  const topThree = leaderboardData[tab].slice(0, 3);
  const rest = leaderboardData[tab].slice(3);

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f2f5",
        overflow: "auto",
        px: 2,
      }}
    >
    <Container
  maxWidth="md"
  sx={{
    backgroundColor: "#ffffff",
    borderRadius: 4,
    boxShadow: 5,
    p: { xs: 2, sm: 4 },
    width: "100%",
    maxWidth: 600, // Limit width for better UI
    maxHeight: "95vh",
    overflowY: "auto",
  }}
>

        <Typography
          variant="h3"
          align="center"
          fontWeight="bold"
          gutterBottom
          sx={{ color: "#333", mb: 3 }}
        >
          🏆 Global Leaderboard
        </Typography>

        {/* Tabs for Daily / Monthly */}
        <Tabs
          value={tab}
          onChange={handleTabChange}
          centered
          textColor="primary"
          indicatorColor="primary"
          sx={{ mb: 3 }}
        >
          <Tab value="daily" label="Daily" />
          <Tab value="monthly" label="Monthly" />
        </Tabs>

        <TopThree data={topThree} />
        <LeaderboardList data={rest} />
      </Container>
    </Box>
  );
};

export default App;
