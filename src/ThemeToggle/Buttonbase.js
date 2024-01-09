import { ThemeContext } from '@emotion/react'
import { Button } from '@mui/material'
import React, { useContext } from 'react'

const Buttonbase = ({ setTheme }) => {
  const theme = useContext(ThemeContext);
  const textColor = theme === 'red' ? 'black' : 'red';
  return (
    <>
    <button
    style={{
      background: theme,
      color: textColor,
      border: `1px solid ${textColor}`,
      borderRadius: 6,
    }}
    onClick={() => {
      theme === 'red' ? setTheme('black') :setTheme('red');
    }}
  >
    Click me to change the color
  </button>
    </>
  )
}

export default Buttonbase