// src/context/ThemeContext.tsx
import React, { createContext, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

const lightTheme = {
  background: "#ffffff",
  text: "#081e44",
  textAlt: "#20a3fe",
  hover: "#a0c0da83",
  boxShadow: "0 0 1px 1px #a0c0da83 inset",
};

const darkTheme = {
  background: "#081e44",
  text: "#f1faee",
  textAlt: "#20a3fe",
  hover: "#a0c0da83",
  boxShadow: "0 0 1px 1px #a0c0da83 inset",
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
