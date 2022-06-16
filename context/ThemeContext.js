import { ThemeProvider, createTheme } from "@mui/material";
import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export default function ThemeContextProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);

  const [primaryColor, setPrimaryColor] = useState({
    main: "#1976d2",
    light: "#42a5f5",
    dark: "#1565c0",
  });

  // useEffect(()=>{
  //   console.log(DefaultTheme)
  // },[])

  const AppTheme = createTheme({
    palette: {
      // ...DefaultTheme.palette,
      mode: darkMode ? "dark" : "light",
      primary: primaryColor,
    },
  });

  return (
    <AppContext.Provider
      value={{ darkMode, setDarkMode, primaryColor, setPrimaryColor }}
    >
      <ThemeProvider theme={AppTheme}>{children}</ThemeProvider>
    </AppContext.Provider>
  );
}
