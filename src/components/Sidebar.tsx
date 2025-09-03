import { AddBox, Home, ViewList } from "@mui/icons-material";
import { Link, ListItemText } from "@mui/material";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Toolbar from "@mui/material/Toolbar";
import { Link as LinkRouter } from "react-router-dom";
import DarkMode from "./DarkMode";

interface Iprops {
  drawerWidth: number;
}
const linkMenuo = [
  { name: "Home", icon: <Home />, path: "/" },
  { name: "create", icon: <AddBox />, path: "/create" },
  { name: "View", icon: <ViewList />, path: "/View" },
];
export default function Sidbar({ drawerWidth }: Iprops) {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Divider />
      <DarkMode />

      <Divider />
      <List>
        {linkMenuo.map((text) => (
          <Link
            component={LinkRouter}
            underline="none"
            color="inherit"
            key={text.name}
            to={text.path}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>{text.icon}</ListItemIcon>
                <ListItemText primary={text.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Drawer>
  );
}
