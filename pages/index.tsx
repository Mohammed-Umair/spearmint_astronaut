import { Box } from "@mui/material";
import EngageSection from "../app/view/Landing/EngageSection";
import Hero from "../app/view/Landing/Hero";
import AboutUs from "../app/view/Landing/AboutUs";
import JoinSection from "../app/view/Landing/JoinSection";

const Main = () => {
    return (
     
        <Box sx={{
            background: "black",
            padding: "30px",
        }}>
        <Hero/>
        <EngageSection/>
        <AboutUs/>
        <JoinSection/>
        </Box>
        
    )
}
export default Main;