import {LaptopMac} from "@mui/icons-material";
import {Box, Card, CardContent, CardHeader, Typography} from "@mui/material";
import Logo from "/public/assets/img/pibib.png";
export default function AccountOverview() {
  return (
    <Card
      sx={{
        maxWidth: "100%",
        borderRadius: 5,
        backgroundColor: "#FFC107",
        m: 2,
        position: "relative",
        boxShadow: 5,
      }}
    >
      <Box sx={{position: "absolute", top: -2, left: 5, zIndex: 2}}>
        <img
          src={Logo}
          alt="PIBIB Logo"
          style={{height: "60px", width: "auto"}}
        />
      </Box>
      <CardContent sx={{color: "#252B3B", position: "relative", zIndex: 1}}>
        <Box
          sx={{
            position: "absolute",
            top: "55%",
            right: 0,
            transform: "translateY(-50%)",
            zIndex: -5,
          }}
        >
          <LaptopMac sx={{fontSize: 220, color: "white", opacity: 0.5}} />
        </Box>
        <Box
          sx={{
            paddingRight: 15,
            paddingLeft: 0,
            paddingTop: 2,
            zIndex: 2,
          }}
        >
          <Typography variant="overline" display="block" gutterBottom>
            <h3>ACCOUNTS OVERVIEW</h3>
          </Typography>
          <Typography variant="h3" component="div" sx={{mt: 0}}>
            2 policies
          </Typography>
          <Typography variant="body2">as of Mar 07, 2024</Typography>

          <Typography variant="body1" sx={{mt: 3}}>
            These are your Policy.
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
