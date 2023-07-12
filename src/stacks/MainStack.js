import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Import das Telas
import Login from '../screens/hi-again/index';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
            headerShown: false,
        }}>
            
        <Stack.Screen name="Login" component={Login} />
       
    </Stack.Navigator>
);
