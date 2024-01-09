import { Button, Dialog } from "@mui/material";
import React, { useState } from "react";

const Home = ({setOrderDone, open, setOpen}) => {
 
  const handleOpen = () => {
    setOpen(true);
  };

  const handleDialog =()=>{
    alert("order")
    setOrderDone(true)
    setOpen(false)
  }
  return (
    <>
      <Button onClick={handleOpen}>open</Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quasi
        error ullam obcaecati vel commodi? Architecto culpa expedita sint
        praesentium eum ea ab nostrum! Ducimus vel dolorem pariatur deserunt
        blanditiis!
      </Dialog>
      <Button onClick={()=>setOrderDone(true)}>Order</Button>
    </>
  );
};

export default Home;
