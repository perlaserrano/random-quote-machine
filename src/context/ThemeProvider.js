import React, { useState } from "react";
import { Context } from "./Context";
import { getRandomTheme} from '../helpers/themes'; 



const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(getRandomTheme());
  
    const changeTheme = () => {
      const newTheme = getRandomTheme();
      setTheme(newTheme);
    };
  
    return (
      <Context.Provider value={{ theme, changeTheme }}>
        {children}
      </Context.Provider>
    );
  };
  
export default ThemeProvider;