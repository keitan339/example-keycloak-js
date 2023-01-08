import { AppBar, Box, Button, Container, Grid, Toolbar, Typography } from "@mui/material";
import { useAuth } from "../../auth/useAuth";

export type TopPageType = {};

export const TopPage = (props: TopPageType) => {
  const auth = useAuth();
  const logout = () => {
    auth.logout();
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              keycloak-js example
            </Typography>
            <Button onClick={logout} color="inherit" variant="text">
              ログアウト
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Container sx={{ marginTop: 6 }}>
        <Grid container>
          <Grid container>
            <Grid item xs={1}>
              <Typography variant="h6">Id</Typography>
            </Grid>
            <Grid item xs={11}>
              <Typography variant="h6" sx={{ textDecoration: "underline" }}>
                {auth.user?.id}
              </Typography>
            </Grid>
          </Grid>
          <Grid container sx={{ paddingTop: 1 }}>
            <Grid item xs={1}>
              <Typography variant="h6">Name</Typography>
            </Grid>
            <Grid item xs={11}>
              <Typography variant="h6" sx={{ textDecoration: "underline" }}>
                {auth.user?.name}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
