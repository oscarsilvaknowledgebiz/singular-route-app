import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Import das Telas
import Register from '../screens/auth/register/index';
import Preferences from '../screens/auth/register/preferences/index';
import PreferencesTwo from '../screens/auth/register/preferences/two/index';
import PreferencesThree from '../screens/auth/register/preferences/three/index';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        initialRouteName="Register"
        screenOptions={{
            headerShown: false,
        }}>
            
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Preferences" component={Preferences} />
        <Stack.Screen name="Two" component={PreferencesTwo} />
        <Stack.Screen name="Three" component={PreferencesThree} />
       
    </Stack.Navigator>
);