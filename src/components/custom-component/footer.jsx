import {AppBar, Toolbar, alpha} from "@mui/material";

export default function Footer() {
  <AppBar
    position="fixed"
    sx={{
      backgroundColor: alpha(theme.palette.background.paper, 0.8),
      top: "auto",
      bottom: 10,
      left: "50%",
      right: "auto",
      transform: "translateX(-50%)",
      width: "calc(100% - 20px)",
      maxWidth: "600px",
    }}
  >
    <div className="Footer">
      <Toolbar>
        <Boot setCurrentPage={setCurrentPage} />
      </Toolbar>
    </div>
  </AppBar>;
}
