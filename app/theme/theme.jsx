import React, { createContext, useState, useContext } from 'react';

// Definindo os temas claro e escuro
const size = {
    Title: 45,
    TitleCorp: "1.6em",
    Corp: "1em"
}

const colors = {
    Red1:  "#8B0909",
    Red2:  "#AF0B0A",
    Ambar: "#F27D16",
    Green: "#165624",
    Black: "#272A33",
    White: "#F2F2F2"
};

const lightTheme = {
  background: '#FFFFFF',
  text: '#000000',
  primary: '#6200ee',
};

const darkTheme = {
  background: '#000000',
  text: '#FFFFFF',
  primary: '#BB86FC',
};

// Criando o contexto
const ThemeContext = createContext();

// Provedor do tema
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, colors, size, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook para usar o tema
export const useTheme = () => useContext(ThemeContext);