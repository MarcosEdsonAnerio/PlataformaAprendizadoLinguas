import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Games from './screens/games/Games';
import Flashcards from './screens/games/Flashcards';
import MemoryGame from './screens/games/MemoryGame';
import CompleteSentence from './screens/games/CompleteSentence';
import LoginScreen from './screens/login2';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={Home} options={{ title: 'Início' }} />
        <Stack.Screen name="Games" component={Games} options={{ title: 'Jogos' }} />
        <Stack.Screen
          name="Flashcards"
          component={Flashcards}
          options={{ title: 'Flashcards' }}
        />
        <Stack.Screen
          name="MemoryGame"
          component={MemoryGame}
          options={{ title: 'MemoryGame' }}
        />
        <Stack.Screen
          name="CompleteSentence"
          component={CompleteSentence}
          options={{ title: 'CompleteSentence' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;