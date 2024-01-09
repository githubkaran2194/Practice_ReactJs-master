 import React, { useEffect, useState } from 'react'
import { Button, Dialog, Drawer } from '@mui/material'
const Drawer1 = () => {

    const [open, setOpen]=useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setOpen(false)
        },5000)

        
    })
  return (
    <>
    
    <Button onClick={()=> setOpen(true)}>Open</Button>
    <Dialog open={open} onClose={()=> setOpen(false)}>Hello from Material UI</Dialog>

    </>
  )
}

export default Drawer1