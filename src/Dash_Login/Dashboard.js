import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";

const Dashboard = ({ isLoggedIn, handleLogin, handleLogout }) => {
  return <>
    <Container maxWidth={"md"}>
      <AppBar>
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }}>Dashboard</Typography>

          {
            isLoggedIn ? (<Button variant="contained" color="warning"onClick={handleLogout}>Logout</Button>) : (<Button variant="contained" color="secondary" onClick={handleLogin}>LogIn</Button>)
          }


        </Toolbar>
      </AppBar>
    </Container>
  </>;
};
export default Dashboard;
