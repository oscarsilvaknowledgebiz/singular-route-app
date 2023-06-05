import React from 'react';

import { NavigationContainer } from '@react-navigation/native';;
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './src/view/WelcomeScreen';
import Register from './src/view/Register';
import Login from './src/view/Login';
import HiAgain from './src/view/HiAgain';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HiAgain' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="Register" component={Register} options={{
          headerShown: true,
          headerTitle: ""
        }} />
        <Stack.Screen name="Login" component={Login} options={{
          headerShown: true,
          headerTitle: ""
        }} />
        <Stack.Screen name="HiAgain" component={HiAgain} options={{
          headerShown: true,
          headerTitle: ""
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
