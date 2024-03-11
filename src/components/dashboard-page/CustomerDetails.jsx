import {AccountCircleTwoTone, DeleteOutline} from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@mui/material";

export default function CustomerDetails() {
  return (
    <Card sx={{maxWidth: "100%", m: 2, boxShadow: 3, borderRadius: 5}}>
      <CardHeader
        action={
          <IconButton>
            <AccountCircleTwoTone />
          </IconButton>
        }
        title="Customer Details"
      />
      <CardContent>
        <List>
          <ListItem
            divider
            sx={{display: "flex", justifyContent: "space-between"}}
          >
            <Typography variant="body1">
              <b>Client Name:</b>
            </Typography>

            <Typography variant="body2">John Doe Electric Co.</Typography>
          </ListItem>
          <ListItem
            divider
            sx={{display: "flex", justifyContent: "space-between"}}
          >
            <Typography variant="body1">
              <b>Contact Person:</b>
            </Typography>

            <Typography variant="body2">John Doe</Typography>
          </ListItem>
          <ListItem
            divider
            sx={{display: "flex", justifyContent: "space-between"}}
          >
            <Typography variant="body1">
              <b>Contact Number:</b>
            </Typography>
            <Typography variant="body2">+123 456 7890</Typography>
          </ListItem>
          <ListItem
            divider
            sx={{
              display: "flex",
              flexDirection: {xs: "column", sm: "row"},
              justifyContent: "space-between",
              alignItems: {sm: "flex-start"},
              textAlign: {xs: "left", sm: "right"},
            }}
          >
            <Typography variant="body1">
              <b>Address:</b>
            </Typography>
            <Typography variant="body2">
              432 Luna ext. Brgy San Roque San Pedro, Laguna.
            </Typography>
          </ListItem>
        </List>
      </CardContent>
      <Divider sx={{bgcolor: "#064367", height: 4}} />
    </Card>
  );
}
