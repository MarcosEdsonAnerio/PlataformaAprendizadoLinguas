import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import QuizScreen from '../screens/QuizScreen';
import GameScreen from '../screens/GameScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="QuizScreen" component={QuizScreen} />
        <Stack.Screen name="GameScreen" component={GameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
