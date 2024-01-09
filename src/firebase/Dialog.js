import { Container, Drawer, Paper } from '@mui/material'
import React from 'react'

const Dialog = ({setOrderDone, orderDone}) => {
  return (
   <>
   <>
   <Drawer open={orderDone} onClose={()=>setOrderDone(false)}>
   <Paper>
   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit d placeat cupiditate ipsum ipsa voluptatibus porro, aut doloribus eos excepturi veniam expedita ullam reprehenderit repellat laborum voluptatem est, vel labore!
   </Paper>
   </Drawer>
   </>
   </>
  )
}

export default Dialog