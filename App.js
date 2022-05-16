import HomeScreen from './App/screens/HomeScreen';
import LoginScreen from './App/screens/LoginScreen';
import RegisterScreen from './App/screens/RegisterScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Token } from './App/context/context';
import { useState } from 'react';
import React from 'react';


const Stack = createNativeStackNavigator();

export default function App()  {

  const [token, setToken] = useState([]);

  return (
    <NavigationContainer>
      <Teams.Provider value={{token, setToken}}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
      </Teams.Provider>
    </NavigationContainer>


  );
}