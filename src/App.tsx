import { Home } from "@mui/icons-material";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  CssBaseline,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./App.css";
import useAuth from "./hooks/use-auth";
import { Router } from "./routes";

const drawerWidth = 240;

function App() {
  const auth = useAuth();
  const navigate = useNavigate();

  const onLogOut = () => {
    auth.logout();
    navigate("/login");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Home
          </Typography>
        </Toolbar>
      </AppBar>
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
        <List>
          <ListItem>
            <Button color="inherit" component={Link} to="/">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
              <ListItemText primary="Home" />
            </Button>
          </ListItem>
          {auth.isLoading &&
            (auth.user ? (
              <>
                <ListItem>
                  <Button color="inherit" component={Link} to="/profile">
                    <ListItemIcon>
                      <PeopleOutlineIcon />
                    </ListItemIcon>
                    <ListItemText primary={`${auth.user.firstName} ${auth.user.lastName}`}/>
                  </Button>
                </ListItem>

                <ListItem>
                  <Button color="inherit" onClick={onLogOut}>
                    <ListItemIcon>
                      <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText primary="Log out"/>
                  </Button>
                </ListItem>
              </>
            ) : (
              <>
                <ListItem>
                  <Button color="inherit" component={Link} to="/login">
                    <ListItemIcon>
                      <LoginIcon />
                    </ListItemIcon>
                    <ListItemText primary="Login"/>
                  </Button>
                </ListItem>

                <ListItem>
                  <Button color="inherit" component={Link} to="/registration">
                    <ListItemIcon>
                      <HowToRegIcon />
                    </ListItemIcon>
                    <ListItemText primary="Registration"/>
                  </Button>
                </ListItem>
              </>
            ))}
        </List>
        <Divider />
      </Drawer>
      <Router />
    </Box>
  );
}

export default App;
