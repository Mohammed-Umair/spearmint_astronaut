import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Join1 from "../../../assets/join1.png";
import Join2 from "../../../assets/join2.png";

import Join4 from "../../../assets/join4.png";
import RightShadow from "../../Components/Common/RightShadow";

interface Props {}

const JoinSection = (props: Props) => {
  return (
    <Box
      sx={{
        background: "black",
        padding: "0px 30px",
        margin: "0px",
      }}
    >
      <Grid
        container
        sx={{
          border: "1px solid rgba(255, 255, 255, 0.3)",

          borderRadius: "30px",
          color: "white",
          padding: "90px 0px 0px 0px",
          position: "relative",
        }}
      >
        <Grid item xs={12} sm={12} md={1} lg={1}></Grid>
        <Grid item xs={12} sm={12} md={7} lg={7}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Box display="flex" justifyContent="space-between">
                <Box flex={1} marginRight={1}>
                  <Typography
                    sx={{
                      fontFamily: " BD Megatoya",
                      fontSize: "70px",
                      fontWeight: 400,
                      lineHeight: "60.5px",
                      letterSpacing: "-0.04em",
                      textAlign: "left",

                      backgroundcolor: "primary",
                      backgroundImage: `linear-gradient(90.06deg, #FFFFFF 59.78%, rgba(255, 255, 255, 0) 147.12%)`,
                      backgroundSize: "100%",
                      backgroundRepeat: "repeat",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    How to join?
                  </Typography>
                </Box>
                <Box flex={1}>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: "20px",
                      fontWeight: 500,
                      lineHeight: "29.5px",
                      letterSpacing: "-0.04em",
                      textAlign: "left",
                      color: "rgba(255, 255, 255, 1)",
                    }}
                  >
                    Lorem Ipsum is simply dummy text of the <br />
                    printing and typesetting industry. Lorem
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <Box
                    sx={{
                      backgroundImage: `url(${Join1.src})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      height: "204px",
                      width: "423px",
                      position: "relative",
                      border: "1px solid rgba(74, 74, 74, 1)",
                      borderRadius: "28px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Readex Pro",
                        fontSize: "16px",
                        fontWeight: 600,
                        lineHeight: "14.5px",
                        letterSpacing: "-0.04em",
                        textAlign: "cenetr",

                        color: "rgba(255, 255, 255, 1)",
                        position: "absolute",
                        top: "15px",
                        left: "30px",
                      }}
                    >
                      Sign Up
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontSize: "14px",
                        fontWeight: 500,
                        lineHeight: "18.5px",
                        letterSpacing: "-0.04em",
                        textAlign: "cenetr",

                        color: "rgba(255, 255, 255, 1)",
                        position: "absolute",
                        top: "15px",
                        right: "30px",
                      }}
                    >
                      Step 1
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontSize: "16px",
                        fontWeight: 500,
                        lineHeight: "20.5px",
                        letterSpacing: "-0.04em",
                        textAlign: "cenetr",

                        color: "rgba(255, 255, 255, 1)",
                        position: "absolute",
                        bottom: "15px",
                        left: "30px",
                      }}
                    >
                      Signup to the System
                    </Typography>

                    <img
                      src="./joinCardIcon.png"
                      alt=""
                      height="15px"
                      width="15px"
                      style={{
                        position: "absolute",
                        bottom: "15px",
                        right: "30px",
                        color: " rgba(139, 42, 211, 1)",
                      }}
                    />

                    <Box
                      sx={{
                        height: "53px",
                        width: "150px",
                        borderRadius: "27px",
                        background:
                          "linear-gradient(180deg, #48007D 0%, #8300E3 100%)",

                        position: "absolute",
                        top: "45%",
                        left: "50%",
                        transform: "translate(-50%,-50%)",
                        boxShadow: `0px 4px 4px 0px rgba(0, 0, 0, 0.37) inset 
                       0px -1px 13.899999618530273px 0px rgba(127, 0, 222, 0.67)
                       31px 4px 18.200000762939453px 0px rgba(0, 0, 0, 0.3) inset`,
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "BD Megatoya",
                          fontSize: "20px",
                          fontWeight: 700,
                          lineHeight: "17.5px",
                          letterSpacing: "-0.04em",
                          textAlign: "cenetr",

                          color:
                            "linear-gradient(258.14deg, #FFFFFF 43.68%, rgba(255, 255, 255, 0) 99.69%)",

                          boxShadow:
                            " -1px 0px 1px 0px rgba(108, 18, 175, 0.37) inset",
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%,-50%)",
                        }}
                      >
                        Signup
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <Box
                    sx={{
                      backgroundImage: `url(${Join2.src})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      height: "204px",
                      width: "423px",
                      position: "relative",
                      border: "1px solid rgba(74, 74, 74, 1)",
                      borderRadius: "28px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Readex Pro",
                        fontSize: "16px",
                        fontWeight: 600,
                        lineHeight: "14.5px",
                        letterSpacing: "-0.04em",
                        textAlign: "cenetr",

                        color: "rgba(255, 255, 255, 1)",
                        position: "absolute",
                        top: "15px",
                        left: "30px",
                      }}
                    >
                      Fill Details
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontSize: "14px",
                        fontWeight: 500,
                        lineHeight: "18.5px",
                        letterSpacing: "-0.04em",
                        textAlign: "cenetr",

                        color: "rgba(255, 255, 255, 1)",
                        position: "absolute",
                        top: "15px",
                        right: "30px",
                      }}
                    >
                      Step 2
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontSize: "16px",
                        fontWeight: 500,
                        lineHeight: "20.5px",
                        letterSpacing: "-0.04em",
                        textAlign: "cenetr",

                        color: "rgba(255, 255, 255, 1)",
                        position: "absolute",
                        bottom: "15px",
                        left: "30px",
                      }}
                    >
                      Fill all Your Details
                    </Typography>

                    <img
                      src="./joinCardIcon.png"
                      alt=""
                      height="15px"
                      width="15px"
                      style={{
                        position: "absolute",
                        bottom: "15px",
                        right: "30px",
                        color: " rgba(139, 42, 211, 1)",
                      }}
                    />
                  </Box>
                </Grid>

                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <Box
                    sx={{
                      backgroundImage: `url(${Join1.src})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      height: "204px",
                      width: "423px",
                      position: "relative",
                      border: "1px solid rgba(74, 74, 74, 1)",
                      borderRadius: "28px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Readex Pro",
                        fontSize: "16px",
                        fontWeight: 600,
                        lineHeight: "14.5px",
                        letterSpacing: "-0.04em",
                        textAlign: "cenetr",

                        color: "rgba(255, 255, 255, 1)",
                        position: "absolute",
                        top: "15px",
                        left: "30px",
                      }}
                    >
                      Verify
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontSize: "14px",
                        fontWeight: 500,
                        lineHeight: "18.5px",
                        letterSpacing: "-0.04em",
                        textAlign: "cenetr",

                        color: "rgba(255, 255, 255, 1)",
                        position: "absolute",
                        top: "15px",
                        right: "30px",
                      }}
                    >
                      Step 3
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontSize: "16px",
                        fontWeight: 500,
                        lineHeight: "20.5px",
                        letterSpacing: "-0.04em",
                        textAlign: "cenetr",

                        color: "rgba(255, 255, 255, 1)",
                        position: "absolute",
                        bottom: "15px",
                        left: "30px",
                      }}
                    >
                      Verify Your Email
                    </Typography>

                    <img
                      src="./joinCardIcon.png"
                      alt=""
                      height="15px"
                      width="15px"
                      style={{
                        position: "absolute",
                        bottom: "15px",
                        right: "30px",
                        color: " rgba(139, 42, 211, 1)",
                      }}
                    />

                    <Box
                      sx={{
                        height: "90px",
                        width: "90px",
                        borderRadius: "27px",
                        backgroundImage: `url("./JoinIconCircle.png")`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        position: "absolute",
                        top: "45%",
                        left: "50%",
                        transform: "translate(-50%,-50%)",
                      }}
                    >
                      <img
                        src="./join3icon.png"
                        alt=""
                        height="50px"
                        width="46px"
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%,-50%)",
                          color: " rgba(139, 42, 211, 1)",
                        }}
                      />
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <Box
                    sx={{
                      backgroundImage: `url(${Join4.src})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      height: "204px",
                      width: "423px",
                      position: "relative",
                      border: "1px solid rgba(74, 74, 74, 1)",
                      borderRadius: "28px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Readex Pro",
                        fontSize: "16px",
                        fontWeight: 600,
                        lineHeight: "14.5px",
                        letterSpacing: "-0.04em",
                        textAlign: "cenetr",

                        color: "rgba(255, 255, 255, 1)",
                        position: "absolute",
                        top: "15px",
                        left: "30px",
                      }}
                    >
                      Done!
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontSize: "14px",
                        fontWeight: 500,
                        lineHeight: "18.5px",
                        letterSpacing: "-0.04em",
                        textAlign: "cenetr",

                        color: "rgba(255, 255, 255, 1)",
                        position: "absolute",
                        top: "15px",
                        right: "30px",
                      }}
                    >
                      Step 4
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontSize: "16px",
                        fontWeight: 500,
                        lineHeight: "20.5px",
                        letterSpacing: "-0.04em",
                        textAlign: "cenetr",

                        color: "rgba(255, 255, 255, 1)",
                        position: "absolute",
                        bottom: "15px",
                        left: "30px",
                      }}
                    >
                      successfully Registered!
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <img src="./JoinAsst.png" alt="" />
        </Grid>
        <Grid item xs={12} sm={12} md={1} lg={1}></Grid>

        <Box position="absolute" right="0px" top="0px">
          <RightShadow />
        </Box>
      </Grid>
    </Box>
  );
};

export default JoinSection;
