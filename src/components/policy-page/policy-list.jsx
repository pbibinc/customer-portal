import {
  Box,
  Button,
  Card,
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";

const policies = [
  {
    name: "General Liability",
    policyNumber: "SAD-23456789",
    carrier: "NextGen Insurance",
    paymentMode: "Annual",
    dueDate: "Feb 15, 2024",
    premium: "USD 6,428.45",
    faceAmount: "USD 375,000.00",
  },
  {
    name: "Commercial Auto",
    policyNumber: "SAD-23456789",
    paymentMode: "Annual",
    carrier: "NextGen Insurance",
    dueDate: "Feb 15, 2024",
    premium: "USD 6,428.45",
    faceAmount: "USD 375,000.00",
  },
];
export default function PolicyList({setCurrentView}) {
  const HandlePolicyClick = () => {
    setCurrentView("policy-profile");
  };
  return (
    <Box sx={{width: "100%", maxWidth: 430, bgcolor: "background.paper"}}>
      <Box sx={{display: "flex", alignItems: "center", my: 2}}>
        <Paper elevation={3} sx={{position: "relative", width: "100%"}}>
          <Typography
            sx={{m: 2, textAlign: "center", color: "#252B3B"}}
            variant="h6"
            component="div"
          >
            Insurance
          </Typography>
          <Divider sx={{bgcolor: "#FFC107", height: 4}} />
        </Paper>
      </Box>
      <Typography sx={{mx: 2, mb: 2}} variant="body2" color="textSecondary">
        Please disregard the due date and amount if payment has been made for
        your policy. This will be updated the day after we confirm your payment,
        note that payment directly on the finance company will need a
        confirmation by policy holder or on the finance company.
      </Typography>
      <Box sx={{width: "100%", maxWidth: 430, bgcolor: "background.paper"}}>
        {/* ... other parts of your component */}
        <List sx={{width: "96%", marginLeft: 1}}>
          {policies.map((policy, index) => (
            <Card key={index} sx={{marginBottom: 2, boxShadow: 3}}>
              <ListItem
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{display: "flex", flexDirection: "column"}}>
                    <Typography
                      variant="subtitle1"
                      component="div"
                      sx={{fontWeight: "bold", marginBottom: 1}}
                    >
                      {policy.name}
                    </Typography>
                    <Typography
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Carrier {policy.carrier}
                    </Typography>
                    <Typography
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Payment Mode: {policy.paymentMode}
                    </Typography>
                    <Typography
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {policy.policyNumber}
                    </Typography>

                    <Typography
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Total Policy Cost: {policy.faceAmount}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                    }}
                  >
                    <Typography variant="body2" color="text.primary">
                      {policy.premium}
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                      due on {policy.dueDate}
                    </Typography>
                  </Box>
                </Box>
                <Button
                  variant="contained"
                  sx={{
                    position: "absolute",
                    bottom: 16,
                    right: 16,
                  }}
                  onClick={HandlePolicyClick}
                >
                  View Policy
                </Button>
              </ListItem>
              <Divider sx={{bgcolor: "#064367", height: 4}} />
            </Card>
          ))}
        </List>
      </Box>
    </Box>
  );
}
