import { ThemeContext } from "@emotion/react";
import { useContext } from "react";

function Container() {
    const theme = useContext(ThemeContext);
    const textColor = theme === 'red' ? 'black' : 'red';
  
    return (
      <div
        style={{
          background: theme,
          color: textColor,
          border: `1px solid ${textColor}`,
          borderRadius: 6,
        }}
      >
        <h2>I will change my color!</h2>
        <h6>So will the background!</h6>
      </div>
    );
  }

export default Container