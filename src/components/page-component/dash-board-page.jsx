import {Grid} from "@mui/material";
import CustomerDetails from "../dashboard-page/CustomerDetails";
import RequestCall from "../dashboard-page/RequestCall";
import AvailNewPolicy from "../dashboard-page/AvailNewPolicy";

export default function DashboardPage() {
  return (
    <Grid container>
      <Grid sx={12}>
        <CustomerDetails />
      </Grid>
      <Grid sx={12}>
        <RequestCall />
      </Grid>
      <Grid sx={12}>
        <AvailNewPolicy />
      </Grid>
    </Grid>
  );
}
