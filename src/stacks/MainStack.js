import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Import das Telas
import Splashscreen from '../screens/WelcomeScreen';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import ForgotPass from '../screens/forgot/ForgotPasswordCode';
import ForgotEmail from '../screens/forgot/ForgotPasswordEmail';
import ForgotNewPass from '../screens/forgot/ForgotPasswordNewPassword';
import Maps from '../screens/map/index';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        initialRouteName="Map"
        screenOptions={{
            headerShown: false,
        }}>
        <Stack.Screen name="Splashscreen" component={Splashscreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ForgotPass" component={ForgotPass} />
        <Stack.Screen name="ForgotEmail" component={ForgotEmail} />
        <Stack.Screen name="ForgotNewPass" component={ForgotNewPass} />
        <Stack.Screen name="Map" component={Maps} />
       
    </Stack.Navigator>
);