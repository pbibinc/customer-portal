import {
  AddCircleOutline,
  CancelOutlined,
  FilePresentOutlined,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  Paper,
  Typography,
} from "@mui/material";

export default function PolicyProfile() {
  return (
    <Box sx={{width: "100%", maxWidth: 430, bgcolor: "background.paper"}}>
      <Box sx={{display: "flex", alignItems: "center", my: 2}}>
        <Paper elevation={3} sx={{position: "relative", width: "100%"}}>
          <Typography
            sx={{m: 2, textAlign: "center", color: "#252B3B"}}
            variant="h6"
            component="div"
          >
            Policy Profile
          </Typography>
          <Divider sx={{bgcolor: "#FFC107", height: 4}} />
        </Paper>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginLeft: 3,
          marginRight: 3,
        }}
      >
        <List>
          <ListItem
            divider
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              p: 0,
            }}
          >
            <Grid container>
              <Grid item xs={7}>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{color: "text.primary"}}
                >
                  Policy:
                </Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{color: "text.primary"}}
                >
                  Policy number:
                </Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={7}>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{fontWeight: "bold", color: "text.primary"}}
                >
                  General Liability.
                </Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{fontWeight: "bold", color: "text.primary"}}
                >
                  SAD-23456789
                </Typography>
              </Grid>
            </Grid>
            <Grid container sx={{marginTop: 3}}>
              <Grid item xs={7}>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{color: "text.primary"}}
                >
                  Insured Name:
                </Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{color: "text.primary"}}
                >
                  Issued Date:
                </Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={7}>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{fontWeight: "bold", color: "text.primary"}}
                >
                  John Doe Electric Co.
                </Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{fontWeight: "bold", color: "text.primary"}}
                >
                  Feb 25, 2023
                </Typography>
              </Grid>
            </Grid>
            <Grid container sx={{marginTop: 3}}>
              <Grid item xs={7}>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{color: "text.primary"}}
                >
                  Market:
                </Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{color: "text.primary"}}
                >
                  Carrier:
                </Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={7}>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{fontWeight: "bold", color: "text.primary"}}
                >
                  NextGen Insurance.
                </Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{fontWeight: "bold", color: "text.primary"}}
                >
                  NextGen Insurance.
                </Typography>
              </Grid>
            </Grid>
          </ListItem>
          <ListItem
            divider
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              p: 0,
              marginTop: 3,
            }}
          >
            <Grid container>
              <Grid item xs={7}>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{color: "text.primary"}}
                >
                  Each Occurence:
                </Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{color: "text.primary"}}
                >
                  Damage To Rented:
                </Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={7}>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{fontWeight: "bold", color: "text.primary"}}
                >
                  $10,000.00.
                </Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{fontWeight: "bold", color: "text.primary"}}
                >
                  $10,000.00
                </Typography>
              </Grid>
            </Grid>
            <Grid container sx={{marginTop: 3}}>
              <Grid item xs={7}>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{color: "text.primary"}}
                >
                  Medical Expenses:
                </Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{color: "text.primary"}}
                >
                  Per Adv Injury:
                </Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={7}>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{fontWeight: "bold", color: "text.primary"}}
                >
                  $50,000.00.
                </Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{fontWeight: "bold", color: "text.primary"}}
                >
                  $10,000.00
                </Typography>
              </Grid>
            </Grid>
            <Grid container sx={{marginTop: 3}}>
              <Grid item xs={7}>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{color: "text.primary"}}
                >
                  Gen Aggregate:
                </Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{color: "text.primary"}}
                >
                  Product Comp:
                </Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={7}>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{fontWeight: "bold", color: "text.primary"}}
                >
                  $10,000.00
                </Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{fontWeight: "bold", color: "text.primary"}}
                >
                  $50,000.00
                </Typography>
              </Grid>
            </Grid>
          </ListItem>
        </List>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          sx={{marginTop: 1, marginBottom: 2, marginLeft: -4}}
        >
          <Grid
            item
            xs={4}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Avatar sx={{bgcolor: "action.disabled", mb: 1}}>
              <AddCircleOutline />
            </Avatar>
            <Typography variant="body1" sx={{color: "text.primary"}}>
              Add Limit
            </Typography>
          </Grid>
          <Grid
            item
            xs={4}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Avatar sx={{bgcolor: "action.disabled", mb: 1}}>
              <CancelOutlined />
            </Avatar>
            <Typography variant="body1" sx={{color: "text.primary"}}>
              Cancel Policy
            </Typography>
          </Grid>
          <Grid
            item
            xs={4}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Avatar sx={{bgcolor: "action.disabled", mb: 1}}>
              <FilePresentOutlined />
            </Avatar>
            <Typography variant="body1" sx={{color: "text.primary"}}>
              Certificate
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
