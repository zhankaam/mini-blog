import { Box, CircularProgress, Container, Grid } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import useAuth from "../hooks/use-auth";
import Home from "../pages/home";
import Login from "../pages/login";
import NotFound from "../pages/not-found";
import Profile from "../pages/profile";
import Registration from "../pages/registration";
import GuestRoute from "./components/guest-route";
import PrivateRoute from "./components/private-route";

export const Router = () => {
  const auth = useAuth();

  return (
    <Box sx={{ mt: 10 }}>
      {auth.isLoading ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/login"
            element={
              <GuestRoute>
                <Login />
              </GuestRoute>
            }
          />
          <Route
            path="/registration"
            element={
              <GuestRoute>
                <Registration />
              </GuestRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      ) : (
        <Container maxWidth="md" sx={{ mt: 10 }}>
          <Grid
            container
            spacing={3}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item>
              <CircularProgress />
            </Grid>
          </Grid>
        </Container>
      )}
    </Box>
  );
};
