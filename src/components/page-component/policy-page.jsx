import {Grid, Typography} from "@mui/material";
import AccountOverview from "../policy-page/account-overview";
import PolicyList from "../policy-page/policy-list";
import {useState} from "react";
import PolicyProfile from "./policy-profile";

export default function PolicyPage() {
  const [currentView, setCurrentView] = useState("policy-list");
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h6" sx={{ml: 1, mt: 2, color: "text.primary"}}>
          {/* Good Day Jon Doe Electric Co. */}
        </Typography>
      </Grid>
      <Grid xs={12}>
        <AccountOverview />
      </Grid>
      <Grid xs={12}>
        {currentView == "policy-list" && (
          <PolicyList setCurrentView={setCurrentView} />
        )}
        {currentView == "policy-profile" && <PolicyProfile />}
      </Grid>
    </Grid>
  );
}
