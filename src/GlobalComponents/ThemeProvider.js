import React, { createContext, useState, useEffect, useContext } from "react";

//Creating theme context
const ThemeContext = createContext();

function ThemeProvider(props) {
  //Storing variables in state
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || false
  );

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  const setThemeMode = (mode) => setTheme(mode);
  return (
    <ThemeContext.Provider value={{ theme, setThemeMode }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

//Calling the useContext hook
const useThemeHook = () => {
  const { theme } = useContext(ThemeContext);
  return [theme];
};

export { ThemeProvider, ThemeContext, useThemeHook };
