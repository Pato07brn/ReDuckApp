import { ThemeProvider } from './theme/theme';

import React from 'react';
import AddTreino from "./pages/Add-Treino";
import Home from "./pages/Home";
import Treino from "./pages/Treino";

export default function Index() {

  return (
    <ThemeProvider>
      <Treino />
    </ThemeProvider>
  )
}
