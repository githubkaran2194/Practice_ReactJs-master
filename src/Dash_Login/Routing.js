import { Toolbar } from "@mui/material";
import Dashboard from "./Dashboard";
import Login from "./Login";
import { useState } from "react";

const Routing = () => {
  const [isLoggedIn,seIsLoggedIn] =useState(false);
  const [username, seUsername]=useState("");

  const handleLogin = (username) => {
    seIsLoggedIn(true);
    seUsername(username);
  }
  const handleLogout =()=>{
    seIsLoggedIn(false);
  }
  return <>
  {
    isLoggedIn ? <Dashboard isLoggedIn={isLoggedIn} handleLogout={handleLogout}/> : <Login onLogin={handleLogin}/>
  }


  </>;
};
export default Routing;
