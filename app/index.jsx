import { ThemeProvider } from './theme/theme';

import React from 'react';
import Home from "./pages/Home";
import AddTreino from "./pages/Add-Treino";

export default function Index() {
  return (
    <ThemeProvider>
      {/* <Home /> */}
      <AddTreino />
    </ThemeProvider>
  )
}
