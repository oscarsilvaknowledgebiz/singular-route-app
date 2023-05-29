import React from 'react';

import { NavigationContainer } from '@react-navigation/native';;
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './src/view/WelcomeScreen';
import Register from './src/view/Register';
import Login from './src/view/Login';
import BasicFilters from './src/view/BasicFilters'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='BasicFilters' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="Register" component={Register} options={{
          headerShown: true,
          headerTitle: ""
        }} />
        <Stack.Screen name="Login" component={Login} options={{
          headerShown: true,
          headerTitle: ""
        }} />
        <Stack.Screen name="BasicFilters" component={BasicFilters} options={{
          headerShown: true,
          headerTitle: ""
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
