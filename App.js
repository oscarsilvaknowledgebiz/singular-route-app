import React from 'react';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';;
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './src/view/WelcomeScreen';
import Register from './src/view/Register';
import Login from './src/view/Login';
import Calendar from './src/view/Calendar';

const Stack = createStackNavigator();

const CalendarPermissionScreen = () => {
  useEffect(() => {
    const requestCalendarPermission = async () => {
      const { status } = await Calendar.requestCalendarPermissionsAsync();
      if (status !== 'granted') {
        // Handle permission denied
        console.log('Calendar permission denied');
      }
    };

    requestCalendarPermission();
  }, []);

  // Render a loading screen or any other component
  return null;
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Calendar' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="Register" component={Register} options={{
          headerShown: true,
          headerTitle: ""
        }} />
        <Stack.Screen name="Login" component={Login} options={{
          headerShown: true,
          headerTitle: ""
        }} />
        <Stack.Screen name="Calendar" component={Calendar} options={{
          headerShown: true,
          headerTitle: ""
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
