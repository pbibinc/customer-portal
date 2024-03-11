import {Feed, Home, Info} from "@mui/icons-material";
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Paper,
  Toolbar,
} from "@mui/material";
import {useState} from "react";
import {useNavigate} from "react-router";

function BottomNavigationLayout({setCurrentPage}) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);

    switch (newValue) {
      case 0:
        setCurrentPage("dashboard-page");
        break;
      case 1:
        setCurrentPage("policy-page");
        break;
      case 2:
        setCurrentPage("about-us-page");
        break;
      default:
        setCurrentPage("dashboard-page");
        break;
    }
  };
  return (
    <AppBar
      sx={{
        position: "sticky",
        bottom: 0,
        left: 0,
        right: 0,
        bgcolor: "rgba(255, 255, 255, 0.8)",
      }}
    >
      <BottomNavigation
        className="Footer"
        value={value}
        onChange={handleChange}
        showLabels
      >
        <BottomNavigationAction label="Dashboard" icon={<Home />} />
        <BottomNavigationAction label="Policies" icon={<Feed />} />
        <BottomNavigationAction label="About Us" icon={<Info />} />
      </BottomNavigation>
    </AppBar>
  );
}
export default BottomNavigationLayout;
