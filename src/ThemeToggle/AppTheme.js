import { createContext, useContext, useState } from 'react';
import Buttonbase from './Buttonbase';
import Container from './Container';

const ThemeContext = createContext();

 function AppTheme() {
  const [theme, setTheme] = useState('black');

  return (
    <ThemeContext.Provider value={theme}>
      <Buttonbase setTheme={setTheme} />
      <Container />
    </ThemeContext.Provider>
  );
}

export default AppTheme