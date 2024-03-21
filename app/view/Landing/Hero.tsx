import { Box, Grid, Typography } from "@mui/material";
import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <Box
      sx={{
        background: "black",
        padding: "30px",
      }}
    >
      <Grid
        container
        padding={2}
        sx={{
          border: "1px solid white",
          borderRadius: "30px",
        }}
      >
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 20px",
            }}
          >
            <Box>
              <img src="./Vector.png" alt="email" height="13px" width="19px" />
            </Box>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <img
                src="./whitelogo_horizontal1.png"
                alt="email"
                height="35px"
                width="30px"
              />
              <Typography variant="h6" color="#FFFFFF">
                STRONAUT
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: "20px",
              }}
            >
              <img src="./tg.png" alt="email" height="15px" width="18px" />
              <img src="./twitter.png" alt="email" height="15px" width="18px" />
              <img src="./discord.png" alt="email" height="15px" width="18px" />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
                <Typography variant="h1" >FUTURE</Typography>
            </Box>
            <Box>btns</Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <img src="./hero.svg" alt="" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
