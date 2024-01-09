import { Box, Button, Dialog, Menu, MenuItem, Modal } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const ModelLogout = () => {
    const [open, setOpen]=useState(false);
  return (
   <>
   <Button  onClick={()=>setOpen(true)}>
   <img src="https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/e/q/g/-original-imagtqqd4vcdzqdg.jpeg?q=70" width={70}/>
   </Button>
  <Menu open={open} onClose={()=>setOpen(false)}>
  <MenuItem>Profile</MenuItem>
  </Menu>
   </>
  )
}

export default ModelLogout
