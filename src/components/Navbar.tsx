import { Avatar, Link, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Avtar from "../img/Avtar.jpg";
interface Iprops {
  drawerWidth: number;
}
export default function Navbar({ drawerWidth }: Iprops) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        ml: `${drawerWidth}px`,
        width: `calc(100% - ${drawerWidth}px)`,
      }}
    >
      <AppBar position="static">
        <Toolbar>
          <Link
            underline="none"
            fontSize={"16px"}
            fontWeight={"bold"}
            sx={{
              flexGrow: 1,
              transition: "0.5s", // Add transition property
              "&:hover": {
                fontSize: "18px",
              },
            }}
            color="inherit"
            href="/"
          >
            My expanes
          </Link>
          <Box display={"flex"} alignItems={"center"} gap={2} mr={1}>
            <Typography variant="h6" color="text.primary">
              Rabea Shaban
            </Typography>
            <Avatar alt="Remy Sharp" src={Avtar} />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
