import React from "react";
import {
  List,
  ListItem,
  Avatar,
  Typography,
  Pagination,
  Box,
  Grid,
  Paper,
} from "@mui/material";

const ITEMS_PER_PAGE = 10;

const LeaderboardList = ({ data }) => {
  const [page, setPage] = React.useState(1);
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const currentPageData = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box>
      <List sx={{ width: "100%" }}>
        {currentPageData.map((player) => (
          <Paper
            key={player.rank}
            elevation={2}
            sx={{
              mb: 2,
              p: 2,
              borderRadius: 3,
              backgroundColor: "#ffffff",
            }}
          >
            <Grid
              container
              alignItems="center"
              spacing={2}
              justifyContent="space-between"
            >
              {/* Left: Avatar + Name */}
              <Grid item xs={12} sm={6}>
                <Box display="flex" alignItems="center" gap={2}>
                  <Avatar
                    src={player.avatar}
                    alt={player.name}
                    sx={{ width: 56, height: 56 }}
                  />
                  <Typography
                    variant="h6"
                    fontWeight="600"
                    color="text.primary"
                  >
                    {player.name}
                  </Typography>
                </Box>
              </Grid>

              {/* Right: Score + Rank */}
              <Grid item xs={12} sm={6}>
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent={{ xs: "flex-start", sm: "flex-end" }}
                  alignItems="center"
                  gap={4}
                  flexWrap="wrap"
                >
                  <Typography variant="body1" fontWeight="500">
                    Score: <strong>{player.score}</strong>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Rank #{player.rank}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        ))}
      </List>

      {/* Pagination */}
      <Box display="flex" justifyContent="center" mt={3}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          color="primary"
          shape="rounded"
        />
      </Box>
    </Box>
  );
};

export default LeaderboardList;
