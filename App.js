import HomeScreen from './App/screens/HomeScreen';
import LoginScreen from './App/screens/LoginScreen';
import RegisterScreen from './App/screens/RegisterScreen';
import DashboardScreen from './App/screens/DashboardScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Token, UserData } from './App/context/context';
import { useState } from 'react';
import React from 'react';


const Stack = createNativeStackNavigator();

export default function App() {

  const [token, setToken] = useState([]);
  const [userData, setUserData] = useState([]);

  return (
    <NavigationContainer>
      <Token.Provider value={{ token, setToken }}>
        <UserData.Provider value={{ userData, setUserData }}>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Dashboard" component={DashboardScreen} />
          </Stack.Navigator>
        </UserData.Provider>
      </Token.Provider>
    </NavigationContainer>


  );
}