import { ThemeProvider } from './theme/theme';

import React from 'react';
import Home from "./pages/Home";
import AddTreino from "./pages/Add-Treino";
import Treino from "./pages/Treino";

export default function Index() {
  return (
    <ThemeProvider>
      {/* <Home /> */}
      <Treino/>
    </ThemeProvider>
  )
}
