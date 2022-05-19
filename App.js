import HomeScreen from './App/screens/HomeScreen';
import LoginScreen from './App/screens/LoginScreen';
import RegisterScreen from './App/screens/RegisterScreen';
import DashboardScreen from './App/screens/DashboardScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Token, UserData } from './App/context/context';
import { useState } from 'react';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';



const Stack = createNativeStackNavigator();

export default function App() {

  const [token, setToken] = useState([]);
  const [userData, setUserData] = useState([]);

const isSigned = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('token')
    return jsonValue != null ? jsonValue : false;
  } catch(e) {
    console.log(e)
  }
}

  return (
    <NavigationContainer>
      <Token.Provider value={{ token, setToken }}>
        <UserData.Provider value={{ userData, setUserData }}>
          {!isSigned() ? (
            <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Dashboard" component={DashboardScreen} />
          </Stack.Navigator>
          ) : (
            <Stack.Navigator initialRouteName="Dashboard">
            <Stack.Screen name="Dashboard" component={DashboardScreen} />
          </Stack.Navigator>
          )}
          
        </UserData.Provider>
      </Token.Provider>
    </NavigationContainer>


  );
}