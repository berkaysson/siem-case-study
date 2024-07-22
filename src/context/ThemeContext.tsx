// src/context/ThemeContext.tsx
import React, { createContext, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

const lightTheme = {
  background: "#ffffff",
  text: "#081e44",
  textAlt: "#20a3fe",
  hover: "#a0c0da83",
  boxShadow: "0 0 1px 1px #a0c0da83 inset",
  boxShadowAlt:
    "rgba(50, 50, 93, 0.25) 0px 0px 7px -2px,rgba(0, 0, 0, 0.25) 0px 3px 10px -3px;",
};

const darkTheme = {
  background: "#081e44",
  text: "#f1faee",
  textAlt: "#20a3fe",
  hover: "#a0c0da83",
  boxShadow: "0 0 1px 1px #a0c0da83 inset",
  boxShadowAlt:
    "rgba(209, 209, 224, 0.25) 0px 0px 7px -2px,rgba(212, 208, 208, 0.25) 0px 3px 10px -3px;",
};

interface ThemeContextType {
  theme: typeof lightTheme;
  toggleTheme: () => void;
  isDarkMode: boolean;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: lightTheme,
  toggleTheme: () => {},
  isDarkMode: false,
});

export const ThemeProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDarkMode }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
