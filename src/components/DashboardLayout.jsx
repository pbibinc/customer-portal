import Box from "@mui/material/Box";
import StickyFooter from "./StickyFooter";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {alpha} from "@mui/material/styles";
import {Card, Container, Paper} from "@mui/material";
import BottomNavigationLayout from "./custom-component/bottomNavigationLayout";
import {useEffect, useState} from "react";
import DashboardPage from "./page-component/dash-board-page";
import PolicyPage from "./page-component/policy-page";
import Header from "./custom-component/header";
import PolicyProfile from "./page-component/policy-profile";
import AboutUsPage from "./page-component/about-us-page";

const theme = createTheme({
  palette: {
    mode: "light", // Ensures dark mode is enabled
  },
});

export default function DashboardLayout() {
  const [currentPage, setCurrentPage] = useState("dashboard-page");

  return (
    <div className="DashboardLayout">
      <Header />
      <Box component="main" sx={{display: "flex"}}>
        {currentPage == "dashboard-page" && <DashboardPage />}
        {currentPage == "policy-page" && <PolicyPage />}
        {currentPage == "about-us-page" && <AboutUsPage />}
      </Box>

      <BottomNavigationLayout setCurrentPage={setCurrentPage} />
    </div>
  );
}
