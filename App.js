import React, { useState, useEffect } from 'react';
import { Image, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';;
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './src/view/WelcomeScreen';
import Register from './src/view/Register';
import Login from './src/view/Login';
import ForgotPasswordEmail from './src/view/ForgotPasswordEmail';
import ForgotPasswordCode from './src/view/ForgotPasswordCode';
import ForgotPasswordNewPassword from './src/view/ForgotPasswordNewPassword';
import FirstSteps from './src/view/FirstSteps';
import UserScreen from './src/view/user/UserScreen';
import CustomHeaderLeft from './src/components/CustomHeaderLeft';
import Toast from 'react-native-toast-message';
import FavoritesScreen from './src/view/favorites/FavoritesScreen';
import HomeScreen from './src/view/home/HomeScreen';
import EventDetails from './src/view/home/EventDetails';
import PlanYourTrip from './src/view/plan-trip/PlanYourTrip';

import store from "./src/redux/store";
import { Provider, useDispatch, useSelector } from "react-redux";
import { OpenAPI } from 'singular-route-client/client';

const Stack = createStackNavigator();

OpenAPI.BASE = "https://singular-route.azurewebsites.net"

export default function App() {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
            <Stack.Screen name="Register" component={Register} options={({ navigation, route }) => ({
              headerShown: true,
              headerLeft: () => <CustomHeaderLeft navigation={navigation} title={"Create new account"} />,
              headerTitle: ""
            })} />
            <Stack.Screen name="Login" component={Login} options={({ navigation, route }) => ({
              headerShown: true,
              headerLeft: () => <CustomHeaderLeft navigation={navigation} title={"Welcome back!"} />,
              headerTitle: ""
            })} />
            <Stack.Screen name="ForgotPasswordEmail" component={ForgotPasswordEmail} options={({ navigation, route }) => ({
              headerShown: true,
              headerLeft: () => <CustomHeaderLeft navigation={navigation} />,
              headerTitle: ""
            })} />
            <Stack.Screen name="ForgotPasswordCode" component={ForgotPasswordCode} options={({ navigation, route }) => ({
              headerShown: true,
              headerLeft: () => <CustomHeaderLeft navigation={navigation} />,
              headerTitle: ""
            })} />
            <Stack.Screen name="ForgotPasswordNewPassword" component={ForgotPasswordNewPassword} options={({ navigation, route }) => ({
              headerShown: true,
              headerLeft: () => <CustomHeaderLeft navigation={navigation} />,
              headerTitle: ""
            })} />
            <Stack.Screen name="EventDetails" component={EventDetails} options={({ navigation, route }) => ({
              headerShown: false,
              headerLeft: () => <CustomHeaderLeft navigation={navigation} />,
              headerTitle: ""
            })} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="UserScreen" component={UserScreen} />
            <Stack.Screen name="FavoritesScreen" component={FavoritesScreen} />
            <Stack.Screen name="FirstSteps" component={FirstSteps} />
            <Stack.Screen name="PlanYourTrip" component={PlanYourTrip} options={({ navigation, route }) => ({
              headerShown: true,
              headerLeft: () => <CustomHeaderLeft navigation={navigation} title={"Plan your Trip"} />,
              headerTitle: ""
            })} />
          </Stack.Navigator>
        </NavigationContainer>
        <Toast />
      </Provider>
    </>
  );
}
