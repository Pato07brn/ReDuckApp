import { ThemeProvider } from './theme/theme';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import React from 'react';
import AddTreino from "./pages/Add-Treino";
import Home from "./pages/Home";
import Treino from "./pages/Treino";

export default function Index() {
  return (
    <ThemeProvider>
      <Stack.Navigator initialRouteName='Home' >
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name='Treino'
          component={Treino}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </ThemeProvider>
  )
}