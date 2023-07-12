import React from 'react';

import { NavigationContainer } from '@react-navigation/native';;
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './src/view/WelcomeScreen';
import Register from './src/view/Register';
import Login from './src/view/Login';
import AdvancedFilter from './src/view/AdvancedFilter';
import ForgotPasswordEmail from './src/view/ForgotPasswordEmail';
import ForgotPasswordCode from './src/view/ForgotPasswordCode';
import ForgotPasswordNewPassword from './src/view/ForgotPasswordNewPassword';
import EventDetails from './src/view/EventDetails';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='AdvancedFilter' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="Register" component={Register} options={{
          headerShown: true,
          headerTitle: ""
        }} />
        <Stack.Screen name="Login" component={Login} options={{
          headerShown: true,
          headerTitle: ""
        }} />
        <Stack.Screen name="ForgotPasswordEmail" component={ForgotPasswordEmail} options={{
          headerShown: true,
          headerTitle: ""
        }} />
        <Stack.Screen name="ForgotPasswordCode" component={ForgotPasswordCode} options={{
          headerShown: true,
          headerTitle: ""
        }} />
        <Stack.Screen name="ForgotPasswordNewPassword" component={ForgotPasswordNewPassword} options={{
          headerShown: true,
          headerTitle: ""
        }} />
        <Stack.Screen name="EventDetails" component={EventDetails} options={{
          headerShown: true,
          headerTitle: ""
        }} />
<Stack.Screen name="AdvancedFilter" component={AdvancedFilter} options={{












          headerShown: true,
          headerTitle: ""
        }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
