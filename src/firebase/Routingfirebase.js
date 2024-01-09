import React, { useState } from 'react'
import Signup from './Signup'
import Signin from './Signin'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Resetpassword from './Resetpassword'
import Dialog from './Dialog'

const Routingfirebase = () => {
  const [open, setOpen] = useState(false);
  const [orderDone, setOrderDone]=useState(true);

  return (
   <>
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Home  open={open} setOpen={setOpen} setOrderDone={setOrderDone}/>}/>
  <Route path='/signup' element={<Signup/>} />
  <Route path='/login' element={<Signin/>} />
  <Route path='/reset' element={<Resetpassword/>} />
  <Route path='/oder-done' element={<Dialog orderDone={orderDone} setOrderDone={setOrderDone}/>} />
  </Routes>
  </BrowserRouter>
   </>
  )
}

export default Routingfirebase