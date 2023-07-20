import React, { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // const useTheme = () => ({ theme: "light" });
  const [darkTheme, setDarkTheme] = useState("light");

  return (
    <ThemeContext.Provider
      value={{
        darkTheme,
        toggleTheme: () =>
          setDarkTheme(darkTheme === "light" ? "dark" : "light"),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const GlobalTheme = () => useContext(ThemeContext);
