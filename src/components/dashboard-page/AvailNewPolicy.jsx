import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import {SupportAgent} from "@mui/icons-material";
import image from "/public/assets/img/crm-labor.svg";
export default function AvailNewPolicy() {
  const handleButtonClick = () => {
    console.log("Button Clicked");
  };
  return (
    <Card sx={{maxWidth: "100%", m: 2, boxShadow: 3, borderRadius: 5}}>
      <Box sx={{paddingTop: "56.25%", position: "relative", margin: 2}}>
        <CardMedia
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          image={image}
        />
      </Box>

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Unlock Your Perfect Policy
        </Typography>
        <Typography variant="body1">
          Ensuring you have the ideal policy is our top priority. Simply tap the
          button below to explore and secure a new policy tailored just for you.
        </Typography>
        <Box sx={{display: "flex", justifyContent: "center", marginTop: 2}}>
          <Button
            variant="contained"
            onClick={handleButtonClick}
            color="primary"
          >
            Explore Policies
          </Button>
        </Box>
      </CardContent>
      <Divider sx={{bgcolor: "#064367", height: 4}} />
    </Card>
  );
}
