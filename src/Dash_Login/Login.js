import { Box, Button, Container, Divider, Paper, TextField, Toolbar, Typography } from "@mui/material";
import { useState } from "react";

const imgstyle = {
  width: "100%",
  height: "100%",
  boxShadow: "0px 0px 9px black",
  borderRadius: "10px",
  objectFit: "cover",
  objectPosition: "center",
  transition: "0.5s ease",
  ":hover": {
    Transform: "scale(1.1)",
  },
};
const Login = ({ onLogin }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.username.trim() === "admin" && user.password.trim() === "123") {
      onLogin(user.username);
      alert("success");
      setUser({ username: "", password: "" });
    } else alert("error " + user.username + " is not a valid");
  };
  return (
    <>
      <Container>
        <Paper sx={{ height: "auto", width: "400px", m: "10px auto", }}>
          <Box sx={{ p: "10px" }}>
            <img
              src="https://onestylefashion.com/wp-content/uploads/2021/06/excited-white-girl-bright-stylish-glasses-posing-pink-dreamy-curly-woman-playing-with-her-ginger-hair-laughing_197531-11045.jpg"
              alt="img"
              style={imgstyle}
            />
        <h1 style={{fontFamily:"monospace", margin:"10px 0"}}>Login</h1>  
        <Divider
        sx={{
          height: 2,
          margin: "10px 0",
        }}
        />
            <form action="" onSubmit={handleSubmit}>
              <TextField
                name="username"
                label="Username"
                variant="standard"
                margin="dense"
                fullWidth
                onChange={handleChange}
                value={user.username}
              />
              <TextField
                name="password"
                label="password"
                variant="standard"
                margin="dense"
                fullWidth
                onChange={handleChange}
                value={user.password}
              />
              <Button variant="contained" type="submit" sx={{ mt: "5px" }}>
                Login
              </Button>
            </form>
          </Box>
        </Paper>
      </Container>
    </>
  );
};
export default Login;
