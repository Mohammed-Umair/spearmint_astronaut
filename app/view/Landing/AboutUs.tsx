import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import useIsMobile from "../../../hooks/useIsMobile";

type Props = {};

const AboutUs = (props: Props) => {
  const isMobile = useIsMobile();
  return (
    <Box
      sx={{
        padding: "20px 30px",
        height: isMobile ? "auto" : "700px",
      }}
    >
      <Grid
        container
        padding={2}
        sx={{
          border: "1px solid rgba(74, 74, 74, 1)",
          background: "rgba(255, 255, 255, 1) ",
          borderRadius: "30px",
          position: "relative",
        }}
      >
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                width: "834px",
                position: "absolute",
                top: "50px",
                left: "70px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "BD Megatoya",
                  fontSize: "120px",
                  fontWeight: 600,
                  lineHeight: " 129.6px",
                  letterSpacing: " -0.06em",
                  textAlign: "left",
                  marginLeft: "70px",
                  backgroundcolor: "primary",
                  backgroundImage: `linear-gradient(91.81deg, #000000 59.67%, rgba(102, 102, 102, 0) 145.32%)`,
                  backgroundSize: "100%",
                  backgroundRepeat: "repeat",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                We’re Not new,{" "}
              </Typography>
            </Box>

            <img
              src="./pose.png"
              alt=""
              style={{
                // boxShadow: "0px 4px 87.30000305175781px 0px rgba(255, 255, 255, 1) inset",

                height: "500px",
                width: "500px",

                objectFit: "cover",
                position: "relative",
                top: "0px",
                left: "90px",
              }}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                position: "absolute",
                bottom: "130px",
                left: "170px",
              }}
            >
              <img src="./konwmoreIcon.png" alt="" />
              <Typography
                sx={{
                  color: " rgba(139, 42, 211, 1)",
                  fontFamily: "BD Megatoya",
                  fontSize: "25px",
                  fontWeight: 500,
                  lineHeight: "21.75px",
                  letterSpacing: "-0.06em",
                  textAlign: "left",
                }}
              >
                Know More
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8} sx={{}}>
          <Box
            sx={{
              marginTop: "140px",
              marginLeft: "20px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "BD Megatoya",
                fontSize: "120px",
                fontWeight: 600,
                lineHeight: " 129.6px",
                letterSpacing: " -0.06em",
                textAlign: "left",
                backgroundImage: `linear-gradient(102.42deg, #000000 25.06%, #949494 82.25%)`,
                backgroundSize: "100%",
                backgroundRepeat: "repeat",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Already above
            </Typography>
            <span
              style={{
                fontFamily: "BD Megatoya",
                fontSize: "96px",
                fontStyle: "italic",
                fontWeight: 400,
                lineHeight: "83.52px",
                letterSpacing: " -0.06em",
                textAlign: "left",
              }}
            >
              the
            </span>
            <span
              style={{
                fontFamily: "BD Megatoya",
                fontSize: "120px",
                marginLeft: "50px",
                fontWeight: 600,
                lineHeight: "128.52px",
                letterSpacing: " -0.06em",
                textAlign: "left",
                color: "rgba(181, 87, 250, 1)",
              }}
            >
              Surface
            </span>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              margin: "40px 30px",
              gap: "50px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",

                width: "300px",
                height: "95px",

                background:
                  " linear-gradient(220.55deg, #000000 49.68%, #B557FA 134.16%)",
                border: "1px solid rgba(255, 255, 255, 1)",
                borderRadius: "34px",
                boxShadow:
                  "0px 4px 79.4000015258789px 0px rgba(255, 255, 255, 0.39)",
              }}
            >
              <Typography
                sx={{
                  fontFamily: " BD Megatoya",
                  fontSize: "50px",
                  fontWeight: 400,
                  lineHeight: "43.5px",
                  letterSpacing: "-0.04em",
                  textAlign: "left",
                  color: " rgba(255, 255, 255, 1)",
                }}
              >
                24K
              </Typography>
              <Typography
                sx={{
                  fontFamily: " BD Megatoya",
                  fontSize: "20px",
                  fontWeight: 400,
                  lineHeight: "22.5px",
                  letterSpacing: "-0.04em",
                  textAlign: "left",
                  color: " rgba(255, 255, 255, 1)",
                }}
              >
                Projects <br />
                Launched
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",

                width: "300px",
                height: "95px",

                background:
                  " linear-gradient(220.55deg, #000000 49.68%, #B557FA 134.16%)",
                border: "1px solid rgba(255, 255, 255, 1)",
                borderRadius: "34px",
                boxShadow:
                  "0px 4px 79.4000015258789px 0px rgba(255, 255, 255, 0.39)",
              }}
            >
              <Typography
                sx={{
                  fontFamily: " BD Megatoya",
                  fontSize: "50px",
                  fontWeight: 400,
                  lineHeight: "43.5px",
                  letterSpacing: "-0.04em",
                  textAlign: "left",
                  color: " rgba(255, 255, 255, 1)",
                }}
              >
                2.3M
              </Typography>
              <Typography
                sx={{
                  fontFamily: " BD Megatoya",
                  fontSize: "20px",
                  fontWeight: 400,
                  lineHeight: "22.5px",
                  letterSpacing: "-0.04em",
                  textAlign: "left",
                  color: " rgba(255, 255, 255, 1)",
                }}
              >
                Members in <br />
                Community
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",

                width: "100px",
                height: "95px",
                background: "rgba(181, 87, 250, 1)",

                border: "1px solid rgba(255, 255, 255, 1)",
                borderRadius: "34px",
                boxShadow:
                  "0px 4px 79.4000015258789px 0px rgba(255, 255, 255, 0.39)",
              }}
            >
              <img src="./angleArrow.png" alt="" height="35px" width="35px" />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;
