import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import Image from "../../Components/Common/image/Image";
import { IMAGE_COLLECTIONS } from "../../../utils/images";
import SecondayCard from "../../Components/Common/Card/SecondayCard";

type Props = {};

const EngageSection = (props: Props) => {
  return (
    <Box
      sx={{
        padding: "0px 30px",
      }}
    >
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Image src={IMAGE_COLLECTIONS.partner1} width="100px" />
            <Image src={IMAGE_COLLECTIONS.partner2} width="100px" />

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <Image src={IMAGE_COLLECTIONS.partner3} width="50px" />
              <Typography
                variant="caption"
                sx={{
                  fontWeight: 700,
                  color: "rgba(255, 255, 255, 1)",
                }}
              >
                Logoipsum
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <Image src={IMAGE_COLLECTIONS.partner4} width="30px" />
              <Typography
                variant="caption"
                sx={{
                  fontWeight: 700,
                  color: "rgba(255, 255, 255, 1)",
                }}
              >
                Logoipsum
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <Image src={IMAGE_COLLECTIONS.partner5} width="30px" />
              <Typography
                variant="caption"
                sx={{
                  fontWeight: 700,
                  color: "rgba(255, 255, 255, 1)",
                }}
              >
                Logoipsum
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={{
            padding: "30px 0px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <SecondayCard />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
       
        >
          <Box
            sx={{
              border: "1px solid rgba(255, 255, 255, 0.3)",
              borderRadius: "30px",
            }}
          >
            <Grid container>
              <Grid item xs={12} sm={12} lg={5} md={5}>
                <img src="./austarnout.png" width="545px" height="535px" />
              </Grid>
              <Grid item xs={12} sm={12} lg={7} md={7}>
                <Box sx={{
                  padding:"30px"
                }}>

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
                      padding: ".6rem 3rem",
                      backgroundColor: "#B557FA !important",
                      textTransform: "capitalize",
                      fontFamily: "BD Megatoya",
                      fontSize: "16px",
                      fontWeight: 500,
                      lineHeight: " 13.92px",
                      letterSpacing: " -6%",
                      textAlign: "left",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "#B557FA",
                      },
                    }}
                  >
                    Engage
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      borderRadius: "20px",
                      padding: ".6rem 3rem",
                      textTransform: "capitalize",
                      fontFamily: "BD Megatoya",
                      fontSize: "16px",
                      fontWeight: 500,
                      lineHeight: " 13.92px",
                      letterSpacing: " -0.04em",
                      textAlign: "left",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "#B557FA",
                      },
                    }}
                  >
                    Snapshot
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      borderRadius: "20px",
                      padding: ".6rem 3rem",
                      textTransform: "capitalize",
                      fontFamily: "BD Megatoya",
                      fontSize: "16px",
                      fontWeight: 500,
                      lineHeight: " 13.92px",
                      letterSpacing: " -0.04em",
                      textAlign: "left",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "#B557FA",
                      },
                    }}
                  >
                    Lottery
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      borderRadius: "20px",
                      padding: ".6rem 3rem",
                      textTransform: "capitalize",
                      fontFamily: "BD Megatoya",
                      fontSize: "16px",
                      fontWeight: 500,
                      lineHeight: " 13.92px",
                      letterSpacing: " -0.04em",
                      textAlign: "left",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "#B557FA",
                      },
                    }}
                  >
                    Contribution
                  </Button>
                </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EngageSection;
