import { Box, Typography } from "@mui/material";
import React from "react";
import { IMAGE_COLLECTIONS } from "../../../../utils/images";
import { engageCardData } from "../../../../utils/engageCardData";
import Image from "../image/Image";

type Props = {};

const SecondayCard = (props: Props) => {
  return (
    <>
      {engageCardData?.map((card) => {
        return (
          <Box
            key={card.id}
            style={{
              height: "400px",
              width: "500px",
              borderRadius: "30px",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              backgroundImage: `url(${card.image.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "30px",
                color: "white",
                zIndex: 100,
              }}
            >
              {/* <Image
                src={card?.icon}
                width={
                  card.id === 1 ? "85px" : card.id === 2 ? "127px" : "180px"
                }
              /> */}
              <img
                src={card.icon}
                alt="icon"
                width={
                  card.id === 1 ? "85px" : card.id === 2 ? "157px" : "180px"
                }
                style={{
                  marginTop:card.id===1?"30px":"0px"
                }}
                height={
                  card.id === 1 ? "85px" : card.id === 2 ? "157px" : "180px"
                }
              />
              {card.text ===
                `Native super-app + 
    trading terminal ` && (
                <Typography
                  color="white"
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "35px",
                    fontWeight: 600,
                    lineHeight: " 45.15px",
                    letterSpacing: "-0.04em",
                    textAlign: "center",
                    marginTop:"70px"

                  }}
                >
                  Native super-app + <br />
                  trading terminal
                </Typography>
              )}
              {card.text ===
                `Premium User 
    Experience ` && (
                <Typography
                  color="white"
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "35px",
                    fontWeight: 600,
                    lineHeight: " 45.15px",
                    letterSpacing: "-0.04em",
                    textAlign: "center",
                    marginTop:"20px"
                  }}
                >
                  Premium User <br />
                  Experience
                </Typography>
              )}
              {card.text ===
                `All new Perfectly 
    Crafted Tools` && (
                <Typography
                  color="white"
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "35px",
                    fontWeight: 600,
                    lineHeight: " 45.15px",
                    letterSpacing: "-0.04em",
                    textAlign: "center",
                  }}
                >
                  All new Perfectly <br />
                  Crafted Tools
                </Typography>
              )}
            </Box>
          </Box>
        );
      })}
    </>
  );
};

export default SecondayCard;
