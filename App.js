import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider, ThemeContext } from './contexts/ThemeContext';
import { StatusBar } from 'react-native';
import LoginScreen from './screens/Login';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Games from './screens/games/Games';
import Flashcards from './screens/games/Flashcards';
import MemoryGame from './screens/games/MemoryGame';
import CompleteSentence from './screens/games/CompleteSentence';
import Hangman from './screens/games/Hangman';
import FastTranslation from './screens/games/FastTranslation';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const { theme } = useContext(ThemeContext); 

  return (
    <NavigationContainer>
      <StatusBar barStyle={theme.isDark ? 'light-content' : 'dark-content'} backgroundColor={theme.colors.background} />
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: theme.colors.primary },
          headerTintColor: '#fff',
        }}
        initialRouteName="Login"
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={Home} options={{ title: 'Início' }} />
        <Stack.Screen name="Profile" component={Profile} options={{ title: 'Perfil' }} />
        <Stack.Screen name="Games" component={Games} options={{ title: 'Jogos' }} />

        <Stack.Screen name="Flashcards" component={Flashcards} options={{ title: 'Flashcards' }} />
        <Stack.Screen name="MemoryGame" component={MemoryGame} options={{ title: 'MemoryGame' }} />
        <Stack.Screen name="CompleteSentence" component={CompleteSentence} options={{ title: 'CompleteSentence' }} />
        <Stack.Screen name="Hangman" component={Hangman} options={{ title: 'Jogo da Forca' }} />
        <Stack.Screen name="FastTranslation" component={FastTranslation} options={{ title: 'Tradução Rápida' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  );
};

export default App;
