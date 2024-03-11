import React from "react";
import {Box} from "@mui/material";
import aboutUs from "/public/assets/img/about-us.svg";
const ExternalSite = ({src}) => {
  return <Box sx={{overflow: "hidden", height: "100%", width: "100%"}}></Box>;
};

export default function AboutUsPage() {
  return (
    <Box
      component="main"
      sx={{display: "flex", overflowY: "auto", height: "900px", width: "100%"}}
    >
      {/* <img
        src={aboutUs}
        alt="about us"
        style={{
          height: "auto",
          width: "auto",
          maxWidth: "100%",
          maxHeight: "none",
          backgroundSize: "cover",

        }}
      /> */}
    </Box>
  );
}
