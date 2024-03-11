import {AppBar, Container, Typography} from "@mui/material";
import logo from "/public/assets/img/logopbibinc.png";

export default function Header() {
  return (
    <AppBar
      position="sticky"
      className="Header"
      sx={{
        justifyContent: "space-between",
        display: "flex",
        bgcolor: "#064367",
      }}
    >
      <Container>
        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
          <img
            src={logo}
            alt="logo"
            style={{
              maxWidth: "100%",
              maxHeight: "50px",
              height: "auto",
              width: "auto",
              marginTop: "2%",
            }}
          />
        </Typography>
      </Container>
    </AppBar>
  );
}
