import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Home from './screens/Home';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
        <Stack.Screen name="Signup" component={Signup} options={{ title: 'Cadastro' }} />
        <Stack.Screen name="Home" component={Home} options={{ title: 'Início' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;