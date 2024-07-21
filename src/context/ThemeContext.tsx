// src/context/ThemeContext.tsx
import React, { createContext, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

const lightTheme = {
  background: "#f1faee",
  text: "#15273f",
  primary: "#a8dadc",
  secondary: "#457b9d",
};

const darkTheme = {
  background: "#15273f",
  text: "#f1faee",
  primary: "#457b9d",
  secondary: "#a8dadc",
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
