import { Box, Grid, Typography, Button } from "@mui/material";
import React from "react";
import LeftShadow from "../../Components/Common/LeftShadow";

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
          border: "1px solid rgba(255, 255, 255, 0.3)",

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
                marginLeft: "80px",
              }}
            >
              <img
                src="./Logo.png"
                alt="email"
                height="35px"
                width="150px"
              />
              
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
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "50px",
              color: "white",
              position: "absolute",
              top: "280px",
              left: "400px",
            }}
          >
            <Box
              sx={{
                height: "244px",
                width: "657px",
                zIndex: 100,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <Typography
                  variant="h1"
                  color="background: linear-gradient(238.38deg, #FFFFFF 55.63%, rgba(255, 255, 255, 0) 110.73%);
                "
                  fontFamily="BD Megatoya"
                  sx={{
                    fontFamily: "BD Megatoya",
                    fontSize: "140px",
                    fontWeight: 500,
                    lineHeight: "121.8px",
                    letterSpacing: " -0.06em",
                    textAlign: "left",
                  }}
                >
                  Future
                </Typography>
                <img
                  src="./arrow.png"
                  alt="arrow"
                  style={{
                    marginLeft: "70px",
                    height: "85px",
                    width: "85px",
                  }}
                />
              </Box>
              <Typography
                variant="h1"
                color="background: linear-gradient(238.38deg, #FFFFFF 55.63%, rgba(255, 255, 255, 0) 110.73%);
"
                fontFamily="BD Megatoya"
                sx={{
                  fontFamily: "BD Megatoya",
                  fontSize: "140px",
                  fontWeight: 500,
                  lineHeight: "121.8px",
                  letterSpacing: " -0.06em",
                  textAlign: "left",
                }}
              >
                <span
                  style={{
                    fontFamily: "BD Megatoya",
                    fontSize: "140px",
                    fontWeight: 400,
                    lineHeight: "121.8px",
                    letterSpacing: " -0.06em",
                    textAlign: "left",
                  }}
                >
                  of
                </span>{" "}
                Launch
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  borderRadius: "20px",
                  padding: ".6rem 2rem",
                  backgroundColor: "#B557FA !important",
                  textTransform: "capitalize",
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  fontWeight: 600,
                  lineHeight: " 17.92px",
                  letterSpacing: " -0.04em",
                  textAlign: "left",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#B557FA",
                  },
                }}
              >
                join Now
              </Button>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  fontWeight: 600,
                  lineHeight: "17.92px",
                  letterSpacing: "-0.04em",
                  textAlign: "left",
                }}
              >
                How to join?
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <img
            src="./hero.svg"
            alt="ast"
            style={{
              position: "relative",
              right: "24px",
            }}
          />
        </Grid>
        <Box position="absolute" left="-80px" bottom="-80px">
          <LeftShadow />
        </Box>
      </Grid>
    </Box>
  );
};

export default Hero;
