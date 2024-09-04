import { ThemeProvider } from './theme/theme';

import React from 'react';
import Home from "./pages/Home";

export default function Index() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  )
}
