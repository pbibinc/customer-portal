import {SupportAgent} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Typography,
} from "@mui/material";
import {useState} from "react";
const concernOptions = [
  "Policy Inquiry",
  "Policy Renewal",
  "Policy Cancellation",
  "Policy Claim",
  "Others",
];
export default function RequestCall() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedConcern, setSelectedConcern] = useState(concernOptions[0]);
  const handleConcernChange = (event) => {
    setSelectedConcern(event.target.value);
  };
  // Modal style
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 335,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
  };
  return (
    <div>
      <Card sx={{maxWidth: "100%", m: 2, boxShadow: 3, borderRadius: 5}}>
        <CardHeader
          avatar={
            <Avatar>
              <SupportAgent />
            </Avatar>
          }
          title="Talk to our Customer Service"
          titleTypographyProps={{fontWeight: "bold"}}
        />
        <CardContent>
          <Typography variant="body1">
            Don't worry, we're here to help you with your concerns, just click
            the button below and fill up the form base on your concern.
          </Typography>
          <Button
            variant="contained"
            sx={{
              mt: 2,
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            onClick={handleOpen}
          >
            Request For a call
          </Button>
        </CardContent>
        <Divider sx={{bgcolor: "#064367", height: 4}} />
      </Card>

      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <Box sx={style}>
          <Typography
            id="modal-title"
            variant="h6" // Use a valid variant
            component="h2"
            sx={{mb: 2, color: "text.primary"}} // Ensure the text color is visible
          >
            Request a Call
          </Typography>
          <Typography
            id="modal-description"
            sx={{mb: 4, color: "text.primary"}}
          >
            <FormControl sx={{m: 1, width: 300}}>
              <InputLabel>Concerns</InputLabel>
              <Select
                labelId="concern-dropdown-label"
                id="concern-dropdown"
                value={selectedConcern}
                label="Concerns"
                onChange={handleConcernChange}
              >
                {concernOptions.map((concern, index) => (
                  <MenuItem key={index} value={concern}>
                    {concern}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Typography>
          <Button variant="outlined" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outlined" color="success" sx={{marginLeft: 1}}>
            Submit
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
