import React from "react";
import { Card, CardContent, Typography, Grid, Avatar } from "@mui/material";

const medalColors = ["#FFD700", "#C0C0C0", "#CD7F32"]; // Gold, Silver, Bronze

const TopThree = ({ data }) => {
  return (
    <Grid container spacing={2} justifyContent="center" sx={{ mb: 4 }}>
      {data.map((player, index) => (
        <Grid item xs={12} sm={4} key={player.rank}>
          <Card
            sx={{
              backgroundColor: medalColors[index],
              textAlign: "center",
              color: "#fff",
              borderRadius: 4,
            }}
          >
            <CardContent>
              <Avatar
                src={player.avatar}
                alt={player.name}
                sx={{
                  width: 70,
                  height: 70,
                  mx: "auto",
                  mb: 1,
                  border: "3px solid white",
                }}
              />
              <Typography variant="h6">Rank #{player.rank}</Typography>
              <Typography variant="h5" fontWeight="bold">
                {player.name}
              </Typography>
              <Typography variant="subtitle1">Score: {player.score}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default TopThree;
