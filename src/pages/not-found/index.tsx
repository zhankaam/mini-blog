import { Grid, Container, Typography } from "@mui/material";

const NotFound = () => (
  <Container maxWidth="sm" sx={{ padding: (theme) => theme.spacing(3) }}>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h2" gutterBottom>
          404
        </Typography>
        <Typography variant="h3" gutterBottom>
          Page not found.
        </Typography>
      </Grid>
    </Grid>
  </Container>
);

export default NotFound;
